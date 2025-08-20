import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Luxary Residential Home",
    image: "/condell-park-project.jpg",
    location: "Condell park, NSW",
    description: "Laying a strong foundation for a new home in Condell Park, NSW",
    category: "New Build",
  },
  {
    title: "Project Inspection",
    image: "/inspection-project.jpg",
    location: "Condell park, NSW",
    description: "Laying a strong foundation for a new home in Condell Park, NSW",
    category: "New Build",
  },
  {
    title: "Heritage Home Renovation",
    location: "Paddington, NSW",
    image: "/victorian-terrace-renovation-paddington.png",
    description: "Complete restoration of Victorian-era terrace with modern amenities.",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Explore some of our most successful construction projects across Sydney and NSW, showcasing our commitment
            to quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{project.title}</h3>
                <div className="flex items-center text-stone-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <p className="text-stone-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
