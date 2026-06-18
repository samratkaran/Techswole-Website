"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone, Cloud, Layers, PenTool, BarChart, Shield, Cpu } from "lucide-react"

// Define the skill categories and items
const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Code className="h-6 w-6" />,
    color: "from-gray-900 to-gray-700",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Database className="h-6 w-6" />,
    color: "from-gray-800 to-gray-600",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Go", level: 70 },
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    color: "from-gray-900 to-gray-700",
    skills: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "Swift", level: 80 },
      { name: "Kotlin", level: 80 },
      { name: "Ionic", level: 75 },
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    icon: <Cloud className="h-6 w-6" />,
    color: "from-gray-800 to-gray-600",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Azure", level: 85 },
      { name: "Google Cloud", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: <Layers className="h-6 w-6" />,
    color: "from-gray-900 to-gray-700",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    id: "design",
    name: "Design",
    icon: <PenTool className="h-6 w-6" />,
    color: "from-gray-800 to-gray-600",
    skills: [
      { name: "UI/UX", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Sketch", level: 75 },
      { name: "Photoshop", level: 80 },
    ],
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: <BarChart className="h-6 w-6" />,
    color: "from-gray-900 to-gray-700",
    skills: [
      { name: "Data Analysis", level: 85 },
      { name: "Google Analytics", level: 90 },
      { name: "Tableau", level: 80 },
      { name: "Power BI", level: 75 },
      { name: "Looker", level: 70 },
    ],
  },
  {
    id: "security",
    name: "Security",
    icon: <Shield className="h-6 w-6" />,
    color: "from-gray-800 to-gray-600",
    skills: [
      { name: "Penetration Testing", level: 85 },
      { name: "OWASP", level: 90 },
      { name: "Auth Systems", level: 90 },
      { name: "Encryption", level: 85 },
      { name: "Security Audits", level: 80 },
    ],
  },
  {
    id: "ai",
    name: "AI & ML",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-gray-900 to-gray-700",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "NLP", level: 80 },
      { name: "Computer Vision", level: 75 },
    ],
  },
  {
    id: "web",
    name: "Web Services",
    icon: <Globe className="h-6 w-6" />,
    color: "from-gray-800 to-gray-600",
    skills: [
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 90 },
      { name: "WebSockets", level: 85 },
      { name: "Microservices", level: 90 },
      { name: "Serverless", level: 85 },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)

  const activeSkills = skillCategories.find((category) => category.id === activeCategory)?.skills || []

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Expertise</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We bring together a diverse set of skills and technologies to deliver exceptional solutions for our clients.
          </p>
        </div>

        {/* Hexagon Grid for Skill Categories */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`group relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${
                category.color
              } text-white shadow-lg transition-all duration-300 hover:scale-105 sm:h-28 sm:w-28 ${
                activeCategory === category.id ? "ring-4 ring-black" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center justify-center p-2 text-center">
                <div className="mb-2">{category.icon}</div>
                <span className="text-xs font-medium sm:text-sm">{category.name}</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-10"></div>
            </motion.button>
          ))}
        </div>

        {/* Skills Detail View */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-2xl font-bold">
              {skillCategories.find((category) => category.id === activeCategory)?.name} Skills
            </h3>
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-gray-300"></span>
              <span className="text-sm text-gray-600">Basic</span>
              <span className="h-3 w-3 rounded-full bg-gray-600"></span>
              <span className="text-sm text-gray-600">Intermediate</span>
              <span className="h-3 w-3 rounded-full bg-black"></span>
              <span className="text-sm text-gray-600">Expert</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {activeSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <motion.div
                    className="h-full rounded-full bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
                <div className="mt-2 flex justify-between">
                  {[0, 1, 2, 3, 4].map((dot) => {
                    const threshold = dot * 20 + 10
                    return (
                      <motion.div
                        key={dot}
                        className={`h-2 w-2 rounded-full ${
                          skill.level >= threshold ? (dot < 3 ? "bg-gray-600" : "bg-black") : "bg-gray-300"
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + dot * 0.1 }}
                      ></motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-gray-600">
              Our team continuously updates their skills to stay at the forefront of technology trends.
            </p>
            <motion.button
              className="rounded-md bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
