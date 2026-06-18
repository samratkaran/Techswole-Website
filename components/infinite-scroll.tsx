"use client"

import React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useAnimationFrame, useMotionValue } from "framer-motion"

interface InfiniteScrollProps {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export function InfiniteScroll({
  children,
  direction = "left",
  speed = 20,
  pauseOnHover = true,
  className = "",
}: InfiniteScrollProps) {
  const [duplicateCount, setDuplicateCount] = useState(2)
  const baseX = useMotionValue(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Calculate how many duplicates we need to create a seamless loop
  useEffect(() => {
    if (!scrollRef.current || !containerRef.current) return

    const calculateWidth = () => {
      if (!scrollRef.current || !containerRef.current) return

      const childWidth = scrollRef.current.firstChild ? (scrollRef.current.firstChild as HTMLElement).offsetWidth : 0
      const containerWidth = containerRef.current.offsetWidth

      // We need enough duplicates to cover the container width multiple times
      // to ensure smooth looping even at high speeds
      const needed = Math.ceil(containerWidth / childWidth) + 1
      setDuplicateCount(Math.max(needed, 2))
      setWidth(childWidth)
    }

    calculateWidth()
    window.addEventListener("resize", calculateWidth)
    return () => window.removeEventListener("resize", calculateWidth)
  }, [children])

  useAnimationFrame((_, delta) => {
    if (isPaused || !scrollRef.current || !containerRef.current || width === 0) return

    // Calculate the movement based on the speed and direction
    const moveBy = direction === "left" ? -speed : speed
    const normalizedDelta = delta / 1000 // Convert to seconds

    let newX = baseX.get() + moveBy * normalizedDelta

    // Create a truly seamless loop by resetting position when an item moves out of view
    if (direction === "left" && newX <= -width) {
      // When an item moves out of view on the left, reset to create the illusion of an infinite loop
      newX = newX + width
    } else if (direction === "right" && newX >= 0) {
      // When an item moves out of view on the right, reset to create the illusion of an infinite loop
      newX = newX - width
    }

    baseX.set(newX)
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
      <motion.div ref={scrollRef} style={{ x: baseX, display: "flex" }} className="flex">
        {duplicatedChildren}
      </motion.div>
    </div>
  )
}
