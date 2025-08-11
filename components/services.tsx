import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building2, Wrench, Factory } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Custom homes, renovations, and extensions built to the highest standards with attention to every detail.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and mixed-use developments designed for modern business needs.",
  },
  {
    icon: Wrench,
    title: "Project Management",
    description: "End-to-end project coordination ensuring timely delivery, quality control, and budget management.",
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    description: "Warehouses, manufacturing facilities, and industrial complexes built for operational efficiency.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Our Services</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive construction services across Sydney and NSW with
            unmatched expertise and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 border-stone-200">
              <CardHeader>
                <div className="mx-auto bg-amber-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <service.icon className="h-10 w-10 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-bold text-amber-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
