"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Users, Award, Clock, Globe, Sparkles } from "lucide-react"

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

export function SolutionsSection() {
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-slate-600 dark:text-slate-400" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Metric */}
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {feature.metric}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">99.9%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Expert Engineers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">25+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Countries Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
