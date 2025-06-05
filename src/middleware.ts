import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicPaths = [
  "/",
  "/sign-in",
  "/sign-up",
  "/privacy",
  "/terms",
  "/legal/cancellation-refund",
  "/legal/shipping-delivery",
  "/contact"
];

const isPublic = (path: string) => {
  return publicPaths.find((x) => path === x);
};

export default clerkMiddleware(async (auth, req) => {
  if (isPublic(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const { userId } = await auth();
  
  if (!userId) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};