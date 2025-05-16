'use client';

import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface WeChatQRCodeProps {
  isOpen: boolean;
  onClose: () => void;
  authUrl: string;
}

export default function WeChatQRCode({ isOpen, onClose, authUrl }: WeChatQRCodeProps) {
  const [isExpired, setIsExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    if (!isOpen) {
      setIsExpired(false);
      setTimeLeft(300);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsExpired(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">微信扫码登录</h3>
          
          <div className="relative">
            {isExpired ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                <p className="text-gray-600 mb-2">二维码已过期</p>
                <button
                  onClick={() => {
                    setIsExpired(false);
                    setTimeLeft(300);
                  }}
                  className="px-4 py-2 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
                >
                  刷新二维码
                </button>
              </div>
            ) : (
              <div className="p-4 bg-[#07C160]/5 rounded-lg">
                <QRCodeSVG
                  value={authUrl}
                  size={200}
                  level="H"
                  includeMargin
                  className="mx-auto"
                />
              </div>
            )}
          </div>

          <div className="text-sm text-gray-500">
            {!isExpired && (
              <>
                <p>请使用微信扫描二维码登录</p>
                <p className="mt-1">
                  二维码有效期：{minutes}:{seconds.toString().padStart(2, '0')}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 