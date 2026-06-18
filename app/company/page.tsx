import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { companyData } from "@/data/company-data"

export default function CompanyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{companyData.title}</h1>
            <p className="mx-auto mb-6 max-w-3xl text-xl text-gray-600">{companyData.subtitle}</p>
            <p className="mx-auto max-w-3xl text-gray-600">{companyData.description}</p>
          </div>

          <div className="mb-16 overflow-hidden rounded-lg">
            <Image
              src={companyData.heroImage || "/placeholder.svg"}
              alt={companyData.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          {/* Company Sections Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {companyData.sections.map((section) => (
              <Link href={`/company/${section.id}`} key={section.id}>
                <div className="h-full rounded-lg border border-gray-200 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                  <h3 className="mb-3 text-xl font-semibold">{section.title}</h3>
                  <p className="mb-4 text-gray-600">{section.description}</p>
                  <div className="mt-auto">
                    <span className="text-sm font-medium text-black hover:underline">Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="mb-2 text-3xl font-bold">{companyData.contactCta.title}</h2>
              <p className="text-gray-300">{companyData.contactCta.description}</p>
            </div>
            <Link
              href={companyData.contactCta.buttonLink}
              className="rounded-md bg-white px-8 py-3 text-black transition-colors hover:bg-gray-200"
            >
              {companyData.contactCta.buttonText}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
