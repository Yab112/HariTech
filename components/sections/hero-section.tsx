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
    <section id="home" className="relative pt-8 pb-20 overflow-hidden min-h-screen">
      {/* Base Gradient Background with Color Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/10 to-indigo-50/15 dark:from-slate-900 dark:via-blue-950/10 dark:to-indigo-950/15" />

      {/* Animated Color Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08), transparent 50%), 
                       radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.06), transparent 50%),
                       radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.05), transparent 50%)`,
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 8,
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
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"
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
          className="absolute w-48 h-48 bg-gradient-to-r from-purple-400/10 to-blue-400/10"
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
        {Array.from({ length: 20 }).map((_, i) => (
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
        {Array.from({ length: 5 }).map((_, i) => (
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

      {/* Main Content Container */}
      <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo and Company Name - Top Center */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="flex flex-col items-center justify-center mb-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-3 mb-2"
          >
            <img
              src="/logo.jpg"
              alt="Hari Tech Logo"
              className="h-16 w-auto rounded-lg"
            />
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Hari Tech</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">Software Development</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center h-[calc(100vh-120px)]">
                    {/* Left Side - Professional Tech Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Professional Code Editor Interface */}
            <div className="relative w-full max-w-lg">
              {/* Main Editor Window */}
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Editor Header */}
                <div className="bg-slate-100 dark:bg-slate-700 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    app.js — Hari Tech
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">1</span>
                      <span className="text-blue-600">import</span> <span className="text-slate-800 dark:text-slate-200">React</span> <span className="text-slate-600">from</span> <span className="text-green-600">'react'</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">2</span>
                      <span className="text-blue-600">import</span> <span className="text-slate-800 dark:text-slate-200">{'{'}</span> <span className="text-purple-600">useState</span> <span className="text-slate-800 dark:text-slate-200">{'}'}</span> <span className="text-slate-600">from</span> <span className="text-green-600">'react'</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">3</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">4</span>
                      <span className="text-blue-600">function</span> <span className="text-yellow-600">App</span><span className="text-slate-800 dark:text-slate-200">() {'{'}</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">5</span>
                      <span className="text-blue-600">const</span> <span className="text-slate-800 dark:text-slate-200">[</span><span className="text-purple-600">count</span><span className="text-slate-800 dark:text-slate-200">, setCount] =</span> <span className="text-yellow-600">useState</span><span className="text-slate-800 dark:text-slate-200">(0)</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">6</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">7</span>
                      <span className="text-blue-600">return</span> <span className="text-slate-800 dark:text-slate-200">(</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">8</span>
                      <span className="text-slate-800 dark:text-slate-200">&lt;</span><span className="text-purple-600">div</span><span className="text-slate-800 dark:text-slate-200">&gt;</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">9</span>
                      <span className="text-slate-800 dark:text-slate-200">&lt;</span><span className="text-purple-600">h1</span><span className="text-slate-800 dark:text-slate-200">&gt;Hari Tech&lt;/</span><span className="text-purple-600">h1</span><span className="text-slate-800 dark:text-slate-200">&gt;</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">10</span>
                      <span className="text-slate-800 dark:text-slate-200">&lt;</span><span className="text-purple-600">button</span> <span className="text-blue-600">onClick</span><span className="text-slate-800 dark:text-slate-200">=</span><span className="text-slate-600">{'() =>'}</span> <span className="text-yellow-600">setCount</span><span className="text-slate-800 dark:text-slate-200">(count + 1){"}"}&gt;</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">11</span>
                      <span className="text-slate-800 dark:text-slate-200">Count: {'{'}count{'}'}</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">12</span>
                      <span className="text-slate-800 dark:text-slate-200">&lt;/</span><span className="text-purple-600">button</span><span className="text-slate-800 dark:text-slate-200">&gt;</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">13</span>
                      <span className="text-slate-800 dark:text-slate-200">&lt;/</span><span className="text-purple-600">div</span><span className="text-slate-800 dark:text-slate-200">&gt;</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">14</span>
                      <span className="text-slate-800 dark:text-slate-200">)</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4 w-8">15</span>
                      <span className="text-slate-800 dark:text-slate-200">{'}'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Status Indicators */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 px-3 py-2"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">24/7 Support</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 px-3 py-2"
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Agile Development</span>
                </div>
              </motion.div>

              {/* Performance Badge */}
              <motion.div
                className="absolute top-1/2 -right-8 bg-emerald-500 text-white rounded-lg shadow-lg px-3 py-2"
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <div className="text-sm font-bold">99.9%</div>
                  <div className="text-xs opacity-90">Uptime</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 bg-white/70 dark:bg-slate-800/70 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 backdrop-blur-md w-fit"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Leading Software Development Company
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl sm:text-2xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                className="block relative"
                style={{ minHeight: "1.2em" }}
              >
                <span className="text-blue-600 inline-block" style={{ minWidth: "200px", display: "inline-block" }}>
                  {typedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  className="text-blue-600"
                >
                  |
                </motion.span>
              </motion.span>
              <span className="block text-slate-900 dark:text-white">Development</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-lg"
            >
              We specialize in building custom software solutions, web applications, and mobile apps that help businesses 
              grow and scale. From startups to enterprise companies, we deliver high-quality, secure, and scalable software.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="grid grid-cols-2 gap-3 mb-6"
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Fast Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Secure & Reliable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Expert Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Cloud Native</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="border-none bg-blue-600 text-white hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg backdrop-blur-sm text-sm"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Free Quote
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="border border-slate-700 bg-transparent text-slate-900 hover:bg-slate-900/90 font-semibold px-4 py-2 rounded-lg backdrop-blur-sm text-sm"
                  onClick={() => scrollToSection("about")}
                >
                  <Play className="mr-2 w-4 h-4" />
                  Our Services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
