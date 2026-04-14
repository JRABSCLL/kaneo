export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-900">Kaneo</h1>
        <p className="mt-2 text-gray-600">Modern Project Management Platform</p>
        <div className="mt-8 space-y-3">
          <a
            href="/auth/login"
            className="block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </a>
          <a
            href="/auth/sign-up"
            className="block w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}
