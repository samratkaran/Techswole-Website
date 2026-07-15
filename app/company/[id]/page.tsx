import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { companyDataEnhanced } from "@/data/company-data-enhanced"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactButton } from "@/components/contact-button"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return companyDataEnhanced.sections.map((section) => ({
    id: section.id,
  }))
}

export default function CompanyPage({ params }: { params: { id: string } }) {
  const section = companyDataEnhanced.sections.find((s) => s.id === params.id)

  if (!section) {
    notFound()
  }

  // Dynamic styling based on section style configuration
  const getThemeClasses = () => {
    const { style } = section

    const themes = {
      modern: "bg-white text-black",
      dark: "bg-black text-white",
      minimal: "bg-gray-50 text-gray-900",
    }

    const layouts = {
      split: "container mx-auto px-4",
      grid: "container mx-auto px-4",
      masonry: "container mx-auto px-4",
    }

    return {
      background: themes[style.theme] || themes.modern,
      layout: layouts[style.layout] || layouts.split,
      accent: style.accentColor,
      header: style.headerStyle,
      card: style.cardStyle,
    }
  }

  const themeClasses = getThemeClasses()

  return (
    <main className="min-h-screen">
      <Header />

      <section className={`pt-32 pb-20 ${themeClasses.background}`}>
        <div className={themeClasses.layout}>
          <Link
            href="/company"
            className={`mb-8 inline-flex items-center transition-colors hover:opacity-75 ${
              section.style.theme === "dark" ? "text-white" : "text-gray-600"
            }`}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Company
          </Link>

          {/* Dynamic Header based on style */}
          <div className="mb-16">
            {section.style.headerStyle === "gradient" && (
              <div className="mb-12 text-center">
                <h1 className="mb-6 text-4xl font-bold md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {section.title}
                </h1>
                <p className="mx-auto max-w-3xl text-xl opacity-80">{section.description}</p>
              </div>
            )}

            {section.style.headerStyle === "bold" && (
              <div className="mb-12 text-center">
                <h1 className="mb-6 text-5xl font-black md:text-6xl tracking-tight">{section.title}</h1>
                <p className="mx-auto max-w-3xl text-xl font-medium opacity-90">{section.description}</p>
              </div>
            )}

            {section.style.headerStyle === "clean" && (
              <div className="mb-12">
                <h1 className="mb-4 text-4xl font-light md:text-5xl">{section.title}</h1>
                <p className="max-w-2xl text-lg opacity-75">{section.description}</p>
              </div>
            )}
          </div>

          {/* Tags */}
          {section.tags && section.tags.length > 0 && (
            <div className="mb-12 flex flex-wrap gap-3">
              {section.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                    section.style.theme === "dark"
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Hero Image */}
          <div className="mb-16 flex justify-center items-center overflow-hidden ">
            <Image
              src={section.image || "/placeholder.svg"}
              alt={section.title}
              width={900}
              height={200}
              className="object-cover"
            />
          </div>

          {/* Overview */}
          <div className="mb-16">
            <p className="text-xl leading-relaxed opacity-90">{section.content.overview}</p>
          </div>

          {/* Dynamic Content Sections */}
          <div className="space-y-16">
            {section.content.sections.map((contentSection, index) => (
              <div key={index}>
                <h2 className="mb-8 text-3xl font-bold">{contentSection.title}</h2>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: contentSection.content }}
                />
              </div>
            ))}
          </div>

          {/* CTA Section with dynamic styling */}
          <div
            className={`mt-20 rounded-3xl p-8 text-center ${
              section.style.theme === "dark"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                : section.style.theme === "minimal"
                  ? "bg-white border-2 border-gray-200"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
            }`}
          >
            <h2 className="mb-4 text-2xl font-bold">Want to learn more about {section.title.toLowerCase()}?</h2>
            <p className="mb-6 opacity-90">
              Contact us today to discuss how our {section.title.toLowerCase()} can benefit your business.
            </p>
            <ContactButton
              className={`rounded-xl px-8 py-3 font-semibold transition-all hover:scale-105 ${
                section.style.theme === "dark"
                  ? "bg-black text-yellow-400 hover:bg-gray-900"
                  : section.style.theme === "minimal"
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Contact Now
            </ContactButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
