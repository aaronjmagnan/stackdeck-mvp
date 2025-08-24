import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight">StackDeck</h1>
          <p className="mt-2 text-sm text-gray-500">
            Simple, shareable profiles with real voice vouches.
          </p>
        </header>

        <section className="rounded-2xl border p-8 shadow-sm">
          <h2 className="text-2xl font-medium">StackDeck MVP</h2>
          <p className="mt-3 text-gray-600">
            Create a lightweight profile (“deck”), invite people to leave short
            voice reviews, auto-transcribe and clean the text, then approve what
            shows publicly.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* ✅ Now just a link to /signin */}
            <Link
              href="/signin"
              className="rounded-xl border border-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition"
            >
              Sign in (magic link)
            </Link>

            <Link
              href="/u/demo-user"
              className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
            >
              View example profile
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl px-4 py-2 text-sm font-medium underline underline-offset-4"
            >
              Go to dashboard
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
