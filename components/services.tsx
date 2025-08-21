// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Home, Building2, Wrench, Factory } from "lucide-react"

// const services = [
//   {
//     icon: Home,
//     title: "Residential Construction",
//     description:
//       "Custom homes, renovations, and extensions built to the highest standards with attention to every detail.",
//   },
//   {
//     icon: Building2,
//     title: "Commercial Projects",
//     description: "Office buildings, retail spaces, and mixed-use developments designed for modern business needs.",
//   },
//   {
//     icon: Wrench,
//     title: "Project Management",
//     description: "End-to-end project coordination ensuring timely delivery, quality control, and budget management.",
//   },
//   {
//     icon: Factory,
//     title: "Industrial Construction",
//     description: "Warehouses, manufacturing facilities, and industrial complexes built for operational efficiency.",
//   },
// ]

// export default function Services() {
//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Our Services</h2>
//           <p className="text-xl text-stone-600 max-w-3xl mx-auto">
//             From concept to completion, we provide comprehensive construction services across Sydney and NSW with
//             unmatched expertise and reliability.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 border-stone-200">
//               <CardHeader>
//                 <div className="mx-auto bg-amber-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
//                   <service.icon className="h-10 w-10 text-amber-600" />
//                 </div>
//                 <CardTitle className="text-xl font-bold text-amber-900">{service.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-stone-600">{service.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Home, Wrench, Droplet, Search, Shield } from "lucide-react"

// const services = [
//   {
//     icon: Home,
//     title: "Residential Construction",
//     subItems: [
//       "Custom Home Building",
//       "New Home Construction",
//       "Home Extensions",
//     ],
//   },
//   {
//     icon: Wrench,
//     title: "Renovation Services",
//     subItems: [
//       "Kitchen and Bathroom Renovations",
//       "Interior and Exterior Upgrades",
//       "Living Space Redesign",
//     ],
//   },
//   {
//     icon: Droplet,
//     title: "Waterproofing Solutions",
//     subItems: [
//       "Basement and Foundation Waterproofing",
//       "Roof and Wall Sealing",
//       "Moisture Damage Prevention",
//     ],
//   },
//   {
//     icon: Search,
//     title: "Building Inspections",
//     subItems: [
//       "Pre-Purchase Property Inspections",
//       "Structural Integrity Checks",
//       "Safety and Compliance Audits",
//     ],
//   },
//   {
//     icon: Shield,
//     title: "Remedial Repairs",
//     subItems: [
//       "Crack and Damage Repairs",
//       "Restoration of Aged Structures",
//       "Weather Damage Restoration",
//     ],
//   },
//   {
//     icon: Wrench,
//     title: "Flooring Installation",
//     subItems: [
//       "Hardwood and Laminate Flooring",
//       "Tile and Stone Installation",
//       "Floor Repair and Refinishing",
//     ],
//   },
// ]

// export default function Services() {
//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Residential Services</h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//           Specializing in residential excellence across Sydney and NSW, we offer tailored construction, renovation, and maintenance services with precision, quality, and reliability.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {services.map((service, index) => (
//             <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
//               <CardHeader className="bg-amber-50 p-6 rounded-t-lg">
//                 <div className="mx-auto bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
//                   <service.icon className="h-8 w-8 text-amber-600" />
//                 </div>
//                 <CardTitle className="text-xl font-semibold text-amber-900">{service.title}</CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <ul className="text-gray-700 list-disc list-inside space-y-2">
//                   {service.subItems.map((item, idx) => (
//                     <li key={idx} className="text-base">{item}</li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Wrench, Droplet, Search, Shield, Briefcase, MapPin, Building } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    subItems: [
      "New Builds",
      "Custom Home Building",
      "New Home Construction",
      "Taileored to your budget and needs",
    ],
  },
  {
    icon: MapPin,
    title: "Planning and Surveying",
    subItems: [
      "Town Planning",
      "Surveying Services",
    ],
  },
  {
    icon: Wrench,
    title: "Renovation Services",
    subItems: [
      "Kitchen and Bathroom Renovations",
      "Interior and Exterior Upgrades",
      "Living Space Redesign",
      "Small-Scale Construction & Repairs",
      "Timber flooring +more"
    ],
  },
  // {
  //   icon: Building,
  //   title: "Certification and Design",
  //   subItems: [
  //     "Private Certifier (PC) Services",
  //     "Architectural Design",
  //   ],
  // },
  {
    icon: Search,
    title: "Building Inspections",
    subItems: [
      "Pre-Purchase Property Inspections",
      "Structural Integrity Checks",
      "Safety and Compliance Audits",
    ],
  },
  {
    icon: Shield,
    title: "Remedial Repairs",
    subItems: [
      "Crack and Damage Repairs",
      "Restoration of Aged Structures",
      "Weather Damage Restoration",
    ],
  },
  // {
  //   icon: Wrench,
  //   title: "Flooring Installation",
  //   subItems: [
  //     "Hardwood and Laminate Flooring",
  //     "Tile and Stone Installation",
  //     "Floor Repair and Refinishing",
  //   ],
  // },
  {
    icon: Briefcase,
    title: "Additional Services",
    subItems: [
      "Town Planner",
      "Surveyor",
      "Architect & Engineer",
      "Private Certifier",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Residential Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Specializing in residential excellence across Sydney and NSW, we offer tailored construction, renovation, and maintenance services with precision, quality, and reliability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
              <CardHeader className="bg-amber-50 p-6 rounded-t-lg">
                <div className="mx-auto bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-amber-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="text-gray-700 list-disc text-left px-4 space-y-2">
                  {service.subItems.map((item, idx) => (
                    <li key={idx} className="text-base">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}