import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Luxury Residential Complex - Bondi",
    location: "Bondi Beach, NSW",
    type: "Residential",
    completion: "2024",
    description: "50-unit luxury apartment complex with ocean views and sustainable design features.",
    image: "/bondi-apartments.png",
    features: ["Sustainable Design", "Ocean Views", "50 Units", "Premium Finishes"],
  },
  {
    id: 2,
    title: "Commercial Office Tower - Sydney CBD",
    location: "Sydney CBD, NSW",
    type: "Commercial",
    completion: "2023",
    description: "25-story office tower with state-of-the-art facilities and green building certification.",
    image: "/sydney-office-tower.png",
    features: ["25 Stories", "Green Certified", "Modern Facilities", "CBD Location"],
  },
  {
    id: 3,
    title: "Heritage Home Renovation - Paddington",
    location: "Paddington, NSW",
    type: "Renovation",
    completion: "2024",
    description: "Complete restoration of Victorian-era terrace house with modern amenities.",
    image: "/victorian-terrace-renovation-paddington.png",
    features: ["Heritage Listed", "Modern Amenities", "Victorian Era", "Complete Restoration"],
  },
  {
    id: 4,
    title: "Industrial Warehouse - Western Sydney",
    location: "Penrith, NSW",
    type: "Industrial",
    completion: "2023",
    description: "Large-scale warehouse facility with advanced logistics and distribution capabilities.",
    image: "/modern-warehouse-sydney.png",
    features: ["Large Scale", "Logistics Hub", "Advanced Systems", "Distribution Center"],
  },
  {
    id: 5,
    title: "Retail Shopping Center - Parramatta",
    location: "Parramatta, NSW",
    type: "Commercial",
    completion: "2024",
    description: "Modern shopping center with 80 retail spaces and community facilities.",
    image: "/parramatta-shopping-center.png",
    features: ["80 Retail Spaces", "Community Hub", "Modern Design", "Parking Facilities"],
  },
  {
    id: 6,
    title: "Residential Subdivision - Castle Hill",
    location: "Castle Hill, NSW",
    type: "Residential",
    completion: "2023",
    description: "120-home subdivision with parks, playgrounds, and sustainable infrastructure.",
    image: "/castle-hill-subdivision.png",
    features: ["120 Homes", "Parks & Recreation", "Sustainable Infrastructure", "Family Friendly"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl text-amber-100">Showcasing quality construction across Sydney and NSW</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-amber-600 text-white">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-stone-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center text-stone-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Completed {project.completion}</span>
                  </div>
                  <p className="text-stone-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
