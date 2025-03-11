import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

export default function SocialLinks() {
return (
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
);
}
