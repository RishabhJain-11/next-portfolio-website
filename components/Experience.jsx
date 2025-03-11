import React from "react";
import { Card } from "@/components/ui/card";
import { Circle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Experience() {
  const experienceData = [
    {
      company: "Qualitia Software",
      role: "Software Engineer",
      date: "Aug 2024 - Present",
      links: [{ href: "https://www.qualitia.ai/", icon: ExternalLink }],
    },
  ];

  return (
    <Card className="mt-6 dark:bg-zinc-900 border-0 p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-6 dark:text-white">Experience</h2>

      <div className="relative">
        {experienceData.map((exp, index) => {
            return (
            <div key={index} className="relative pl-10 pb-6">
              <Circle className="absolute left-0 top-1.5 h-4 w-4 fill-current dark:text-white" />
              <h3 className="text-lg font-medium dark:text-white">
              {exp.company}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
              {exp.date}
              </p>
              {exp.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <link.icon className="h-4 w-4" />
              </Link>
              ))}
            </div>
            );
        })}
      </div>
    </Card>
  );
}
