import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // If it's the admin page and not the login page
  if (path.startsWith("/admin") && !path.includes("/admin/login")) {
    // Check if the user is authenticated
    const isAuthenticated = request.cookies.get("adminAuthenticated")?.value === "true"

    // If not authenticated, redirect to the login page
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
