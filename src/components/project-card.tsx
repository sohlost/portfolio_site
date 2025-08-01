"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { BorderBeam } from "@/components/magicui/border-beam";
import React from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags?: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = React.useState(false);
  
  const handleDescriptionToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  // Truncate description for preview (first 100 characters)
  const truncatedDescription = description.length > 100 
    ? description.substring(0, 100) + "..." 
    : description;

  return (
    <Card className={cn("flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full relative group", className)}>
      <Link
        href={href || "#"}
        className="block cursor-pointer"
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          
          {/* Description with dropdown */}
          <div className="space-y-2">
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {isDescriptionExpanded ? description : truncatedDescription}
            </Markdown>
            
            {description.length > 100 && (
              <button
                onClick={handleDescriptionToggle}
                className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-400 transition-colors group/toggle"
              >
                <span>{isDescriptionExpanded ? "Show Less" : "Read More"}</span>
                <ChevronDownIcon
                  className={cn(
                    "h-3 w-3 transition-transform duration-200",
                    isDescriptionExpanded ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1 max-w-full overflow-hidden">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] whitespace-nowrap"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
      <BorderBeam
        duration={4}
        size={300}
        reverse
        className="from-transparent via-green-500 to-transparent"
      />
    </Card>
  );
}
