"use client";

import { Metadata } from "next";
import Head from "next/head";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { title, subtitle } from "@/components/primitives";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiCsharp,
  SiPhp,
  SiDotnet,
} from "react-icons/si";
import { AiOutlineAppstore, AiOutlineGlobal } from "react-icons/ai";

export default function Skills() {
  return (
    <>
      <Head>
        <title>My Skills</title>
        <meta
          name="description"
          content="Discover the skills of Sanele Hlongwane, a dedicated UI/UX Developer and software enthusiast."
        />
        <meta property="og:title" content="Sanele Hlongwane's Skills" />
        <meta property="og:description" content="Explore my skills and projects." />
      </Head>

      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 dark:from-gray-800 to-blue-200 dark:to-gray-900 py-16 overflow-hidden">
        {/* Background icons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <motion.div
            className="flex flex-wrap gap-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FaReact className="text-blue-400 text-8xl transform -rotate-12" />
            <SiNextdotjs className="text-black dark:text-gray-600 text-7xl" />
            <SiTailwindcss className="text-blue-300 text-8xl transform rotate-45" />
            <FaPython className="text-yellow-400 text-9xl transform -rotate-6" />
            <AiOutlineGlobal className="text-green-500 text-8xl transform rotate-12" />
          </motion.div>
        </div>

        <div className="container relative mx-auto p-6 grid gap-10 lg:grid-cols-2">
          {/* About Section */}
          <section className="lg:col-span-2">
            <motion.h1
              className={title()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              About Me
            </motion.h1>
            <motion.div
              className="bg-opacity-50 mb-10 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card className="border-0 rounded-none bg-white dark:bg-gray-800">
                <CardBody className="p-8 text-gray-800 dark:text-gray-300">
                  <p className={subtitle({ class: "opacity-80 mb-4" })}>
                    I&apos;m Sanele Hlongwane, a passionate software developer
                    currently pursuing a diploma in Business Information
                    Technology at the University of Johannesburg. I have a
                    mission to build innovative platforms that connect people
                    and ideas, like my project Eagles Ring—a hub for aspiring
                    entrepreneurs to connect with the right investors.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section className="flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-semibold mb-6 text-center lg:text-left text-gray-700 dark:text-gray-200">
              My Skills
            </h2>
            <motion.div
              className="bg-opacity-50 w-full mb-10 rounded-lg shadow-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 rounded-none bg-white dark:bg-gray-800">
                <CardBody className="grid grid-cols-2 gap-6 p-8 text-lg text-gray-700 dark:text-gray-200">
                  {[
                    { icon: FaReact, label: "JavaScript (React, Next.js)" },
                    { icon: FaPython, label: "Python" },
                    { icon: SiTailwindcss, label: "HTML, CSS, Tailwind CSS" },
                    { icon: FaDatabase, label: "SQL and NoSQL Databases" },
                    { icon: SiCsharp, label: "C#" },
                  ].map(({ icon: Icon, label }, index) => (
                    <motion.div
                      className="flex items-center space-x-3"
                      key={index}
                      whileHover={{ scale: 1.15, color: "#3b82f6" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="text-blue-500 dark:text-yellow-400" />
                      <span>{label}</span>
                    </motion.div>
                  ))}
                </CardBody>
              </Card>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section className="flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-semibold mb-6 text-center lg:text-left text-gray-700 dark:text-gray-200">
              Projects
            </h2>
            <motion.div
              className="bg-opacity-50 w-full mb-10 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Card className="border-0 rounded-none bg-white dark:bg-gray-800">
                <CardBody className="space-y-4 p-8 text-lg text-gray-700 dark:text-gray-200">
                  {[
                    {
                      icon: AiOutlineGlobal,
                      label: "Eagles Ring",
                      description:
                        "An investment platform connecting entrepreneurs with potential investors, showcasing pitches and profiles.",
                    },
                    {
                      icon: AiOutlineAppstore,
                      label: "Eco-Tracker",
                      description:
                        "A mobile app that helps users track their carbon footprint and offers tips to live a more eco-friendly lifestyle.",
                    },
                  ].map(({ icon: Icon, label, description }, index) => (
                    <motion.div
                      className="flex items-center space-x-3"
                      key={index}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="text-blue-500 dark:text-yellow-400" />
                      <span>
                        <strong>{label}</strong>: {description}
                      </span>
                    </motion.div>
                  ))}
                </CardBody>
              </Card>
            </motion.div>
          </section>

          {/* Closing Statement */}
          <motion.p
            className="mt-8 text-lg text-gray-700 dark:text-gray-300 text-center lg:col-span-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I&apos;m always looking for new opportunities to grow and
            collaborate. Let&apos;s connect and create something amazing
            together!
          </motion.p>
        </div>
      </div>
    </>
  );
}
