"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useContactModal } from "@/context/contact-modal-context"

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Managing Director, Nexus Realty India",
    content:
      "Their team delivered a modern and intuitive digital experience that significantly improved our online presence. Their attention to detail and commitment to quality made the entire process smooth and efficient.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Anderson",
    role: "CEO, Vertex Solutions USA",
    content:
      "We were impressed by their professionalism and technical expertise. The solutions they implemented streamlined our operations and helped us build a stronger connection with our customers.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Ahmed Al Mansoori",
    role: "Operations Director, Emirates Holdings UAE",
    content:
      "Working with this team was an outstanding experience. They understood our requirements from day one and delivered results that exceeded our expectations in every aspect.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Fatima Al Nahyan",
    role: "General Manager, Gulf Horizon Group UAE",
    content:
      "Their innovative approach and dedication to excellence helped us modernize our digital infrastructure. We highly appreciate their professionalism and timely delivery.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { openModal } = useContactModal()

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white p-8 shadow-lg"
            >
              <div className="mb-6 flex justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-6 text-center text-lg italic text-gray-700">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div className="flex items-center justify-center">
              
                <div>
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-colors hover:bg-gray-800"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-colors hover:bg-gray-800"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots indicator */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 mx-auto max-w-2xl text-gray-600">
            Ready to join our satisfied clients? Let's discuss your project and see how we can help you achieve similar
            results.
          </p>
          <button
            onClick={openModal}
            className="rounded-md bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  )
}
