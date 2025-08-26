"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Users, Award, Clock, Globe, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

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
    <section id="solutions" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 font-semibold"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Why Choose Hari Tech
          </Badge>
          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 dark:text-white mb-6">
            Why Industry Leaders<br />Choose Hari Tech
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven methodologies to deliver solutions that drive measurable business outcomes and competitive advantages.
          </p>
        </motion.div>

        {/* Three-Slide Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 33.333}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {extendedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Metric Tag */}
                    <div className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                      {feature.metric}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-slate-900 dark:bg-white scale-125"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-slate-900 dark:bg-white' : 'bg-slate-400'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
