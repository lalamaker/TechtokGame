import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const CelebrationAnimations = ({ achievements }) => {
  return (
    <div className="relative w-full">
      {/* Floating stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, scale: 0.5, y: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 0.8, 0.5],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-4 h-4 text-[#FAFF05]" />
          </motion.div>
        ))}
      </div>

      {/* Achievement cards with enhanced animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "backOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-[#EFEAFC] transform-gpu"
          >
            {/* Floating icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-6xl mb-4 flex justify-center"
            >
              {achievement.icon}
            </motion.div>

            {/* Achievement text with glow effect */}
            <motion.h3
              animate={{
                color: ["#0D065B", "#5F29FF", "#0D065B"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xl font-bold text-center mb-2"
            >
              {achievement.title}
            </motion.h3>

            <p className="text-[#0D065B] text-center">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Confetti from "./Confetti";

const SuccessSection = ({ achievements }) => {
  return (
    <div className="relative">
      {/* Add confetti for celebrations */}
      <Confetti count={75} />

      {/* Floating stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, scale: 0.5, y: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 0.8, 0.5],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-4 h-4 text-[#FAFF05]" />
          </motion.div>
        ))}
      </div>

      {/* Achievement cards with enhanced animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "backOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-[#EFEAFC] transform-gpu"
          >
            {/* Floating icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-6xl mb-4 flex justify-center"
            >
              {achievement.icon}
            </motion.div>

            {/* Achievement text with glow effect */}
            <motion.h3
              animate={{
                color: ["#0D065B", "#5F29FF", "#0D065B"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xl font-bold text-center mb-2"
            >
              {achievement.title}
            </motion.h3>

            <p className="text-[#0D065B] text-center">
              {achievement.description}
            </p>

            {/* Decorative background shapes */}
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl opacity-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-[#AA8DFF] to-[#5F29FF]"
                  initial={{ scale: 0, x: "50%", y: "50%" }}
                  animate={{
                    scale: [1, 1.5, 1],
                    x: ["50%", "60%", "40%", "50%"],
                    y: ["50%", "40%", "60%", "50%"],
                  }}
                  transition={{
                    duration: 5,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Success message with sparkle effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mt-8"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          <span className="text-4xl">🎉</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessSection;
