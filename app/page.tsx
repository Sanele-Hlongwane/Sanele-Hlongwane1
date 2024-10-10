"use client";

import { Metadata } from "next";
import Head from "next/head";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { FaLinkedin, FaGithub, FaStar, FaHeart, FaBriefcase, FaCode, FaCoffee, FaComments, FaLightbulb, FaMagic, FaMusic, FaRocket, FaTools, FaTree, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Sanele Hlongwane, available for exciting job offers."
        />
      </Head>

      <div className="m-5 flex flex-col items-center justify-center min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/sanele.jpg"
              alt="Sanele Hlongwane"
              className="rounded-lg w-full h-80 object-cover object-top shadow-lg transition-all duration-300 transform"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left md:pl-8 space-y-4">
            <h1 className="text-5xl font-extrabold animate-pulse">
              Sanele Hlongwane <FaHeart className="inline-block text-red-500 dark:text-yellow-500"/>
            </h1>
            <p className="text-xl font-medium">Software Developer</p>
            <p className="text-lg opacity-90">
            <FaStar className="inline-block text-red-500 dark:text-yellow-500"/> Unlocking Innovative Solutions Together!
            I am Sanele Hlongwane, a passionate Software Developer eager to embark on exciting projects and collaborations. 
            My mission is to transform ideas into reality through cutting-edge technology. Let&apos;s connect and build something extraordinary that drives success and innovation!
            </p>

            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a
                href="https://linkedin.com/in/sanele-hlongwane"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-lg font-semibold text-gray-800 rounded-full dark:text-gray-100 hover:text-gray-500 hover:dark:text-gray-400 transition-all duration-300"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Sanele-Hlongwane"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-lg font-semibold text-gray-800 rounded-full dark:text-gray-100 hover:text-gray-500 hover:dark:text-gray-400 transition-all duration-300"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block px-8 py-3 text-lg font-semibold text-gray-800 bg-yellow-500 dark:bg-blue-500 rounded-lg hover:bg-yellow-600 dark:hover:bg-blue-600 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full">
              <div className="absolute w-48 h-48 bg-blue-400 rounded-full opacity-20 blur-lg -top-10 -left-10 animate-blob">
                <FaStar className="text-yellow-500 w-12 h-12" />
                <FaRocket className="text-white w-12 h-12" />
              </div>
              <div className="absolute w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-lg top-20 -right-10 animate-blob animation-delay-2000">
                <FaLightbulb className="text-white w-12 h-12" />
                <FaCoffee className="text-yellow-500 w-12 h-12" />
              </div>
              <div className="absolute w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-lg -bottom-10 left-1/4 animate-blob animation-delay-4000">
                <FaHeart className="text-white w-12 h-12" />
                <FaTree className="text-yellow-500 w-12 h-12" />
              </div>
              <div className="absolute w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-lg -top-20 left-1/4 animate-blob">
                <FaBriefcase className="text-white w-12 h-12" />
              </div>
              <div className="absolute w-24 h-24 bg-yellow-600 rounded-full opacity-20 blur-lg top-10 right-1/4 animate-blob">
                <FaUser className="text-white w-12 h-12" />
              </div>
              <div className="absolute w-32 h-32 bg-pink-600 rounded-full opacity-20 blur-lg -bottom-20 right-10 animate-blob animation-delay-2000">
                <FaMusic className="text-white w-12 h-12" />
              </div>
              <div className="absolute w-28 h-28 bg-blue-300 rounded-full opacity-20 blur-lg top-10 left-10 animate-blob animation-delay-4000">
                <FaMagic className="text-yellow-500 w-12 h-12" />
              </div>
              <div className="absolute w-36 h-36 bg-yellow-200 rounded-full opacity-20 blur-lg -bottom-10 left-1/3 animate-blob">
                <FaCode className="text-white w-12 h-12" />
              </div>
              <div className="absolute w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-lg -top-10 right-1/3 animate-blob">
                <FaTools className="text-white w-12 h-12" />
              </div>
              <div className="absolute w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-lg -top-32 left-1/4 animate-blob">
                <FaComments className="text-yellow-500 w-12 h-12" />
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
