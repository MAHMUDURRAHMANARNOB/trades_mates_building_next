"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your enquiry! We'll get back to you within 24 hours.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get Your Quote</h1>
            <p className="text-xl md:text-2xl text-amber-100">
              Ready to start your construction project? Let's discuss your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-amber-900">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Phone</p>
                      <p className="text-stone-600">(02) 9876 5432</p>
                      <p className="text-stone-600">1800 TRADES</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Email</p>
                      <p className="text-stone-600">info@tradesmates.com.au</p>
                      <p className="text-stone-600">quotes@tradesmates.com.au</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Office</p>
                      <p className="text-stone-600">123 Construction Ave</p>
                      <p className="text-stone-600">Sydney NSW 2000</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-900">Business Hours</p>
                      <p className="text-stone-600">Mon-Fri: 7:00 AM - 6:00 PM</p>
                      <p className="text-stone-600">Sat: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-900">Project Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="(02) 1234 5678"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Project Type *</label>
                        <Select onValueChange={(value) => handleChange("projectType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential-new">New Residential Build</SelectItem>
                            <SelectItem value="residential-renovation">Home Renovation</SelectItem>
                            <SelectItem value="commercial-new">New Commercial Build</SelectItem>
                            <SelectItem value="commercial-renovation">Commercial Renovation</SelectItem>
                            <SelectItem value="industrial">Industrial Construction</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Project Location *</label>
                        <Input
                          required
                          value={formData.location}
                          onChange={(e) => handleChange("location", e.target.value)}
                          placeholder="Suburb, NSW"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Estimated Budget</label>
                        <Select onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-100k">Under $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                            <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                            <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                            <SelectItem value="discuss">Prefer to discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Preferred Timeline</label>
                      <Select onValueChange={(value) => handleChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When would you like to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1-3months">1-3 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6-12months">6-12 months</SelectItem>
                          <SelectItem value="planning">Still planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Project Description *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Please describe your project in detail, including any specific requirements, materials, or features you have in mind..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-semibold"
                    >
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
