"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Users, Award, Clock, Globe, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { HeaderWithTitleLine } from "@/components/ui/header-with-title-line"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Sub-second response times with optimized code and infrastructure. We ensure your applications load in under 200ms for exceptional user experience.",
    metric: "< 200ms",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, SOC2 compliance, and regular security audits. Your data is protected with military-grade security.",
    metric: "SOC2 Certified",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Senior developers and solution architects with 10+ years of experience. Our team has worked with Fortune 500 companies and high-growth startups.",
    metric: "15+ Experts",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Comprehensive testing with 99.9% uptime guarantee. We follow industry best practices and maintain the highest quality standards in every project.",
    metric: "99.9% SLA",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring, technical support, and maintenance. Our dedicated team is always available to ensure your systems run smoothly.",
    metric: "24/7 Available",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving enterprise clients across 25+ countries with local expertise and global standards. We understand diverse markets and regulatory requirements.",
    metric: "25+ Countries",
  },
]

// Duplicate features to ensure we always have 3 slides visible
const extendedFeatures = [...features, ...features, ...features]

export function SolutionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index % features.length) // Keep within original features range
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="solutions" className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#000515] relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url(/wave.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 font-semibold rounded-xl"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Why Choose Hari Tech
          </Badge>
          
          <HeaderWithTitleLine
            titleLineColor="#2563eb"
            animationDelay={0.2}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl  text-neutral-900 dark:text-white mb-6 leading-tight">
              Why Industry Leaders<br /><span className="text-blue-600">Choose Hari Tech</span>
            </h2>
          </HeaderWithTitleLine>
          
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven methodologies to deliver solutions that drive measurable business outcomes and competitive advantages.
          </p>
        </div>

        {/* Three-Slide Carousel */}
        <div className="relative max-w-full">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-400" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex"
              animate={{ 
                x: `-${currentIndex * (isMobile ? 100 : 33.333)}%` 
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {extendedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/3 flex-shrink-0 px-1 sm:px-4"
                >
                  <div className="text-center bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-sm sm:shadow-md h-full">
                    {/* Icon - Hidden on small screens */}
                    <div className="sm:block w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-transparent dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2 sm:mb-4 px-1 sm:px-0">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm sm:text-sm text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed px-2 sm:px-0">
                      {feature.description}
                    </p>
                    
                    {/* Metric Tag */}
                    <div className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800">
                      {feature.metric}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-1 sm:space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-slate-900 dark:bg-white scale-125"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-3 sm:mt-4">
            <div className="inline-flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isAutoPlaying ? 'bg-slate-900 dark:bg-white' : 'bg-slate-400'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
