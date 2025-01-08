'use client'

import { motion } from 'framer-motion'
import { FilterIcon as FunnelIcon, SmileIcon, Flower2Icon, MapIcon, CheckSquareIcon, RefreshCwIcon } from 'lucide-react'

interface AlgorithmCardProps {
  icon: string
  title: string
  description: string
  isExpanded: boolean
  onClick: () => void
}

const iconComponents = {
  funnel: FunnelIcon,
  smile: SmileIcon,
  flower: Flower2Icon,
  map: MapIcon,
  checklist: CheckSquareIcon,
  refresh: RefreshCwIcon,
}

const generateCardDots = (count: number) => {
  return [...Array(count)].map((_, i) => {
    const size = Math.random() * 6 + 2 // 2-8px
    const right = Math.random() * 100 // 0-100%
    const bottom = Math.random() * 100 // 0-100%
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-pink-200"
        style={{
          width: size,
          height: size,
          right: `${right}%`,
          bottom: `${bottom}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    )
  })
}

export function AlgorithmCard({ icon, title, description, isExpanded, onClick }: AlgorithmCardProps) {
  const IconComponent = iconComponents[icon as keyof typeof iconComponents]

  return (
    <motion.div
      className="bg-white shadow-lg hover:shadow-xl rounded-xl p-6 cursor-pointer overflow-hidden transition-all duration-300 relative"
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      layout
    >
      <div className="relative z-10">
        <motion.div className="flex items-start gap-4">
          <div className="shrink-0">
            <motion.div
              className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-500"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <IconComponent size={24} />
            </motion.div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{description}</p>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                <p className="text-sm text-gray-500">
                  This is additional information about the {title.toLowerCase()} stage of the Empowerment Algorithm.
                  It provides more context and details about how this stage contributes to the overall process.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {generateCardDots(30)}
      </div>
    </motion.div>
  )
}

