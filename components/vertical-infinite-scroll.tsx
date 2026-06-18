"use client"

import React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useAnimationFrame, useMotionValue } from "framer-motion"

interface VerticalInfiniteScrollProps {
  children: React.ReactNode
  direction?: "up" | "down"
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export function VerticalInfiniteScroll({
  children,
  direction = "down",
  speed = 20,
  pauseOnHover = true,
  className = "",
}: VerticalInfiniteScrollProps) {
  const [duplicateCount, setDuplicateCount] = useState(2)
  const baseY = useMotionValue(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Calculate how many duplicates we need to create a seamless loop
  useEffect(() => {
    if (!scrollRef.current || !containerRef.current) return

    const calculateHeight = () => {
      if (!scrollRef.current || !containerRef.current) return

      const childHeight = scrollRef.current.firstChild ? (scrollRef.current.firstChild as HTMLElement).offsetHeight : 0
      const containerHeight = containerRef.current.offsetHeight

      // We need at least 3 copies to ensure seamless looping
      // This ensures there's always content visible while others are cycling
      const needed = Math.max(3, Math.ceil(containerHeight / childHeight) + 2)
      setDuplicateCount(needed)
      setHeight(childHeight)
    }

    calculateHeight()
    window.addEventListener("resize", calculateHeight)
    return () => window.removeEventListener("resize", calculateHeight)
  }, [children])

  useAnimationFrame((_, delta) => {
    if (isPaused || !scrollRef.current || !containerRef.current || height === 0) return

    // Calculate the movement based on the speed and direction
    const moveBy = direction === "down" ? speed : -speed
    const normalizedDelta = delta / 1000 // Convert to seconds

    let newY = baseY.get() + moveBy * normalizedDelta

    // Create a truly seamless loop by resetting position when content moves out of view
    // For seamless looping, we need to reset when we've moved one full content height
    if (direction === "down" && newY >= height) {
      // Reset to create seamless loop
      newY = newY - height
    } else if (direction === "up" && newY <= -height) {
      // Reset to create seamless loop
      newY = newY + height
    }

    baseY.set(newY)
  })

  // Create an array of duplicated children to ensure seamless looping
  const duplicatedChildren = Array(duplicateCount)
    .fill(0)
    .map((_, i) => <React.Fragment key={i}>{children}</React.Fragment>)

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div ref={scrollRef} style={{ y: baseY }} className="flex flex-col">
        {duplicatedChildren}
      </motion.div>
    </div>
  )
}
