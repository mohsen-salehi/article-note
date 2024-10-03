// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getUserByToken } from './lib/users';
//
// export function middleware(request: NextRequest) {
//     const token = request.cookies.get('token')?.value;
//
//     if (!token) {
//         return NextResponse.redirect(new URL('/login', request.url));
//     }
//
//     const user = getUserByToken(token);
//
//     if (!user) {
//         return NextResponse.redirect(new URL('/login', request.url));
//     }
//
//     return NextResponse.next();
// }
//
// export const config = {
//     matcher: ['/dashboard', '/articles/:path*', '/api/articles/:path*'],
// };