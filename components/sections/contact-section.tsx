"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket, Mail, Phone, MapPin, Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner"; // Import Sonner toast

interface ContactSectionProps {
  scrollToSection: (sectionId: string) => void;
}

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  budget: string;
  projectDetails: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  info: string;
  description: string;
  action: () => void;
}

export function ContactSection({ scrollToSection }: ContactSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    budget: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:praizoelivates@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+251911906245";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debug log for you

      if (response.ok) {
        toast.success(
          data.message ||
            "Message sent successfully! 🎉 We’ll respond within 24 hours.",
          {
            duration: 5000,
            position: "top-right",
            style: {
              background: "#10B981",
              color: "#FFFFFF",
            },
          }
        );
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          phoneNumber: "",
          budget: "",
          projectDetails: "",
        }); // Reset form
      } else {
        throw new Error(data.message || "Unexpected error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again or contact us directly.", {
        duration: 5000,
        position: "top-right",
        style: {
          background: "#EF4444",
          color: "#FFFFFF",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Email",
      info: "praizoelivates@gmail.com",
      description: "Send us an email anytime",
      action: handleEmailClick,
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+251944003334",
      description: "Mon-Fri from 8am to 6pm",
      action: handlePhoneClick,
    },
    {
      icon: MapPin,
      title: "Office",
      info: "Addis Ababa, Ethiopia",
      description: "Visit our headquarters",
      action: () => {},
    },
  ];

  return (
         <section id="contact" className="pt-2 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 bg-white dark:bg-[#000515]">
              <div className="w-full mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-20"
        >
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 font-semibold"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Let's Build Something<br className="hidden sm:block" />Great Together
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with enterprise-grade software?
            Schedule a consultation with our technical team.
          </p>
        </motion.div>

                                   <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="w-full lg:w-2/3"
           >
             <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 w-full">
                             <div className="relative p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 flex items-center">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
                  Send us a message
                </h3>
                                 <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                     <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                     <motion.div className="space-y-2">
                       <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                         Full Name *
                       </label>
                       <Input
                         name="fullName"
                         value={formData.fullName}
                         onChange={handleInputChange}
                         placeholder="Full Name"
                         required
                         className="h-10 sm:h-12 border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all duration-200 text-sm"
                       />
                     </motion.div>
                     <motion.div className="space-y-2">
                       <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                         Work Email *
                       </label>
                       <Input
                         name="email"
                         type="email"
                         value={formData.email}
                         onChange={handleInputChange}
                         placeholder="you@email.com"
                         required
                         className="h-10 sm:h-12 border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all duration-200 text-sm"
                       />
                     </motion.div>
                   </div>
                                     <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                     <motion.div className="space-y-2">
                       <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                         Company Name *
                       </label>
                       <Input
                         name="companyName"
                         value={formData.companyName}
                         onChange={handleInputChange}
                         placeholder="Company Name"
                         required
                         className="h-10 sm:h-12 border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all duration-200 text-sm"
                       />
                     </motion.div>
                     <motion.div className="space-y-2">
                       <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                         Phone Number
                       </label>
                       <Input
                         name="phoneNumber"
                         value={formData.phoneNumber}
                         onChange={handleInputChange}
                         placeholder="+251911906245"
                         className="h-10 sm:h-12 border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all duration-200 text-sm"
                       />
                     </motion.div>
                   </div>
                  <motion.div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full h-10 sm:h-12 border border-slate-300 dark:border-slate-600 rounded-lg px-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 text-sm"
                    >
                      <option value="">Select budget range</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </motion.div>
                  <motion.div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Project Details *
                    </label>
                    <Textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                      rows={4}
                      required
                      className="border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all duration-200 text-sm"
                    />
                  </motion.div>
                  <motion.div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    We'll respond within 24 hours during business days
                  </p>
                </form>
              </div>
            </div>
          </motion.div>

                     <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
                           className="w-full lg:w-1/3 space-y-3 sm:space-y-4 md:space-y-6"
           >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={contact.action}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 p-4 sm:p-6">
                  <div className="relative flex items-start space-x-3 sm:space-x-4">
                                         <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                       <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                     </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-1 group-hover:text-blue-600 transition-colors">
                        {contact.title}
                      </h4>
                      <p className="text-slate-900 dark:text-white font-medium mb-1 text-sm sm:text-base">
                        {contact.info}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 p-4 sm:p-6 flex items-center"
            >
                             <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4">
                 <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
               </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-1">
                  Book a Meeting
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                  Schedule a meeting{" "}
                  <a
                    href="#book-me"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}