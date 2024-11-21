"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { Projects } from "@/components/PortfolioSection";

import ContactSection from "@/components/ContactSection";
const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <SkillsSection />
      <Projects />
      <ContactSection />
    </>
  );
};

export default HomePage;