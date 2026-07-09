'use client'

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users, Calendar, Star } from "lucide-react"
import { careersData } from "@/data/careers-data"
import CarrerSubForm from "@/components/ui/carrer-sub-form"
import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants"






export default function CareersPage() {
  const featuredPositions = careersData.positions.filter((position) => position.featured)
  const allPositions = careersData.positions
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{careersData.hero.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{careersData.hero.subtitle}</p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">{careersData.hero.description}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {careersData.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
            <p className="text-lg text-gray-600">We offer more than just a job - we offer a career and a community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careersData.benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{careersData.culture.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{careersData.culture.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careersData.culture.values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Positions */}
      {featuredPositions.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Positions</h2>
              <p className="text-lg text-gray-600">High-priority roles we're actively hiring for</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPositions.map((position) => (
                <Card
                  key={position.id}
                  className="border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-900 mb-2">{position.title}</CardTitle>
                        <CardDescription className="text-gray-600">{position.department}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">{position.overview}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {position.salary}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        Posted {new Date(position.posted).toLocaleDateString()}
                      </div>
                      <Button asChild>
                        <Link href={`/careers/${position.id}`}>Apply Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Positions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Open Positions</h2>
            <p className="text-lg text-gray-600">Find the perfect role that matches your skills and interests</p>
          </div>

          <div className="space-y-6">
            {allPositions.map((position) => (
              <Card key={position.id} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                        {position.featured && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {position.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {position.salary}
                        </div>
                      </div>

                      <p className="text-gray-700">{position.overview}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <Button asChild>
                        <Link href={`/careers/${position.id}`}>View Details & Apply</Link>
                      </Button>
                      <div className="text-sm text-gray-500">
                        Posted {new Date(position.posted).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Perfect Role?</h2>
          <p className="text-xl mb-8">
            We're always looking for talented individuals. Send us your resume and tell us how you'd like to contribute.
          </p>
    <Button
  size="lg"
  variant="secondary"
  onClick={() => setOpen(true)}
>
  Submit General Application
</Button>

{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div className="relative w-[95%] max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl">

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute right-4 top-4 text-2xl font-bold  text-black hover:text-red-500"
      >
        ✕
      </button>

      <h2 className="mb-6 text-2xl font-bold">
        General Application
      </h2>

    <CarrerSubForm/>
   

    </div>
  </div>
)}
        </div>
      </section>
    </div>
  )
}
