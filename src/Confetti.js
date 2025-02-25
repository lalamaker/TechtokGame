import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Confetti = ({ count = 50 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ["#FCFF6C", "#AA8DFF", "#FF8686", "#899CFF", "#8CFFCF"];
    const shapes = ["■", "●", "★", "♦", "▲"];

    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      delay: Math.random() * 2,
    }));

    setParticles(newParticles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: [
              `${particle.x}vw`,
              `${particle.x + (Math.random() * 20 - 10)}vw`,
              `${particle.x + (Math.random() * 40 - 20)}vw`,
            ],
            y: ["0vh", "100vh"],
            scale: [0, particle.scale, 0],
            rotate: [0, particle.rotation * 2],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            delay: particle.delay,
            ease: "easeOut",
            repeat: Infinity,
          }}
          className="absolute text-2xl"
          style={{ color: particle.color }}
        >
          {particle.shape}
        </motion.div>
      ))}
    </div>
  );
};

export default Confetti;
