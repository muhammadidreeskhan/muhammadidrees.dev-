"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, X } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Real Estate CRM",
    description:
      "A comprehensive CRM dashboard for real estate professionals with performance analytics, pipeline management, client tracking, and appointment scheduling.",
    image:
      "https://sjc.microlink.io/aVDlJN1xsucdZknzlz2BYK-aoOejpmcsHdmVCAyt5_z6-042CTAgxF9aU90tai3s_-LqZFjgrg9Z9-_23-wGmw.jpeg",
    tags: ["Next.js", "TypeScript", "Dashboard", "CRM", "Analytics"],
    featured: true,
    live: "https://real-estate-funnel-crm.vercel.app/",
    details:
      "Full-featured real estate CRM with advanced analytics, client management, property tracking, and automated pipeline workflows. Includes performance metrics, appointment scheduling, and comprehensive reporting tools.",
    features: [
      "Performance Analytics",
      "Client Management",
      "Pipeline Tracking",
      "Appointment Scheduling",
      "Revenue Analytics",
    ],
  },
  {
    id: 2,
    title: "Business ERP System",
    description:
      "Enterprise-grade ERP system with comprehensive business management modules including inventory, finance, customers, and advanced analytics dashboard.",
    image:
      "https://sjc.microlink.io/nrxPkL7H-4vWi07mRfcJnQfc9oEeXIFib7E9yvgXuUAh9S-LdgrmMHRUzzXrZ9CqzWZbresZdPdN09b1Tjz3rQ.jpeg",
    tags: ["ERP", "Enterprise", "Business Analytics", "Dashboard", "Finance"],
    featured: true,
    live: "https://business-erpsystem.vercel.app/",
    details:
      "Complete enterprise resource planning system with modules for point of sale, inventory management, customer relations, finance tracking, and employee management. Features advanced analytics and reporting capabilities.",
    features: [
      "Point of Sale System",
      "Inventory Management",
      "Financial Analytics",
      "Customer Management",
      "Employee Portal",
      "Business Intelligence",
    ],
  },
  {
    id: 3,
    title: "WhatsApp Business Dashboard",
    description:
      "Comprehensive WhatsApp Business integration platform for streamlining customer communications, notifications, and automated messaging workflows.",
    image:
      "https://sjc.microlink.io/X1jRQfrCszrZxR6wUGiFv78QLba-1FhEroA1666-qc1q3-bDKOYsmIQbLXirx4Pyk1T3LKjmFOKSwA-npnqvOA.jpeg",
    tags: ["WhatsApp API", "Communication", "Automation", "ChatGPT", "Notifications"],
    featured: true,
    live: "https://whatsappbusiness.vercel.app/",
    details:
      "Advanced WhatsApp Business platform with AI integration, automated messaging, shipping notifications, and comprehensive customer communication management tools.",
    features: [
      "WhatsApp API Integration",
      "ChatGPT AI Support",
      "Automated Notifications",
      "Message Templates",
      "QR Code Generation",
      "Order Management",
    ],
  },
  {
    id: 4,
    title: "Tutor Map Connector",
    description:
      "Interactive map-based platform connecting tutors with students, featuring location-based matching and comprehensive tutor profiles.",
    image:
      "https://sjc.microlink.io/3J8TZHT-bGe-d7DhBvx_YajS50q2dPJHb4EhvL6ABsP_KbbcnIYUFuSKvZ4b9UCSP-ksSbthUl9T-5iykg-n0Q.jpeg",
    tags: ["Maps", "Education", "Location Services", "Tutoring", "Matching"],
    featured: true,
    live: "https://tutor-map-connector.vercel.app/",
    details:
      "Innovative tutoring platform using interactive maps to connect students with nearby tutors. Features real-time location tracking, tutor profiles, and smart matching algorithms.",
    features: [
      "Interactive Map Interface",
      "Location-based Matching",
      "Tutor Profiles",
      "Student Management",
      "Real-time Tracking",
    ],
  },
  {
    id: 5,
    title: "HealthCard Haven",
    description:
      "A healthcare card management platform for managing physical and virtual health cards with seamless user record tracking.",
    image:
      "https://sjc.microlink.io/B9q3G930Hl0mKx23Ca6M_gdvB5H_2ooP7qv5uRkrZwOC-yznvnLHWawP5oGq3B8szcuY2WwKfDZrlZHe6MG_Zg.jpeg",
    tags: ["React", "Healthcare", "Card Management", "User Records"],
    featured: false,
    live: "https://healthcard-haven.vercel.app/",
    details:
      "Modern healthcare management system that digitizes health card management, provides secure user record storage, and ensures seamless healthcare access across platforms.",
    features: ["Digital Health Cards", "User Record Management", "Secure Access", "Healthcare Integration"],
  },
  {
    id: 6,
    title: "InvoiceStock",
    description:
      "An integrated invoice and inventory management system with real-time stock tracking, revenue analytics, and customer management.",
    image:
      "https://sjc.microlink.io/-RVUXb40ygn4M41KBsyh_Tbk40V-2bJIgFOh-wr0yUR_227xTGtsYXpnymsBX--kgj04hAZDxuurSr7TQVcPzQ.jpeg",
    tags: ["Next.js", "Invoice Management", "Inventory", "Analytics"],
    featured: false,
    live: "https://invoice-stock-sync.vercel.app/",
    details:
      "Comprehensive business management platform combining invoice generation, inventory tracking, and financial analytics in one seamless interface.",
    features: ["Invoice Generation", "Stock Management", "Revenue Tracking", "Customer Analytics", "Financial Reports"],
  },
  {
    id: 7,
    title: "Service Swap",
    description:
      "A modern service exchange platform connecting service providers with customers for seamless service trading and management.",
    image:
      "https://sjc.microlink.io/2k3uRV5BMadvKKX_OGuSdotsvoqokcWgOhsQuE6361tAhjHrj21l0Sr86yeIycKAd6YbQpnertTf5wlF-J3iGw.jpeg",
    tags: ["React", "Service Exchange", "Marketplace", "Trading"],
    featured: false,
    live: "https://service-swap-rose.vercel.app/",
    details:
      "Innovative platform for service exchange, enabling users to trade services, manage bookings, and build professional networks.",
    features: ["Service Trading", "Provider Matching", "Booking System", "Rating & Reviews"],
  },
  {
    id: 8,
    title: "Voice Prompt Reformulator",
    description:
      "An AI-powered tool for reformulating and optimizing voice prompts with advanced natural language processing capabilities.",
    image:
      "https://sjc.microlink.io/nycWi7tJxFREKLbdM8dOpMxUCtnL2uq9duTKYZ6J4VyaNVTUhTjJL4oJYf0nWN0bfbv7F47OW0wnxgorceLLGg.jpeg",
    tags: ["AI", "Voice Processing", "NLP", "Prompt Engineering"],
    featured: false,
    live: "https://voice-prompt-reformulator.vercel.app/",
    details:
      "Advanced AI tool that analyzes and reformulates voice prompts for better clarity, effectiveness, and natural language understanding.",
    features: ["AI Processing", "Voice Analysis", "Prompt Optimization", "NLP Integration"],
  },
  {
    id: 9,
    title: "Mirbat Explorer",
    description:
      "An interactive exploration platform showcasing the beauty and culture of Mirbat with immersive digital experiences.",
    image:
      "https://sjc.microlink.io/IGOOocphS5jFlCRooMxtSzLqoprjnxxLJug7A_7ki56LkNTJEtG9GJrVgu4GgOMbhZLEVCejEN1c_C_I_dCvdw.jpeg",
    tags: ["Tourism", "Interactive", "Cultural", "Exploration"],
    featured: false,
    live: "https://mirbat-explorer.vercel.app/",
    details:
      "Digital tourism platform offering virtual exploration of Mirbat's cultural heritage, landmarks, and natural beauty through interactive experiences.",
    features: ["Virtual Tours", "Cultural Content", "Interactive Maps", "Heritage Showcase"],
  },
  {
    id: 10,
    title: "Eco Linker",
    description:
      "A sustainability-focused platform connecting eco-conscious individuals and organizations for environmental initiatives.",
    image:
      "https://sjc.microlink.io/-1ns43CbeUSiyFWKoXt9sis5aZ_VXIPjtikqzq3dsI12srbeVPmNVUGTYgKeF4dHLIUiDntbqSccjpo_TJTEjg.jpeg",
    tags: ["Sustainability", "Environmental", "Community", "Green Tech"],
    featured: false,
    live: "https://eco-linker.vercel.app/",
    details:
      "Environmental platform fostering connections between eco-conscious communities, tracking sustainability metrics, and promoting green initiatives.",
    features: ["Community Building", "Sustainability Tracking", "Green Initiatives", "Environmental Impact"],
  },
  {
    id: 11,
    title: "EDSP Solution",
    description:
      "A comprehensive digital solution platform providing enterprise-level tools and services for modern businesses.",
    image:
      "https://sjc.microlink.io/kbBiA4uaKj2JS2krBEt6tRscHxwrtAM7xrq7iJgs4rPI2DjWAKZnX5lcfw05tGQjkooe41lwM2wJ9aWmYbxAYA.jpeg",
    tags: ["Enterprise", "Digital Solutions", "Business Tools", "SaaS"],
    featured: false,
    live: "https://edsp-solution.vercel.app/",
    details:
      "Enterprise digital solution platform offering comprehensive business tools, workflow automation, and scalable infrastructure for modern organizations.",
    features: ["Enterprise Tools", "Workflow Automation", "Scalable Infrastructure", "Business Analytics"],
  },
  {
    id: 12,
    title: "Advanced Calculator",
    description:
      "A sophisticated calculator application built with modern web technologies, featuring advanced mathematical operations.",
    image:
      "https://sjc.microlink.io/ahhPr2NwCiD4SQe0xdNfIfEhDyur7l5__Eyx_DeiIbtkov2xRFvzqtKYZfAKsmhcP7eBVADglGHooHMBOWlWXg.jpeg",
    tags: ["Calculator", "Mathematics", "Web App", "Utility"],
    featured: false,
    live: "https://basic-calculator-rust-theta.vercel.app/",
    details:
      "Modern calculator application with advanced mathematical functions, history tracking, and responsive design for all devices.",
    features: ["Advanced Operations", "Calculation History", "Responsive Design", "Keyboard Support"],
  },
]

// Structured data for projects
const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Muhammad Idrees Web Development Projects",
  description: "Portfolio of web development projects by Muhammad Idrees",
  itemListElement: projects.slice(0, 4).map((project, index) => ({
    "@type": "CreativeWork",
    position: index + 1,
    name: project.title,
    description: project.description,
    url: project.live,
    author: {
      "@type": "Person",
      name: "Muhammad Idrees",
    },
    keywords: project.tags.join(", "),
  })),
}

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Featured", "Enterprise", "Healthcare", "AI", "Maps"]

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true
    if (filter === "Featured") return project.featured
    return project.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
  })

  return (
    <section id="portfolio" className="py-20 px-6 relative overflow-hidden" aria-labelledby="portfolio-heading">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }} />

      {/* Background Elements */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-purple-900/20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="portfolio-heading"
            className="text-4xl md:text-6xl font-bold font-poppins mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-lora max-w-2xl mx-auto">
            A comprehensive showcase of real-world applications and innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "backdrop-blur-sm bg-white/10 dark:bg-gray-800/20 border border-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/20"
              }`}
              data-cursor-hover
              role="tab"
              aria-selected={filter === category}
              aria-controls="projects-grid"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div id="projects-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="tabpanel">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                data-cursor-hover
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Screenshot of ${project.title} project`}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 6 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-lora mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                      aria-label={`View details for ${project.title}`}
                    >
                      View Details
                    </motion.button>

                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <ExternalLink size={20} aria-hidden="true" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <div className="relative">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={`Detailed view of ${selectedProject.title}`}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover rounded-t-3xl"
                    priority
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-300"
                    aria-label="Close project details"
                  >
                    <X size={20} aria-hidden="true" />
                  </button>
                  {selectedProject.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Project
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 id="modal-title" className="text-3xl font-bold font-poppins mb-4 text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 font-lora mb-6 text-lg leading-relaxed">
                    {selectedProject.details}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold font-poppins mb-3 text-gray-900 dark:text-white">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div
                            className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                            aria-hidden="true"
                          />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold font-poppins mb-3 text-gray-900 dark:text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-700 dark:text-blue-300 rounded-xl font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <ExternalLink size={20} className="mr-2" aria-hidden="true" />
                      View Live Project
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
