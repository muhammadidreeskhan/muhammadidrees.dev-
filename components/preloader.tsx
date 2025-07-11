"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 10 // Fixed increment instead of random
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // Don't render anything until component is mounted on client
  if (!isMounted) {
    return null
  }


  // ... existing code ...
  if (!isMounted) {
    return null;
  }
// ... existing code ...

  const name = "MUHAMMAD IDREES"
  const letters = name.split("")

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { left: 10, top: 20, delay: 0 }, { left: 80, top: 15, delay: 0.2 },
              { left: 25, top: 60, delay: 0.4 }, { left: 70, top: 45, delay: 0.6 },
              { left: 45, top: 80, delay: 0.8 }, { left: 90, top: 70, delay: 1.0 },
              { left: 15, top: 40, delay: 1.2 }, { left: 60, top: 25, delay: 1.4 },
              { left: 35, top: 90, delay: 1.6 }, { left: 85, top: 55, delay: 1.8 },
              { left: 50, top: 30, delay: 2.0 }, { left: 20, top: 75, delay: 2.2 },
              { left: 75, top: 85, delay: 2.4 }, { left: 40, top: 10, delay: 2.6 },
              { left: 95, top: 35, delay: 2.8 }, { left: 30, top: 65, delay: 3.0 },
              { left: 65, top: 95, delay: 3.2 }, { left: 55, top: 50, delay: 3.4 },
              { left: 25, top: 85, delay: 3.6 }, { left: 80, top: 40, delay: 3.8 }
            ].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            {/* Animated Name */}
            <div className="mb-8 overflow-hidden">
              <motion.div className="flex justify-center space-x-1 md:space-x-2">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="text-2xl md:text-4xl lg:text-6xl font-bold text-white font-poppins"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Progress Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-300 text-sm font-lora"
            >
              Loading Experience... {Math.round(progress)}%
            </motion.p>

            {/* Glitch Effect */}
            <motion.div
              className="absolute inset-0 bg-blue-500/10"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
