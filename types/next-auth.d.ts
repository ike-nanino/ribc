// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    requiresTwoFactor?: boolean;
  }

  interface Session {
    requiresTwoFactor?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    requiresTwoFactor?: boolean;
  }
}