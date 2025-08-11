import { Badge } from "@/components/ui/badge"
import { Award, Users, Shield, Clock } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Multiple awards from Master Builders Australia and HIA for excellence in construction.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with decades of combined experience in construction and project management.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Complete licensing, insurance coverage, and compliance with all NSW building regulations.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Proven track record of completing projects on schedule and within budget constraints.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Why Choose Trades Mates Building?</h2>
            <p className="text-xl text-stone-600 mb-8">
              With over 15 years of experience serving Sydney and NSW, we've built our reputation on delivering
              exceptional construction projects that exceed expectations. Our commitment to quality, safety, and
              customer satisfaction sets us apart in the industry.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-3 py-1">
                Master Builders Australia Member
              </Badge>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-3 py-1">
                HIA Member
              </Badge>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-3 py-1">
                NSW Licensed Builder
              </Badge>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-3 py-1">
                Fully Insured
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                    <achievement.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">{achievement.title}</h3>
                    <p className="text-sm text-stone-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/sydney-construction-team.png"
              alt="Trades Mates Building team"
              width={500}
              height={600}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Successful Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
