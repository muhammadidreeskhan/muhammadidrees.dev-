"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"

interface Toast {
  id: string
  type: "success" | "error" | "info"
  title: string
  description?: string
}

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
}

const toastColors = {
  success: "from-green-500 to-green-600",
  error: "from-red-500 to-red-600",
  info: "from-blue-500 to-blue-600",
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  useEffect(() => {
    const handleToast = (event: CustomEvent<Toast>) => {
      const newToast = { ...event.detail, id: Date.now().toString() }
      setToasts((prev) => [...prev, newToast])

      // Auto remove after 5 seconds
      setTimeout(() => {
        removeToast(newToast.id)
      }, 5000)
    }

    window.addEventListener("toast" as any, handleToast)
    return () => window.removeEventListener("toast" as any, handleToast)
  }, [])

  return (
    <div className="fixed top-20 right-6 z-50 space-y-4">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = toastIcons[toast.type]
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.8 }}
              className="backdrop-blur-lg bg-white/90 dark:bg-gray-800/90 border border-white/20 rounded-2xl p-4 shadow-2xl max-w-sm"
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 bg-gradient-to-r ${toastColors[toast.type]} rounded-xl`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{toast.title}</h4>
                  {toast.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{toast.description}</p>
                  )}
                </div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

// Helper function to show toasts
export const showToast = (toast: Omit<Toast, "id">) => {
  window.dispatchEvent(new CustomEvent("toast", { detail: toast }))
}
