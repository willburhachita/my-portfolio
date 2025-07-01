import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { EyeWink } from './EyeWink'

interface HeroIntroProps {
  onFinish: () => void
}

export function HeroIntro({ onFinish }: HeroIntroProps) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2000),   // "Hi, you're at the right place" → "I'm Wilbur"
      setTimeout(() => setStep(2), 4000),   // "I'm Wilbur" → wink animation
      setTimeout(() => setStep(3), 6500),   // wink → "Here's my world"
      setTimeout(() => setStep(4), 8500),   // finish intro
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 30, 
      scale: 0.9,
      filter: "blur(10px)"
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      scale: 0.9,
      filter: "blur(10px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const pictureVariants = {
    initial: { 
      scale: 0, 
      opacity: 0, 
      rotate: -45,
      x: 100
    },
    animate: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 1.2
      }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={step === 4 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      onAnimationComplete={() => step === 4 && onFinish()}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-8 w-full max-w-6xl">
        
        {/* Text Animation Section */}
        <div className="flex-1 text-center md:text-left">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="greeting"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent"
              >
                Hi, you're at the right place.
              </motion.div>
            )}
            
            {step === 1 && (
              <motion.div
                key="name"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent"
              >
                I'm Wilbur.
              </motion.div>
            )}
            
            {step === 2 && (
              <motion.div
                key="wink"
                className="flex items-center justify-center md:justify-start gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-yellow-400">
                  <EyeWink size={80} />
                </div>
              </motion.div>
            )}
            
            {step === 3 && (
              <motion.div
                key="world"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent"
              >
                <span className="inline-flex items-center gap-3">
                  Here's my world
                  <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Picture Animation Section - Shows from step 1 onwards */}
        {step >= 1 && (
          <motion.div
            variants={pictureVariants}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-yellow-400/50 shadow-2xl shadow-yellow-400/30">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQHJ44qNAvJpHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716079174782?e=1752710400&v=beta&t=W3xmi821cVQq2LaymG1D7nQKa3tFTT-SeKZ_ASdf484"
                  alt="Wilbur Hachita"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent"></div>
              </div>
              
              {/* Floating particles around picture */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}