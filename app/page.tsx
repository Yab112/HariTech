"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"
import { CursorTrail } from "@/components/ui/cursor-trail"
import { StatusBar } from "@/components/ui/status-bar"
import { FloatingActions } from "@/components/ui/floating-actions"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { LoadingScreen } from "@/components/ui/loading-screen"
import { FloatingDock } from "@/components/ui/floating-dock"
import { links } from "./constants/navitems"
import CalendlyEmbed from "@/components/sections/CalendlyWidget"
import Stat from "@/components/sections/stat"

export default function HariTechWebsite() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={`min-h-screen transition-colors  duration-300 ${isDarkMode ? "dark bg-slate-900" : "bg-white"}`}>
      <LoadingScreen isLoading={isLoading} />

      {!isLoading && (
        <>
          <CursorTrail />
          <StatusBar />
          <FloatingActions />
          <ScrollProgress />
          <ScrollToTop />

          {/* <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} scrollToSection={scrollToSection} /> */}
            <HeroSection scrollToSection={scrollToSection} />
            <Stat/>
            <AboutSection />
            <ServicesSection />
            <SolutionsSection />
            <TestimonialsSection />
            <ContactSection scrollToSection={scrollToSection} />
            <CalendlyEmbed />
            {/* <FooterSection  /> */}
           <FloatingDock items={links} desktopClassName="fixed left-6 top-1/3 z-500  backdrop-3xl " />
        </>
      )}
    </div>
  )
}


