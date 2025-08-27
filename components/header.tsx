"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Hammer } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* <div className="bg-amber-600 p-2 rounded-lg"> */}
              <Image 
                src={"/tmb_logo.png"} 
                alt="Trades Mates Logo" 
                width={80} // Specify the width of your image in pixels
                height={80} // Specify the height of your image in pixels
                // You might also add 'className' here for styling the image itself if needed
              />
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-stone-700 hover:text-amber-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-stone-700 hover:text-amber-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/#services" className="text-stone-700 hover:text-amber-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-stone-700 hover:text-amber-600 font-medium transition-colors">
              Projects
            </Link>
            <Link href="/team" className="text-stone-700 hover:text-amber-600 font-medium transition-colors">
              Our Team
            </Link>
            
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/quote">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 font-semibold">
                Get Your Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-stone-700 hover:text-amber-600 font-medium">
                Home
              </Link>
              <Link href="#about" className="text-stone-700 hover:text-amber-600 font-medium">
                About
              </Link>
              <Link href="#services" className="text-stone-700 hover:text-amber-600 font-medium">
                Services
              </Link>
              <Link href="/projects" className="text-stone-700 hover:text-amber-600 font-medium">
                Projects
              </Link>
              <Link href="/team" className="text-stone-700 hover:text-amber-600 font-medium">
                Our Team
              </Link>
              <Link href="#contact" className="text-stone-700 hover:text-amber-600 font-medium">
                Contact
              </Link>
              <Link href="/quote" className="pt-2">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">Get Your Quote</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
