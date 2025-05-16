# Corks 认证系统技术规格文档

## 目录

1. [系统概述](./overview.md)
2. [功能规格](./features.md)
3. [技术架构](./architecture.md)
4. [安全规范](./security.md)
5. [API 文档](./api.md)
6. [UI/UX 规范](./ui-ux.md)
7. [测试规范](./testing.md)
8. [部署指南](./deployment.md)
9. [运维手册](./operations.md)

## 快速开始

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 8.0.0 或更高版本
- 支持 HTTPS 的域名（生产环境必需）

### 安装步骤

1. 克隆项目

```bash
git clone <repository-url>
cd corks-website
```

2. 安装依赖

```bash
npm install
```

3. 配置环境变量

```bash
cp .env.example .env.local
# 编辑 .env.local 文件，填入必要的配置信息
```

4. 启动开发服务器

```bash
npm run dev
```

### 目录结构

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── [...nextauth]/
│   │       └── wechat/
│   │   ├── login/
│   │   └── register/
│   │   ├── components/
│   │   │   └── auth/
│   │   └── providers/
│   └── types/
```

## 文档更新日志

| 版本  | 日期       | 更新内容 | 作者 |
| ----- | ---------- | -------- | ---- |
| 1.0.0 | 2024-03-xx | 初始版本 | Team |

## 贡献指南

请参阅 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解如何参与项目开发。

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](./LICENSE) 文件

public/
images/
marker-icon.png
marker-icon-2x.png
marker-shadow.png
distilleries/
highland-park.jpg
macallan.jpg
laphroaig.jpg

mkdir -p public/images/discover
mkdir -p public/images/avatars
