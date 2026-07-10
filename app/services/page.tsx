import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { servicesData } from "@/data/services-data"
import { Code, Smartphone, Cloud, GitBranch, Palette, ShoppingCart } from "lucide-react"

// Map of icon names to components
const iconMap = {
  Code: Code,
  Smartphone: Smartphone,
  Cloud: Cloud,
  GitBranch: GitBranch,
  Palette: Palette,
  ShoppingCart: ShoppingCart,
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb Section */}
      <section className="bg-white pt-24 pb-6">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Services" }]} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{servicesData.title}</h1>
            <p className="mx-auto mb-6 max-w-3xl text-xl text-gray-600">{servicesData.subtitle}</p>
            <p className="mx-auto max-w-3xl text-gray-600">{servicesData.description}</p>
          </div>

          <div className="mb-16 overflow-hidden rounded-lg">
            <Image
              src={servicesData.heroImage || "/placeholder.svg"}
              alt={servicesData.title}
              width={100}
              height={100}
              className="w-full object-cover"
            />
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.services.map((service) => {
              const IconComponent = iconMap[service.icon]

              return (
                <Link href={`/services/${service.id}`} key={service.id}>
                  <div className="h-full rounded-lg border border-gray-200 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                      {IconComponent && <IconComponent className="h-6 w-6" />}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="mb-2 text-3xl font-bold">{servicesData.contactCta.title}</h2>
              <p className="text-gray-300">{servicesData.contactCta.description}</p>
            </div>
            <Link
              href={servicesData.contactCta.buttonLink}
              className="rounded-md bg-white px-8 py-3 text-black transition-colors hover:bg-gray-200"
            >
              {servicesData.contactCta.buttonText}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
