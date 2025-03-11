"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Moon, Sun } from "lucide-react"
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import SocialLinks from "@/components/SocialLinks";
import Projects from "@/components/Projects";
import CuteAvatar from '@/images/Cute Avatar.png';

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
                  src={CuteAvatar}
                  alt="Profile picture"
                  width={56}
                  height={56}
                  className="rounded-full border dark:border-zinc-700"
                />
                <div>
                  <h1 className="text-xl font-semibold dark:text-white">Rishabh Jain</h1>
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
          <SocialLinks />

          {/* Projects Section */}
          <Projects />

          {/* Experience Section */}
          <Experience />

          {/* Education Section */}
          <Education />
        </div>
      </div>
    </div>
  )
}

