import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import FeaturedProjects from "@/components/featured-projects"
import About from "@/components/about"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <Services />
      <FeaturedProjects />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
