
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create supabase client bound to cookies
  const supabase = createMiddlewareClient({ req, res });

  // Get current session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Protect only (root) routes
  if (req.nextUrl.pathname.startsWith("/")) {
    // Skip (auth) routes so people can sign in
    if (req.nextUrl.pathname.startsWith("/sign-in")) {
      return res;
    }

    // If not logged in, redirect to sign-in
    if (!session) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/sign-in";
      redirectUrl.searchParams.set("redirectedFrom", req.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return res;
}

export const config = {
  matcher: [
    "/(root)/(.*)", // protect everything in (root)
  ],
};






// // middleware.ts

// // middleware.ts
// import { NextRequest, NextResponse } from "next/server";
// import { createServerClient } from "@supabase/ssr";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next({ request: { headers: req.headers } });

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get: (name: string) => req.cookies.get(name)?.value,
//         set: (name: string, value: string, options: any) => {
//           res.cookies.set({ name, value, ...options });
//         },
//         remove: (name: string, options: any) => {
//           res.cookies.set({ name, value: "", ...options, maxAge: 0 });
//         },
//       },
//     }
//   );

//   // This refreshes the session if needed and sets cookies on the response.
//   await supabase.auth.getSession();

//   return res;
// }

// // Skip static assets; run on all other routes.
// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };





// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export async function middleware(request: NextRequest) {
//   const token = await getToken({ req: request });
//   const isProfilePage = request.nextUrl.pathname.startsWith('/dashboard');
//   const { pathname } = request.nextUrl;


//   if (isProfilePage) {
//     if (!token) {
//       return NextResponse.redirect(new URL('/sign-in', request.url));
//     }
    
//     if (token.requiresTwoFactor) {
//       return NextResponse.redirect(new URL('/sign-in?error=2fa-required', request.url));
//     }
//   }

//     // Handle logout path specifically
//     if (pathname === "/logout") {
//       return NextResponse.redirect(
//         new URL(`/sign-in?logout=${Date.now()}`, request.url)
//       );
//     }
  

//   return NextResponse.next();
// }