"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=600&width=400",
    bio: "With over 15 years of experience in software development and business leadership, Alex founded TechSwole with a vision to create innovative solutions that transform businesses.",
  },
  {
    id: 2,
    name: "Samantha Chen",
    role: "CTO",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Samantha leads our technical strategy and oversees all development teams. Her expertise in cloud architecture and AI has been instrumental in our most groundbreaking projects.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Design Director",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Michael brings a perfect blend of creativity and user-centered thinking to every project. His award-winning designs have helped our clients achieve exceptional results.",
  },
]

export function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">The Team Behind TechSwole</h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Our success is driven by our exceptional team of experts who bring passion, creativity, and technical
            excellence to every project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="group relative h-[500px] overflow-hidden rounded-lg"
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 group-hover:translate-y-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredMember === member.id ? 1 : 0.7,
                    y: hoveredMember === member.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mb-1 text-2xl font-bold">{member.name}</h3>
                  <p className="mb-4 text-gray-300">{member.role}</p>
                  <p
                    className={`text-sm text-gray-300 transition-opacity duration-300 ${
                      hoveredMember === member.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {member.bio}
                  </p>
                </motion.div>
              </div>

              {/* Decorative Element */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-white"
                initial={{ width: "30%" }}
                animate={{ width: hoveredMember === member.id ? "100%" : "30%" }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 mx-auto max-w-2xl text-gray-300">
            We're always looking for talented individuals to join our team and help us create exceptional software
            solutions.
          </p>
          <Link href="/careers">
            <button className="rounded-md bg-white px-6 py-3 text-black transition-colors hover:bg-gray-200">
              Join Our Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
