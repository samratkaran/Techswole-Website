"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { skillsData } from "@/data/skills-data"
import { ContactButton } from "@/components/contact-button"
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react"

export function EnhancedSkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillsData.categories[0].id)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const activeSkills = skillsData.categories.find((category) => category.id === activeCategory)

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            className="mb-4 text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {skillsData.title}
          </motion.h2>
          <motion.p
            className="mx-auto mb-6 max-w-2xl text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {skillsData.subtitle}
          </motion.p>
          <motion.p
            className="mx-auto max-w-3xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skillsData.description}
          </motion.p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {skillsData.categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`group relative flex items-center space-x-3 rounded-2xl px-6 py-4 text-left transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">{category.icon}</span>
              <div>
                <div className="font-semibold">{category.name}</div>
                <div className="text-sm opacity-75">{category.technologies.length} technologies</div>
              </div>
              {activeCategory === category.id && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${category.color.split(" ")[1]}, ${category.color.split(" ")[3]})`,
                  }}
                  layoutId="activeCategory"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Active Category Description */}
        <AnimatePresence mode="wait">
          {activeSkills && (
            <motion.div
              key={activeCategory}
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="mb-4 text-2xl font-bold">{activeSkills.name}</h3>
              <p className="mx-auto max-w-2xl text-gray-600">{activeSkills.description}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technology Cards */}
        <AnimatePresence mode="wait">
          {activeSkills && (
            <motion.div
              key={activeCategory}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeSkills.technologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredTech(tech.id)}
                  onHoverEnd={() => setHoveredTech(null)}
                  whileHover={{ y: -8 }}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-5 transition-opacity duration-300 group-hover:opacity-10 ${activeSkills.color}`}
                  />

                  {/* Card Content */}
                  <div className="relative p-6">
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl transition-transform duration-300 group-hover:scale-110">
                          {tech.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold">{tech.name}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{tech.level}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-gray-600 line-clamp-3">{tech.description}</p>

                    {/* Stats */}
                    <div className="mb-4 grid grid-cols-3 gap-4 text-center">
                      <div className="rounded-lg bg-gray-50 p-2">
                        <div className="flex items-center justify-center text-blue-600">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-sm font-semibold">{tech.experience}</div>
                        <div className="text-xs text-gray-500">Experience</div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-2">
                        <div className="flex items-center justify-center text-green-600">
                          <Users className="h-4 w-4" />
                        </div>
                        <div className="text-sm font-semibold">{tech.projects}+</div>
                        <div className="text-xs text-gray-500">Projects</div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-2">
                        <div className="flex items-center justify-center text-purple-600">
                          <Star className="h-4 w-4" />
                        </div>
                        <div className="text-sm font-semibold">{tech.level}</div>
                        <div className="text-xs text-gray-500">Level</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {tech.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors duration-300 group-hover:bg-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {tech.tags.length > 3 && (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                          +{tech.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Link
                        href={`/skills/technology/${tech.id}`}
                        className="flex-1 rounded-lg bg-black px-4 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                      <ContactButton
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                        variant="outline"
                      >
                        Contact
                      </ContactButton>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${activeSkills.color.split(" ")[1]}20, ${activeSkills.color.split(" ")[3]}20)`,
                    }}
                    animate={{ opacity: hoveredTech === tech.id ? 1 : 0 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-6 text-gray-600">
            Need a specific technology for your project? We're always expanding our expertise.
          </p>
          <ContactButton className="rounded-lg bg-black px-8 py-3 text-white transition-colors hover:bg-gray-800">
            Discuss Your Project
          </ContactButton>
        </motion.div>
      </div>
    </section>
  )
}
