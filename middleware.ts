import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Create a response object to pass cookies through
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value)
          })
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Get the current user
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()

  console.log('Middleware running for:', request.nextUrl.pathname)
  console.log('User:', user ? 'authenticated' : 'not authenticated')

  // Define protected routes (everything except sign-in and public assets)
  const isProtectedRoute = 
    !request.nextUrl.pathname.startsWith('/sign-in') &&
    !request.nextUrl.pathname.startsWith('/_next') &&
    !request.nextUrl.pathname.startsWith('/api') &&
    !request.nextUrl.pathname.includes('.') &&
    request.nextUrl.pathname !== '/'

  console.log('Is protected route:', isProtectedRoute)

  // If accessing a protected route without authentication, redirect to sign-in
  if (isProtectedRoute && !user) {
    console.log('Redirecting to sign-in')
    const url = request.nextUrl.clone()
    url.pathname = '/sign-in'
    return NextResponse.redirect(url)
  }

  // If authenticated and trying to access sign-in, redirect to dashboard
  if (user && request.nextUrl.pathname.startsWith('/sign-in')) {
    console.log('User authenticated, redirecting to dashboard')
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}