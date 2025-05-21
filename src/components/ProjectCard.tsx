import React from 'react'
import { ExternalLink } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ProjectCardProps {
  name: string
  description: string
  tech: string[]
  liveUrl: string
  stats: {
    [key: string]: string
  }
  icon: LucideIcon
}

export function ProjectCard({ name, description, tech, liveUrl, stats, icon: Icon }: ProjectCardProps) {
  const getThemeColor = () => {
    switch(name) {
      case 'ClashSphere':
        return {
          text: 'text-yellow-400',
          hover: 'hover:text-yellow-300',
          border: 'border-yellow-400/20',
          bg: 'bg-yellow-400/10',
          icon: '👑'
        }
      case 'FeedTag':
        return {
          text: 'text-purple-400',
          hover: 'hover:text-purple-300',
          border: 'border-purple-400/20',
          bg: 'bg-purple-400/10',
          icon: '#'
        }
      case 'HoloHeaven':
        return {
          text: 'text-blue-400',
          hover: 'hover:text-blue-300',
          border: 'border-blue-400/20',
          bg: 'bg-blue-400/10',
          icon: '🏠'
        }
      default:
        return {
          text: 'text-gray-400',
          hover: 'hover:text-gray-300',
          border: 'border-gray-400/20',
          bg: 'bg-gray-400/10',
          icon: '💻'
        }
    }
  }

  const theme = getThemeColor()

  return (
    <div className="group relative p-8 rounded-3xl bg-gray-900/50 border border-gray-800/50 hover:border-yellow-400/20 transition-all duration-300">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900/50 via-gray-900/80 to-gray-900/50"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className={`text-4xl ${theme.text}`}>{theme.icon}</div>
          <h3 className={`text-3xl font-bold ${theme.text}`}>
            {name}
          </h3>
        </div>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {Object.entries(stats).map(([key, value]) => (
            <div
              key={key}
              className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30"
            >
              <div className={`text-2xl font-bold mb-1 ${theme.text}`}>
                {value}
              </div>
              <div className="text-sm text-gray-400">
                {key}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((t) => (
            <span
              key={t}
              className={`px-4 py-2 rounded-full text-sm ${theme.bg} ${theme.text} border ${theme.border}`}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-lg font-semibold ${theme.text} ${theme.hover} transition-colors group/link`}
        >
          View Live Project
          <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}