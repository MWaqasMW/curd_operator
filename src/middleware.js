
import { NextResponse } from 'next/server'
import Cookies from 'js-cookie'
export  function middleware (request) {
const path = request.nextUrl.pathname

const isPublicPath = path === "/login" 

const token = request.cookies.get("token")?.value || ''


 if(isPublicPath && token){
     return NextResponse.redirect(new URL ('/home' , request.nextUrl))
 }
  if(!isPublicPath && !token){
     return NextResponse.redirect(new URL ('/login' , request.nextUrl))
 }
}
 
export const config = {
  matcher: [
    "/",
    "/home",
    "/profile",
    "/login",
    "/signup"
  ],
}