'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // TODO: 这里需要连接到后端 API
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 假设发送成功
      setIsSubmitted(true);
    } catch (err) {
      setError('发送重置链接失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        <div>
          <Link href="/" className="block text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Corks
            </h2>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            重置密码
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            记起密码了？{' '}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              返回登录
            </Link>
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center">
            <div className="mb-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              重置链接已发送
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              我们已经向 {email} 发送了密码重置链接，
              请检查您的邮箱并按照邮件中的说明进行操作。
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                没有收到邮件？请检查垃圾邮件文件夹，或
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-blue-500 ml-1"
                >
                  重新发送
                </button>
              </p>
            </div>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <p className="text-sm text-gray-500 mb-6">
                请输入您的注册邮箱，我们将向您发送密码重置链接。
              </p>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  邮箱地址
                </label>
                <div className="mt-1 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`appearance-none block w-full px-3 py-2 pl-10 border ${
                      error ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    disabled={isLoading}
                  />
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600">
                    {error}
                  </p>
                )}
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      发送中...
                    </>
                  ) : (
                    '发送重置链接'
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
} 