'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import WeChatQRCode from './WeChatQRCode';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

const socialProviders = [
  {
    id: 'google',
    name: 'Google',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="currentColor"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="currentColor"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="currentColor"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
    bgColor: 'bg-white',
    textColor: 'text-gray-700',
    hoverBgColor: 'hover:bg-gray-50',
    borderColor: 'border-gray-300',
  },
  {
    id: 'wechat',
    name: '微信',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.81-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.595-6.348zM5.959 5.48c.609 0 1.104.498 1.104 1.112 0 .612-.495 1.11-1.104 1.11-.613 0-1.106-.498-1.106-1.11 0-.614.493-1.112 1.106-1.112zm5.514 0c.61 0 1.107.498 1.107 1.112 0 .612-.497 1.11-1.107 1.11-.61 0-1.104-.498-1.104-1.11 0-.614.494-1.112 1.104-1.112z M24 14.92c0-3.508-3.424-6.355-7.684-6.355-4.261 0-7.684 2.847-7.684 6.355 0 3.508 3.423 6.356 7.684 6.356.849 0 1.673-.108 2.427-.307a.643.643 0 0 1 .514.037l1.583.906c.04.025.083.037.125.037a.3.3 0 0 0 .29-.295v-.037l-.319-1.234a.5.5 0 0 1 .18-.547c1.578-1.15 2.884-2.878 2.884-4.916zm-10.224-.006c-.517 0-.937-.419-.937-.937 0-.516.42-.936.937-.936.516 0 .936.42.936.936 0 .518-.42.937-.936.937zm5.117 0c-.518 0-.937-.419-.937-.937 0-.516.42-.936.937-.936.515 0 .935.42.935.936 0 .518-.42.937-.935.937z"
        />
      </svg>
    ),
    bgColor: 'bg-[#07C160]',
    textColor: 'text-white',
    hoverBgColor: 'hover:bg-[#06AE56]',
    borderColor: 'border-transparent',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
        />
      </svg>
    ),
    bgColor: 'bg-gradient-to-tr from-[#FF3366] via-[#FF00FF] to-[#FF9933]',
    textColor: 'text-white',
    hoverBgColor: 'hover:opacity-90',
    borderColor: 'border-transparent',
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
    bgColor: 'bg-black',
    textColor: 'text-white',
    hoverBgColor: 'hover:bg-gray-900',
    borderColor: 'border-transparent',
  },
];

interface ErrorMessages {
  [key: string]: string;
}

const errorMessages: ErrorMessages = {
  OAuthSignin: "启动第三方登录时出错",
  OAuthCallback: "第三方登录回调时出错",
  OAuthCreateAccount: "创建账号时出错",
  EmailCreateAccount: "创建账号时出错",
  Callback: "回调处理时出错",
  default: "登录时发生错误",
};

export default function SocialLoginButtons() {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isWeChatQRVisible, setIsWeChatQRVisible] = useState(false);
  const [weChatAuthUrl, setWeChatAuthUrl] = useState('');

  const handleSocialLogin = async (providerId: string) => {
    try {
      setLoading(providerId);
      setError(null);

      if (providerId === 'wechat') {
        // 获取微信登录二维码 URL
        const response = await fetch('/api/auth/wechat/qrcode');
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }

        setWeChatAuthUrl(data.qrCodeUrl);
        setIsWeChatQRVisible(true);
      } else {
        const result = await signIn(providerId, { callbackUrl: '/', redirect: false });
        
        if (result?.error) {
          throw new Error(result.error);
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'default';
      setError(errorMessages[errorMessage] || errorMessages.default);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
          <ExclamationCircleIcon className="w-5 h-5 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-3">
        {socialProviders.map((provider) => (
          <button
            key={provider.id}
            onClick={() => handleSocialLogin(provider.id)}
            disabled={loading !== null}
            className={`w-full flex items-center justify-center gap-3 px-4 py-2 ${
              provider.bgColor
            } ${provider.textColor} ${
              loading === null ? provider.hoverBgColor : ''
            } border ${
              provider.borderColor
            } rounded-lg transition-all duration-200 relative ${
              loading === provider.id ? 'opacity-80' : ''
            }`}
          >
            {loading === provider.id ? (
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              provider.icon
            )}
            <span>
              继续使用 {provider.name}
              {loading === provider.id && '中...'}
            </span>
          </button>
        ))}
      </div>

      {/* 微信登录二维码弹窗 */}
      <WeChatQRCode
        isOpen={isWeChatQRVisible}
        onClose={() => {
          setIsWeChatQRVisible(false);
          setWeChatAuthUrl('');
        }}
        authUrl={weChatAuthUrl}
      />
    </div>
  );
} 