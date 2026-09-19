
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 px-4 py-16 text-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="font-heading text-5xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl">
          Welcome to <span className="text--600">LeavePro</span>
        </h1>
        
        <p className="text-lg text-neutral-600 max-w-md mx-auto">
          A beautifully designed, production-ready starting point for your next big idea.
        </p>

        <div className="pt-4">
          <Link
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Sign In to Your Account
          </Link>
        </div>
      </div>
    </main>
  );
}
