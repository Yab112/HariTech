"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs } from "../ui/my-tab";
import { WobbleCard } from "../ui/wobble-card";
import { Button } from "@/components/ui/button";
import { services } from "@/app/constants/services";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export function ServicesSection() {
  const tabs = services.map((service, index) => ({
    title: service.title,
    icon: <service.icon className="w-6 h-6" />,
    value: service.title.toLowerCase().replace(/\s+/g, "-"),
    content: (
      <WobbleCard
        containerClassName="h-full min-h-[600px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
        className="p-8 sm:p-10"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]" />
        </div>

        {/* Creative Image Layout - Double Images */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Background Image (Shadow Effect) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-25 blur-md"
              style={{
                backgroundImage: `url(${service.image})`,
                transform: 'scale(1.2)',
              }}
            />
          </motion.div>

          {/* Large Foreground Image - Bottom Right Corner */}
          <motion.div
            className="absolute bottom-0 right-0 z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Content Overlay - Left Side */}
        <div className="relative z-20 max-w-lg">
          {/* Service Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-between mb-6"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
            >
              <service.icon className="w-7 h-7 text-white" />
            </motion.div>
            <Badge 
              variant="secondary" 
              className="text-sm font-bold bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              {service.metrics}
            </Badge>
          </motion.div>

          {/* Service Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
          >
            {service.title}
          </motion.h3>

          {/* Service Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-slate-300 mb-6 leading-relaxed"
          >
            {service.description}
          </motion.p>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-3 mb-8"
          >
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                className="flex items-center text-slate-200 group"
              >
                <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium group-hover:text-white transition-colors">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center space-x-4"
          >
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Explore Service
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Get Quote
            </Button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-6 right-6 w-3 h-3 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </WobbleCard>
    ),
  }));

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 dark:from-[#000515] dark:via-[#000515]/95 dark:to-[#000515]/90">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 font-semibold"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary Services
            </Badge>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-semibold text-slate-900 dark:text-white mb-6"
          >
            Next-Generation<br />Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            We leverage the latest technologies and innovative approaches to create solutions that not only meet your needs 
            but exceed your expectations, driving unprecedented business growth and competitive advantage.
          </motion.p>
        </motion.div>

        {/* Services Tabs */}
        <div className="h-[40rem] md:h-[50rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-center justify-start">
          <Tabs
            tabs={tabs}
            containerClassName="mb-4 flex justify-center"
            activeTabClassName="text-purple-600 dark:text-purple-400 font-semibold"
            tabClassName="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 px-6 py-3 transition-all duration-300 transform hover:scale-105 font-medium mx-2"
            contentClassName="mt-8"
          />
        </div>
      </div>
    </section>
  );
}