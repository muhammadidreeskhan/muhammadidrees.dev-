"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Star, GitFork, Eye, TrendingUp, Calendar, Code2, Activity } from "lucide-react"

interface GitHubStats {
  totalRepos: number
  totalStars: number
  totalForks: number
  totalCommits: number
  languages: { [key: string]: number }
  contributionData: number[]
  streakDays: number
  totalPRs: number
}

// Enhanced Chart Components
function EnhancedLineChart({ data, labels }: { data: number[]; labels: string[] }) {
  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const range = maxValue - minValue

  const points = data.map((value, index) => ({
    x: (index / (data.length - 1)) * 100,
    y: 85 - ((value - minValue) / range) * 70,
  }))

  const pathData = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ")
  const areaData = `${pathData} L 100 85 L 0 85 Z`

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid Lines */}
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#E5E7EB" strokeWidth="0.5" opacity="0.3" />
        ))}

        {/* Area Fill */}
        <path d={areaData} fill="url(#areaGradient)" />

        {/* Main Line */}
        <path
          d={pathData}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          filter="url(#glow)"
          className="drop-shadow-sm"
        />

        {/* Data Points */}
        {points.map((point, index) => (
          <g key={index}>
            <circle cx={point.x} cy={point.y} r="4" fill="white" stroke="url(#lineGradient)" strokeWidth="2" />
            <circle cx={point.x} cy={point.y} r="2" fill="url(#lineGradient)" />
          </g>
        ))}
      </svg>
    </div>
  )
}

function EnhancedDoughnutChart({ data, labels }: { data: number[]; labels: string[] }) {
  const total = data.reduce((sum, value) => sum + value, 0)
  const colors = [
    { start: "#3B82F6", end: "#1D4ED8" },
    { start: "#8B5CF6", end: "#7C3AED" },
    { start: "#10B981", end: "#059669" },
    { start: "#F59E0B", end: "#D97706" },
    { start: "#EF4444", end: "#DC2626" },
  ]

  let cumulativePercentage = 0
  const segments = data.map((value, index) => {
    const percentage = (value / total) * 100
    const startAngle = (cumulativePercentage / 100) * 360 - 90
    const endAngle = ((cumulativePercentage + percentage) / 100) * 360 - 90
    cumulativePercentage += percentage

    const startAngleRad = (startAngle * Math.PI) / 180
    const endAngleRad = (endAngle * Math.PI) / 180

    const largeArcFlag = percentage > 50 ? 1 : 0
    const x1 = 50 + 35 * Math.cos(startAngleRad)
    const y1 = 50 + 35 * Math.sin(startAngleRad)
    const x2 = 50 + 35 * Math.cos(endAngleRad)
    const y2 = 50 + 35 * Math.sin(endAngleRad)

    const pathData = [`M 50 50`, `L ${x1} ${y1}`, `A 35 35 0 ${largeArcFlag} 1 ${x2} ${y2}`, `Z`].join(" ")

    return {
      pathData,
      color: colors[index % colors.length],
      percentage: Math.round(percentage),
      value,
    }
  })

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full max-w-48 max-h-48">
        <defs>
          {segments.map((segment, index) => (
            <linearGradient key={index} id={`segmentGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={segment.color.start} />
              <stop offset="100%" stopColor={segment.color.end} />
            </linearGradient>
          ))}
        </defs>

        {segments.map((segment, index) => (
          <motion.path
            key={index}
            d={segment.pathData}
            fill={`url(#segmentGradient${index})`}
            className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          />
        ))}

        {/* Center Circle */}
        <circle cx="50" cy="50" r="15" fill="white" className="drop-shadow-md" />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-xs font-bold fill-gray-700">
          {total}
        </text>
      </svg>
    </div>
  )
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const mockStats: GitHubStats = {
          totalRepos: 42,
          totalStars: 156,
          totalForks: 23,
          totalCommits: 1247,
          streakDays: 89,
          totalPRs: 234,
          languages: {
            TypeScript: 45,
            JavaScript: 30,
            Python: 15,
            CSS: 10,
          },
          contributionData: [12, 19, 3, 5, 2, 3, 9, 15, 8, 11, 6, 4],
        }

        setTimeout(() => {
          setStats(mockStats)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error)
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-lg w-1/2 mx-auto"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-32 bg-gray-300 dark:bg-gray-700 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium text-sm mb-6 shadow-lg"
          >
            <Activity className="w-4 h-4 mr-2" />
            Live GitHub Analytics
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            GitHub Activity Dashboard
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-lora max-w-2xl mx-auto">
            Real-time insights into my coding journey and open-source contributions
          </p>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Github,
              label: "Repositories",
              value: stats?.totalRepos,
              color: "from-gray-600 to-gray-800",
              bgColor: "from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700",
              description: "Public repos",
            },
            {
              icon: Star,
              label: "Stars Earned",
              value: stats?.totalStars,
              color: "from-yellow-400 to-orange-500",
              bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
              description: "Community love",
            },
            {
              icon: GitFork,
              label: "Total Forks",
              value: stats?.totalForks,
              color: "from-green-400 to-emerald-500",
              bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
              description: "Project forks",
            },
            {
              icon: TrendingUp,
              label: "Commit Streak",
              value: stats?.streakDays,
              color: "from-blue-400 to-purple-500",
              bgColor: "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
              description: "Days active",
              suffix: " days",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative"
              data-cursor-hover
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`}
              />

              {/* Main Card */}
              <div
                className={`relative backdrop-blur-xl bg-gradient-to-br ${stat.bgColor} border border-white/20 dark:border-gray-700/50 p-6 rounded-3xl shadow-xl`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Value */}
                <div className="text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                  {stat.suffix || ""}
                </div>

                {/* Label */}
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{stat.label}</div>

                {/* Description */}
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <div className="grid grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: Code2,
              label: "Total Commits",
              value: stats?.totalCommits,
              color: "from-indigo-400 to-blue-500",
              bgColor: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20",
              description: "Lines of impact",
            },
            {
              icon: Eye,
              label: "Pull Requests",
              value: stats?.totalPRs,
              color: "from-pink-400 to-rose-500",
              bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
              description: "Code contributions",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`}
              />
              <div
                className={`relative backdrop-blur-xl bg-gradient-to-br ${stat.bgColor} border border-white/20 dark:border-gray-700/50 p-6 rounded-3xl shadow-xl`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-1">
                      {stat.value?.toLocaleString()}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</div>
                  </div>
                  <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contribution Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            <div className="relative backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/50 p-8 rounded-3xl shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white">
                    Monthly Contributions
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Commit activity over the year</p>
                </div>
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="h-64">
                <EnhancedLineChart
                  data={stats?.contributionData || []}
                  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                />
              </div>
            </div>
          </motion.div>

          {/* Language Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            <div className="relative backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/50 p-8 rounded-3xl shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white">
                    Language Distribution
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Most used programming languages</p>
                </div>
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="h-64 flex items-center justify-center">
                <EnhancedDoughnutChart
                  data={Object.values(stats?.languages || {})}
                  labels={Object.keys(stats?.languages || {})}
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {Object.entries(stats?.languages || {}).map(([lang, percentage], index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                  >
                    <div
                      className="w-3 h-3 rounded-full shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${
                          ["#3B82F6, #1D4ED8", "#8B5CF6, #7C3AED", "#10B981, #059669", "#F59E0B, #D97706"][index]
                        })`,
                      }}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{lang}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">{percentage}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
