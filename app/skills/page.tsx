import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ContactButton } from "@/components/contact-button"
import { skillsNavigationData } from "@/data/skills-navigation-data"
import { Star, ArrowRight, TrendingUp, Users, Award } from "lucide-react"

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb Section */}
      <section className="bg-white pt-24 pb-6">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Skills" }]} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{skillsNavigationData.title}</h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">{skillsNavigationData.subtitle}</p>
            <p className="mx-auto max-w-4xl text-gray-600">{skillsNavigationData.description}</p>
          </div>

          {/* Categories Grid */}
          <div className="space-y-20">
            {skillsNavigationData.categories.map((category, categoryIndex) => (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                {/* Category Header */}
                <div className="mb-12 text-center">
                  <div className="mb-4 flex items-center justify-center space-x-3">
                    <span className="text-4xl">{category.icon}</span>
                    <h2 className="text-3xl font-bold">{category.name}</h2>
                  </div>
                  <p className="mx-auto max-w-2xl text-gray-600">{category.description}</p>
                </div>

                {/* Technologies Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {category.technologies.map((tech, techIndex) => (
                    <Link
                      key={tech.id}
                      href={`/skills/technology/${tech.id}`}
                      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
                    >
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br opacity-5 transition-opacity duration-300 group-hover:opacity-10 ${category.color}`}
                      />

                      {/* Card Content */}
                      <div className="relative p-6">
                        {/* Header */}
                        <div className="mb-4 flex items-center space-x-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl transition-transform duration-300 group-hover:scale-110">
                            {tech.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{tech.shortName}</h3>
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{tech.level}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mb-4 text-gray-600 text-sm line-clamp-3">{tech.description}</p>

                        {/* Stats */}
                        <div className="mb-4 grid grid-cols-3 gap-2 text-center">
                          <div className="rounded-lg bg-gray-50 p-2">
                            <div className="flex items-center justify-center text-blue-600 mb-1">
                              <TrendingUp className="h-3 w-3" />
                            </div>
                            <div className="text-xs font-semibold">{tech.experience}</div>
                            <div className="text-xs text-gray-500">Exp.</div>
                          </div>
                          <div className="rounded-lg bg-gray-50 p-2">
                            <div className="flex items-center justify-center text-green-600 mb-1">
                              <Users className="h-3 w-3" />
                            </div>
                            <div className="text-xs font-semibold">{tech.projects}+</div>
                            <div className="text-xs text-gray-500">Projects</div>
                          </div>
                          <div className="rounded-lg bg-gray-50 p-2">
                            <div className="flex items-center justify-center text-purple-600 mb-1">
                              <Award className="h-3 w-3" />
                            </div>
                            <div className="text-xs font-semibold">{tech.rating}/5</div>
                            <div className="text-xs text-gray-500">Rating</div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="mb-4 flex flex-wrap gap-1">
                          {tech.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 transition-colors duration-300 group-hover:bg-gray-200"
                            >
                              {tag}
                            </span>
                          ))}
                          {tech.tags.length > 3 && (
                            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500">
                              +{tech.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Learn More Button */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-black group-hover:text-blue-600 transition-colors">
                            Learn More
                          </span>
                          <ArrowRight className="h-4 w-4 text-gray-400 transition-all duration-300 group-hover:text-blue-600 group-hover:translate-x-1" />
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-5 ${category.color}`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-8">
              <h2 className="mb-4 text-2xl font-bold">Need a Specific Technology?</h2>
              <p className="mb-6 text-gray-600">
                We're always expanding our expertise and learning new technologies. If you don't see what you need,
                let's discuss your requirements.
              </p>
              <ContactButton className="rounded-xl bg-black px-8 py-3 text-white transition-colors hover:bg-gray-800">
                Discuss Your Project
              </ContactButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
