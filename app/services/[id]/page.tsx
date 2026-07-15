import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services } from "@/data/services"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ArrowLeft, Check } from "lucide-react"
import { ContactButton } from "@/components/contact-button"

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-white pt-24 pb-6">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container mx-auto px-4">

          <div className="mb-12">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{service.title}</h1>
            <p className="text-xl text-gray-600">{service.description}</p>
          </div>

          {/* Tags */}
          {service.tags && service.tags.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mb-12 overflow-hidden rounded-lg">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={300}
              height={300}
              className=" object-cover"
            />
          </div>

          {/* Overview */}
          <div className="mb-16">
            <p className="text-lg text-gray-600">{service.content.overview}</p>
          </div>

          {/* Dynamic Content Sections */}
          {service.content.sections.map((section, index) => (
            <div key={index} className="mb-16">
              <h2 className="mb-6 text-2xl font-semibold">{section.title}</h2>

              {/* Features Section */}
              {section.type === "features" && (
                <ul className="space-y-3">
                  {section.items.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Process Section */}
              {section.type === "process" && (
                <div>
                  <p className="mb-6 text-gray-600">{section.description}</p>
                  <div className="space-y-6">
                    {section.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex">
                        <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                          {stepIndex + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Section */}
              {section.type === "technologies" && (
                <div className="flex flex-wrap gap-2">
                  {section.items.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Comparison Section */}
              {section.type === "comparison" && (
                <div>
                  <p className="mb-6 text-gray-600">{section.description}</p>
                  <div className="grid gap-6 md:grid-cols-2">
                    {section.columns.map((column, columnIndex) => (
                      <div key={columnIndex} className="rounded-lg border border-gray-200 p-6">
                        <h3 className="mb-4 text-lg font-medium">{column.title}</h3>
                        <ul className="space-y-2">
                          {column.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <span className="mr-2 mt-1 text-black">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Providers Section */}
              {section.type === "providers" && (
                <div>
                  <p className="mb-6 text-gray-600">{section.description}</p>
                  <div className="grid gap-6 md:grid-cols-3">
                    {section.providers.map((provider, providerIndex) => (
                      <div key={providerIndex} className="rounded-lg border border-gray-200 p-6">
                        <h3 className="mb-2 text-lg font-medium">{provider.name}</h3>
                        <p className="text-gray-600">{provider.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Section */}
              {section.type === "custom" && <div dangerouslySetInnerHTML={{ __html: section.content }}></div>}
            </div>
          ))}

          {/* Contact Form */}
          <div className="mt-16 rounded-lg bg-gray-100 p-8">
            <h2 className="mb-6 text-2xl font-semibold text-center">Get Started with {service.title}</h2>
            <p className="mb-8 text-center text-gray-600">
              Ready to transform your business with our {service.title.toLowerCase()} services? Contact us today to
              discuss your project requirements.
            </p>

            <div className="text-center">
              <ContactButton className="rounded-md bg-black px-8 py-3 text-white transition-colors hover:bg-gray-800">
                Contact Now
              </ContactButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
