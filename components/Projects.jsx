import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ExternalLink, Circle, Youtube, Github } from "lucide-react";
import Image2 from "@/images/bg (1).jpg";

const projects = [
  {
    title: "Developer Q&A Hub",
    description:
      "Built a website for ElevenLabs, where AI Engineers can redeem discount codes to top AI tools. The platform features a user-friendly interface, secure authentication, and integration with various AI tool providers.",
    image: Image2,
    links: [
      { href: "#", icon: ExternalLink },
      { href: "#", icon: Youtube },
      { href: "#", icon: Github },
    ],
  },
  {
    title: "Invoice Generator",
    description:
      "Developed an innovative application that converts text posts from X (formerly Twitter) into lifelike voice recordings. Utilizing advanced text-to-speech technology, this project offers users a unique way to consume social media content.",
    image: Image2,
    links: [
      { href: "#", icon: ExternalLink },
      { href: "#", icon: Youtube },
      { href: "#", icon: Github },
    ],
  },
  {
    title: "Railway Management System",
    description:
      "Developed an innovative application that converts text posts from X (formerly Twitter) into lifelike voice recordings. Utilizing advanced text-to-speech technology, this project offers users a unique way to consume social media content.",
    image: Image2,
    links: [
      { href: "#", icon: ExternalLink },
      { href: "#", icon: Youtube },
      { href: "#", icon: Github },
    ],
  },
  {
    title: "Finance Tracker",
    description:
      "Developed an innovative application that converts text posts from X (formerly Twitter) into lifelike voice recordings. Utilizing advanced text-to-speech technology, this project offers users a unique way to consume social media content.",
    image: Image2,
    links: [
      { href: "#", icon: ExternalLink },
      { href: "#", icon: Youtube },
      { href: "#", icon: Github },
    ],
  },
];

export default function Projects() {
  return (
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
  );
}
