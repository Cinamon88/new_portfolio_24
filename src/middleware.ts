import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pl'],

  // Used when no locale matches
  defaultLocale: 'en',
  pathnames: {
    '/contact': {
      en: '/contact',
      pl: '/contact'
    },
    '/projects': {
      en: '/projects',
      pl: '/projects'
    },
  }
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pl|en)/:path*', '/contact', '/projects']
};