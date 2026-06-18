"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

// Define the stats data
const stats = [
  { value: 12, label: "Years Experience", suffix: "+" },
  { value: 30, label: "Countries Served", suffix: "+" },
  { value: 250, label: "Projects Completed", suffix: "+" },
  { value: 150, label: "Happy Clients", suffix: "+" },
]

export function ExperienceSection() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Experience</h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            We've built a strong track record of delivering exceptional results for clients around the world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <CounterCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CounterCard({ stat, index }: { stat: { value: number; label: string; suffix: string }; index: number }) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      // Start the counter animation
      let startValue = 0
      const duration = 2000 // 2 seconds
      const increment = stat.value / (duration / 16) // Update every ~16ms (60fps)

      const timer = setInterval(() => {
        startValue += increment
        if (startValue >= stat.value) {
          setCount(stat.value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(startValue))
        }
      }, 16)

      // Start the card animation
      controls.start("visible")

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut",
          },
        },
      }}
      className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black p-8 text-center shadow-xl"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#grid-${index})`} />
        </svg>
      </div>

      {/* Counter number */}
      <div className="relative mb-2 flex items-center justify-center">
        <motion.div
          className="text-6xl font-bold tabular-nums tracking-tight md:text-7xl"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          {count}
        </motion.div>
        <motion.div
          className="text-3xl font-bold text-gray-400 md:text-4xl"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        >
          {stat.suffix}
        </motion.div>
      </div>

      {/* Label with letter animation */}
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 20 }}
            animate={isInView ? { y: 0 } : { y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          >
            {stat.label.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block text-sm font-medium uppercase tracking-wider text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.6 + charIndex * 0.03 }}
                whileHover={{
                  color: "#ffffff",
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 0.03,
          transition: { duration: 0.3 },
        }}
      />
    </motion.div>
  )
}
