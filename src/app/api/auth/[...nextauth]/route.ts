import NextAuth, { DefaultSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import InstagramProvider from 'next-auth/providers/instagram';

// 扩展 Session 类型以包含用户 ID
declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
        } & DefaultSession['user']
    }
}

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID || '',
            clientSecret: process.env.TWITTER_CLIENT_SECRET || '',
            version: '2.0',
        }),
        InstagramProvider({
            clientId: process.env.INSTAGRAM_CLIENT_ID || '',
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET || '',
        }),
        {
            id: 'wechat',
            name: 'WeChat',
            type: 'oauth',
            authorization: {
                url: 'https://open.weixin.qq.com/connect/qrconnect',
                params: {
                    appid: process.env.WECHAT_APP_ID,
                    scope: 'snsapi_login',
                    response_type: 'code',
                },
            },
            token: {
                url: 'https://api.weixin.qq.com/sns/oauth2/access_token',
                params: {
                    appid: process.env.WECHAT_APP_ID,
                    secret: process.env.WECHAT_APP_SECRET,
                    grant_type: 'authorization_code',
                },
            },
            userinfo: {
                url: 'https://api.weixin.qq.com/sns/userinfo',
                params: { lang: 'zh_CN' },
            },
            profile(profile) {
                return {
                    id: profile.unionid,
                    name: profile.nickname,
                    image: profile.headimgurl,
                };
            },
        },
    ],
    pages: {
        signIn: '/login',
        signOut: '/',
        error: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
});

export { handler as GET, handler as POST }; 