import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, Locale, locales } from './i18n/config';

function detectLocaleFromHeader(acceptLangHeader?: string): string {
  if (!acceptLangHeader) return defaultLocale;

  const langs = acceptLangHeader
    .split(',')
    .map(l => l.split(';')[0].trim().toLowerCase());

  return langs.find(lang => locales.includes(lang as Locale)) || defaultLocale;
}

export function middleware(request: NextRequest) {
  const existingLocale = request.cookies.get('NEXT_LOCALE')?.value;

  // If cookie exists → don't touch it
  if (existingLocale) {
    return NextResponse.next();
  }

  // First visit → detect from browser
  const detectedLocale = detectLocaleFromHeader(
    request.headers.get('accept-language') || undefined
  );

  const res = NextResponse.next();
  res.cookies.set('NEXT_LOCALE', detectedLocale);

  return res;
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)']
};
