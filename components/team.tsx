import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Michael Thompson",
    position: "Managing Director",
    image: "/team-michael-thompson.png",
    experience: "20+ years",
    description: "Leading construction projects with expertise and dedication to quality.",
  },
  {
    name: "Sarah Chen",
    position: "Senior Project Manager",
    image: "/team-sarah-chen.png",
    experience: "15+ years",
    description: "Ensuring projects are delivered on time and within budget.",
  },
  {
    name: "David Rodriguez",
    position: "Head of Construction",
    image: "/team-david-rodriguez.png",
    experience: "18+ years",
    description: "Overseeing construction operations with safety and quality focus.",
  },
  {
    name: "Emma Wilson",
    position: "Senior Architect",
    image: "/team-emma-wilson.png",
    experience: "12+ years",
    description: "Creating innovative designs that blend functionality with aesthetics.",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Our experienced professionals bring decades of combined expertise to every construction project across
            Sydney and NSW.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-2">{member.position}</p>
                <p className="text-stone-600 text-sm mb-3">{member.experience} Experience</p>
                <p className="text-stone-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/team">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              Meet the Full Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
