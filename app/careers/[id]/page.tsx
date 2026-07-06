"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Star,
  ArrowLeft,
  Share2,
  Bookmark,
  Upload,
  FileText,
  X,
} from "lucide-react"
import { careersData } from "@/data/careers-data"
import CarrerSubForm from "@/components/ui/carrer-sub-form"


export default function JobApplicationPage() {
  const params = useParams()
  const jobId = params.id as string

  const position = careersData.positions.find((p) => p.id === jobId)

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    mobile: "",
    comment: "",
    agreeToTerms: false,
  })

  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!position) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Position Not Found</h1>
          <p className="text-gray-600 mb-6">The job position you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/careers">Back to Careers</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const sendData = new FormData()

    sendData.append("firstName", formData.firstName)
    sendData.append("surname", formData.surname)
    sendData.append("email", formData.email)
    sendData.append("mobile", formData.mobile)
    sendData.append("comment", formData.comment)

    // job title from current page
    sendData.append("jobTitle", position.title)

    // resume file
    if (uploadedFile) {
      sendData.append("resume", uploadedFile)
    }

    const response = await fetch("/api/career", {
      method: "POST",
      body: sendData,
    })

    const data = await response.json()

    if (data.success) {
      alert("Application submitted successfully")

      setFormData({
        firstName: "",
        surname: "",
        email: "",
        mobile: "",
        comment: "",
        agreeToTerms: false,
      })

      setUploadedFile(null)
    } else {
      alert("Failed to submit application")
    }
  } catch (error) {
    console.log(error)
    alert("Something went wrong")
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/careers" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-gray-900 mb-2">{position.title}</CardTitle>
                    <CardDescription className="text-lg">{position.department}</CardDescription>
                  </div>
                  {position.featured && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
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
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Deadline: {new Date(position.deadline).toLocaleDateString()}
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Job Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">{position.overview}</p>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {position.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Nice to Have</h3>
                  <ul className="space-y-2">
                    {position.niceToHave.map((skill, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Offer</h3>
                  <ul className="space-y-2">
                    {position.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Application Form */}
          <CarrerSubForm/>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-900">Department</div>
                  <div className="text-sm text-gray-600">{position.department}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Employment Type</div>
                  <div className="text-sm text-gray-600">{position.type}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Location</div>
                  <div className="text-sm text-gray-600">{position.location}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Salary Range</div>
                  <div className="text-sm text-gray-600">{position.salary}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Application Deadline</div>
                  <div className="text-sm text-gray-600">{new Date(position.deadline).toLocaleDateString()}</div>
                </div>
              </CardContent>
            </Card>

            {/* Required Skills */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Key Skills Required</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {position.requirements.slice(0, 6).map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill.split(" ").slice(0, 3).join(" ")}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Share & Save */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Share this Job</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Job
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save for Later
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about this position? Get in touch with our HR team.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact HR
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
