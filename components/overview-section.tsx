"use client"

import { motion } from "framer-motion"
import { useContactModal } from "@/context/contact-modal-context"

export function OverviewSection() {
  const { openModal } = useContactModal()

  return (
    <section className="bg-white py-32 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6 text-4xl font-bold">
              <span className="block mb-2 pt-24">Transforming Ideas</span>
              <span className="block">Into</span>
              <span className="block mt-2">
                {/* Animated text with hover effect */}
                <span className="inline-block">
                  {"Digital Reality".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      className="inline-block transition-colors duration-300 hover:text-gray-500"
                      whileHover={{
                        scale: 1.2,
                        color: "#000",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              </span>
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              We specialize in creating innovative software solutions that help businesses thrive in the digital age.
              Our team of experts combines technical expertise with creative thinking to deliver exceptional results.
            </p>
            <div className="mb-8">
              {["Innovation", "Quality", "Reliability", "Expertise"].map((word, index) => (
                <motion.span
                  key={index}
                  className="mr-4 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#000",
                    color: "#fff",
                    transition: { duration: 0.2 },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <button
              onClick={openModal}
              className="group relative rounded-md bg-black px-8 py-3 text-white transition-colors hover:bg-gray-800"
            >
              <span className="relative z-10">Discover Our Approach</span>
              <span className="absolute bottom-0 left-0 h-0 w-full bg-gray-700 transition-all duration-300 group-hover:h-full"></span>
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <div className="flex h-full items-center justify-center p-8">
                <span className="text-center text-gray-400">
                  <p className="mb-2 text-lg font-medium">Your Image Here</p>
                  <p className="text-sm">Add your overview image in the future</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
