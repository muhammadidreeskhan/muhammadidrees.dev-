import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6">
      <div className="max-w-xl w-full text-center p-8 bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20">
        <h1 className="text-6xl font-extrabold font-poppins mb-4 text-blue-600 dark:text-blue-400">404</h1>
        <h2 className="text-2xl font-bold font-poppins mb-4 text-gray-900 dark:text-white">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-lora">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          Go Back Home
        </Link>
      </div>
    </section>
  );
} 