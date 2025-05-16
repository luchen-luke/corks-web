import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // 构建微信登录授权URL
        const appId = process.env.WECHAT_APP_ID;
        const redirectUri = encodeURIComponent(`${process.env.NEXTAUTH_URL}/api/auth/callback/wechat`);
        const state = Math.random().toString(36).substring(7);

        const qrCodeUrl = `https://open.weixin.qq.com/connect/qrconnect?appid=${appId}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_login&state=${state}#wechat_redirect`;

        return NextResponse.json({ qrCodeUrl });
    } catch (error) {
        console.error('WeChat QR code generation error:', error);
        return NextResponse.json(
            { error: '生成二维码时出错' },
            { status: 500 }
        );
    }
} 