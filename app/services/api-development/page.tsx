import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Development Services | Muhammad Idrees - Secure & Scalable APIs",
  description: "Robust API development by Muhammad Idrees. REST & GraphQL APIs for web, mobile, and SaaS. Secure, scalable, and well-documented solutions for modern businesses.",
  keywords: [
    "API development",
    "REST API",
    "GraphQL",
    "backend development",
    "web APIs",
    "secure APIs",
    "Muhammad Idrees",
    "Karachi API developer",
    "Pakistan backend developer",
  ],
};

export default function APIDevelopmentPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-yellow-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold font-poppins mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
          API Development
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 font-lora mb-8 leading-relaxed">
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">Power your apps with secure, scalable APIs</span>. I design and build robust <span className="font-semibold text-blue-600 dark:text-blue-400">REST</span> & <span className="font-semibold text-purple-600 dark:text-purple-400">GraphQL</span> APIs for web, mobile, and SaaS platforms.
        </p>
        <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-xl p-6 mb-8 shadow-md">
          <span className="block text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Did You Know?</span>
          <blockquote className="italic text-gray-800 dark:text-gray-200">“APIs now power over 80% of all web traffic. A great API is the backbone of digital innovation.”</blockquote>
        </div>
        <ul className="list-disc pl-8 mb-8 text-lg text-gray-800 dark:text-gray-200 space-y-3 font-lora">
          <li>Custom API design & architecture (REST, GraphQL)</li>
          <li>Authentication, authorization, and security best practices</li>
          <li>API documentation & developer experience</li>
          <li>Integration with third-party services & cloud platforms</li>
          <li>Performance, scalability, and monitoring</li>
        </ul>
        <div className="bg-gradient-to-r from-yellow-100 via-blue-100 to-purple-100 dark:from-yellow-900 dark:via-blue-900 dark:to-purple-900 rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Why Trust Me With Your APIs?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li>Deep expertise in backend & API technologies</li>
            <li>Focus on reliability, scalability, and security</li>
            <li>Clear, well-documented APIs for easy integration</li>
            <li>Proven success in enterprise and SaaS projects</li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-blue-600 text-white text-xl font-semibold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            🔗 Let’s Build Your API
          </a>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Need a custom API? <a href="/portfolio" className="text-yellow-600 dark:text-yellow-400 underline hover:text-blue-600">See my API projects</a> or <a href="/contact" className="text-blue-600 dark:text-blue-400 underline hover:text-yellow-600">get in touch</a> for a technical consultation.</p>
        </div>
      </div>
    </section>
  );
} 