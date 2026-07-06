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

export default function CarrerSubForm() {
 const params = useParams()

const jobId = params?.id as string | undefined

const position =
  careersData.positions.find((p) => p.id === jobId) || {
    title: "General Application",
  }

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
      
   

        
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
           

           

            {/* Application Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Apply for this Position</CardTitle>
                <CardDescription>
                  Fill out the form below to submit your application. We'll review it and get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="surname">Surname *</Label>
                      <Input
                        id="surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="comment">Why are you interested in this position? *</Label>
                    <Textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your interest in this role and what you can bring to our team..."
                    />
                  </div>

                  <div>
                    <Label>Upload CV/Resume *</Label>
                    <div className="mt-2">
                      {!uploadedFile ? (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Drag and drop your CV here, or click to browse</p>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="cv-upload"
                          />
                          <Button type="button" variant="outline" asChild>
                            <label htmlFor="cv-upload" className="cursor-pointer">
                              Choose File
                            </label>
                          </Button>
                          <p className="text-xs text-gray-500 mt-2">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-medium text-green-800">{uploadedFile.name}</span>
                            <span className="text-xs text-green-600">
                              ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={removeFile}
                            className="text-green-600 hover:text-green-800"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))
                      }
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the processing of my personal data and{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting || !formData.agreeToTerms || !uploadedFile}
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
        
       
     
    </div>
  )
}