// pages/api/auth/[...nextauth].

import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


interface UserCredentials {
  username: string;
  password: string;
  twoFactorCode?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  requiresTwoFactor: boolean;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
        twoFactorCode: { label: "2FA Code", type: "text" },
      },
      authorize: async (credentials) => {
        const { username, password, twoFactorCode } = credentials as UserCredentials;

        // Initial credential check
        if (username === "Leandersb" && password === "jollylove18") {
          // If 2FA code provided
          if (twoFactorCode) {
            const isValid = twoFactorCode === process.env.NEXT_PUBLIC_ADMIN_PASSKEY;
            
            return isValid 
              ? { id: "user1", name: "User", email: "", requiresTwoFactor: false }
              : null;
          }
          
          // Require 2FA if no code provided
          return { id: "user1", name: "User", email: "", requiresTwoFactor: true };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
    error: "/sign-in", // Redirect to sign-in page on error
  },
  session: {
    strategy: "jwt",
    maxAge: 50 * 60, // 4 hours in seconds (14400)
  },
  jwt: {
    maxAge: 50 * 60, // Match session maxAge
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.requiresTwoFactor = user.requiresTwoFactor;
        token.id = user.id;
        // Set JWT expiration
        token.exp = Math.floor(Date.now() / 1000) + 50 * 60;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.id as string;
        session.requiresTwoFactor = token.requiresTwoFactor ?? false;
        session.expires = new Date(token.exp * 1000).toISOString();
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
