import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { GitHubStats } from "@/components/github-stats"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Muhammad Idrees - Elite React & Next.js Developer | Full-Stack Web Developer",
  description:
    "Muhammad Idrees is an award-winning full-stack developer from Karachi, Pakistan, specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio of enterprise applications, CRM systems, and innovative web solutions.",
  openGraph: {
    title: "Muhammad Idrees - Elite React & Next.js Developer Portfolio",
    description:
      "Explore the portfolio of Muhammad Idrees, a full-stack developer creating exceptional digital experiences with React, Next.js, and cutting-edge web technologies.",
    url: "https://muhammadidrees.dev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Idrees Portfolio - React & Next.js Developer",
      },
    ],
  },
}

// Structured data for the homepage
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Idrees Portfolio",
  url: "https://muhammadidrees.dev",
  description:
    "Portfolio website of Muhammad Idrees, a full-stack web developer specializing in React, Next.js, and modern web technologies.",
  author: {
    "@type": "Person",
    name: "Muhammad Idrees",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://muhammadidrees.dev/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Muhammad Idrees Developer Portfolio",
  description:
    "A comprehensive portfolio showcasing web development projects including enterprise applications, CRM systems, healthcare platforms, and innovative web solutions.",
  author: {
    "@type": "Person",
    name: "Muhammad Idrees",
    jobTitle: "Full-Stack Web Developer",
    url: "https://muhammadidrees.dev",
  },
  dateCreated: "2024-01-01",
  dateModified: "2024-01-01T00:00:00.000Z",
  inLanguage: "en-US",
  keywords: [
    "React Development",
    "Next.js Applications",
    "TypeScript",
    "Full Stack Development",
    "Enterprise Applications",
    "CRM Systems",
    "Web Development Portfolio",
  ],
}

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }} />

      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div id="main-content">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <GitHubStats />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}
