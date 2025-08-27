import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  
  {
    id: 1,
    name: "Mariam M Harris",
    position: "Chief Executive Officer (CEO)",
    image: "/team-sarah-chen.png",
    experience: "15+ years",
    qualifications: ["BA Business Administration", "Leadership & Management Certified"],
    description:
      "Mariam leads the company’s strategic direction, ensuring every project is delivered on time, within budget, and to the highest client satisfaction. With over 15 years of leadership experience, she is dedicated to building strong client partnerships and driving sustainable business growth.",
    email: "mariam@tradesmates.com.au",
    phone: "(02) 9876 5438",
    specialties: ["Business Leadership", "Project Delivery", "Client Relations", "Strategic Growth"],
  },
  {
    id: 2,
    name: "Redwan Barbour",
    position: "Project Manager",
    image: "/team-david-rodriguez.png",
    experience: "18+ years",
    qualifications: ["Diploma in Project Management", "Construction Management Certificate"],
    description:
      "With 18+ years of construction management experience, Redwan oversees projects from planning through delivery, ensuring they are completed safely, efficiently, and to the highest quality standards. His strong leadership keeps operations running smoothly and on schedule.",
    email: "redwan@tradesmates.com.au",
    phone: "(02) 9876 5439",
    specialties: ["Project Coordination", "Team Management", "Quality Assurance", "Risk Control"],
  },
  {
    id: 4,
    name: "Hikam Razak",
    position: "Nominated Supervisor (Builder)",
    image: "/team-michael-thompson.png",
    experience: "20+ years",
    qualifications: ["Licensed Builder NSW", "Construction Supervision Certificate"],
    description:
      "Hikam brings over two decades of experience as a licensed builder, ensuring every project complies with regulations while meeting our high standards of craftsmanship. His leadership on-site guarantees safety, quality, and attention to detail in every build.",
    email: "hikam@tradesmates.com.au",
    phone: "(02) 9876 5441",
    specialties: ["Building Supervision", "Compliance", "Construction Quality", "Team Oversight"],
  },
  {
    id: 5,
    name: "Andrew Torrens",
    position: "Consultant",
    image: "/images/team/andrew_image.jpg",
    experience: "30+ years",
    qualifications: ["Business Administration Diploma", "Accounting Certificate", "Tendering & Contracts Specialist"],
    description:
      "Andrew brings over 30 years of experience in administration, accounts, and tender management. His precision and deep industry knowledge ensure smooth operations behind the scenes, supporting the successful delivery of projects.",
    email: "andrew@tradesmates.com.au",
    phone: "(02) 9876 5442",
    specialties: ["Accounts Management", "Tendering", "Administration", "Trade Coordination"],
  },
  {
    id: 6,
    name: "Mahmudur Rahman",
    position: "IT Manager",
    image: "/images/team/mahmudur-image.jpg",
    experience: "5+ years",
    qualifications: ["Bachelor of Information Technology", "Certified Network Specialist", "Cybersecurity Training"],
    description:
      "Mahmudur manages the company’s IT infrastructure, ensuring secure, reliable, and efficient systems across all departments. His expertise supports seamless communication, project tracking, and digital solutions that keep operations running smoothly.",
    email: "mahmudur@tradesmates.com.au",
    phone: "(02) 9876 5443",
    specialties: ["IT Systems Management", "Network Security", "Cloud Solutions", "Software Integration"],
  },
  {
    id: 3,
    name: "Wissam T Riman",
    position: "Civil Engineer",
    image: "/team-emma-wilson.png",
    experience: "10+ years",
    qualifications: ["Bachelor of Civil Engineering", "Chartered Engineer Membership"],
    description:
      "With 10+ years of engineering experience, Wissam ensures every project is built on strong foundations of safety, efficiency, and structural integrity. His technical precision supports the long-term durability and reliability of our builds.",
    email: "wissam@tradesmates.com.au",
    phone: "(02) 9876 5440",
    specialties: ["Structural Engineering", "Infrastructure Design", "Site Analysis", "Technical Problem-Solving"],
  },
];


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
