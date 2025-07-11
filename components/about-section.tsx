"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Code, Zap, Users, Award, Coffee, Moon, Heart, User } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { icon: Code, label: "Years Experience", value: "5+", color: "from-blue-400 to-blue-600" },
  { icon: Zap, label: "Projects Completed", value: "100+", color: "from-green-400 to-green-600" },
  { icon: Users, label: "Happy Clients", value: "50+", color: "from-purple-400 to-purple-600" },
  { icon: Award, label: "Certifications", value: "10+", color: "from-orange-400 to-orange-600" },
]

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "GSAP", "Framer Motion"]

const funFacts = [
  { icon: Coffee, text: "Coffee Addict", description: "Powered by caffeine and creativity" },
  { icon: Moon, text: "Night Owl", description: "Best code happens after midnight" },
  { icon: Heart, text: "Code Poet", description: "Writing beautiful, clean code is an art" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for skills
      gsap.from(".skill-tag", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      })

      // Stats animation
      gsap.from(".stat-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
        },
      })

      // Fun facts floating animation
      gsap.to(".fun-fact", {
        y: "random(-10, 10)",
        duration: "random(2, 4)",
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-blue-900/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-lora max-w-2xl mx-auto">
            Passionate about creating extraordinary digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Avatar Side with Custom Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glassmorphism Container */}
            <div className="relative backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Custom Animated Avatar */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 mx-auto mb-8"
                data-cursor-hover
              >
                {/* Animated Avatar Container */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border border-blue-400/30 flex items-center justify-center overflow-hidden">
                  {/* Avatar Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 animate-pulse" />

                  {/* Main Avatar Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <User className="w-16 h-16 text-white" />
                  </motion.div>

                  {/* Orbiting Elements */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        rotate: [0, 360],
                        x: [0, Math.cos((i * 60 * Math.PI) / 180) * 120],
                        y: [0, Math.sin((i * 60 * Math.PI) / 180) * 120],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                    />
                  ))}

                  {/* Floating particles around avatar */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
                        style={{
                          left: `${20 + ((i * 60) % 80)}%`,
                          top: `${20 + ((i * 40) % 60)}%`,
                        }}
                        animate={{
                          scale: [0.5, 1, 0.5],
                          opacity: [0.3, 1, 0.3],
                          y: [0, -20, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Fun Facts Cards */}
              <div className="grid grid-cols-1 gap-4">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={fact.text}
                    className="fun-fact backdrop-blur-sm bg-white/20 dark:bg-gray-700/30 p-4 rounded-2xl border border-white/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    data-cursor-hover
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl">
                        <fact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{fact.text}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{fact.description}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold font-poppins mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Building the Future, One Line of Code at a Time
              </h3>

              <div className="prose prose-lg dark:prose-invert font-lora space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I&apos;m a passionate full-stack developer with over 5 years of experience crafting exceptional digital
                  experiences. My expertise lies in React, Next.js, and TypeScript, where I combine technical excellence
                  with creative problem-solving.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  From concept to deployment, I love turning ideas into reality. Whether it&apos;s building scalable web
                  applications, optimizing performance, or creating stunning animations with GSAP and Framer Motion, I&apos;m
                  committed to delivering solutions that make a difference.
                </p>
              </div>

              {/* Skills Tags */}
              <div ref={skillsRef} className="flex flex-wrap gap-3 mt-8">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag px-4 py-2 backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    data-cursor-hover
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                data-cursor-hover
              >
                Let's Work Together
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="stats-container grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 p-6 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              data-cursor-hover
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-2xl mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
