import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Muhammad Idrees - Creative Digital Experiences",
  description: "Creative UI/UX design by Muhammad Idrees. User-centered, beautiful, and accessible digital experiences for web and mobile. Figma, Adobe XD, and modern design systems.",
  keywords: [
    "UI/UX design",
    "user experience",
    "user interface",
    "web design",
    "mobile design",
    "design systems",
    "Muhammad Idrees",
    "Karachi UI designer",
    "Pakistan UX designer",
  ],
};

export default function UIUXDesignPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold font-poppins mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
          UI/UX Design
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 font-lora mb-8 leading-relaxed">
          <span className="font-semibold text-purple-600 dark:text-purple-400">Intuitive, beautiful, and user-centered</span> digital experiences for web & mobile. I blend creativity with usability to make your product stand out.
        </p>
        <div className="bg-purple-100 dark:bg-purple-900/20 rounded-xl p-6 mb-8 shadow-md">
          <span className="block text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">Design Tip</span>
          <blockquote className="italic text-gray-800 dark:text-gray-200">“Great design is invisible. It guides, delights, and empowers users without getting in their way.”</blockquote>
        </div>
        <ul className="list-disc pl-8 mb-8 text-lg text-gray-800 dark:text-gray-200 space-y-3 font-lora">
          <li>Wireframing, prototyping, and user flows</li>
          <li>Custom UI design & scalable design systems</li>
          <li>User research, personas, and usability testing</li>
          <li>Accessibility & inclusive design best practices</li>
          <li>Collaboration with dev teams for pixel-perfect results</li>
        </ul>
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 dark:from-purple-900 dark:via-blue-900 dark:to-pink-900 rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Why Design With Me?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li>Strong portfolio & creative vision</li>
            <li>Focus on user needs and business goals</li>
            <li>Expertise in Figma, Adobe XD, and modern tools</li>
            <li>Seamless handoff to development</li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xl font-semibold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            🎨 Let’s Create Something Beautiful
          </a>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Ready to elevate your product’s design? <a href="/portfolio" className="text-purple-600 dark:text-purple-400 underline hover:text-blue-600">See my designs</a> or <a href="/contact" className="text-blue-600 dark:text-blue-400 underline hover:text-purple-600">get in touch</a> for a design review.</p>
        </div>
      </div>
    </section>
  );
} 