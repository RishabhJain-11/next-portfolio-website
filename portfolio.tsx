"use client"

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Moon, Sun, Circle, ExternalLink, Youtube, Github, Linkedin, Mail, FileText,
  Download, Award,
} from "lucide-react";
import CuteAvatar from '@/images/Cute Avatar.png';
import Link from "next/link";
import React from "react";
import Image2 from "@/images/bg (1).jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Portfolio() {

  const googleDriveId = "1nsm6xtqrUw2OsjBG_GwaoL9zHEbQLRSY"
  const resumeViewUrl = `https://drive.google.com/file/d/${googleDriveId}/preview`
  const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveId}`


  // Certifications data
  const certifications = [
    {
        name: "Machine Learning with Python",
        issuer: "freeCodeCamp",
        date: "Jul 2024",
        credentialId: "rmj-mlwp",
    },
    {
        name: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Jul 2024",
        credentialId: "rmj-rwd",
    },
    {
        name: "College Algebra with Python",
        issuer: "freeCodeCamp",
        date: "Jun 2024",
        credentialId: "rmj-cawp",
    },
    {
        name: "Data Visualization",
        issuer: "freeCodeCamp",
        date: "Jun 2024",
        credentialId: "rmj-dv",
    },
    {
        name: "Data Analysis with Python",
        issuer: "freeCodeCamp",
        date: "Apr 2024",
        credentialId: "rmj-da",
    },
];


  const educationData = [
    {
      degree: "Bachelor of Engineering - Pune University",
      description: "Information Technology",
      additionalInfo: "Passed with Distinction",
    },
  ];

  const experienceData = [
    {
      company: "Qualitia Software",
      role: "Software Engineer",
      date: "Aug 2024 - Present",
      links: [{ href: "https://www.qualitia.ai/", icon: ExternalLink }],
    },
  ];

  const projects = [
    {
      title: "Developer Q&A Hub",
      description:
        "Built a website where developers can ask and answer technical questions, similar to Stack Overflow but with an improved UI and better community engagement. The platform features a structured tagging system, reputation-based rewards, and real-time notifications to keep users engaged.",
      image: Image2,
      links: [
        { href: "/", icon: ExternalLink },
        { href: "/", icon: Youtube },
        { href: "/", icon: Github },
      ],
    },
    {
      title: "Invoice Generator",
      description:
        "Developed an intuitive application that allows businesses and freelancers to generate professional invoices effortlessly. The platform includes customizable templates, automatic tax calculations, and PDF export functionality, making invoicing seamless and efficient.",
      image: Image2,
      links: [
        { href: "/", icon: ExternalLink },
        { href: "/", icon: Youtube },
        { href: "/", icon: Github },
      ],
    },
    {
      title: "Railway Management System",
      description:
        "Built a comprehensive system for railway operations, enabling users to manage train schedules, ticket bookings, and real-time status tracking. The platform features an interactive dashboard, automated fare calculations, and a secure reservation system to enhance user experience.",
      image: Image2,
      links: [
        { href: "/", icon: ExternalLink },
        { href: "/", icon: Youtube },
        { href: "/", icon: Github },
      ],
    },
    {
      title: "Finance Tracker",
      description:
        "Developed an intelligent application that helps users manage their personal and business finances with ease. Featuring expense categorization, income tracking, and visual analytics, the platform empowers users to make informed financial decisions.",
      image: Image2,
      links: [
        { href: "/", icon: ExternalLink },
        { href: "/", icon: Youtube },
        { href: "/", icon: Github },
      ],
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(true);

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
              <div className="flex items-center gap-2">
                {/* Resume Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:text-white flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      Resume
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] max-h-[90vh] dark:bg-zinc-900 border-0">
                    <DialogHeader>
                      <DialogTitle className="dark:text-white">Resume</DialogTitle>
                      <DialogDescription className="dark:text-gray-400">
                        View or download my professional resume
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end mb-2">
                      <a
                        href={resumeDownloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="RishabhJain_Resume.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                    </div>
                    <div className="w-full h-[70vh] bg-white rounded-md overflow-hidden">
                      <iframe src={resumeViewUrl} className="w-full h-full" title="Resume PDF" allow="autoplay" />                    </div>
                  </DialogContent>
                </Dialog>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full dark:text-gray-400 dark:hover:bg-zinc-800 hover:bg-gray-200"
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <div className="grid grid-cols-4 gap-3 mt-3">
            <Link href="https://www.linkedin.com/in/rishabhmj/" target="_blank" className="block">
              <Button
                variant="outline"
                className="w-full dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="https://github.com/RishabhJain-11" target="_blank" className="block">
              <Button
                variant="outline"
                className="w-full dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:text-white"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="https://x.com/rmjtweet" target="_blank" className="block">
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

            <Link href="mailto:im.rishabhmjain@gmail.com" target="_blank" className="block">
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
            {projects.map((project, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Circle className="h-4 w-4 fill-current dark:text-white" />
                  <h3 className="text-lg font-medium dark:text-white">
                    {project.title}
                  </h3>
                  {project.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <link.icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-6 mb-3">
                  {project.description}
                </p>
                <div className="ml-6 border dark:border-zinc-800 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    width={400}
                    height={200}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </Card>

          {/* Experience Section */}
          <Card className="mt-6 dark:bg-zinc-900 border-0 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Experience</h2>

            <div className="relative">
              {experienceData.map((exp, index) => {
                return (
                  <div key={index} className="relative pl-10 pb-6">
                    <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                    <h3 className="text-lg font-medium dark:text-white flex items-center">
                      {exp.company}
                      {exp.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          target="_blank"
                          className="ml-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          <link.icon className="h-4 w-4" />
                        </Link>
                      ))}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {exp.date}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Certifications Section */}
          <Card className="mt-6 dark:bg-zinc-900 border-0 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Certifications</h2>

            <div className="relative">
              {/* Vertical line connecting all certifications */}
              <div className="absolute left-2 top-2 bottom-0 w-px bg-gray-700 dark:bg-gray-700"></div>

              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-10 pb-6">
                  <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium dark:text-white">{cert.name}</h3>
                    <Award className="h-4 w-4 text-yellow-500" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-500">{cert.date}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Credential ID: {cert.credentialId}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Education Section */}
          <Card className="mt-6 dark:bg-zinc-900 border-0 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Education</h2>

            <div className="relative">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-10 pb-6">
                  <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
                  <h3 className="text-lg font-medium dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                  {edu.additionalInfo && (
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {edu.additionalInfo}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}


