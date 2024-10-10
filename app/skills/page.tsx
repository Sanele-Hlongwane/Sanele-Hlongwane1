"use client";

import { Metadata } from "next";
import Head from "next/head";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { title, subtitle } from "@/components/primitives";
import { FaReact, FaPython, FaDatabase, FaCode, FaLaptopCode } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiCsharp, SiPhp, SiDotnet } from "react-icons/si";
import { AiOutlineAppstore, AiOutlineGlobal } from "react-icons/ai";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="Learn more about Sanele Hlongwane, a passionate UI/UX Developer and software enthusiast."
        />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto p-6 grid gap-6 lg:grid-cols-2">
          {/* About Section */}
          <section className="lg:col-span-2">
            <motion.h1 className={title()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              About Me
            </motion.h1>
            <motion.div
              className="bg-opacity-50 mb-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card>
                <CardBody>
                  <p className={subtitle({ class: "opacity-80 mb-4" })}>
                    I’m Sanele Hlongwane, a passionate software developer currently pursuing a diploma in Business Information Technology at the University of Johannesburg. I have a mission to build innovative platforms that connect people and ideas, like my project Eagles Ring—a hub for aspiring entrepreneurs to connect with the right investors.
                  </p>
                  <p className={subtitle({ class: "opacity-80 mb-4" })}>
                    Actively seeking internship opportunities, I aim to expand my skills while contributing to exciting projects. My proficiency in languages like JavaScript, Python, and SQL prepares me to tackle diverse challenges in software development.
                  </p>
                  <p className={subtitle({ class: "opacity-80 mb-4" })}>
                    I am eager to collaborate with talented professionals in the industry. If you're looking for a dedicated intern ready to contribute, let’s connect!
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section className="flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">My Skills</h2>
            <motion.div
              className="bg-opacity-50 w-full mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardBody className="grid grid-cols-2 gap-4 text-lg opacity-80">
                  {[{ icon: FaReact, label: "JavaScript (React, Next.js)" },
                    { icon: FaPython, label: "Python" },
                    { icon: SiTailwindcss, label: "HTML, CSS, Tailwind CSS" },
                    { icon: FaDatabase, label: "SQL and NoSQL Databases" },
                    { icon: SiCsharp, label: "C#" },
                    { icon: SiDotnet, label: "ASP.NET" },
                    { icon: SiPhp, label: "PHP" },
                    { icon: SiFirebase, label: "Firebase" },
                    { icon: FaLaptopCode, label: "Windows Forms and WPF" },
                    { icon: FaCode, label: "React Native" },
                    { icon: AiOutlineAppstore, label: "Version Control (Git)" }
                  ].map(({ icon: Icon, label }, index) => (
                    <motion.div
                      className="flex items-center space-x-2"
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="text-current" /> <span>{label}</span>
                    </motion.div>
                  ))}
                </CardBody>
              </Card>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section className="flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">Projects</h2>
            <motion.div
              className="bg-opacity-50 w-full mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Card>
                <CardBody className="space-y-2 text-lg opacity-80">
                  {[
                    { icon: AiOutlineGlobal, label: "Eagles Ring", description: "An investment platform connecting entrepreneurs with potential investors, showcasing pitches and profiles." },
                    { icon: AiOutlineAppstore, label: "Eco-Tracker", description: "A mobile app that helps users track their carbon footprint and offers tips to live a more eco-friendly lifestyle." },
                    { icon: AiOutlineGlobal, label: "ThriveMentor", description: "A lifestyle coaching website offering personalized guidance and resources." },
                    { icon: FaLaptopCode, label: "Portfolio Website", description: "A personal portfolio site showcasing my work, skills, and ways to connect with me." },
                    { icon: FaCode, label: "Data Visualization Tool", description: "A web application for visualizing complex datasets using interactive charts and graphs." }
                  ].map(({ icon: Icon, label, description }, index) => (
                    <motion.div
                      className="flex items-center space-x-2"
                      key={index}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon /> <span><strong>{label}</strong>: {description}</span>
                    </motion.div>
                  ))}
                </CardBody>
              </Card>
            </motion.div>
          </section>

          {/* Closing Statement */}
          <motion.p
            className="mt-8 text-lg opacity-80 text-center lg:col-span-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I&apos;m always looking for new opportunities to grow and collaborate. Let&apos;s connect and create something amazing together!
          </motion.p>
        </div>
      </div>
    </>
  );
}
