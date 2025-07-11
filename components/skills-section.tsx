"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code, Palette, Server, Cloud, GitBranch, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
      { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
      { name: "Python", level: 80, color: "from-yellow-400 to-yellow-600" },
      { name: "PostgreSQL", level: 82, color: "from-blue-600 to-blue-800" },
      { name: "MongoDB", level: 78, color: "from-green-500 to-green-700" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Zap,
    skills: [
      { name: "Git", level: 90, color: "from-orange-400 to-orange-600" },
      { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
      { name: "AWS", level: 70, color: "from-yellow-500 to-orange-500" },
      { name: "Figma", level: 85, color: "from-purple-400 to-purple-600" },
    ],
  },
]

const timeline = [
  {
    year: "2019",
    title: "Started Web Development Journey",
    description:
      "Began learning HTML, CSS, and JavaScript. Built my first static websites and discovered the joy of creating digital experiences.",
    icon: Code,
    color: "from-emerald-400 to-emerald-600",
    achievements: ["First HTML/CSS website", "JavaScript fundamentals", "Responsive design basics"],
  },
  {
    year: "2020",
    title: "First React Project",
    description:
      "Built my first React application and fell in love with component-based architecture. Started understanding modern frontend development.",
    icon: Palette,
    color: "from-blue-400 to-blue-600",
    achievements: ["React fundamentals", "Component architecture", "State management"],
  },
  {
    year: "2021",
    title: "Full-Stack Developer",
    description:
      "Expanded skills to include Node.js, databases, and server-side development. Started building complete web applications.",
    icon: Server,
    color: "from-purple-400 to-purple-600",
    achievements: ["Node.js & Express", "Database design", "API development"],
  },
  {
    year: "2022",
    title: "Next.js Specialist",
    description:
      "Mastered Next.js and modern React patterns, focusing on performance optimization and user experience.",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    achievements: ["Next.js mastery", "Performance optimization", "SEO implementation"],
  },
  {
    year: "2023",
    title: "Cloud & DevOps",
    description:
      "Learned AWS, Docker, and modern deployment strategies. Started implementing CI/CD pipelines and cloud architecture.",
    icon: Cloud,
    color: "from-cyan-400 to-blue-500",
    achievements: ["AWS certification", "Docker containers", "CI/CD pipelines"],
  },
  {
    year: "2024",
    title: "Senior Developer",
    description:
      "Leading projects and mentoring junior developers. Focusing on architecture decisions and team leadership.",
    icon: GitBranch,
    color: "from-pink-400 to-rose-500",
    achievements: ["Team leadership", "Architecture design", "Mentoring developers"],
  },
]

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't use scroll hooks until component is mounted on client
  const scrollData = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollData.scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Skills & Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-lora max-w-2xl mx-auto">
            A journey of continuous learning and growth in web development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Timeline - Desktop */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
              My Development Journey
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-lora max-w-2xl mx-auto">
              From curious beginner to experienced developer - every step shaped my expertise
            </p>
          </motion.div>

          {/* Desktop Timeline - Redesigned */}
          <div ref={containerRef} className="relative hidden lg:block">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div className="w-5/12">
                    <motion.div whileHover={{ scale: 1.02, y: -5 }} className="relative group">
                      {/* Glow Effect */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`}
                      />

                      {/* Main Card */}
                      <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                        {/* Year Badge */}
                        <div
                          className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-white font-bold text-lg mb-4 shadow-lg`}
                        >
                          {item.year}
                        </div>

                        {/* Title */}
                        <h4 className="text-2xl font-bold font-poppins mb-3 text-gray-900 dark:text-white">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 font-lora mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 text-sm uppercase tracking-wide">
                            Key Achievements
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {item.achievements.map((achievement, achIndex) => (
                              <span
                                key={achIndex}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Icon */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="relative z-10"
                    >
                      {/* Icon Background Glow */}
                      <div
                        className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-full blur opacity-50`}
                      />

                      {/* Icon Container */}
                      <div className={`relative p-4 bg-gradient-to-r ${item.color} rounded-full shadow-2xl`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Enhanced */}
          <div className="lg:hidden space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div className={`absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b ${item.color} opacity-60`} />
                )}

                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <motion.div whileHover={{ scale: 1.1, rotate: 360 }} className="flex-shrink-0 relative">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-full blur opacity-40`} />
                    <div className={`relative p-4 bg-gradient-to-r ${item.color} rounded-full shadow-xl`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div whileHover={{ scale: 1.02 }} className="flex-1 relative group">
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300`}
                    />
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                      <div
                        className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-white font-bold text-sm mb-3`}
                      >
                        {item.year}
                      </div>
                      <h4 className="text-lg font-bold font-poppins mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-lora text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
