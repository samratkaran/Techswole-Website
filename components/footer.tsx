import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="mb-4 text-gray-600">
              We are a leading software development company specializing in custom solutions for businesses of all
              sizes.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/1JxenSAPoZ/?mibextid=wwXIfr" className="text-gray-400 hover:text-black">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://x.com/techswole_india" className="text-gray-400 hover:text-black">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-5 w-5"
>
  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.639 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932L18.901 1.153Zm-1.29 19.494h2.04L6.486 3.24H4.298L17.611 20.647Z" />
</svg>
                <span className="sr-only">X</span>
              </Link>
              <Link href="https://www.instagram.com/tech_swole?utm_source=qr" className="text-gray-400 hover:text-black">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/techswole/" className="text-gray-400 hover:text-black">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
           
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-gray-600 hover:text-black hover:underline">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-gray-600 hover:text-black hover:underline">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-gray-600 hover:text-black hover:underline">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="text-gray-600 hover:text-black hover:underline">
                  DevOps
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-gray-600 hover:text-black hover:underline">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about" className="text-gray-600 hover:text-black hover:underline">
                  About
                </Link>
              </li>
           
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-black hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-black hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <address className="not-italic">
              <a href="https://maps.app.goo.gl/fpsUR1wm8xU9hHAr7"  className="mb-2 text-gray-600">Unit 151, JMD Megapolis, </a>
              <a href="https://maps.app.goo.gl/fpsUR1wm8xU9hHAr7"  className="mb-2 text-gray-600">Sector 48, Gurugram (122018)</a>
             
              <p className="mb-2 text-gray-600">
                <a href="tel:+918826211177" className="hover:underline">
                  +91 8826211177
                </a>
              </p>
              <p className="text-gray-600">
                <a href="mailto:info@company.com" className="hover:underline">
                  infojrbtechswole@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Techswole. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
