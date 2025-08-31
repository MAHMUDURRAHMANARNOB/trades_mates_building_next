// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, MapPin } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// const featuredProjects = [
//   {
//     title: "Luxary Residential Home",
//     image: "/condell-park-project.jpg",
//     location: "Condell park, NSW",
//     description: "Laying a strong foundation for a new home in Condell Park, NSW",
//     category: "New Build",
//   },
//   {
//     title: "Project Inspection",
//     image: "/inspection-project.jpg",
//     location: "Condell park, NSW",
//     description: "Laying a strong foundation for a new home in Condell Park, NSW",
//     category: "New Build",
//   },
//   {
//     title: "Heritage Home Renovation",
//     location: "Paddington, NSW",
//     image: "/victorian-terrace-renovation-paddington.png",
//     description: "Complete restoration of Victorian-era terrace with modern amenities.",
//   },
// ]

// export default function FeaturedProjects() {
//   return (
//     <section className="py-20 bg-stone-100">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Featured Projects</h2>
//           <p className="text-xl text-stone-600 max-w-3xl mx-auto">
//             Explore some of our most successful construction projects across Sydney and NSW, showcasing our commitment
//             to quality and innovation.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {featuredProjects.map((project, index) => (
//             <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               <div className="relative h-64">
//                 <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-amber-900 mb-2">{project.title}</h3>
//                 <div className="flex items-center text-stone-600 mb-3">
//                   <MapPin className="h-4 w-4 mr-2" />
//                   <span className="text-sm">{project.location}</span>
//                 </div>
//                 <p className="text-stone-600">{project.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center">
//           <Link href="/projects">
//             <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
//               View All Projects
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"
import { motion, AnimatePresence, animate } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { act } from 'react'

const featuredProjects = [
  {
    title: "Luxury Residential Home",
    image: "/condell-park-project.jpg",
    location: "Condell Park, NSW",
    description: "Laying a strong foundation for a new home in Condell Park, NSW",
    category: "New Build",
  },
  {
    title: "Project Inspection",
    image: "/inspection-project.jpg",
    location: "Condell Park, NSW",
    description: "Inspection at the Condell Park new build, assessing progress, quality, and compliance with project standards.",
    category: "New Build",
  },
  {
    title: "Modern Home Renovation",
    location: "Sydney, NSW",
    image: "/images/project-3.png",
    description: "Complete Modern Living Room in Sydney, NSW",
  },
  {
    title: "Heritage Interior Design",
    location: "Sydney, NSW",
    image: "/images/project-4.png",
    description: "Complete Modern Living Room Interior in Sydney, NSW",
  },
  {
    title: "Excucive Interior Design",
    location: "Sydney, NSW",
    image: "/images/gallary/project-showcase-9.png",
    description: "Exclucive Living Room Interior in Sydney, NSW",
  },
  {
    title: "New Build Foundation Piling",
    location: "Sydney, NSW",
    image: "/images/home-build-piling.png",
    description: "Building a strong foundation for a new home in Sydney, NSW",
  },
]

export default function FeaturedProjects() {
  const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut" // Use a valid easing string
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut" // Use a valid easing string
    }
  }
};

  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-stone-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
            Featured Projects
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Discover our standout construction projects across Sydney and NSW, blending innovation with timeless craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                // variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden border-none bg-white shadow-lg rounded-2xl group">
                  <div className="relative h-72 overflow-hidden">
                    <Image 
                      src={project.image || "/placeholder.svg"} 
                      alt={project.title} 
                      fill 
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-stone-900 mb-3">{project.title}</h3>
                    <div className="flex items-center text-stone-500 mb-4">
                      <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/projects">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}