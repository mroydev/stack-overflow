import { authMiddleware } from '@clerk/nextjs';

// Protect all routes except for those specified as public
export default authMiddleware({
  publicRoutes: ['/', '/ask-question', '/api/webhook'],
});

export const config = {
  matcher: [
    // Apply to all routes except for static files and API routes
    '/((?!.+\\.[\\w]+$|_next).*)',
    // Explicitly include public routes
    '/',
    '/ask-question',
    '/api/webhook',
    '/api/:path*',
    '/trpc/:path*',
  ],
};
