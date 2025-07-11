"use client"

import { useEffect, useRef, useState } from "react"

interface LottiePlayerProps {
  src: string
  className?: string
  autoplay?: boolean
  loop?: boolean
}

export function LottiePlayer({ src, className = "", autoplay = true, loop = true }: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let animationInstance: any = null

    const loadLottie = async () => {
      try {
        setLoading(true)
        setError(false)

        // Check if the animation file exists
        const response = await fetch(src)
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status}`)
        }

        const lottie = (await import("lottie-web")).default

        if (containerRef.current) {
          // Clear any existing content
          containerRef.current.innerHTML = ""

          animationInstance = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop,
            autoplay,
            path: src,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          })

          animationInstance.addEventListener("DOMLoaded", () => {
            setLoading(false)
          })

          animationInstance.addEventListener("error", () => {
            setError(true)
            setLoading(false)
          })
        }
      } catch (error) {
        console.warn("Lottie animation failed to load:", error)
        setError(true)
        setLoading(false)
      }
    }

    loadLottie()

    return () => {
      if (animationInstance) {
        try {
          animationInstance.destroy()
        } catch (e) {
          console.warn("Error destroying Lottie animation:", e)
        }
      }
    }
  }, [src, autoplay, loop])

  // Fallback content when Lottie fails to load
  if (error || loading) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border border-blue-400/30`}
      >
        {loading ? (
          <div className="animate-spin w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full" />
        ) : (
          <div className="text-center p-8">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white/40 rounded-full animate-pulse" />
              </div>
            </div>
            <div className="text-blue-400 font-semibold">Developer Avatar</div>
            <div className="text-sm text-gray-400 mt-1">Creative. Innovative. Passionate.</div>
          </div>
        )}
      </div>
    )
  }

  return <div ref={containerRef} className={className} />
}
