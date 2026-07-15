import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { skillsNavigationData } from "@/data/skills-navigation-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ContactButton } from "@/components/contact-button"
import { ArrowLeft, Check, Star, TrendingUp, Lightbulb, Award, Briefcase, Target, Zap, ArrowRight } from "lucide-react"

// Generate static params for all technologies
export function generateStaticParams() {
  const allTechnologies = skillsNavigationData.categories.flatMap((category) =>
    category.technologies.map((tech) => ({ id: tech.id })),
  )
  return allTechnologies
}

export default function TechnologyPage({ params }: { params: { id: string } }) {
  // Find the technology across all categories
  let technology = null
  let category = null

  for (const cat of skillsNavigationData.categories) {
    const tech = cat.technologies.find((t) => t.id === params.id)
    if (tech) {
      technology = tech
      category = cat
      break
    }
  }

  if (!technology || !category) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-white pt-24 pb-6">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Skills", href: "/skills" }, { label: technology.shortName }]} />
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container mx-auto px-4">

          <Link
            href="/#skills"
            className="mb-8 inline-flex items-center text-gray-600 hover:text-black transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Skills
          </Link>

          {/* Hero Section */}
          <div className="mb-16 grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center space-x-4">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${category.color} text-white text-4xl shadow-lg`}
                >
                  {technology.icon}
                </div>
                <div>
                  <h1 className="text-4xl font-bold md:text-5xl mb-2">{technology.name}</h1>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`rounded-full bg-gradient-to-r ${category.color} text-white px-4 py-1 text-sm font-medium`}
                    >
                      {category.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(technology.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm font-medium ml-1">{technology.level}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-8 text-xl text-gray-600 leading-relaxed">{technology.description}</p>

              {/* Enhanced Stats Grid */}
              <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 text-center transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center text-blue-600 mb-2">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-blue-900">{technology.experience}</div>
                  <div className="text-sm text-blue-700">Experience</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-4 text-center transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center text-green-600 mb-2">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-green-900">{technology.projects}+</div>
                  <div className="text-sm text-green-700">Projects</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-4 text-center transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center text-purple-600 mb-2">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-purple-900">{technology.level}</div>
                  <div className="text-sm text-purple-700">Expertise</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-4 text-center transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center text-orange-600 mb-2">
                    <Star className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-orange-900">{technology.rating}/5</div>
                  <div className="text-sm text-orange-700">Rating</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {technology.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 transition-colors transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src={technology.image || "/placeholder.svg"}
                  alt={technology.name}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br opacity-20 ${category.color}`} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                  {technology.level}
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <div className="mb-8 flex items-center space-x-3">
              <Zap className="h-6 w-6 text-gray-600" />
              <h2 className="text-3xl font-bold">Key Features & Capabilities</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {technology.features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 rounded-2xl bg-gray-50 p-6 transition-all hover:bg-gray-100 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:scale-110">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.split(":")[0]}</h3>
                    <p className="text-gray-600">{feature.split(":")[1] || feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <div className="mb-8 flex items-center space-x-3">
              <Target className="h-6 w-6 text-gray-600" />
              <h2 className="text-3xl font-bold">Common Use Cases</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {technology.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border-2 border-gray-200 p-6 text-center transition-all hover:border-gray-300 hover:shadow-lg transform hover:-translate-y-2"
                >
                  <div className="mb-4 flex items-center justify-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${category.color} text-white text-xl font-bold transition-transform group-hover:scale-110`}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900">{useCase}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Section */}
          <div className="mb-16">
            <div className="mb-8 flex items-center space-x-3">
              <Lightbulb className="h-6 w-6 text-gray-600" />
              <h2 className="text-3xl font-bold">Why Choose {technology.name}?</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {technology.advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-4 transition-all hover:from-gray-100 hover:to-gray-200"
                >
                  <div
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${category.color} text-white`}
                  >
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Completed Section */}
          <div className="mb-16">
            <div className="mb-8 flex items-center space-x-3">
              <Briefcase className="h-6 w-6 text-gray-600" />
              <h2 className="text-3xl font-bold">Recent Projects</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {technology.projects_completed.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 p-6 transition-all hover:border-gray-300 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center space-x-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-white font-bold`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-lg">{project}</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Built with {technology.name}</span>
                    <span>•</span>
                    <span className="text-green-600 font-medium">Completed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Technologies */}
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold">Related Technologies in {category.name}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {category.technologies
                .filter((tech) => tech.id !== technology.id)
                .slice(0, 3)
                .map((relatedTech) => (
                  <Link
                    key={relatedTech.id}
                    href={`/skills/technology/${relatedTech.id}`}
                    className="group rounded-2xl border border-gray-200 p-6 transition-all hover:border-gray-300 hover:shadow-lg transform hover:-translate-y-2"
                  >
                    <div className="mb-4 flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl transition-transform group-hover:scale-110">
                        {relatedTech.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{relatedTech.name}</h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{relatedTech.level}</span>
                          <span>•</span>
                          <span>{relatedTech.projects}+ projects</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedTech.description}</p>
                    <div className="mt-3 flex items-center text-sm text-blue-600 group-hover:text-blue-800">
                      <span>Learn more</span>
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={`rounded-3xl bg-gradient-to-br ${category.color} p-8 text-white text-center relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-red-500"></div>
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold">Ready to leverage {technology.name} for your project?</h2>
              <p className="mb-6 text-lg opacity-90">
                Our expert team has {technology.experience} of experience with {technology.name} and has completed{" "}
                {technology.projects}+ projects. Let's discuss how we can help you build something amazing.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
                <ContactButton className="rounded-xl bg-white text-black px-8 py-3 font-semibold transition-all hover:bg-gray-100 transform hover:scale-105">
                  Start Your Project
                </ContactButton>
                <Link
                  href="/#skills"
                  className="rounded-xl border-2 border-white px-8 py-3 text-center font-semibold transition-all hover:bg-white hover:text-black transform hover:scale-105"
                >
                  Explore More Technologies
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-white/5"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
