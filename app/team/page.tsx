import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "Michael Thompson",
    position: "Managing Director & Founder",
    image: "/team-michael-thompson.png",
    experience: "20+ years",
    qualifications: ["Master Builder License", "MBA Construction Management", "HIA Member"],
    description:
      "Michael founded Trades Mates Building with a vision to deliver exceptional construction projects across Sydney and NSW. His extensive experience in both residential and commercial construction has established the company as a trusted name in the industry.",
    email: "michael@tradesmates.com.au",
    phone: "(02) 9876 5432",
    specialties: ["Project Leadership", "Client Relations", "Strategic Planning", "Quality Assurance"],
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Senior Project Manager",
    image: "/team-sarah-chen.png",
    experience: "15+ years",
    qualifications: ["PMP Certified", "Construction Management Degree", "Master Builders Member"],
    description:
      "Sarah oversees our largest commercial and residential projects, ensuring they're delivered on time and within budget. Her meticulous attention to detail and excellent communication skills make her invaluable to our team.",
    email: "sarah@tradesmates.com.au",
    phone: "(02) 9876 5433",
    specialties: ["Project Management", "Budget Control", "Timeline Management", "Client Communication"],
  },
  {
    id: 3,
    name: "David Rodriguez",
    position: "Head of Construction",
    image: "/team-david-rodriguez.png",
    experience: "18+ years",
    qualifications: ["Builder License NSW", "White Card", "First Aid Certified"],
    description:
      "David leads our on-site construction teams with expertise in both traditional and modern building techniques. His hands-on approach and commitment to safety ensure every project meets our high standards.",
    email: "david@tradesmates.com.au",
    phone: "(02) 9876 5434",
    specialties: ["Site Management", "Construction Techniques", "Team Leadership", "Quality Control"],
  },
  {
    id: 4,
    name: "Emma Wilson",
    position: "Senior Architect & Designer",
    image: "/team-emma-wilson.png",
    experience: "12+ years",
    qualifications: ["Registered Architect NSW", "Bachelor of Architecture", "Green Building Certified"],
    description:
      "Emma brings creative vision and technical expertise to every project. Her innovative designs and sustainable building practices help clients achieve their dream spaces while minimizing environmental impact.",
    email: "emma@tradesmates.com.au",
    phone: "(02) 9876 5435",
    specialties: ["Architectural Design", "Sustainable Building", "Planning Applications", "3D Visualization"],
  },
  {
    id: 5,
    name: "James Mitchell",
    position: "Safety & Compliance Officer",
    image: "/team-james-mitchell.png",
    experience: "10+ years",
    qualifications: ["Work Health & Safety Degree", "Construction Safety Certified", "Risk Management"],
    description:
      "James ensures all our projects maintain the highest safety standards and comply with NSW building regulations. His proactive approach to safety management protects our team and clients throughout every project.",
    email: "james@tradesmates.com.au",
    phone: "(02) 9876 5436",
    specialties: ["Safety Management", "Compliance", "Risk Assessment", "Training & Development"],
  },
  {
    id: 6,
    name: "Lisa Park",
    position: "Business Development Manager",
    image: "/team-lisa-park.png",
    experience: "8+ years",
    qualifications: ["Business Development Diploma", "Sales & Marketing Certified", "Customer Relations"],
    description:
      "Lisa works closely with clients from initial consultation through project completion. Her expertise in understanding client needs and translating them into actionable construction plans ensures exceptional customer satisfaction.",
    email: "lisa@tradesmates.com.au",
    phone: "(02) 9876 5437",
    specialties: ["Client Relations", "Business Development", "Sales Strategy", "Market Analysis"],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Expert Team</h1>
            <p className="text-xl md:text-2xl text-amber-100">
              Meet the professionals who bring your construction projects to life
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
              Experienced Professionals You Can Trust
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Our team combines decades of construction experience with modern expertise to deliver exceptional results
              for every project across Sydney and NSW.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-stone-600 text-sm mb-4">{member.experience} Experience</p>

                  <p className="text-stone-700 mb-4 text-sm leading-relaxed">{member.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-stone-900 mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-stone-900 mb-2 text-sm">Qualifications:</h4>
                    <ul className="text-xs text-stone-600 space-y-1">
                      {member.qualifications.map((qual, index) => (
                        <li key={index}>• {qual}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center text-stone-600 text-sm">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:text-amber-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-stone-600 text-sm">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href={`tel:${member.phone}`} className="hover:text-amber-600 transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Our Expert Team?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Get in touch today to discuss your construction project and see how our experienced professionals can bring
            your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Get Your Quote
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
