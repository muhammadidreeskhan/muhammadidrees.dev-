"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    avatar: "/testimonials/sarah-johnson.svg",
    content:
      "Muhammad delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient. The site's performance improved by 40% and our conversion rates increased significantly.",
    rating: 5,
    company: "TechCorp",
    project: "E-commerce Platform",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Startup Founder",
    avatar: "/testimonials/david-chen.jpg",
    content:
      "Working with Muhammad was a game-changer for our startup. He built our MVP in record time while maintaining high code quality. His expertise in React and Next.js helped us launch 3 weeks ahead of schedule. Highly recommended!",
    rating: 5,
    company: "InnovateLab",
    project: "SaaS MVP Development",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "/testimonials/emily-rodriguez.jpg",
    content:
      "The website Muhammad created for us has significantly improved our conversion rates by 65%. His understanding of both technical and business requirements is impressive. The site loads incredibly fast and looks stunning on all devices.",
    rating: 5,
    company: "GrowthCo",
    project: "Corporate Website Redesign",
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "CTO at DataFlow",
    avatar: "/testimonials/michael-thompson.jpg",
    content:
      "Muhammad's expertise in React and Next.js helped us modernize our entire frontend architecture. The performance improvements were remarkable - 50% faster load times and much better user experience. His code quality is exceptional.",
    rating: 5,
    company: "DataFlow",
    project: "Frontend Modernization",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-lora max-w-2xl mx-auto">
            Testimonials from satisfied clients and collaborators who have experienced exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="relative h-auto min-h-[500px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto text-center border border-white/20 dark:border-gray-700/20">
                  {/* Client Image */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-75"></div>
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={120}
                        height={120}
                        className="relative w-24 h-24 md:w-30 md:h-30 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
                      />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-lora text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-2">
                    <div className="font-bold font-poppins text-gray-900 dark:text-white text-xl">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-lg">{testimonials[currentIndex].role}</div>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <span className="text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {testimonials[currentIndex].company}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                        {testimonials[currentIndex].project}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-500 border border-white/20 dark:border-gray-700/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-500 border border-white/20 dark:border-gray-700/20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8 shadow-lg"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Avatar Navigation */}
          <div className="flex justify-center space-x-6 mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => goToTestimonial(index)}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`relative group ${
                  index === currentIndex
                    ? "ring-4 ring-blue-500 shadow-xl"
                    : "opacity-60 hover:opacity-100 hover:shadow-lg"
                } rounded-full transition-all duration-300`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm transition-opacity duration-300 ${
                    index === currentIndex ? "opacity-75" : "opacity-0 group-hover:opacity-50"
                  }`}
                ></div>
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="relative w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-700"
                />
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {testimonial.name}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
