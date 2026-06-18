"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Star, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ContactButton } from "@/components/contact-button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

// Import the enhanced skills data
import { skillsNavigationData } from "@/data/skills-navigation-data"
import { services } from "@/data/services"
import { company } from "@/data/company"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className={cn("transition-all duration-300 ease-in-out bg-white shadow-md")}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logotech.png"
              alt="Company Logo"
              width={250}
              height={40}
             
            />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group relative h-10 px-4 text-base font-medium transition-colors hover:text-black data-[state=open]:text-black">
                  <span className="relative">
                    Services
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[800px]">
                    {services.map((service) => (
                      <NavigationMenuLink asChild key={service.title}>
                        <Link
                          href={`/services/${service.id}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500">{service.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Enhanced Skills Navigation */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group relative h-10 px-4 text-base font-medium transition-colors hover:text-black data-[state=open]:text-black">
                  <span className="relative">
                    Skills
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6 max-h-[80vh] overflow-y-auto">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Our Technical Expertise</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Explore our comprehensive skills across various technology domains
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      {skillsNavigationData.categories.map((category) => (
                        <div key={category.id} className="space-y-3">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-lg">{category.icon}</span>
                            <h4 className="font-semibold text-sm">{category.name}</h4>
                          </div>

                          <div className="space-y-2">
                            {category.technologies.slice(0, 4).map((tech) => (
                              <NavigationMenuLink asChild key={tech.id}>
                                <Link
                                  href={`/skills/technology/${tech.id}`}
                                  className="group flex items-center justify-between rounded-md p-2 text-sm transition-colors hover:bg-slate-100"
                                >
                                  <div className="flex items-center space-x-2">
                                    <span className="text-sm">{tech.icon}</span>
                                    <span className="font-medium">{tech.shortName}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-center space-x-1">
                                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                      <span className="text-xs text-gray-500">{tech.level}</span>
                                    </div>
                                    <ArrowRight className="h-3 w-3 text-gray-400" />
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}

                            {category.technologies.length > 4 && (
                              <Link
                                href={`/skills#${category.id}`}
                                className="block text-xs text-blue-600 hover:text-blue-800 font-medium pt-1"
                              >
                                View all {category.technologies.length} technologies →
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Need a specific technology?</p>
                          <p className="text-xs text-gray-500">We're always expanding our expertise</p>
                        </div>
                        <ContactButton size="sm" className="text-sm">
                          Discuss Your Project
                        </ContactButton>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="group relative h-10 px-4 text-base font-medium transition-colors hover:text-black data-[state=open]:text-black">
                  <span className="relative">
                    Company
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[800px]">
                    {company.map((item) => (
                      <NavigationMenuLink asChild key={item.title}>
                        <Link
                          href={`/company/${item.id}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500">{item.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/blog"
                  className="group relative inline-block h-10 px-4 py-3 text-base font-medium transition-colors hover:text-black"
                >
                  <span className="relative">
                    Blog
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/careers"
                  className="group relative inline-block h-10 px-4 py-3 text-base font-medium transition-colors hover:text-black"
                >
                  <span className="relative">
                    Careers
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:block">
            <ContactButton>Contact</ContactButton>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="group relative lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${mobileMenuOpen ? "rotate-180" : ""}`}
            />
            <span className="sr-only">Toggle menu</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Button>

          {mobileMenuOpen && (
            <div className="absolute left-0 right-0 top-full z-50 mt-2 bg-white p-4 shadow-lg lg:hidden">
              <div className="flex flex-col space-y-4">
                <Link href="/services" className="group relative py-2 text-base font-medium">
                  <span className="relative">
                    Services
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/skills" className="group relative py-2 text-base font-medium">
                  <span className="relative">
                    Skills
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/company" className="group relative py-2 text-base font-medium">
                  <span className="relative">
                    Company
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/blog" className="group relative py-2 text-base font-medium">
                  <span className="relative">
                    Blog
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/careers" className="group relative py-2 text-base font-medium">
                  <span className="relative">
                    Careers
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <ContactButton className="mt-2 w-full">Contact</ContactButton>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden border-t border-gray-200 bg-white py-2 lg:block">
        <div className="container mx-auto flex items-center justify-end px-4 text-sm text-gray-600">
          <div className="mr-6">
            <span>Phone: </span>
            <a href="tel:+1234567890" className="hover:underline">
              +91 8826211177
            </a>
          </div>
          <div>
            <span>Email: </span>
            <a href="mailto:info@company.com" className="hover:underline">
              info@
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}


