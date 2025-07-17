import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development | Muhammad Idrees - iOS & Android Apps",
  description: "Expert mobile app development by Muhammad Idrees. Cross-platform iOS & Android apps using React Native. Fast, secure, and user-friendly mobile solutions for startups and enterprises.",
  keywords: [
    "mobile app development",
    "React Native",
    "cross-platform apps",
    "iOS",
    "Android",
    "mobile solutions",
    "Muhammad Idrees",
    "Karachi app developer",
    "Pakistan mobile developer",
  ],
};

export default function MobileAppsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-green-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold font-poppins mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
          Mobile App Development
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 font-lora mb-8 leading-relaxed">
          <span className="font-semibold text-green-600 dark:text-green-400">Seamless, high-performance mobile apps</span> for <span className="font-semibold text-blue-600 dark:text-blue-400">iOS</span> & <span className="font-semibold text-purple-600 dark:text-purple-400">Android</span>. I turn your ideas into reality with cross-platform solutions that users love.
        </p>
        <div className="bg-green-100 dark:bg-green-900/20 rounded-xl p-6 mb-8 shadow-md">
          <span className="block text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Client Testimonial</span>
          <blockquote className="italic text-gray-800 dark:text-gray-200">“Our app launch was a huge success thanks to Muhammad’s expertise. The user experience is flawless and the performance exceeded our expectations!”</blockquote>
        </div>
        <ul className="list-disc pl-8 mb-8 text-lg text-gray-800 dark:text-gray-200 space-y-3 font-lora">
          <li>Custom mobile app design & development (React Native)</li>
          <li>Cross-platform for iOS & Android</li>
          <li>Intuitive UI/UX and smooth user experience</li>
          <li>API & cloud integration, push notifications</li>
          <li>App Store & Google Play deployment support</li>
        </ul>
        <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-900 dark:via-blue-900 dark:to-purple-900 rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Why Build With Me?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li>Expertise in React Native & modern frameworks</li>
            <li>Focus on performance, security, and scalability</li>
            <li>Collaborative, client-focused approach</li>
            <li>End-to-end support from idea to launch</li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white text-xl font-semibold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            📱 Start Your App Project
          </a>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Let’s build something amazing together! <a href="/portfolio" className="text-green-600 dark:text-green-400 underline hover:text-blue-600">See my apps</a> or <a href="/contact" className="text-blue-600 dark:text-blue-400 underline hover:text-green-600">get in touch</a> for a free consultation.</p>
        </div>
      </div>
    </section>
  );
} 