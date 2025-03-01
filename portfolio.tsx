"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Github, Mail, ExternalLink, Circle, Moon, Sun, Youtube, Music } from "lucide-react"
import Image1 from '../next-portfolio-app/images/Cute Avatar.png'
import Image2 from '../next-portfolio-app/images/bg (1).jpg'

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="dark:bg-black bg-white min-h-screen flex justify-center py-10 px-4">
        <div className="max-w-xl w-full">
          {/* Profile Section */}
          <Card className="dark:bg-zinc-900 border-0 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={Image1}
                  alt="Profile picture"
                  width={56}
                  height={56}
                  className="rounded-full border dark:border-zinc-700"
                />
                <div>
                  <h1 className="text-xl font-semibold dark:text-white">Rishabh Manoj Jain</h1>
                  <p className="text-gray-500 dark:text-gray-400">@rishabhmj</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full dark:text-gray-400 dark:hover:bg-zinc-800 hover:bg-gray-200"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          </Card>

          {/* Social Links */}
          <div className="grid grid-cols-4 gap-3 mt-3">
            <Link href="#" className="block">
              <Button
                variant="outline"
                className="w-full dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#" className="block">
              <Button
                variant="outline"
                className="w-full dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:text-white"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#" className="block">
              <Button
                variant="outline"
                className="w-full dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </Button>
            </Link>
            <Link href="#" className="block">
              <Button
                variant="outline"
                className="w-full dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:text-white"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Projects Section */}
          <Card className="mt-6 dark:bg-zinc-900 border-0 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Projects</h2>

            {/* Project 1 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Circle className="h-4 w-4 fill-current dark:text-white" />
                <h3 className="text-lg font-medium dark:text-white">AI Engineer Pack</h3>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-6 mb-3">
                Built a website for ElevenLabs, where AI Engineers can redeem discount codes to top AI tools. The
                platform features a user-friendly interface, secure authentication, and integration with various AI tool
                providers.
              </p>
              <div className="ml-6 border dark:border-zinc-800 rounded-lg overflow-hidden">
                <Image
                  src={Image2}
                  alt="AI Engineer Pack project screenshot"
                  width={400}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Circle className="h-4 w-4 fill-current dark:text-white" />
                <h3 className="text-lg font-medium dark:text-white">X to Voice</h3>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <div className="flex gap-1 ml-1">
                  <Link
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <Youtube className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <Music className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-6 mb-3">
                Developed an innovative application that converts text posts from X (formerly Twitter) into lifelike
                voice recordings. Utilizing advanced text-to-speech technology, this project offers users a unique way
                to consume social media content.
              </p>
              <div className="ml-6 border dark:border-zinc-800 rounded-lg overflow-hidden">
                <Image
                  src={Image2}
                  alt="X to Voice project screenshot"
                  width={400}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
          </Card>

          {/* Experience Section */}
          <Card className="mt-6 dark:bg-zinc-900 border-0 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Experience</h2>

            <div className="relative">
              {/* Vertical line connecting all experiences */}
              <div className="absolute left-2 top-2 bottom-0 w-px bg-gray-700 dark:bg-gray-700"></div>

              {/* Elevenlabs */}
              <div className="relative pl-10 pb-6">
                <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                <h3 className="text-lg font-medium dark:text-white">Elevenlabs</h3>
                <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Aug 2024 - Present</p>
              </div>

              {/* Root Signals */}
              <div className="relative pl-10 pb-6">
                <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                <h3 className="text-lg font-medium dark:text-white">Root Signals</h3>
                <p className="text-gray-600 dark:text-gray-400">Lead Software Engineer</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Apr 2024 - Aug 2024</p>
              </div>

              {/* Mobal */}
              <div className="relative pl-10 pb-6">
                <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                <h3 className="text-lg font-medium dark:text-white">Mobal</h3>
                <p className="text-gray-600 dark:text-gray-400">Head of Product and Technology</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Jul 2021 - Aug 2023</p>
              </div>

              {/* RhombiT Consulting */}
              <div className="relative pl-10 pb-6">
                <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                <h3 className="text-lg font-medium dark:text-white">RhombiT Consulting</h3>
                <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Jun 2019 - Jul 2021</p>
              </div>

              {/* SmartValley Wearable Oy */}
              <div className="relative pl-10 pb-6">
                <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                <h3 className="text-lg font-medium dark:text-white">SmartValley Wearable Oy</h3>
                <p className="text-gray-600 dark:text-gray-400">CTO</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">May 2017 - Aug 2020</p>
              </div>

              {/* jara.ai */}
              <div className="relative pl-10 pb-6">
                <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                <h3 className="text-lg font-medium dark:text-white">jara.ai</h3>
                <p className="text-gray-600 dark:text-gray-400">Co-founder</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Oct 2018 - Aug 2019</p>
              </div>
            </div>
          </Card>

          {/* Education Section */}
          <Card className="mt-6 dark:bg-zinc-900 border-0 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Education</h2>

            <div className="relative">
              {/* Vertical line connecting all education */}
              <div className="absolute left-2 top-2 bottom-0 w-px bg-gray-700 dark:bg-gray-700"></div>

              {/* Master's Degree */}
              <div className="relative pl-10 pb-6">
                <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                <h3 className="text-lg font-medium dark:text-white">Master of Science - Aalto University</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Machine Learning, Data Science, and Artificial Intelligence
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Passed with Distinction</p>
              </div>

              {/* Bachelor's Degree */}
              <div className="relative pl-10">
                <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                <h3 className="text-lg font-medium dark:text-white">Bachelor of Science - Aalto University</h3>
                <p className="text-gray-600 dark:text-gray-400">Computer Science</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

