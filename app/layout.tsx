import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FloatingContact } from "@/components/floating-contact"
import { ContactModalProvider } from "@/context/contact-modal-context"
import { ContactModal } from "@/components/contact-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Techswole - Innovative Software Solutions",
  description: "Modern Tech solutions for businesses",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactModalProvider>
          {children}
          <FloatingContact />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  )
}
