import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | Muhammad Idrees - Modern Websites & Apps",
  description: "Award-winning web development services by Muhammad Idrees. Custom websites, web apps, and digital solutions using React, Next.js, and the latest technologies. Fast, secure, and SEO-optimized.",
  keywords: [
    "web development",
    "React",
    "Next.js",
    "full stack",
    "website development",
    "modern web apps",
    "SEO",
    "Muhammad Idrees",
    "Karachi web developer",
    "Pakistan web developer",
  ],
};

export default function WebDevelopmentPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold font-poppins mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
          Web Development
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 font-lora mb-8 leading-relaxed">
          <span className="font-semibold text-blue-600 dark:text-blue-400">Modern, scalable, and lightning-fast</span> websites & web applications that drive results. I build digital experiences that are not just beautiful, but <span className="font-semibold text-purple-600 dark:text-purple-400">engineered for growth</span>.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-lg text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-8">
          "Your website is your digital handshake. Make it memorable, make it matter."
        </blockquote>
        <ul className="list-disc pl-8 mb-8 text-lg text-gray-800 dark:text-gray-200 space-y-3 font-lora">
          <li>Custom website & web app development (React, Next.js, TypeScript)</li>
          <li>Responsive, mobile-first design for every device</li>
          <li>SEO optimization & blazing-fast performance</li>
          <li>API integration, backend connectivity, and cloud deployment</li>
          <li>Enterprise-grade security & scalability</li>
        </ul>
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Why Partner With Me?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li>Proven results with award-winning projects</li>
            <li>Cutting-edge tech stack for future-proof solutions</li>
            <li>Focus on user experience, accessibility, and conversion</li>
            <li>Transparent communication & agile delivery</li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-semibold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            🚀 Let’s Start Working Together
          </a>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Ready to elevate your online presence? <a href="/portfolio" className="text-blue-600 dark:text-blue-400 underline hover:text-purple-600">See my work</a> or <a href="/contact" className="text-purple-600 dark:text-purple-400 underline hover:text-blue-600">get in touch</a> for a free consultation.</p>
        </div>
      </div>
    </section>
  );
} 