"use client"

import { Header } from "@/components/header"
import Image from "next/image";
import logotech from "@/public/logotech.png"
import { WavyBackground } from "@/components/ui/wavy-background";
import { OverviewSection } from "@/components/overview-section"
import { ServicesSection } from "@/components/services-section"
import { EnhancedSkillsSection } from "@/components/enhanced-skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnersSection } from "@/components/partners-section"
import { TeamSection } from "@/components/team-section"
import { NewsBlogsSection } from "@/components/news-blogs-section"
import { ContactForm } from "@/components/contact-form"
import { useContactModal } from "@/context/contact-modal-context"


export function MainContent() {
  const { openModal } = useContactModal()

  return (
    <>
      <Header />

      {/* Hero Section - White Background */}
    
      <section className=" h-[100vh] w-[100%] flex justify-center items-center">
       
         <WavyBackground className="mx-auto text-center px-4">
    <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl text-white">
      Innovative Software Solutions
    </h1>

    <p className="mb-8 max-w-3xl mx-auto text-xl text-gray-200">
      We build cutting-edge software that transforms businesses and drives growth.
      Our team of experts delivers custom solutions tailored to your needs.
    </p>

    <div className="flex justify-center">
      <button
        onClick={openModal}
        className=" relative rounded-md bg-white px-8 py-3 text-black  hover:bg-blue-900 hover:text-white"
      >
        <span className="relative z-10">Get in Touch</span>
        <span className="absolute bottom-0 left-0 h-0 w-full bg-gray-700 transition-all duration-300 group-hover:h-full"></span>
      </button>
    </div>
  </WavyBackground>
       
      </section>
    

      {/* Overview Section - White Background */}
      <OverviewSection />

      {/* Services Section - Black Background */}
      <ServicesSection />

      {/* About Section - White Background */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <h2 className="mb-6 text-4xl font-bold">About Our Company</h2>
              <p className="mb-4 text-gray-600">
               Founded in 2017, our company has been dedicated to delivering innovative software solutions that empower businesses to grow and succeed in the digital era. Over the years, we have partnered with clients across various industries, helping them streamline operations and achieve their business goals through technology.



              </p>
              <p className="mb-6 text-gray-600">
                Our team of skilled developers, designers, and strategists collaborates to build high-quality, scalable, and user-centric solutions. With a strong focus on innovation, reliability, and client satisfaction, we strive to create digital experiences that drive long-term success.
              </p>
              <button
                onClick={openModal}
                className="rounded-md bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
              >
                Learn More About Us
              </button>
            </div>
            <div className="w-full lg:w-1/2">
            <div className="aspect-square overflow-hidden ">
              <div className="flex h-full items-center justify-center ">
     <Image
      src={logotech}
      alt="Hero image"
      width={1200}
      height={600}
    />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section - White Background */}
      <div id="skills">
        <EnhancedSkillsSection />
      </div>

      {/* Experience Section - Black Background */}
      <ExperienceSection />

      {/* Testimonials Section - Black Background */}
      <TestimonialsSection />

      {/* Partners Section - White Background */}
      <PartnersSection />

      {/* Team Section - Black Background */}
      <TeamSection />

      {/* News and Blogs Section - White Background */}
      <NewsBlogsSection />

      {/* Contact Section - White Background */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Get In Touch</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Ready to start your project? Contact us today to discuss how we can help you achieve your goals.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
