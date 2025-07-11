import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Building Scalable React Applications with Next.js 15 | Muhammad Idrees",
  description:
    "Learn how to build performant, scalable React applications using Next.js 15's latest features including App Router, Server Components, and advanced optimization techniques.",
  keywords: [
    "Next.js 15",
    "React applications",
    "App Router",
    "Server Components",
    "web performance",
    "scalable architecture",
  ],
  openGraph: {
    title: "Building Scalable React Applications with Next.js 15",
    description:
      "Learn how to build performant, scalable React applications using Next.js 15's latest features including App Router, Server Components, and advanced optimization techniques.",
    type: "article",
    publishedTime: "2024-01-15T00:00:00.000Z",
    authors: ["Muhammad Idrees"],
    url: "https://muhammadidrees.dev/blog/building-scalable-react-applications-nextjs-15",
    images: [
      {
        url: "/blog/nextjs-15-featured.jpg",
        width: 1200,
        height: 630,
        alt: "Next.js 15 React Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Scalable React Applications with Next.js 15",
    description: "Learn how to build performant, scalable React applications using Next.js 15's latest features.",
    images: ["/blog/nextjs-15-featured.jpg"],
  },
}

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Building Scalable React Applications with Next.js 15",
    description:
      "Learn how to build performant, scalable React applications using Next.js 15's latest features including App Router, Server Components, and advanced optimization techniques.",
    image: "/blog/nextjs-15-featured.jpg",
    author: {
      "@type": "Person",
      name: "Muhammad Idrees",
      url: "https://muhammadidrees.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Muhammad Idrees",
      url: "https://muhammadidrees.dev",
    },
    datePublished: "2024-01-15T00:00:00.000Z",
    dateModified: "2024-01-15T00:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://muhammadidrees.dev/blog/building-scalable-react-applications-nextjs-15",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                Tech
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-gray-900 dark:text-white">
              Building Scalable React Applications with Next.js 15
            </h1>

            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-8 space-x-6">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                January 15, 2024
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />8 min read
              </div>
              <button className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <Share2 size={18} className="mr-2" />
                Share
              </button>
            </div>

            <Image
              src="/blog/nextjs-15-featured.jpg"
              alt="Next.js 15 React Applications"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              priority
            />
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 font-lora mb-8 leading-relaxed">
              Next.js 15 represents a significant leap forward in React application development, introducing
              groundbreaking features that revolutionize how we build scalable, performant web applications. In this
              comprehensive guide, we&apos;ll explore the latest innovations and learn how to leverage them for maximum
              impact.
            </p>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">The Evolution of Next.js Architecture</h2>

            <p className="mb-6">
              The release of Next.js 15 marks a pivotal moment in the framework&apos;s evolution. With enhanced App Router
              capabilities, improved Server Components, and revolutionary caching mechanisms, developers now have
              unprecedented tools for building enterprise-grade applications.
            </p>

            <Image
              src="/blog/nextjs-app-router.jpg"
              alt="Next.js App Router Architecture"
              width={700}
              height={400}
              className="w-full h-64 object-cover rounded-xl shadow-md my-8"
            />

            <h3 className="text-2xl font-semibold font-poppins mt-10 mb-4">App Router: The New Standard</h3>

            <p className="mb-6">
              The App Router in Next.js 15 introduces a paradigm shift in how we structure and organize our
              applications. Built on React&apos;s latest concurrent features, it provides:
            </p>

            <ul className="mb-8 space-y-2">
              <li>
                <strong>Nested Layouts:</strong> Create complex, reusable layout hierarchies
              </li>
              <li>
                <strong>Loading UI:</strong> Instant loading states for better user experience
              </li>
              <li>
                <strong>Error Boundaries:</strong> Granular error handling at the route level
              </li>
              <li>
                <strong>Parallel Routes:</strong> Render multiple pages simultaneously
              </li>
            </ul>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
              <h4 className="text-lg font-semibold mb-4">Code Example: App Router Structure</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                {`app/
├── layout.tsx          // Root layout
├── page.tsx           // Home page
├── loading.tsx        // Loading UI
├── error.tsx          // Error UI
├── dashboard/
│   ├── layout.tsx     // Dashboard layout
│   ├── page.tsx       // Dashboard page
│   └── analytics/
│       └── page.tsx   // Analytics page
└── api/
    └── users/
        └── route.ts   // API route`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">Server Components Revolution</h2>

            <p className="mb-6">
              React Server Components in Next.js 15 fundamentally change how we think about data fetching and rendering.
              By executing components on the server, we achieve unprecedented performance gains and simplified data
              management.
            </p>

            <Image
              src="/blog/server-components.jpg"
              alt="React Server Components Architecture"
              width={700}
              height={400}
              className="w-full h-64 object-cover rounded-xl shadow-md my-8"
            />

            <h3 className="text-2xl font-semibold font-poppins mt-10 mb-4">Benefits of Server Components</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Performance</h4>
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  Reduced bundle size, faster initial page loads, and improved Core Web Vitals scores.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Security</h4>
                <p className="text-sm text-green-700 dark:text-green-200">
                  Sensitive data and API keys remain on the server, enhancing application security.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">Advanced Optimization Techniques</h2>

            <p className="mb-6">
              Next.js 15 introduces sophisticated optimization strategies that automatically improve your application's
              performance without manual intervention.
            </p>

            <h3 className="text-2xl font-semibold font-poppins mt-10 mb-4">Intelligent Caching</h3>

            <p className="mb-6">The new caching system in Next.js 15 operates on multiple levels:</p>

            <ol className="mb-8 space-y-3">
              <li>
                <strong>Request Memoization:</strong> Automatic deduplication of identical requests
              </li>
              <li>
                <strong>Data Cache:</strong> Persistent caching across server requests and deployments
              </li>
              <li>
                <strong>Full Route Cache:</strong> Pre-rendered routes cached at build time
              </li>
              <li>
                <strong>Router Cache:</strong> Client-side caching of route segments
              </li>
            </ol>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 my-8">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Pro Tip</h4>
              <p className="text-yellow-700 dark:text-yellow-200">
                Use the <code className="bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">revalidate</code> option
                strategically to balance performance with data freshness in your applications.
              </p>
            </div>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">Building for Scale</h2>

            <p className="mb-6">
              Scalability in Next.js 15 goes beyond just handling more users—it&apos;s about creating maintainable, efficient
              applications that grow with your business needs.
            </p>

            <h3 className="text-2xl font-semibold font-poppins mt-10 mb-4">Code Organization Best Practices</h3>

            <ul className="mb-8 space-y-3">
              <li>
                <strong>Feature-based Structure:</strong> Organize code by features rather than file types
              </li>
              <li>
                <strong>Shared Components:</strong> Create reusable UI components with proper TypeScript interfaces
              </li>
              <li>
                <strong>Custom Hooks:</strong> Extract business logic into reusable hooks
              </li>
              <li>
                <strong>API Layer:</strong> Implement a consistent API abstraction layer
              </li>
            </ul>

            <h2 className="text-3xl font-bold font-poppins mt-12 mb-6">Conclusion</h2>

            <p className="mb-6">
              Next.js 15 empowers developers to build applications that are not just fast and scalable, but also
              maintainable and future-proof. By embracing Server Components, leveraging the App Router, and implementing
              advanced optimization techniques, you can create web applications that deliver exceptional user
              experiences while maintaining developer productivity.
            </p>

            <p className="mb-8">
              The future of React development is here, and Next.js 15 is leading the charge. Start building your next
              scalable application today and experience the difference these powerful features can make.
            </p>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl my-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Build with Next.js 15?</h3>
              <p className="mb-6">
                Take your React applications to the next level with the latest Next.js features and best practices.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>

          {/* Author Bio */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder-user.jpg"
                alt="Muhammad Idrees"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Muhammad Idrees</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Full-stack developer passionate about creating scalable web applications with modern technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
