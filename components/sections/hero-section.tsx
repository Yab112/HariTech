"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, TrendingUp, Code, Database, Cloud, Cpu, Globe, Lock, Zap, Shield, Users } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["Custom Software", "Web Applications", "Mobile Apps", "AI Solutions", "Cloud Systems"]
  const fullText = words[currentWordIndex]

  // Typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 120)
    } else {
      timeout = setTimeout(() => {
        setTypedText("")
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }, 1000)
    }
    return () => clearTimeout(timeout)
  }, [typedText, fullText, currentWordIndex])

  // Enhanced bubble system with reduced opacity
  const bubbles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 80 + 30,
    baseOpacity: Math.random() * 0.06 + 0.02,
    color: [
      "bg-blue-400/8",
      "bg-purple-400/8",
      "bg-indigo-300/8",
      "bg-pink-300/8",
      "bg-cyan-300/8",
      "bg-emerald-300/8",
      "bg-orange-300/8",
      "bg-yellow-300/8",
    ][Math.floor(Math.random() * 8)],
    duration: Math.random() * 30 + 50,
  }))

  return (
         <section id="home" className="relative pt-4 sm:pt-8 pb-12 sm:pb-20 overflow-hidden h-screen">
      {/* Base Gradient Background with Color Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/10 to-indigo-50/15 dark:from-[#000515] dark:via-[#000515]/95 dark:to-[#000515]/90" />

              {/* Animated Color Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08), transparent 50%), 
                         radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.06), transparent 50%),
                         radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.05), transparent 50%)`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
      <div
          className="absolute inset-0"
        style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          style={{ top: '10%', left: '5%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Medium Circle */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-cyan-400/20 rounded-full blur-3xl"
          style={{ top: '60%', right: '10%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Small Circle */}
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"
          style={{ top: '30%', right: '30%' }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Triangle Shape */}
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-r from-purple-400/10 to-blue-400/10 hidden sm:block"
          style={{ 
            top: '70%', 
            left: '20%',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 120, 240],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 8,
          }}
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '0%',
              right: '0%',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className={`absolute rounded-full ${bubble.color} backdrop-blur-sm`}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.initialX}%`,
              top: `${bubble.initialY}%`,
              filter: "blur(20px)",
            }}
            animate={{
              opacity: [bubble.baseOpacity, bubble.baseOpacity + 0.1, bubble.baseOpacity],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>
            
       <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-full flex flex-col">
         <div className="flex flex-col flex-1 justify-center items-center">
          {/* Main Content - Centered */}
          <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1, duration: 0.8 }}
                       className="flex flex-col items-center justify-center pt-4 sm:pt-8 md:pt-12"
         >
           <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.3 }}
             className="text-center"
           >
                           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-3">Hari Technology</h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400">Software Development</p>
           </motion.div>
           </motion.div>

                     <div className="h-4 sm:h-6 md:h-8"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col justify-center text-center max-w-4xl mx-auto"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                             <Badge
                 variant="secondary"
                 className="mb-6 sm:mb-8 px-4 sm:px-5 py-2 sm:py-3 bg-white/70 dark:bg-slate-800/70 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 backdrop-blur-md w-fit text-sm sm:text-base lg:text-lg mx-auto"
               >
                 <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2" />
                 Leading Software Development Company
               </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
                             className="text-2xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-4xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 md:mb-8 leading-tight"
            >
              <span className="block text-slate-900 dark:text-white">
                All IT-related services<br className="hidden sm:block" />
                <span className="text-blue-600">good facilitate providers</span>
                </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
                             className="text-base sm:text-lg md:text-xl lg:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              We craft cutting-edge software solutions that transform businesses. From AI-powered applications to 
              enterprise-grade systems, we deliver innovative technology that drives growth and competitive advantage.
            </motion.p>

            {/* Key Features */}


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
                             className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center"
            >
                             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 <Button
                   className="border-none bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 w-full sm:w-auto hover:bg-slate-800 dark:hover:bg-slate-100"
                   onClick={() => scrollToSection("contact")}
                 >
                   Get Started
                 </Button>
               </motion.div>

               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 <Button
                   className="border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 w-full sm:w-auto"
                   onClick={() => scrollToSection("about")}
                 >
                   See More
                 </Button>
               </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
