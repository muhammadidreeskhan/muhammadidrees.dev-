"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
import DOMPurify from "isomorphic-dompurify"

// Enhanced validation schema with security measures
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s&apos;-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters")
    .refine((email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }, "Invalid email format"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters")
    .refine((subject) => {
      const spamPatterns = /\b(viagra|casino|lottery|winner|congratulations|urgent|act now)\b/i
      return !spamPatterns.test(subject)
    }, "Subject contains prohibited content"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .refine((message) => {
      const dangerousPatterns = /<script|javascript:|data:|vbscript:|on\w+=/i
      const spamPatterns = /\b(viagra|casino|lottery|winner|congratulations|urgent|act now)\b/i
      return !dangerousPatterns.test(message) && !spamPatterns.test(message)
    }, "Message contains prohibited content"),
})

type ContactForm = z.infer<typeof contactSchema>

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/muhammadidreeskhan",
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
    description: "View my code repositories",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/muhammad-idrees-khan-796558117/",
    color: "hover:text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30",
    description: "Connect professionally",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/happyikhan",
    color: "hover:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30",
    description: "Follow my updates",
  },
]

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "contactmuhammadidrees@gmail.com",
    href: "mailto:contactmuhammadidrees@gmail.com",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    description: "Drop me a line anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92-3362212489",
    href: "tel:+923362212489",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    description: "Let's have a quick chat",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Karachi, Pakistan",
    href: "#",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    description: "Available for remote work",
  },
  {
    icon: Calendar,
    title: "Availability",
    value: "Open for Projects",
    href: "#",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    description: "Ready to start immediately",
  },
]

// Rate limiting state
let lastSubmissionTime = 0
const RATE_LIMIT_MS = 60000 // 1 minute

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "rate-limited">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const watchedFields = watch()

  const onSubmit = async (data: ContactForm) => {
    // Rate limiting check
    const now = Date.now()
    if (now - lastSubmissionTime < RATE_LIMIT_MS) {
      setSubmitStatus("rate-limited")
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    setIsSubmitting(true)

    try {
      // Sanitize input data
      const sanitizedData = {
        name: DOMPurify.sanitize(data.name.trim()),
        email: DOMPurify.sanitize(data.email.trim().toLowerCase()),
        subject: DOMPurify.sanitize(data.subject.trim()),
        message: DOMPurify.sanitize(data.message.trim()),
      }

      // Additional validation
      if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.subject || !sanitizedData.message) {
        throw new Error("Invalid input data")
      }

      // Simulate secure API call with proper error handling
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(sanitizedData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        reset()
        lastSubmissionTime = now
      } else {
        throw new Error(result.message || "Submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden" aria-labelledby="contact-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-6"
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">💬 Let's Connect</span>
          </motion.div>

          <h2 id="contact-heading" className="text-5xl md:text-7xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Let's Work
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-lora max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { icon: Clock, label: "24h Response", value: "Guaranteed" },
              { icon: CheckCircle, label: "Projects Completed", value: "50+" },
              { icon: Mail, label: "Client Satisfaction", value: "100%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  <div className="font-bold text-gray-900 dark:text-white">{stat.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">MI</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Muhammad Idrees</h3>
                    <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 font-lora text-lg leading-relaxed mb-6">
                  I'm passionate about creating exceptional digital experiences that drive results. Let's collaborate to
                  bring your ideas to life with cutting-edge technology and innovative solutions.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="group flex items-center space-x-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className={`p-4 ${method.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className={`w-6 h-6 ${method.color}`} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-lg">{method.title}</div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">{method.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{method.description}</div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Send className="w-5 h-5 text-gray-400" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20"
            >
              <h4 className="text-lg font-semibold font-poppins mb-4 text-gray-900 dark:text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative p-4 ${social.bgColor} rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl`}
                    aria-label={`Visit Muhammad Idrees on ${social.name}`}
                    title={social.description}
                  >
                    <social.icon
                      size={24}
                      className={`${social.color} transition-colors duration-300`}
                      aria-hidden="true"
                    />
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative p-8 md:p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl" />

              <div className="relative">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-2">
                    Start Your Project
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        {...register("name")}
                        type="text"
                        autoComplete="name"
                        maxLength={50}
                        className="peer w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:border-blue-500 focus:outline-none transition-all duration-300 dark:text-white placeholder-transparent group-hover:border-gray-300 dark:group-hover:border-gray-500"
                        placeholder="Full Name"
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      <label className="absolute left-6 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
                        Full Name *
                      </label>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          id="name-error"
                          className="mt-2 text-sm text-red-500 flex items-center"
                          role="alert"
                        >
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.name.message}
                        </motion.p>
                      )}
                    </div>

                    <div className="relative group">
                      <input
                        {...register("email")}
                        type="email"
                        autoComplete="email"
                        maxLength={100}
                        className="peer w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:border-blue-500 focus:outline-none transition-all duration-300 dark:text-white placeholder-transparent group-hover:border-gray-300 dark:group-hover:border-gray-500"
                        placeholder="Email Address"
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      <label className="absolute left-6 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
                        Email Address *
                      </label>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          id="email-error"
                          className="mt-2 text-sm text-red-500 flex items-center"
                          role="alert"
                        >
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email.message}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="relative group">
                    <input
                      {...register("subject")}
                      type="text"
                      maxLength={100}
                      className="peer w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:border-blue-500 focus:outline-none transition-all duration-300 dark:text-white placeholder-transparent group-hover:border-gray-300 dark:group-hover:border-gray-500"
                      placeholder="Subject"
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    <label className="absolute left-6 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
                      Subject *
                    </label>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="subject-error"
                        className="mt-2 text-sm text-red-500 flex items-center"
                        role="alert"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="relative group">
                    <textarea
                      {...register("message")}
                      rows={6}
                      maxLength={1000}
                      className="peer w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none dark:text-white placeholder-transparent group-hover:border-gray-300 dark:group-hover:border-gray-500"
                      placeholder="Message"
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    <label className="absolute left-6 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
                      Message *
                    </label>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                      {watchedFields.message?.length || 0}/1000
                    </div>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="message-error"
                        className="mt-2 text-sm text-red-500 flex items-center"
                        role="alert"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`relative w-full flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white shadow-2xl transition-all duration-300 overflow-hidden ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : submitStatus === "success"
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-green-500/25"
                          : submitStatus === "error"
                            ? "bg-gradient-to-r from-red-500 to-rose-600 hover:shadow-red-500/25"
                            : submitStatus === "rate-limited"
                              ? "bg-gradient-to-r from-orange-500 to-amber-600 hover:shadow-orange-500/25"
                              : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-purple-500/25"
                    }`}
                    aria-describedby="submit-status"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : submitStatus === "success" ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Message Sent Successfully!
                        </>
                      ) : submitStatus === "error" ? (
                        <>
                          <AlertCircle className="w-5 h-5 mr-2" />
                          Try Again
                        </>
                      ) : submitStatus === "rate-limited" ? (
                        <>
                          <Clock className="w-5 h-5 mr-2" />
                          Please Wait
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} className="ml-2" aria-hidden="true" />
                        </>
                      )}
                    </div>
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl"
                    >
                      <p className="text-green-700 dark:text-green-300 text-center font-medium flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Thank you! I'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl"
                    >
                      <p className="text-red-700 dark:text-red-300 text-center font-medium flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Something went wrong. Please try again or contact me directly.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "rate-limited" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl"
                    >
                      <p className="text-orange-700 dark:text-orange-300 text-center font-medium flex items-center justify-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Please wait a moment before sending another message.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available for new projects • Responding within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
