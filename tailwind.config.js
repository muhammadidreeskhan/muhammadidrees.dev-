/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          blue: "#00d4ff",
          green: "#00ff88",
          purple: "#8b5cf6",
          pink: "#ff006e",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "bounce-slow": "bounce 2s infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        gradient: "gradientShift 3s ease infinite",
        "particle-float": "particleFloat 6s ease-in-out infinite",
        glitch: "glitch-1 0.5s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)",
          },
        },
        gradientShift: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        particleFloat: {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translateY(-20px) translateX(10px)",
            opacity: "1",
          },
        },
        "glitch-1": {
          "0%, 14%, 15%, 49%, 50%, 99%, 100%": {
            transform: "translate(0)",
          },
          "15%, 49%": {
            transform: "translate(-2px, 2px)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.5)",
        "glow-green": "0 0 20px rgba(16, 185, 129, 0.5)",
        "glow-pink": "0 0 20px rgba(236, 72, 153, 0.5)",
        "3d": "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            lineHeight: "1.75",
          },
        },
        dark: {
          css: {
            color: "#d1d5db",
            '[class~="lead"]': {
              color: "#9ca3af",
            },
            a: {
              color: "#60a5fa",
            },
            strong: {
              color: "#f9fafb",
            },
            "h1, h2, h3, h4": {
              color: "#f9fafb",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
