"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Target, Globe, Sparkles } from "lucide-react";
import { Button } from "../ui/button"; // Adjust import path to match ServicesSection

export function AboutSection() {
  // Scroll-based animation for image
  const { scrollYProgress } = useScroll();
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // Particle animation for background
  const particles = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 3 + 2,
  }));

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#000515] relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-800/10"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(79, 70, 229, 0.1))",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(124, 58, 237, 0.1))",
            "linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(59, 130, 246, 0.1))",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              x: [particle.initialX, particle.initialX + (Math.random() * 20 - 10)],
              y: [particle.initialY, particle.initialY + (Math.random() * 20 - 10)],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bg-blue-500/30 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 font-semibold"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            About Hari Tech
          </Badge>
          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 dark:text-white mb-6">
            Innovating the Future<br />of Technology
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We are a team of visionary engineers and technology experts who push the boundaries of what's possible. 
            Our deep expertise in AI, cloud computing, and enterprise systems enables us to create solutions that 
            redefine industry standards.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-xl bg-white/10 dark:bg-slate-900/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20"
            >
              <div className="absolute inset-0" style={{ borderRadius: "0.75rem" }}>
                <motion.div className="h-10 w-10 bg-[radial-gradient(#a855f7_40%,transparent_60%)] opacity-[0.8]" />
              </div>
              <div className="relative p-6">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Target className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      To empower businesses with scalable, secure, and innovative software solutions that drive digital
                      transformation and sustainable growth in an increasingly connected world.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden rounded-xl bg-white/10 dark:bg-slate-900/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20"
            >
              <div className="absolute inset-0" style={{ borderRadius: "0.75rem" }}>
                <motion.div className="h-10 w-10 bg-[radial-gradient(#a855f7_40%,transparent_60%)] opacity-[0.8]" />
              </div>
              <div className="relative p-6">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Our Vision</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      To be the global leader in enterprise software development, setting new standards for innovation,
                      quality, and customer success in the technology industry.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* <Button
                className="border-none bg-blue-600 text-white hover:bg-blue-700 font-semibold px-6 py-3"
                onClick={() => window.location.href = "/team"}
              >
                Meet Our Team
              </Button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
            style={{ rotateZ }}
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-xl">
              <img
                src="/team.jpeg"
                alt="Tech Innovation Mockup"
                className="w-[400px] max-w-[40%] mx-auto h-auto rounded-xl object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-xl"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6"
              >
                <div className="bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 dark:border-slate-700/20">
                  <div className="text-base sm:text-lg font-bold text-white mb-1">Our Expertise</div>
                  <div className="text-xs sm:text-sm text-white/90">20+ Years of Combined Experience</div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex justify-center"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}