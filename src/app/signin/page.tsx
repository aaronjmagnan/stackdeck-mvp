"use client";

import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/auth/send-magic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send link");
      }
      setStatus("sent");
    } catch (err: unknown) {
      const e = err as Error;
      setError(err.message || "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email and we’ll send you a one‑click sign‑in link.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-xl border border-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send magic link"}
          </button>
        </form>

        {status === "sent" && (
          <p className="mt-4 text-sm text-green-600">
            Check your email for the sign‑in link.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-600">{error}</p>
        )}

        <p className="mt-8 text-xs text-gray-500">
          You’ll be redirected to your dashboard after clicking the link.
        </p>
      </div>
    </main>
  );
}
