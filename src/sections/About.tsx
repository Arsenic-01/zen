"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import BookOpenIcon from "@/assets/images/book-cover.png";
import Image from "next/image";
import javaScriptIcon from "@/assets/icons/skill/JavaScript.svg";
import typeScriptIcon from "@/assets/icons/skill/TypeScript.svg";
import reactIcon from "@/assets/icons/skill/React.svg";
import nextJsIcon from "@/assets/icons/skill/Next.js.svg";
import tailwindCssIcon from "@/assets/icons/skill/TailwindCSS.svg";
import gitIcon from "@/assets/icons/skill/GitHub.svg";
import nodeJsIcon from "@/assets/icons/skill/Node.js.svg";
import dockerIcon from "@/assets/icons/skill/Docker.svg";
import postgreSqlIcon from "@/assets/icons/skill/PostgresSQL.svg";
import prismaIcon from "@/assets/icons/skill/prisma.svg";
import nextAuthIcon from "@/assets/icons/skill/nextauth.svg";
import shadcnIcon from "@/assets/icons/skill/shadcn.svg";
import awsIcon from "@/assets/icons/skill/aws.svg";
import mongoDbIcon from "@/assets/icons/skill/mongodb.svg";
import appwriteIcon from "@/assets/icons/skill/Appwrite.svg";
import supabaseIcon from "@/assets/icons/skill/supabase.svg";
import astroIcon from "@/assets/icons/skill/Astro.svg";
import vercelIcon from "@/assets/icons/skill/Vercel.svg";
import phpIcon from "@/assets/icons/skill/PHP.svg";
import cloudflareIcon from "@/assets/icons/skill/Cloudflare.svg";
import figmaIcon from "@/assets/icons/skill/Figma.svg";
import postmanIcon from "@/assets/icons/skill/Postman.svg";
import MapImage from "@/assets/images/map1.png";
import MemojiImage from "@/assets/images/bitmoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolbox = [
  {
    title: "JavaScript",
    icon: javaScriptIcon,
  },
  {
    title: "TypeScript",
    icon: typeScriptIcon,
  },
  {
    title: "React",
    icon: reactIcon,
  },
  {
    title: "Next.js",
    icon: nextJsIcon,
  },
  {
    title: "Tailwind CSS",
    icon: tailwindCssIcon,
  },
  {
    title: "Git+GitHub",
    icon: gitIcon,
  },
  {
    title: "Node.js",
    icon: nodeJsIcon,
  },
  {
    title: "Docker",
    icon: dockerIcon,
  },
  {
    title: "PostgreSQL",
    icon: postgreSqlIcon,
  },
  {
    title: "Prisma",
    icon: prismaIcon,
  },
  {
    title: "NextAuth",
    icon: nextAuthIcon,
  },
  {
    title: "Shadcn/UI",
    icon: shadcnIcon,
  },
  {
    title: "AWS",
    icon: awsIcon,
  },
  {
    title: "MongoDB",
    icon: mongoDbIcon,
  },
  {
    title: "Appwrite",
    icon: appwriteIcon,
  },
  {
    title: "Supabase",
    icon: supabaseIcon,
  },
  {
    title: "Astro",
    icon: astroIcon,
  },
  {
    title: "Vercel",
    icon: vercelIcon,
  },
  {
    title: "PHP",
    icon: phpIcon,
  },
  {
    title: "Cloudflare",
    icon: cloudflareIcon,
  },
  {
    title: "Figma",
    icon: figmaIcon,
  },
  {
    title: "Postman",
    icon: postmanIcon,
  },
];

const hobbies = [
  {
    title: "Photography",
    icon: "📸",
    left: "50%",
    top: "10%",
  },
  {
    title: "Fitness",
    icon: "🏋️‍♂️",
    left: "50%",
    top: "73%",
  },

  {
    title: "Cooking",
    icon: "🍳",
    left: "8%",
    top: "10%",
  },
  {
    title: "Music",
    icon: "🎧",
    left: "9%",
    top: "70%",
  },
  {
    title: "Chess",
    icon: "♟️",
    left: "56%",
    top: "40%",
  },
  {
    title: "Hiking",
    icon: "🥾",
    left: "30%",
    top: "50%",
  },
  {
    title: "Gaming",
    icon: "🎮",
    left: "5%",
    top: "40%",
  },
];

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books that have shaped my perspective."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src={BookOpenIcon}
                  alt="Book Open"
                  className="pointer-events-none select-none"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies I use to build exceptional digital experiences."
                className=""
              />
              <ToolBoxItems
                toolbox={toolbox}
                className=""
                itemWrapperClassName="animate-moveLeft pr-8 [animation-duration:50s] hover:[animation-play-state:paused]"
              />
              <ToolBoxItems
                toolbox={toolbox}
                className="mt-6"
                itemWrapperClassName="animate-moveRight pr-8 [animation-duration:30s] hover:[animation-play-state:paused]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="p-0 h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center justify-center gap-2 py-1.5 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute cursor-grab active:cursor-grabbing"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.5}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.icon}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                className="w-full h-full object-cover"
                alt="Map"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:outline-offset-1 after:outline-gray-950/20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={MemojiImage}
                  className="size-16 rounded-full"
                  alt="Memoji"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
