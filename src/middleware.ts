import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['pl', 'en'],

  // Used when no locale matches
  defaultLocale: 'pl',
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