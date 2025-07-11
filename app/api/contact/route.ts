import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import rateLimit from "@/lib/rate-limit"

// Rate limiter - 5 requests per minute per IP
const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 unique IPs per interval
})

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Invalid name format"),
  email: z.string().email("Invalid email format").max(100, "Email too long"),
  subject: z.string().min(5, "Subject too short").max(100, "Subject too long"),
  message: z.string().min(10, "Message too short").max(1000, "Message too long"),
})

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip ?? "127.0.0.1"
    const { success } = await limiter.check(5, ip) // 5 requests per minute

    if (!success) {
      return NextResponse.json({ success: false, message: "Rate limit exceeded" }, { status: 429 })
    }

    // Validate request headers
    const contentType = request.headers.get("content-type")
    if (!contentType?.includes("application/json")) {
      return NextResponse.json({ success: false, message: "Invalid content type" }, { status: 400 })
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Additional security checks
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /data:/i,
      /vbscript:/i,
      /on\w+=/i,
      /\b(viagra|casino|lottery|winner|congratulations|urgent|act now)\b/i,
    ]

    const allText = `${validatedData.name} ${validatedData.email} ${validatedData.subject} ${validatedData.message}`

    if (suspiciousPatterns.some((pattern) => pattern.test(allText))) {
      return NextResponse.json({ success: false, message: "Invalid content detected" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Nodemailer, etc.
    // 2. Store in database
    // 3. Send to webhook/notification service

    // For now, we'll simulate success
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
      ip: ip,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 })
}
