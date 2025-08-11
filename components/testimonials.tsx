"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Bondi Beach, NSW",
    project: "Custom Home Build",
    rating: 5,
    text: "Trades Mates Building exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched. Our dream home became a reality thanks to their expertise.",
  },
  {
    name: "David Chen",
    location: "Sydney CBD, NSW",
    project: "Office Renovation",
    rating: 5,
    text: "Professional, reliable, and delivered on time. The team transformed our office space into a modern, functional environment that our employees love. Highly recommended!",
  },
  {
    name: "Emma Thompson",
    location: "Paddington, NSW",
    project: "Heritage Restoration",
    rating: 5,
    text: "The restoration of our Victorian terrace was handled with incredible care and expertise. They preserved the heritage character while adding modern conveniences perfectly.",
  },
  {
    name: "Michael Rodriguez",
    location: "Parramatta, NSW",
    project: "Commercial Development",
    rating: 5,
    text: "From planning to completion, Trades Mates Building managed our commercial project flawlessly. Their project management skills and quality workmanship are exceptional.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients across Sydney and NSW have to say about
            our work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-amber-600 mx-auto mb-6" />

                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-stone-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="border-t pt-6">
                  <div className="font-bold text-amber-900 text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-stone-600">
                    {testimonials[currentIndex].project} • {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-amber-600" : "bg-stone-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
