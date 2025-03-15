// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isProfilePage = request.nextUrl.pathname.startsWith('/dashboard');
  const { pathname } = request.nextUrl;


  if (isProfilePage) {
    if (!token) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
    
    if (token.requiresTwoFactor) {
      return NextResponse.redirect(new URL('/sign-in?error=2fa-required', request.url));
    }
  }

    // Handle logout path specifically
    if (pathname === "/logout") {
      return NextResponse.redirect(
        new URL(`/sign-in?logout=${Date.now()}`, request.url)
      );
    }
  

  return NextResponse.next();
}