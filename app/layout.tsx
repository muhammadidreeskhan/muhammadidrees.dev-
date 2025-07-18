import type React from "react"
import type { Metadata } from "next"
import { Poppins, Lora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { CustomCursor } from "@/components/custom-cursor"
import { Preloader } from "@/components/preloader"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadidrees.dev"),
  title: {
    default: "Muhammad Idrees - Elite React & Next.js Developer | Full-Stack Web Developer",
    template: "%s | Muhammad Idrees - React Developer",
  },
  description:
    "Muhammad Idrees is an award-winning full-stack developer specializing in React, Next.js, TypeScript, and cutting-edge web technologies. Creating exceptional digital experiences with modern animations, performance optimization, and enterprise-grade solutions.",
  keywords: [
    "Muhammad Idrees",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Pakistan",
    "Karachi Developer",
    "GSAP Animations",
    "Framer Motion",
    "Modern Web Development",
    "Enterprise Applications",
    "CRM Development",
    "ERP Systems",
    "WhatsApp Business API",
    "Healthcare Applications",
    "Real Estate CRM",
    "Business Dashboard",
    "React Components",
    "Next.js Applications",
    "Tailwind CSS",
    "Node.js Developer",
    "PostgreSQL",
    "MongoDB",
    "AWS Cloud",
    "Docker",
    "Git",
    "Figma to Code",
    "Responsive Design",
    "SEO Optimization",
    "Performance Optimization",
    "Web Accessibility",
    "Progressive Web Apps",
    "API Development",
    "Database Design",
    "UI/UX Implementation",
  ],
  authors: [{ name: "Muhammad Idrees", url: "https://muhammadidrees.dev" }],
  creator: "Muhammad Idrees",
  publisher: "Muhammad Idrees",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadidrees.dev",
    title: "Muhammad Idrees - Elite React & Next.js Developer | Full-Stack Web Developer",
    description:
      "Award-winning full-stack developer creating exceptional digital experiences with React, Next.js, and modern web technologies. Specializing in enterprise applications, CRM systems, and performance optimization.",
    siteName: "Muhammad Idrees Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Idrees - React & Next.js Developer Portfolio",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Muhammad Idrees - Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Idrees - Elite React & Next.js Developer",
    description:
      "Award-winning full-stack developer creating exceptional digital experiences with modern web technologies. Specializing in React, Next.js, and enterprise applications.",
    creator: "@muhammadidrees",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://muhammadidrees.dev",
    languages: {
      "en-US": "https://muhammadidrees.dev",
    },
  },
  category: "Technology",
  classification: "Web Development Portfolio",
    generator: 'v0.dev'
}

// Sanitized JSON-LD data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Idrees",
  url: "https://muhammadidrees.dev",
  image: "https://muhammadidrees.dev/profile-image.jpg",
  sameAs: [
    "https://github.com/muhammadidrees",
    "https://linkedin.com/in/muhammadidrees",
    "https://twitter.com/muhammadidrees",
  ],
  jobTitle: "Full-Stack Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "Pakistan",
  },
  email: "contactmuhammadidrees@gmail.com",
  telephone: "+92-3362212489",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "Web Development",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Database Design",
    "API Development",
    "Performance Optimization",
    "SEO",
    "Web Accessibility",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Web Developer",
    occupationLocation: {
      "@type": "City",
      name: "Karachi, Pakistan",
    },
    skills: [
      "React Development",
      "Next.js Applications",
      "TypeScript Programming",
      "Full-Stack Development",
      "Database Design",
      "API Development",
      "Performance Optimization",
      "SEO Implementation",
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://muhammadidrees.dev" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e1e1e" />
        <meta name="color-scheme" content="dark light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="google-site-verification" content="IJd5Z2gHMeswh8Ze1i-ZiU0HCxGvUMHXBhOM9UmBhu0" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured Data - Sanitized */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c").replace(/>/g, "\\u003e"),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${lora.variable} font-sans antialiased overflow-x-hidden`}>
        <noscript>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              background: "#f59e0b",
              color: "white",
              padding: "10px",
              textAlign: "center",
              zIndex: 9999,
            }}
          >
            This website requires JavaScript to function properly. Please enable JavaScript in your browser.
          </div>
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Preloader />
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          <main className="relative">{children}</main>
          <Toaster />
        </ThemeProvider>

        {/* Analytics Scripts - Secure Loading */}
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
                anonymize_ip: true,
                cookie_flags: 'SameSite=Strict;Secure'
              });
            `,
          }}
        />
        {/* Web Vitals Reporting (for performance monitoring) */}
        <Script
          id="web-vitals"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              import('web-vitals').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
                function sendToConsole(metric) {
                  console.log('[Web Vitals]', metric.name, metric.value, metric);
                }
                getCLS(sendToConsole);
                getFID(sendToConsole);
                getLCP(sendToConsole);
                getFCP(sendToConsole);
                getTTFB(sendToConsole);
              });
            `,
          }}
        />
        {/* TODO: Add custom 404 and 500 pages for better UX. See /404.tsx and /500.tsx */}
      </body>
    </html>
  )
}
