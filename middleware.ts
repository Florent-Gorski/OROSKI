import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["fr", "en"] as const;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore Next internals / API / files
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  // Already prefixed
  const hasLang = SUPPORTED.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLang) return NextResponse.next();

  // Default to /fr
  const url = req.nextUrl.clone();
  url.pathname = `/fr${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api).*)"]
};
