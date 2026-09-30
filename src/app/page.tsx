"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechEcosystem from "@/components/TechEcosystem";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AutomationShowcase from "@/components/AutomationShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

import ContactModal from "@/components/ContactModal";
import VideoModal from "@/components/VideoModal";
import ServiceModal from "@/components/ServiceModal";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [defaultServiceContact, setDefaultServiceContact] = useState<string | undefined>(undefined);

  const handleOpenContact = (service?: string) => {
    setDefaultServiceContact(service);
    setContactOpen(true);
  };

  const handleOpenService = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleOpenProject = (projectId: string) => {
    setSelectedProject(projectId);
    setProjectModalOpen(true);
  };

  const handleViewAllProjects = () => {
    setSelectedProject("meagle360");
    setProjectModalOpen(true);
  };

  // Restrained, premium scroll animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1020] selection:bg-[#6D5DFB] selection:text-white">
      {/* 01. Simplified Premium Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="flex-1">
        {/* 02. Redesigned Hero: Clear Statement + Product Composition */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSection
            onOpenContact={() => handleOpenContact()}
            onOpenVideo={() => setVideoOpen(true)}
          />
        </motion.div>

        {/* 03. Trusted By & Proven Tech Ecosystem */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionVariants}
        >
          <TechEcosystem />
        </motion.div>

        {/* 04. What We Build: Asymmetric Visual Capabilities Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionVariants}
        >
          <ServicesSection onSelectService={handleOpenService} />
        </motion.div>

        {/* 05. Featured Work: Centerpiece Case Studies with Real Screenshots & Metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionVariants}
        >
          <FeaturedProjects
            onSelectProject={handleOpenProject}
            onViewAllProjects={handleViewAllProjects}
          />
        </motion.div>

        {/* 06. AI & Workflow Studio: Interactive Pipeline & Differentiator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionVariants}
        >
          <AutomationShowcase onExploreAutomation={() => handleOpenContact("AI Automation & n8n Workflows")} />
        </motion.div>

        {/* 07. Why Nexa: Built Around Your Business & Senior Engineering */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionVariants}
        >
          <WhyChooseUs onOpenContact={() => handleOpenContact()} />
        </motion.div>

        {/* 08. How We Work: 5-Step Process Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionVariants}
        >
          <ProcessSection />
        </motion.div>

        {/* 09. Verified Client Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionVariants}
        >
          <TestimonialsSection />
        </motion.div>

        {/* 10. Frequently Asked Questions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionVariants}
        >
          <FaqSection onOpenContact={() => handleOpenContact()} />
        </motion.div>

        {/* 11. Final High-Conversion CTA Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionVariants}
        >
          <CtaBanner onOpenContact={() => handleOpenContact()} />
        </motion.div>
      </main>

      {/* 12. Clean, Minimalist Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={defaultServiceContact}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />

      <ServiceModal
        serviceId={selectedService}
        onClose={() => setSelectedService(null)}
        onGetQuote={(serviceName) => {
          setSelectedService(null);
          handleOpenContact(serviceName);
        }}
      />

      <ProjectModal
        initialProjectId={selectedProject}
        isOpen={projectModalOpen}
        onClose={() => {
          setProjectModalOpen(false);
          setSelectedProject(null);
        }}
        onRequestSimilar={() => {
          setProjectModalOpen(false);
          handleOpenContact();
        }}
      />
    </div>
  );
}
