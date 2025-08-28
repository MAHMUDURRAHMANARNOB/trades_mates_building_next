import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sydney-construction.png"
          alt="Construction site in Sydney"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Quality Construction & Renovation Services
            <span className="block text-amber-400">Across Sydney & NSW</span>
          </h1>

          <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-2xl">
            With over 15 years of experience, we craft lasting residential homes through expert new builds, renovations, repairs, and inspections, focusing on single-story properties.
            </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/quote">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold">
                Get Your Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                View Our Projects
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">15+</div>
              <div className="text-stone-200">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-stone-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-stone-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-stone-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
