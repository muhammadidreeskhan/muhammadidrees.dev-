"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

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

export function BlogClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ["All", "Tech", "Career", "Tips"]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-lora max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, career growth, and the latest technologies
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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

                <h2 className="text-xl font-bold font-poppins mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h2>

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

        {filteredPosts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-xl text-gray-500 dark:text-gray-400">No articles found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
