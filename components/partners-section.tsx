"use client"

import { InfiniteScroll } from "@/components/infinite-scroll"
import { useContactModal } from "@/context/contact-modal-context"

// Partner logos data - in a real implementation, you would use actual logo images
const partners = [
  { id: 1, name: "Microsoft" },
  { id: 2, name: "Google" },
  { id: 3, name: "Amazon" },
  { id: 4, name: "Apple" },
  { id: 5, name: "IBM" },
  { id: 6, name: "Oracle" },
  { id: 7, name: "Intel" },
  { id: 8, name: "Cisco" },
  { id: 9, name: "Adobe" },
  { id: 10, name: "Salesforce" },
  { id: 11, name: "SAP" },
  { id: 12, name: "Dell" },
  { id: 13, name: "HP" },
  { id: 14, name: "Nvidia" },
  { id: 15, name: "Samsung" },
  { id: 16, name: "Sony" },
  { id: 17, name: "LG" },
  { id: 18, name: "Lenovo" },
  { id: 19, name: "Huawei" },
  { id: 20, name: "Qualcomm" },
]

export function PartnersSection() {
  const { openModal } = useContactModal()

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Partners</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We collaborate with leading companies across industries to deliver exceptional solutions.
          </p>
        </div>

        <div className="mb-16">
          <InfiniteScroll speed={40} direction="right" className="py-8">
            <div className="flex items-center gap-12">
              {partners.slice(0, 10).map((partner) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 h-20 w-48 rounded-lg border border-gray-200 bg-white p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-xl font-bold text-gray-800">{partner.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </InfiniteScroll>

          <InfiniteScroll speed={30} direction="left" className="py-8">
            <div className="flex items-center gap-12">
              {partners.slice(10, 20).map((partner) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 h-20 w-48 rounded-lg border border-gray-200 bg-white p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-xl font-bold text-gray-800">{partner.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>

        <div className="text-center">
          <button
            onClick={openModal}
            className="rounded-md bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
          >
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  )
}
