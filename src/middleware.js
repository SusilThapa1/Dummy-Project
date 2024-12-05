import { NextResponse } from "next/server";

export function middleware(request) {
  const cookie = request.cookies.get("authToken")?.value;

  if (request.url.includes("/Products")) {
    if (!cookie) {
      return NextResponse.redirect(new URL("/Signup", request.url));
    }
  }

  if (request.url.includes("/dashboard")) {
    if (!cookie) {
      return NextResponse.redirect(new URL("/Signup", request.url));
    }
  }

  if (request.url.includes("/logout")) {
    const response = NextResponse.redirect(new URL("/Login", request.url));
    response.cookies.delete("authToken"); // Delete the authToken cookie
    return response;
  }
}

export const config = {
  matcher: ["/Login", "/dashboard/:path*", "/logout", "/Products"],
};
