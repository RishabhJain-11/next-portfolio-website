import React from "react";
import { Card } from "@/components/ui/card";
import { Circle } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering - Pune University",
      description: "Information Technology",
      additionalInfo: "Passed with Distinction",
    },
  ];

  return (
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
  );
}
