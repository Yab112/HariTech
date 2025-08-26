"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, Sparkles, Quote, Building2, User } from "lucide-react"

const testimonials = [
  {
    content:
      "Hari Tech transformed our entire digital infrastructure. Their enterprise solution increased our operational efficiency by 300% and reduced costs by 40%. The team's technical expertise and attention to detail are unmatched. They delivered beyond our expectations.",
    rating: 5,
    client: "Sarah Johnson",
    position: "CTO",
    company: "TechFlow Solutions",
    industry: "FinTech",
    project: "Enterprise Platform",
    results: "300% efficiency increase"
  },
  {
    content:
      "Working with Hari Tech was a game-changer for our business. Their AI-powered analytics platform gave us insights we never had before. The team is professional, responsive, and truly understands enterprise needs. ROI was achieved within 6 months.",
    rating: 5,
    client: "Michael Chen",
    position: "VP of Engineering",
    company: "DataSphere Inc",
    industry: "Healthcare",
    project: "AI Analytics Platform",
    results: "6-month ROI achieved"
  },
  {
    content:
      "Exceptional mobile app development. Our app now has 500k+ downloads with a 4.9-star rating. Hari Tech's expertise in cross-platform development and their commitment to quality is outstanding. They're our go-to technology partner.",
    rating: 5,
    client: "Emily Rodriguez",
    position: "Product Director",
    company: "MobileFirst",
    industry: "E-commerce",
    project: "Cross-platform Mobile App",
    results: "500k+ downloads"
  },
  {
    content:
      "The cloud infrastructure they built for us is rock-solid. 99.99% uptime and seamless scaling. Hari Tech's DevOps expertise and security-first approach gave us confidence from day one. Highly recommended for enterprise projects.",
    rating: 5,
    client: "David Kim",
    position: "Head of Infrastructure",
    company: "CloudScale Systems",
    industry: "SaaS",
    project: "Cloud Infrastructure",
    results: "99.99% uptime"
  },
  {
    content:
      "Outstanding cybersecurity implementation. They secured our entire digital ecosystem and helped us achieve SOC2 compliance. The team's security expertise and attention to compliance requirements exceeded our expectations.",
    rating: 5,
    client: "Lisa Thompson",
    position: "Security Officer",
    company: "SecureNet",
    industry: "Banking",
    project: "Security & Compliance",
    results: "SOC2 compliance achieved"
  },
  {
    content:
      "Hari Tech delivered a complete digital transformation. From legacy system migration to modern web applications, they handled everything professionally. Their project management and technical delivery are world-class.",
    rating: 5,
    client: "Robert Wilson",
    position: "CEO",
    company: "GlobalTech",
    industry: "Manufacturing",
    project: "Digital Transformation",
    results: "Complete system overhaul"
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#000515]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 font-semibold"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Client Testimonials
          </Badge>
          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 dark:text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover why Fortune 500 companies and high-growth startups choose Hari Tech for their most critical technology projects.
          </p>
        </motion.div>

        {/* Horizontal Infinite Scroll Testimonials */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 dark:from-[#000515] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-50 dark:from-[#000515] to-transparent z-10"></div>
          
          {/* Infinite Scroll Container */}
          <div className="flex space-x-8 animate-scroll">
            {/* First Set */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-96"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 h-full">
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Client Information */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                          {testimonial.client}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Building2 className="w-3 h-3 text-slate-400" />
                        <span className="text-xs font-medium text-slate-900 dark:text-white">
                          {testimonial.company}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                        {testimonial.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Second Set (for seamless loop) */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`second-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-96"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 h-full">
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Client Information */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                          {testimonial.client}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Building2 className="w-3 h-3 text-slate-400" />
                        <span className="text-xs font-medium text-slate-900 dark:text-white">
                          {testimonial.company}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                        {testimonial.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
