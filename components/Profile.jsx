import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import Image1 from "../images/Cute Avatar.png";

export default function Profile() {
  return (
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
            <h1 className="text-xl font-semibold dark:text-white">
              Rishabh Manoj Jain
            </h1>
            <p className="text-gray-500 dark:text-gray-400">@rishabhmj</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full dark:text-gray-400 dark:hover:bg-zinc-800 hover:bg-gray-200"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </Card>
  );
}
