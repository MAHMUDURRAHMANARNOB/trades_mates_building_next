import Link from "next/link"
import { Hammer, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-600 p-2 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Trades Mates</h3>
                <p className="text-amber-200 text-sm">Building Excellence</p>
              </div>
            </div>
            <p className="text-amber-100 mb-4">
              Quality construction services across Sydney and NSW. Building your dreams with expertise and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-amber-100">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Renovations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Industrial Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-amber-100">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white transition-colors">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-amber-100">
              <p>
                123 Construction Ave
                <br />
                Sydney NSW 2000
              </p>
              <p>
                Phone: (02) 9876 5432
                <br />
                Toll Free: 1800 TRADES
              </p>
              <p>Email: info@tradesmates.com.au</p>
              <p className="text-sm">
                <strong>License:</strong> NSW 123456
                <br />
                <strong>ABN:</strong> 12 345 678 901
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Trades Mates Building. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-amber-200">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
