"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Play } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't use scroll hooks until component is mounted on client
  const scrollData = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollData.scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollData.scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text reveal animation
      gsap.from(".hero-heading", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 2.5,
      })

      gsap.from(".hero-subtext", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 2.8,
      })

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 3.1,
      })

      // Floating animation for scroll arrow
      gsap.to(".scroll-arrow", {
        y: 10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Parallax particles
      gsap.to(".particle", {
        y: "random(-100, 100)",
        x: "random(-50, 50)",
        duration: "random(3, 6)",
        ease: "none",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: "random",
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section introducing Muhammad Idrees"
    >
      {/* Optimized Background Image with proper loading */}
      <div className="absolute inset-0">
        <Image
                        src="/hero-background.svg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Fallback Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Animated Particles */}
      <div className="absolute inset-0" aria-hidden="true">
        {[
          { left: 20, top: 15 }, { left: 80, top: 25 }, { left: 15, top: 45 },
          { left: 85, top: 35 }, { left: 45, top: 65 }, { left: 70, top: 55 },
          { left: 25, top: 75 }, { left: 90, top: 85 }, { left: 10, top: 95 },
          { left: 60, top: 5 }, { left: 35, top: 25 }, { left: 75, top: 45 },
          { left: 50, top: 85 }, { left: 30, top: 65 }, { left: 65, top: 15 },
          { left: 40, top: 35 }, { left: 80, top: 75 }, { left: 20, top: 55 },
          { left: 70, top: 25 }, { left: 55, top: 45 }, { left: 25, top: 85 },
          { left: 85, top: 65 }, { left: 15, top: 35 }, { left: 60, top: 75 },
          { left: 45, top: 15 }, { left: 90, top: 55 }, { left: 30, top: 95 },
          { left: 75, top: 35 }, { left: 50, top: 65 }, { left: 35, top: 85 }
        ].map((position, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
          />
        ))}
      </div>

      {/* 3D Layered Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Glassmorphism Card */}
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <motion.h1
            className="hero-heading text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 font-poppins"
            style={{
              textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
            }}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Muhammad Idrees
            </span>
          </motion.h1>

          <motion.p className="hero-subtext text-xl md:text-2xl text-gray-200 mb-8 font-lora max-w-4xl mx-auto leading-relaxed">
            Elite React &amp; Next.js Developer crafting{" "}
            <span className="text-blue-400 font-semibold">extraordinary digital experiences</span> with cutting-edge
            technologies and stunning animations
          </motion.p>

          <motion.div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              data-cursor-hover
              aria-label="View my portfolio projects"
            >
              <span className="flex items-center">
                <Play className="mr-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
                View My Work
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              data-cursor-hover
              aria-label="Contact Muhammad Idrees"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>

        {/* Fun Facts Floating Cards */}
        <div className="absolute -left-20 top-20 hidden lg:block" aria-hidden="true">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 text-white"
          >
            <div className="text-2xl mb-1" role="img" aria-label="Coffee">
              ☕
            </div>
            <div className="text-sm">Coffee Addict</div>
          </motion.div>
        </div>

        <div className="absolute -right-20 top-32 hidden lg:block" aria-hidden="true">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 text-white"
          >
            <div className="text-2xl mb-1" role="img" aria-label="Night owl">
              🦉
            </div>
            <div className="text-sm">Night Owl</div>
          </motion.div>
        </div>

        <div className="absolute -left-16 bottom-32 hidden lg:block" aria-hidden="true">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 text-white"
          >
            <div className="text-2xl mb-1" role="img" aria-label="Computer">
              💻
            </div>
            <div className="text-sm">Code Poet</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Arrow */}
      <motion.button
        onClick={scrollToContent}
        className="scroll-arrow absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 backdrop-blur-sm bg-white/10 rounded-full p-4 border border-white/20"
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
        data-cursor-hover
        aria-label="Scroll to about section"
      >
        <ChevronDown size={24} aria-hidden="true" />
      </motion.button>
    </section>
  )
}
