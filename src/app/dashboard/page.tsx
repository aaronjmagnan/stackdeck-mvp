export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-3 text-gray-600">
          Welcome! You’re signed in with a magic link.
        </p>

        <div className="mt-8 rounded-xl border p-6">
          <p className="text-gray-600">
            This is your placeholder dashboard. From here you’ll be able to:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Edit your profile details (name, headline, bio)</li>
            <li>Generate invite links for people to vouch for you</li>
            <li>Approve vouches before they appear on your public page</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
    