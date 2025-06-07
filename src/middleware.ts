// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { jwtDecode } from 'jwt-decode';
// function isTokenValid(token: string) {
//     try {
//         const decoded: { exp: string | number } = jwtDecode(token);
//         if (!decoded.exp) return false;
//         const expirationTime = typeof decoded.exp === 'string' ? parseInt(decoded.exp) : decoded.exp;
//         return expirationTime * 1000 > Date.now();
//     } catch {
//         return false;
//     }
// }
// //  comment for fix deploy
// export function middleware(request: NextRequest) {
//     const accessToken = request.cookies.get('sb-access-token')?.value;
//     const isValid = accessToken ? isTokenValid(accessToken) : false;
//     if (!isValid && request.nextUrl.pathname.startsWith('/profile')) {
//         const loginUrl = new URL('/login', request.url);
//         loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
//         return NextResponse.redirect(loginUrl);
//     }
//     if (isValid && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
//         return NextResponse.redirect(new URL('/', request.url));
//     }
//     return NextResponse.next();
// }
// export const config = {
//     matcher: ['/profile', '/login', '/register', '/test']
// };
import { type NextRequest } from 'next/server';

import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
    return await updateSession(request);
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
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ]
};
