import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { jwtDecode } from 'jwt-decode';

function isTokenValid(token: string) {
    try {
        const decoded: any = jwtDecode(token);
        if (!decoded.exp) return false;

        return decoded.exp * 1000 > Date.now();
    } catch {
        return false;
    }
}

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('sb-access-token')?.value;

    const isValid = accessToken ? isTokenValid(accessToken) : false;

    if (!isValid && request.nextUrl.pathname.startsWith('/profile')) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', request.nextUrl.pathname);

        return NextResponse.redirect(loginUrl);
    }

    if (isValid && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/profile', '/login', '/register']
};
