import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services | Muhammad Idrees - Digital Strategy & Tech Guidance",
  description: "Expert consulting by Muhammad Idrees. Project planning, technical strategy, and digital transformation for startups, enterprises, and agencies. Free initial consultation.",
  keywords: [
    "consulting",
    "tech consulting",
    "web consulting",
    "digital transformation",
    "project planning",
    "strategy",
    "Muhammad Idrees",
    "Karachi tech consultant",
    "Pakistan digital consultant",
  ],
};

export default function ConsultingPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold font-poppins mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
          Consulting
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 font-lora mb-8 leading-relaxed">
          <span className="font-semibold text-blue-600 dark:text-blue-400">Accelerate your digital success</span> with expert consulting. I provide actionable advice, project planning, and technical guidance for <span className="font-semibold text-green-600 dark:text-green-400">web</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">mobile</span>, and <span className="font-semibold text-blue-600 dark:text-blue-400">digital transformation</span> projects.
        </p>
        <div className="bg-blue-100 dark:bg-blue-900/20 rounded-xl p-6 mb-8 shadow-md">
          <span className="block text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Success Story</span>
          <blockquote className="italic text-gray-800 dark:text-gray-200">“With Muhammad’s guidance, we launched our SaaS platform on time and under budget. His technical strategy and mentorship were invaluable.”</blockquote>
        </div>
        <ul className="list-disc pl-8 mb-8 text-lg text-gray-800 dark:text-gray-200 space-y-3 font-lora">
          <li>Project scoping, technical strategy, and architecture</li>
          <li>Technology stack recommendations & code reviews</li>
          <li>Performance, security, and scalability audits</li>
          <li>Mentorship, team training, and process improvement</li>
        </ul>
        <div className="bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 dark:from-blue-900 dark:via-green-900 dark:to-purple-900 rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Why Consult With Me?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li>Years of hands-on experience in web & mobile development</li>
            <li>Proven success with startups, enterprises, and agencies</li>
            <li>Clear, actionable recommendations</li>
            <li>Focus on your business goals and ROI</li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-green-600 text-white text-xl font-semibold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            🤝 Start Working Together
          </a>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Let’s discuss your project! <a href="/portfolio" className="text-blue-600 dark:text-blue-400 underline hover:text-green-600">See my results</a> or <a href="/contact" className="text-green-600 dark:text-green-400 underline hover:text-blue-600">book a free consultation</a> today.</p>
        </div>
      </div>
    </section>
  );
} 