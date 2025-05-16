# 技术架构设计

## 1. 系统架构

### 1.1 整体架构

```mermaid
graph TB
    Client[客户端] --> NextJS[Next.js 应用]
    NextJS --> AuthAPI[认证 API]
    AuthAPI --> NextAuth[NextAuth.js]
    NextAuth --> Providers[第三方提供商]
    NextAuth --> Database[数据库]

    subgraph 前端层
        Client
        Components[UI 组件]
        Hooks[自定义 Hooks]
    end

    subgraph 应用层
        NextJS
        AuthAPI
        StateManagement[状态管理]
    end

    subgraph 服务层
        NextAuth
        SessionManagement[会话管理]
        ErrorHandling[错误处理]
    end

    subgraph 外部服务
        Providers
        Database
    end
```

### 1.2 技术栈详情

#### 前端技术

- Next.js 14
- React 18
- TypeScript 5
- Tailwind CSS
- NextAuth.js

#### 后端服务

- Next.js API Routes
- NextAuth.js
- OAuth 2.0
- JWT

#### 数据存储

- Session Storage
- Local Storage
- HTTP Only Cookies

## 2. 组件架构

### 2.1 组件层次

```mermaid
graph TD
    App[应用根组件] --> Layout[布局组件]
    Layout --> AuthProvider[认证提供者]
    AuthProvider --> Pages[页面组件]
    Pages --> LoginPage[登录页面]
    Pages --> RegisterPage[注册页面]

    LoginPage --> SocialButtons[社交登录按钮]
    LoginPage --> WeChatQR[微信二维码]
    LoginPage --> ErrorDisplay[错误显示]

    subgraph 认证组件
        SocialButtons
        WeChatQR
        ErrorDisplay
    end
```

### 2.2 组件职责

#### 认证提供者

```typescript
// AuthProvider.tsx
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
```

#### 社交登录按钮

```typescript
// SocialLoginButtons.tsx
interface SocialLoginButtonsProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function SocialLoginButtons(props: SocialLoginButtonsProps) {
  // 实现逻辑
}
```

## 3. 认证流程

### 3.1 标准 OAuth 流程

```mermaid
sequenceDiagram
    participant User as 用户
    participant Client as 客户端
    participant Server as 服务端
    participant OAuth as OAuth提供商

    User->>Client: 点击登录
    Client->>OAuth: 重定向到授权页
    OAuth->>User: 显示授权页面
    User->>OAuth: 确认授权
    OAuth->>Server: 回调携带 code
    Server->>OAuth: 交换 token
    OAuth->>Server: 返回 access_token
    Server->>Client: 创建会话
    Client->>User: 登录成功
```

### 3.2 微信登录流程

```mermaid
sequenceDiagram
    participant User as 用户
    participant Client as 网页
    participant Server as 服务端
    participant WeChat as 微信服务器

    User->>Client: 点击微信登录
    Client->>Server: 请求二维码
    Server->>WeChat: 获取二维码参数
    WeChat->>Server: 返回二维码数据
    Server->>Client: 返回二维码
    Client->>User: 显示二维码
    User->>WeChat: 扫描二维码
    WeChat->>Server: 回调通知
    Server->>Client: 登录成功
```

## 4. 数据流设计

### 4.1 状态流转

```mermaid
stateDiagram-v2
    [*] --> 未登录
    未登录 --> 登录中: 点击登录
    登录中 --> 登录成功: 认证成功
    登录中 --> 登录失败: 认证失败
    登录失败 --> 未登录: 重试
    登录成功 --> 已登录: 创建会话
    已登录 --> 未登录: 登出
```

### 4.2 数据模型

#### 用户会话

```typescript
interface UserSession {
  id: string;
  user: {
    id: string;
    name?: string;
    email?: string;
    image?: string;
    provider?: string;
  };
  expires: string;
  accessToken?: string;
  refreshToken?: string;
}
```

#### 认证状态

```typescript
interface AuthState {
  status: "loading" | "authenticated" | "unauthenticated";
  session: UserSession | null;
  error?: Error;
}
```

## 5. 安全架构

### 5.1 认证安全

#### JWT 配置

```typescript
const jwtOptions = {
  secret: process.env.JWT_SECRET,
  maxAge: 30 * 24 * 60 * 60, // 30 days
  encryption: true,
};
```

#### Cookie 设置

```typescript
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};
```

### 5.2 请求安全

#### CORS 配置

```typescript
const corsOptions = {
  origin: process.env.NEXTAUTH_URL,
  credentials: true,
  methods: ["GET", "POST"],
};
```

## 6. 错误处理

### 6.1 错误分类

```mermaid
graph TD
    Error[错误类型] --> Auth[认证错误]
    Error --> Network[网络错误]
    Error --> Validation[验证错误]
    Error --> Session[会话错误]

    Auth --> InvalidCredentials[凭证无效]
    Auth --> ExpiredToken[令牌过期]
    Auth --> ProviderError[提供商错误]

    Network --> Timeout[超时]
    Network --> Connection[连接失败]

    Validation --> InvalidInput[输入无效]
    Validation --> MissingField[字段缺失]

    Session --> Expired[会话过期]
    Session --> Invalid[会话无效]
```

### 6.2 错误处理策略

#### 全局错误处理

```typescript
const errorHandler = {
  onError: (error: Error) => {
    console.error(error);
    // 错误上报
  },
  onSuccess: () => {
    // 清理错误状态
  },
};
```

## 7. 性能优化

### 7.1 代码优化

#### 动态导入

```typescript
const WeChatQRCode = dynamic(() => import("./WeChatQRCode"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});
```

#### 状态缓存

```typescript
const useAuthState = () => {
  const { data: session } = useSession();
  return useMemo(
    () => ({
      isAuthenticated: !!session,
      user: session?.user,
    }),
    [session]
  );
};
```

### 7.2 请求优化

#### 请求去重

```typescript
const useAuthRequest = () => {
  const [loading, setLoading] = useState(false);
  const pendingRequest = useRef<Promise<any> | null>(null);

  const request = async () => {
    if (pendingRequest.current) {
      return pendingRequest.current;
    }
    // 实现请求逻辑
  };
};
```

## 8. 监控设计

### 8.1 性能监控

#### 指标收集

```typescript
const metrics = {
  loginDuration: 0,
  successRate: 0,
  errorCount: 0,
};

const collectMetrics = () => {
  // 实现指标收集逻辑
};
```

### 8.2 错误监控

#### 错误上报

```typescript
const reportError = (error: Error) => {
  // 实现错误上报逻辑
};
```

## 9. 部署架构

### 9.1 环境配置

#### 开发环境

```env
NODE_ENV=development
NEXTAUTH_URL=http://localhost:3000
DEBUG=true
```

#### 生产环境

```env
NODE_ENV=production
NEXTAUTH_URL=https://your-domain.com
DEBUG=false
```

### 9.2 部署流程

```mermaid
graph LR
    Dev[开发环境] --> Test[测试环境]
    Test --> Staging[预发环境]
    Staging --> Prod[生产环境]

    subgraph 自动化流程
        Build[构建] --> Lint[代码检查]
        Lint --> UnitTest[单元测试]
        UnitTest --> Deploy[部署]
    end
```
