// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight, Play } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion"
// import { useState, useEffect } from "react"

// export default function Hero() {
//   const images = [
//     "/images/hero/sydney-construction-1.jpg",
//     "/images/hero/sydney-construction-2.jpg",
//     "/images/hero/sydney-construction-3.jpg",
//     "/images/hero/hero-image-1.png",
//     "/images/hero/hero-image-2.png",
//     "/images/hero/hero-image-3.png",
//     "/images/hero/hero-image-4.png",
//     "/images/hero/hero-image-5.png",
//   ]

//   const [currentImage, setCurrentImage] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [images.length])

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-grey-900">
//       {/* Background Image Carousel */}
//       <div className="absolute inset-0 z-0 ">
//         <AnimatePresence>
//           <motion.div
//             key={currentImage}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={images[currentImage]}
//               alt={`Construction site ${currentImage + 1} in Sydney`}
//               fill
//               className="object-cover"
//               priority={currentImage === 0}
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto text-center">
//           {/* Logo */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="mb-8 flex justify-center"
//           >
//             <Image
//               src="/tmb_logo.png"
//               alt="Trades Mates Building Logo"
//               width={150}
//               height={150}
//               className="drop-shadow-lg rounded-lg"
//             />
//           </motion.div>

//           {/* Company Name and Tagline */}
//           <motion.h1
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight"
//           >
//             Trades Mates Building
//             <span className="block text-amber-400 mt-2 text-4xl sm:text-5xl md:text-6xl">
//               Crafting Your Dream Home
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg sm:text-xl md:text-2xl text-stone-100 mb-10 max-w-3xl mx-auto"
//           >
//             With over 15 years of expertise, we deliver exceptional residential homes through new builds, renovations, and inspections across Sydney & NSW.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//           >
//             <Link href="/quote">
//               <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Get Your Free Quote
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Link href="/projects">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-300 transform hover:scale-105"
//               >
//                 Explore Our Projects
//                 <Play className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
//           >
//             {[
//               { value: "15+", label: "Years Experience" },
//               { value: "500+", label: "Projects Completed" },
//               { value: "100%", label: "Client Satisfaction" },
//               { value: "24/7", label: "Support Available" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
//               >
//                 <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
//                 <div className="text-stone-100 text-sm sm:text-base">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight, Play } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { useState } from "react"

// export default function Hero() {
//   const images = [
//     { src: "/images/hero/sydney-construction-1.jpg", alt: "Sydney construction site 1" },
//     { src: "/images/hero/sydney-construction-2.jpg", alt: "Sydney construction site 2" },
//     { src: "/images/hero/sydney-construction-3.jpg", alt: "Sydney construction site 3" },
//     { src: "/images/hero/hero-image-1.png", alt: "Modern residential home 1" },
//     { src: "/images/hero/hero-image-2.png", alt: "Modern residential home 2" },
//     { src: "/images/hero/hero-image-3.png", alt: "Modern residential home 3" },
//     { src: "/images/hero/hero-image-4.png", alt: "Modern residential home 4" },
//     { src: "/images/hero/hero-image-5.png", alt: "Modern residential home 5" },
//   ]

//   const [isLoaded, setIsLoaded] = useState(false)

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-grey-900">
//       {/* Background Image Carousel */}
//       <div className="absolute inset-0 z-0">
//         <Carousel
//           autoPlay
//           infiniteLoop
//           interval={4000}
//           transitionTime={1000}
//           showArrows={false}
//           showStatus={false}
//           showThumbs={false}
//           showIndicators={true}
//           stopOnHover={false}
//           dynamicHeight={false}
//           emulateTouch
//           onChange={() => setIsLoaded(true)}
//         >
//           {images.map((image, index) => (
//             <div key={index} className="relative w-full h-screen">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 fill
//                 className="object-cover object-center"
//                 priority={index === 0}
//                 quality={85}
//                 onLoad={() => setIsLoaded(true)}
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 transition-opacity duration-1000" />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto text-center">
//           {/* Logo */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: isLoaded ? 1 : 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="mb-8 flex justify-center"
//           >
//             <Image
//               src="/tmb_logo.png"
//               alt="Trades Mates Building Logo"
//               width={150}
//               height={150}
//               className="drop-shadow-lg rounded-lg"
//               priority
//             />
//           </motion.div>

//           {/* Company Name and Tagline */}
//           <motion.h1
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight"
//           >
//             Trades Mates Building
//             <span className="block text-amber-400 mt-2 text-4xl sm:text-5xl md:text-6xl">
//               Crafting Your Dream Home
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg sm:text-xl md:text-2xl text-stone-100 mb-10 max-w-3xl mx-auto"
//           >
//             With over 15 years of expertise, we deliver exceptional residential homes through new builds, renovations, and inspections across Sydney & NSW.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//           >
//             <Link href="/quote">
//               <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Get Your Free Quote
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Link href="/projects">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-300 transform hover:scale-105"
//               >
//                 Explore Our Projects
//                 <Play className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
//           >
//             {[
//               { value: "15+", label: "Years Experience" },
//               { value: "500+", label: "Projects Completed" },
//               { value: "100%", label: "Client Satisfaction" },
//               { value: "24/7", label: "Support Available" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: isLoaded ? 1 : 0 }}
//                 transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
//               >
//                 <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
//                 <div className="text-stone-100 text-sm sm:text-base">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight, Play, Pause } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { useState, useCallback } from "react"

// export default function Hero() {
//   const images = [
//     { src: "/images/hero/sydney-construction-1.jpg", alt: "Sydney construction site 1" },
//     { src: "/images/hero/sydney-construction-2.jpg", alt: "Sydney construction site 2" },
//     { src: "/images/hero/sydney-construction-3.jpg", alt: "Sydney construction site 3" },
//     { src: "/images/hero/hero-image-1.png", alt: "Modern residential home 1" },
//     { src: "/images/hero/hero-image-2.png", alt: "Modern residential home 2" },
//     { src: "/images/hero/hero-image-3.png", alt: "Modern residential home 3" },
//     { src: "/images/hero/hero-image-4.png", alt: "Modern residential home 4" },
//     { src: "/images/hero/hero-image-5.png", alt: "Modern residential home 5" },
//   ]

//   const [isPlaying, setIsPlaying] = useState(true)
//   const [isLoaded, setIsLoaded] = useState(false)

//   const togglePlay = useCallback(() => {
//     setIsPlaying((prev) => !prev)
//   }, [])

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
//       {/* Background Image Carousel */}
//       <div className="absolute inset-0 z-0">
//         <Carousel
//           autoPlay={isPlaying}
//           infiniteLoop
//           interval={4000}
//           transitionTime={800}
//           showArrows={true}
//           showStatus={false}
//           showThumbs={false}
//           showIndicators={true}
//           stopOnHover={true}
//           dynamicHeight={false}
//           emulateTouch
//           onChange={() => setIsLoaded(true)}
//           ariaLabel="Background image carousel"
//           className="h-full"
//         >
//           {images.map((image, index) => (
//             <div key={index} className="relative w-full h-screen">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 fill
//                 className="object-cover object-center transform scale-110 transition-transform duration-1000 ease-out"
//                 priority={index === 0}
//                 quality={80}
//                 onLoad={() => setIsLoaded(true)}
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
//             </div>
//           ))}
//         </Carousel>
//         {/* Carousel Controls */}
//         <button
//           onClick={togglePlay}
//           className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-amber-600/80 hover:bg-amber-700/80 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
//           aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
//         >
//           {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
//         </button>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center bg-black/20 backdrop-blur-lg py-12 px-8 rounded-2xl shadow-xl">
//           {/* Logo */}
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: isLoaded ? 1 : 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="mb-6 flex justify-center"
//           >
//             <Image
//               src="/tmb_logo.png"
//               alt="Trades Mates Building Logo"
//               width={180}
//               height={180}
//               className="drop-shadow-[0_0_10px_rgba(255,200,0,0.5)] rounded-lg"
//               priority
//             />
//           </motion.div>

//           {/* Company Name and Tagline */}
//           <motion.h1
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-md font-sans"
//           >
//             Trades Mates Building
//             <span className="block text-amber-400 mt-2 text-3xl sm:text-4xl md:text-5xl">
//               Crafting Your Dream Home
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-base sm:text-lg md:text-xl text-stone-100 mb-8 max-w-2xl mx-auto"
//           >
//             Over 15 years of expertise delivering exceptional residential homes through new builds, renovations, and inspections across Sydney & NSW.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
//           >
//             <Link href="/quote">
//               <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
//                 Get Your Free Quote
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Link href="/projects">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-3 text-lg font-semibold rounded-full bg-transparent transition-all duration-300 transform hover:scale-105"
//               >
//                 Explore Our Projects
//                 <Play className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: isLoaded ? 1 : 0 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
//           >
//             {[
//               { value: "15+", label: "Years Experience" },
//               { value: "500+", label: "Projects Completed" },
//               { value: "100%", label: "Client Satisfaction" },
//               { value: "24/7", label: "Support Available" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: isLoaded ? 1 : 0 }}
//                 transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
//               >
//                 <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">{stat.value}</div>
//                 <div className="text-stone-200 text-xs sm:text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Custom CSS for Parallax and Arrow Styling */}
//       <style jsx>{`
//         .carousel .control-arrow {
//           background: rgba(0, 0, 0, 0.5) !important;
//           border-radius: 50%;
//           padding: 10px;
//           margin: 0 20px;
//           transition: background 0.3s ease;
//         }
//         .carousel .control-arrow:hover {
//           background: rgba(0, 0, 0, 0.7) !important;
//         }
//         .carousel .control-dots .dot {
//           background: #fff !important;
//           opacity: 0.5;
//           box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
//         }
//         .carousel .control-dots .dot.selected {
//           opacity: 1;
//           background: #f59e0b !important;
//         }
//       `}</style>
//     </section>
//   )
// }

// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight, Play, Pause } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { useState, useCallback } from "react"

// export default function Hero() {
//   const images = [
//     { src: "/images/hero/sydney-construction-1.jpg", alt: "Sydney construction site 1" },
//     { src: "/images/hero/sydney-construction-2.jpg", alt: "Sydney construction site 2" },
//     { src: "/images/hero/sydney-construction-3.jpg", alt: "Sydney construction site 3" },
//     { src: "/images/hero/hero-image-1.png", alt: "Modern residential home 1" },
//     { src: "/images/hero/hero-image-2.png", alt: "Modern residential home 2" },
//     { src: "/images/hero/hero-image-3.png", alt: "Modern residential home 3" },
//     { src: "/images/hero/hero-image-4.png", alt: "Modern residential home 4" },
//     { src: "/images/hero/hero-image-5.png", alt: "Modern residential home 5" },
//   ]

//   const [isPlaying, setIsPlaying] = useState(true)
//   const [isLoaded, setIsLoaded] = useState(false)

//   const togglePlay = useCallback(() => {
//     setIsPlaying((prev) => !prev)
//   }, [])

//   return (
//     <section className="relative min-h-screen bg-gray-900 overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center min-h-screen">
//         {/* Text Content - Left Side */}
//         <div className="lg:w-1/2 z-10 py-12 lg:py-0">
//           <div className="max-w-lg bg-black/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-left">
//             {/* Logo */}
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: isLoaded ? 1 : 0 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="mb-6"
//             >
//               <Image
//                 src="/tmb_logo.png"
//                 alt="Trades Mates Building Logo"
//                 width={150}
//                 height={150}
//                 className="drop-shadow-[0_0_10px_rgba(255,200,0,0.5)] rounded-lg"
//                 priority
//               />
//             </motion.div>

//             {/* Company Name and Tagline */}
//             <motion.h1
//               initial={{ x: -30, opacity: 0 }}
//               animate={{ x: 0, opacity: isLoaded ? 1 : 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-md font-sans"
//             >
//               Trades Mates Building
//               <span className="block text-amber-400 mt-2 text-3xl sm:text-4xl">
//                 Crafting Your Dream Home
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ x: -30, opacity: 0 }}
//               animate={{ x: 0, opacity: isLoaded ? 1 : 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-base sm:text-lg text-stone-100 mb-8"
//             >
//               Over 15 years of expertise delivering exceptional residential homes through new builds, renovations, and inspections across Sydney & NSW.
//             </motion.p>

//             {/* Buttons */}
//             <motion.div
//               initial={{ x: -30, opacity: 0 }}
//               animate={{ x: 0, opacity: isLoaded ? 1 : 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 mb-10"
//             >
//               <Link href="/quote">
//                 <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
//                   Get Your Free Quote
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//               </Link>
//               <Link href="/projects">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-3 text-lg font-semibold rounded-full bg-transparent transition-all duration-300 transform hover:scale-105"
//                 >
//                   Explore Our Projects
//                   <Play className="ml-2 h-5 w-5" />
//                 </Button>
//               </Link>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ x: -30, opacity: 0 }}
//               animate={{ x: 0, opacity: isLoaded ? 1 : 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="grid grid-cols-2 gap-4 text-left"
//             >
//               {[
//                 { value: "15+", label: "Years Experience" },
//                 { value: "500+", label: "Projects Completed" },
//                 { value: "100%", label: "Client Satisfaction" },
//                 { value: "24/7", label: "Support Available" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: isLoaded ? 1 : 0 }}
//                   transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
//                 >
//                   <div className="text-2xl font-bold text-amber-400 mb-1">{stat.value}</div>
//                   <div className="text-stone-200 text-xs">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* Carousel - Right Side */}
//         <div className="lg:w-1/2 z-0 mt-8 lg:mt-0">
//           <Carousel
//             autoPlay={isPlaying}
//             infiniteLoop
//             interval={4000}
//             transitionTime={800}
//             showArrows={true}
//             showStatus={false}
//             showThumbs={false}
//             showIndicators={true}
//             stopOnHover={true}
//             dynamicHeight={false}
//             emulateTouch
//             onChange={() => setIsLoaded(true)}
//             ariaLabel="Background image carousel"
//             className="rounded-2xl overflow-hidden shadow-2xl"
//           >
//             {images.map((image, index) => (
//               <div key={index} className="relative w-full h-[50vh] lg:h-[80vh]">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className="object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
//                   priority={index === 0}
//                   quality={80}
//                   onLoad={() => setIsLoaded(true)}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
//               </div>
//             ))}
//           </Carousel>
//           {/* Carousel Controls */}
//           <button
//             onClick={togglePlay}
//             className="absolute bottom-4 right-4 z-20 p-2 rounded-full bg-amber-600/80 hover:bg-amber-700/80 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
//             aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
//           >
//             {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
//           </button>
//         </div>
//       </div>

//       {/* Custom CSS for Carousel Styling */}
//       <style jsx>{`
//         .carousel .control-arrow {
//           background: rgba(0, 0, 0, 0.5) !important;
//           border-radius: 50%;
//           padding: 8px;
//           margin: 0 10px;
//           transition: background 0.3s ease;
//         }
//         .carousel .control-arrow:hover {
//           background: rgba(0, 0, 0, 0.7) !important;
//         }
//         .carousel .control-dots {
//           bottom: 10px;
//         }
//         .carousel .control-dots .dot {
//           background: #fff !important;
//           opacity: 0.5;
//           box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
//           width: 8px;
//           height: 8px;
//         }
//         .carousel .control-dots .dot.selected {
//           opacity: 1;
//           background: #f59e0b !important;
//         }
//       `}</style>
//     </section>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Pause } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useState, useCallback } from "react"

export default function Hero() {
  const images = [
    { src: "/images/hero/sydney-construction-1.jpg", alt: "Sydney construction site 1" },
    { src: "/images/hero/sydney-construction-2.jpg", alt: "Sydney construction site 2" },
    { src: "/images/hero/sydney-construction-3.jpg", alt: "Sydney construction site 3" },
    { src: "/images/hero/hero-image-1.png", alt: "Modern residential home 1" },
    { src: "/images/hero/hero-image-2.png", alt: "Modern residential home 2" },
    { src: "/images/hero/hero-image-3.png", alt: "Modern residential home 3" },
    { src: "/images/hero/hero-image-4.png", alt: "Modern residential home 4" },
    { src: "/images/hero/hero-image-5.png", alt: "Modern residential home 5" },
  ]

  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center min-h-screen py-8 lg:py-12">
        {/* Text Content - Left Side */}
        <div className="lg:w-1/2 z-10 mb-8 lg:mb-0">
          <div className="max-w-lg bg-black/20 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl text-left">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6"
            >
              <Image
                src="/tmb_logo.png"
                alt="Trades Mates Building Logo"
                width={150}
                height={150}
                className="drop-shadow-[0_0_10px_rgba(255,200,0,0.5)] rounded-lg"
                priority
              />
            </motion.div>

            {/* Company Name and Tagline */}
            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-md font-sans"
            >
              Trades Mates Building
              <span className="block text-amber-400 mt-2 text-2xl sm:text-3xl lg:text-4xl">
                Crafting Your Dream Home
              </span>
            </motion.h1>

            <motion.p
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg text-stone-100 mb-6"
            >
              Over 15 years of expertise delivering exceptional residential homes through new builds, renovations, and inspections across Sydney & NSW.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Link href="/quote">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-6 py-2 text-base font-semibold rounded-full bg-transparent transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Projects
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 text-left"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Projects Completed" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: isLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-amber-400 mb-1">{stat.value}</div>
                  <div className="text-stone-200 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Carousel - Right Side */}
        <div className="lg:w-1/2 z-0 w-full max-w-2xl mx-auto lg:mx-0">
          <Carousel
            autoPlay={isPlaying}
            infiniteLoop
            interval={4000}
            transitionTime={800}
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={true}
            stopOnHover={true}
            dynamicHeight={false}
            emulateTouch
            onChange={() => setIsLoaded(true)}
            ariaLabel="Background image carousel"
            className="rounded-xl overflow-hidden shadow-2xl aspect-[16/9]"
          >
            {images.map((image, index) => (
              <div key={index} className="relative w-full aspect-[16/9]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  quality={80}
                  onLoad={() => setIsLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20" />
              </div>
            ))}
          </Carousel>
          {/* Carousel Controls */}
          <button
            onClick={togglePlay}
            className="absolute bottom-3 right-3 z-20 p-2 rounded-full bg-amber-600/80 hover:bg-amber-700/80 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Custom CSS for Carousel Styling */}
      <style jsx>{`
        .carousel .control-arrow {
          background: rgba(0, 0, 0, 0.5) !important;
          border-radius: 50%;
          padding: 6px;
          margin: 0 8px;
          transition: background 0.3s ease;
        }
        .carousel .control-arrow:hover {
          background: rgba(0, 0, 0, 0.7) !important;
        }
        .carousel .control-dots {
          bottom: 8px;
        }
        .carousel .control-dots .dot {
          background: #fff !important;
          opacity: 0.5;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
          width: 6px;
          height: 6px;
        }
        .carousel .control-dots .dot.selected {
          opacity: 1;
          background: #f59e0b !important;
        }
        @media (max-width: 1023px) {
          .carousel {
            max-width: 100%;
            height: calc(100vw * 9 / 16);
          }
        }
      `}</style>
    </section>
  )
}