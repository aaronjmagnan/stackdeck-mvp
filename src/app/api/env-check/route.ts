import { NextResponse } from 'next/server';

export async function GET() {
  const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hasAnon = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const hasService = !!process.env.SUPABASE_SERVICE_ROLE_KEY;
  const hasSite = !!process.env.NEXT_PUBLIC_SITE_URL;

  return NextResponse.json({
    ok: hasUrl && hasAnon && hasService && hasSite,
    vars: {
      NEXT_PUBLIC_SUPABASE_URL: hasUrl,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: hasAnon,
      SUPABASE_SERVICE_ROLE_KEY: hasService,
      NEXT_PUBLIC_SITE_URL: hasSite,
    },
  });
}
