"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { services } from "@/data/services"
import { Code, Smartphone, Cloud, GitBranch, Palette, ShoppingCart } from "lucide-react"
import Image from "next/image";

// Map of icon names to components
const iconMap = {
  Code: Code,
  Smartphone: Smartphone,
  Cloud: Cloud,
  GitBranch: GitBranch,
  Palette: Palette,
  ShoppingCart: ShoppingCart,
}

export function ServicesSection() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Services</h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            We offer a comprehensive range of software development services to help your business thrive in the digital
            age.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || null

            return (
              <Link href={`/services/${service.id}`} key={service.id}>
                <motion.div
                  className="h-full rounded-lg border border-gray-800 p-6 transition-transform hover:-translate-y-1 cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                 <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full">
  {service.image ? (
    <Image
      src={service.image}
      alt={service.title}
      width={65}
      height={65}
      className="object-contain"
    />
  ) : (
    IconComponent && <IconComponent className="h-6 w-6" />
  )}
</div>
                  <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
