"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js 15",
    excerpt:
      "Explore the latest features in Next.js 15 and learn how to build performant, scalable React applications with the new App Router.",
    image: "/blog/nextjs-15-featured.jpg",
    category: "Tech",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "building-scalable-react-applications-nextjs-15",
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Discover the emerging trends and technologies that are shaping the future of web development, from AI integration to edge computing.",
    image: "/blog/web-dev-trends-2024.jpg",
    category: "Career",
    date: "2024-01-10",
    readTime: "6 min read",
    slug: "future-web-development-trends-2024",
  },
  {
    id: 3,
    title: "Mastering TypeScript: Advanced Patterns for Better Code",
    excerpt:
      "Deep dive into advanced TypeScript patterns, generics, and type manipulation techniques that will elevate your development skills.",
    image: "/blog/typescript-advanced.jpg",
    category: "Tech",
    date: "2024-01-05",
    readTime: "10 min read",
    slug: "mastering-typescript-advanced-patterns",
  },
  {
    id: 4,
    title: "From Junior to Senior: A Developer's Growth Journey",
    excerpt:
      "Essential skills, mindset shifts, and career strategies that transform junior developers into senior engineering leaders.",
    image: "/blog/developer-growth.jpg",
    category: "Career",
    date: "2023-12-28",
    readTime: "7 min read",
    slug: "junior-to-senior-developer-journey",
  },
]

const categoryColors = {
  Tech: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Career: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  Tips: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
}

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-lora max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      categoryColors[post.category as keyof typeof categoryColors]
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-poppins mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 font-lora mb-4 line-clamp-3">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Posts
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
