"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const images = [
    "/images/hero/sydney-construction-1.jpg",
    "/images/hero/sydney-construction-2.jpg",
    "/images/hero/sydney-construction-3.jpg",
    "/images/hero/hero-image-1.png",
    "/images/hero/hero-image-2.png",
    "/images/hero/hero-image-3.png",
    "/images/hero/hero-image-4.png",
    "/images/hero/hero-image-5.png",
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grey-900">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 ">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt={`Construction site ${currentImage + 1} in Sydney`}
              fill
              className="object-cover"
              priority={currentImage === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <Image
              src="/tmb_logo.png"
              alt="Trades Mates Building Logo"
              width={150}
              height={150}
              className="drop-shadow-lg rounded-lg"
            />
          </motion.div>

          {/* Company Name and Tagline */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight"
          >
            Trades Mates Building
            <span className="block text-amber-400 mt-2 text-4xl sm:text-5xl md:text-6xl">
              Crafting Your Dream Home
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-stone-100 mb-10 max-w-3xl mx-auto"
          >
            With over 15 years of expertise, we deliver exceptional residential homes through new builds, renovations, and inspections across Sydney & NSW.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/quote">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Projects
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-stone-100 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
