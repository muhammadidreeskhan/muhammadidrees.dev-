import type { Metadata } from "next"
import { BlogClientPage } from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog | Muhammad Idrees - Web Development Insights",
  description:
    "Read the latest insights, tutorials, and thoughts on web development, React, Next.js, TypeScript, and career growth from Muhammad Idrees.",
  keywords: [
    "web development blog",
    "React tutorials",
    "Next.js guides",
    "TypeScript tips",
    "developer career",
    "programming insights",
  ],
  openGraph: {
    title: "Blog | Muhammad Idrees - Web Development Insights",
    description:
      "Read the latest insights, tutorials, and thoughts on web development, React, Next.js, TypeScript, and career growth.",
    type: "website",
    url: "https://muhammadidrees.dev/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Muhammad Idrees - Web Development Insights",
    description:
      "Read the latest insights, tutorials, and thoughts on web development, React, Next.js, TypeScript, and career growth.",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
