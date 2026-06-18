"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useContactModal } from "@/context/contact-modal-context"
import { ContactForm } from "@/components/contact-form"

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal()

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      // Restore scrolling when modal is closed
      document.body.style.overflow = "auto"
    }
  }, [isOpen, closeModal])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-80 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal - Centered perfectly on all devices */}
         
           <motion.div
            className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-2xl"
            
           initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-700 transition-colors hover:bg-gray-200 hover:text-black"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 text-center">
              <h2 className="mb-2 text-2xl font-bold">Contact Us</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <ContactForm onSuccess={closeModal} />
          </motion.div>
        
        </>
      )}
    </AnimatePresence>
  )
}