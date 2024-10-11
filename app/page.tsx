"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

import ContactSection from "@/components/ContactSection";
const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <SkillsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;