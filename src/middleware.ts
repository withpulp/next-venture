import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import app from "@/config/app.config"

// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes("/discord")) {
    return NextResponse.redirect(app.social.discord, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
