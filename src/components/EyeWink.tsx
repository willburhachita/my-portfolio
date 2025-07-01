import React from "react";
import { motion } from "framer-motion";

interface EyeWinkProps {
  size?: number;
  className?: string;
}

export const EyeWink = ({ size = 64, className = "" }: EyeWinkProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width={size}
        height={size * 0.6}
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Eye Background/White */}
        <motion.ellipse
          cx="50"
          cy="30"
          rx="45"
          ry="25"
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ scaleY: 1 }}
          animate={{ 
            scaleY: [1, 0.1, 1],
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />

        {/* Iris */}
        <motion.circle
          cx="50"
          cy="30"
          r="12"
          fill="currentColor"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ 
            scale: [1, 0.1, 1],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />

        {/* Pupil */}
        <motion.circle
          cx="50"
          cy="30"
          r="6"
          fill="black"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ 
            scale: [1, 0.1, 1],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />

        {/* Eye Highlight */}
        <motion.circle
          cx="46"
          cy="26"
          r="3"
          fill="white"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ 
            scale: [1, 0.1, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />

        {/* Upper Eyelid */}
        <motion.path
          d="M5 30 Q25 5 50 5 Q75 5 95 30"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1],
            opacity: [0, 1, 1]
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        />

        {/* Lower Eyelid */}
        <motion.path
          d="M5 30 Q25 55 50 55 Q75 55 95 30"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1],
            opacity: [0, 1, 1]
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeInOut"
          }}
        />

        {/* Animated Winking Eyelid */}
        <motion.path
          d="M5 30 Q25 5 50 5 Q75 5 95 30"
          stroke="currentColor"
          strokeWidth="3"
          fill="rgba(250, 204, 21, 0.1)"
          strokeLinecap="round"
          initial={{ d: "M5 30 Q25 5 50 5 Q75 5 95 30" }}
          animate={{
            d: [
              "M5 30 Q25 5 50 5 Q75 5 95 30",      // Open
              "M5 30 Q25 28 50 28 Q75 28 95 30",    // Closing
              "M5 30 Q25 30 50 30 Q75 30 95 30",    // Closed
              "M5 30 Q25 28 50 28 Q75 28 95 30",    // Opening
              "M5 30 Q25 5 50 5 Q75 5 95 30"       // Open
            ]
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />

        {/* Eyelashes */}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={i}
            x1={20 + i * 15}
            y1={8 + Math.sin(i) * 2}
            x2={18 + i * 15}
            y2={2 + Math.sin(i) * 2}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ 
              opacity: [0, 1, 1],
              scaleY: [0, 1, 1]
            }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.1,
              ease: "easeOut"
            }}
          />
        ))}
      </svg>

      {/* Sparkle Effects */}
      <motion.div
        className="absolute -top-2 -right-2 text-yellow-400"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: [0, 1.2, 1, 0],
          rotate: [0, 180, 360, 720]
        }}
        transition={{
          duration: 1.5,
          delay: 1.2,
          ease: "easeOut"
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute -bottom-1 -left-2 text-yellow-300"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: [0, 1, 0.8, 0],
          rotate: [0, -90, -180, -270]
        }}
        transition={{
          duration: 1.2,
          delay: 1.4,
          ease: "easeOut"
        }}
      >
        ⭐
      </motion.div>
    </div>
  );
};