"use client"

import { motion } from "framer-motion"
import { ArrowUp, Heart, Code, Coffee } from "lucide-react"
import { Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/muhammadidreeskhan",
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/muhammad-idrees-khan-796558117/",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/happyikhan",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
  },
]

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-3xl font-bold font-poppins mb-3">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Muhammad Idrees
                  </span>
                </h3>
                <p className="text-xl text-gray-300 font-lora mb-4">Full Stack Developer & Digital Innovator</p>
                <p className="text-gray-400 font-lora leading-relaxed max-w-md">
                  Crafting exceptional digital experiences with modern technologies. Passionate about creating solutions
                  that make a difference.
                </p>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {["React", "Next.js", "TypeScript", "Node.js", "Python"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-full text-sm text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-2 text-sm text-gray-400"
              >
                <p>📧 contactmuhammadidrees@gmail.com</p>
                <p>📱 +92-3362212489</p>
                <p>📍 Karachi, Pakistan</p>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-poppins mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-poppins mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {["Web Development", "Mobile Apps", "UI/UX Design", "API Development", "Consulting"].map(
                  (service, index) => (
                    <motion.li
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full" />
                      {service}
                    </motion.li>
                  ),
                )}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group relative p-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl ${social.color} ${social.bgColor} transition-all duration-300 hover:shadow-2xl hover:border-gray-600`}
                  aria-label={`Visit Muhammad Idrees on ${social.name}`}
                >
                  <social.icon
                    size={24}
                    className="transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-gray-400 text-sm"
              >
                <span>© 2024 Muhammad Idrees.</span>
                <span className="flex items-center space-x-1">
                  <span>Made with</span>
                  <Heart size={14} className="text-red-500 fill-current animate-pulse" />
                  <span>and</span>
                  <Coffee size={14} className="text-amber-500" />
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Code size={14} />
                  <span>Built with Next.js & TypeScript</span>
                </div>

                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group flex items-center space-x-2 px-4 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300"
                >
                  <span className="text-sm">Back to Top</span>
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                  >
                    <ArrowUp size={14} className="text-white" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
