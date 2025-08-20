// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { MapPin, Calendar } from "lucide-react"
// import Image from "next/image"

// const projects = [
//   {
//     id: 1,
//     title: "Luxury Residential Villa",
//     location: "Condell Park, NSW",
//     type: "Residential",
//     completion: "2024",
//     description: "50-unit luxury apartment complex with ocean views and sustainable design features.",
//     image: "/bondi-apartments.png",
//     features: ["Sustainable Design", "Ocean Views", "50 Units", "Premium Finishes"],
//   },
//   {
//     id: 2,
//     title: "Commercial Office Tower - Sydney CBD",
//     location: "Sydney CBD, NSW",
//     type: "Commercial",
//     completion: "2023",
//     description: "25-story office tower with state-of-the-art facilities and green building certification.",
//     image: "/sydney-office-tower.png",
//     features: ["25 Stories", "Green Certified", "Modern Facilities", "CBD Location"],
//   },
//   {
//     id: 3,
//     title: "Heritage Home Renovation - Paddington",
//     location: "Paddington, NSW",
//     type: "Renovation",
//     completion: "2024",
//     description: "Complete restoration of Victorian-era terrace house with modern amenities.",
//     image: "/victorian-terrace-renovation-paddington.png",
//     features: ["Heritage Listed", "Modern Amenities", "Victorian Era", "Complete Restoration"],
//   },
//   {
//     id: 4,
//     title: "Industrial Warehouse - Western Sydney",
//     location: "Penrith, NSW",
//     type: "Industrial",
//     completion: "2023",
//     description: "Large-scale warehouse facility with advanced logistics and distribution capabilities.",
//     image: "/modern-warehouse-sydney.png",
//     features: ["Large Scale", "Logistics Hub", "Advanced Systems", "Distribution Center"],
//   },
//   {
//     id: 5,
//     title: "Retail Shopping Center - Parramatta",
//     location: "Parramatta, NSW",
//     type: "Commercial",
//     completion: "2024",
//     description: "Modern shopping center with 80 retail spaces and community facilities.",
//     image: "/parramatta-shopping-center.png",
//     features: ["80 Retail Spaces", "Community Hub", "Modern Design", "Parking Facilities"],
//   },
//   {
//     id: 6,
//     title: "Residential Subdivision - Castle Hill",
//     location: "Castle Hill, NSW",
//     type: "Residential",
//     completion: "2023",
//     description: "120-home subdivision with parks, playgrounds, and sustainable infrastructure.",
//     image: "/castle-hill-subdivision.png",
//     features: ["120 Homes", "Parks & Recreation", "Sustainable Infrastructure", "Family Friendly"],
//   },
// ]

// export default function ProjectsPage() {
//   return (
//     <div className="min-h-screen bg-stone-50">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
//             <p className="text-xl md:text-2xl text-amber-100">Showcasing quality construction across Sydney and NSW</p>
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project) => (
//               <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64">
//                   <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
//                   <div className="absolute top-4 left-4">
//                     <Badge variant="secondary" className="bg-amber-600 text-white">
//                       {project.type}
//                     </Badge>
//                   </div>
//                 </div>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold text-amber-900 mb-2">{project.title}</h3>
//                   <div className="flex items-center text-stone-600 mb-2">
//                     <MapPin className="h-4 w-4 mr-2" />
//                     <span className="text-sm">{project.location}</span>
//                   </div>
//                   <div className="flex items-center text-stone-600 mb-4">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     <span className="text-sm">Completed {project.completion}</span>
//                   </div>
//                   <p className="text-stone-700 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.features.map((feature, index) => (
//                       <Badge key={index} variant="outline" className="text-xs">
//                         {feature}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, HardHat, PaintRoller } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    src: "/images/new-build.jpg",
    alt: "Workers building a residential home foundation",
    caption: "Laying a strong foundation for a new home in Condell Park, NSW",
    category: "New Build",
  },
  {
    id: 2,
    src: "/images/home-renovation.jpg",
    alt: "Renovation of a kitchen in a residential home",
    caption: "Modernizing a kitchen space in Baulkham Hills, NSW",
    category: "Renovation",
  },
  {
    id: 3,
    src: "/images/inspection.jpeg",
    alt: "Inspector reviewing construction work",
    caption: "Thorough inspection ensuring quality in Castle Hill, NSW",
    category: "Inspection",
  },
  {
    id: 4,
    src: "/images/home-repair.jpeg",
    alt: "Repairing exterior of a home",
    caption: "Restoring exterior charm in Blacktown, NSW",
    category: "Repair",
  },
]

const extendedGalleryImages = [
  {
    id: 5,
    src: "/images/gallary/1.jpeg",
    alt: "Framing a new single-story home",
    category: "New Build",
  },
  {
    id: 6,
    src: "/images/gallary/2.jpeg",
    alt: "Renovating a modern bathroom",
    category: "Renovation",
  },
  {
    id: 7,
    src: "/images/gallary/3.jpeg",
    alt: "Repairing a residential roof",
    category: "Repair",
  },
  {
    id: 8,
    src: "/images/gallary/4.jpeg",
    alt: "Building an extension to a home",
    category: "Renovation",
  },
  {
    id: 9,
    src: "/images/gallary/5.jpeg",
    alt: "Preparing a site for new construction",
    category: "New Build",
  },
  {
    id: 10,
    src: "/images/gallary/6.jpeg",
    alt: "Final inspection of a completed home",
    category: "Inspection",
  },
  {
    id: 11,
    src: "/images/gallary/7.jpeg",
    alt: "Installing a new kitchen",
    category: "Renovation",
  },
  {
    id: 12,
    src: "/images/gallary/8.jpeg",
    alt: "Painting the exterior of a home",
    category: "Repair",
  },
  {
    id: 13,
    src: "/images/gallary/9.jpeg",
    alt: "Laying foundation for a new home",
    category: "New Build",
  },
  {
    id: 14,
    src: "/images/gallary/10.jpeg",
    alt: "Finishing interior walls",
    category: "Renovation",
  },
  
]

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[number]>(null)

  const openLightbox = (image: typeof galleryImages[number]) => setSelectedImage(image)
  const closeLightbox = () => setSelectedImage(null)

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Work in Progress</h1>
            <p className="text-lg md:text-xl text-amber-100">
              With over 15 years of experience, we craft lasting residential homes through expert new builds, renovations, repairs, and inspections, focusing on single-story properties.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-amber-600 text-white">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-stone-700">{image.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-stone-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Lightbulb className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Planning & Design</h3>
              <p className="text-stone-700">
                Collaborating with clients to create tailored plans for new builds and renovations, ensuring every detail aligns with their vision.
              </p>
            </Card>
            <Card className="text-center p-6">
              <HardHat className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Expert Construction</h3>
              <p className="text-stone-700">
                Delivering high-quality craftsmanship with a focus on single-story residential projects, built to last.
              </p>
            </Card>
            <Card className="text-center p-6">
              <PaintRoller className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Finishing & Inspection</h3>
              <p className="text-stone-700">
                Completing projects with precision and conducting thorough inspections to ensure excellence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Extended Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-6 gap-4">
            {extendedGalleryImages.map((image) => (
              <div
                key={image.id}
                className="relative mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                // onClick={() => openLightbox(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                />
                {/* <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-amber-600 text-white text-xs">
                    {image.category}
                  </Badge>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full p-4">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-auto"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
            <button
              className="absolute top-2 right-2 text-white bg-amber-600 rounded-full p-2"
              onClick={closeLightbox}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}