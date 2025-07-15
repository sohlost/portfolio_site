import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, FolderIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Soham Dambalkar",
  initials: "SD",
  url: "https://github.com/sohlost",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "",
  summary:
    "-am a pre-final year computer science student at BITS Pilani, K.K.Birla Goa Campus.",
  avatarUrl: "/hi.webp",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Java",
    "MongoDB",
    "JavaScript",
    "git",
    "Linux",
    "RestAPI",
    "AI API",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
  ],
  contact: {
    email: "prasenjitt4e@gmail.com",
    tel: "+91 6294925956",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sohlost",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/soham-dambalkar-02468126b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sohlost",
        icon: Icons.x,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@soham.dambalkar",
        icon: Icons.medium,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@sohlost",
        icon: Icons.youtube,
        navbar: false,
      },
      CodePen: {
        name: "CodePen",
        url: "https://codepen.io/sohlost",
        icon: Icons.codepen,
        navbar: false,
      },
      buyMeACoffee: {
        name: "buyMeACoffee",
        url: "https://buymeacoffee.com/sohlost",
        icon: Icons.buyMeACoffee,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:f20230343@goa.bits-pilani.ac.in",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "FlintX",
      href: "https://flintx.com/",
      badges: [],
      location: "Remote",
      title: "Research Intern",
      logoUrl: "/flintx_logo.jpg",
      start: "April 2025",
      end: "Present",
      description:
        "Conducting research on Small Language Models (SLMs), focusing on language model architecture, training methodologies, and inference optimization. Exploring emerging research directions in the SLM space, with particular emphasis on leveraging underutilized Neural Processing Units (NPUs) that are readily being integrated into consumer electronics platforms.",
    },
    {
      company: "DaSH Lab",
      href: "https://www.bits-pilani.ac.in/",
      badges: [],
      location: "BITS Pilani, Goa",
      title: "Undergraduate Student Researcher",
      logoUrl: "/dash_lab.jpg",
      start: "January 2024",
      end: "Present",
      description:
        "Worked on PeerCompute, a decentralized Function-as-a-Service (FaaS) platform under Prof. Arnab K. Paul, which leverages volunteer PCs. Reverse-engineered AWS Lambda's internal workflow to design and recreate similar functionality tailored specifically for PeerCompute along with an invocation cycle for the benchmarking images. Significantly contributed to the Django-based backend, enhancing core infrastructure components. Conducted extensive research on advanced scheduling algorithms to optimize task distribution, resource utilization, and reliability.",
    },
    {
      company: "phodu.club",
      href: "https://phodu.club/",
      badges: [],
      location: "Remote",
      title: "Junior Developer",
      logoUrl: "/phodu_club_logo.jpg",
      start: "January 2023",
      end: "May 2023",
      description:
        "Worked on their online learning platform used by 1000s of students, helped them improve their backend performance by working on the database and converting their monolithic architecture to a much more scalable serverless architecture.",
    },
  ],
  education: [
    {
      school: "Birla Institute of Technology and Science, Pilani (Goa Campus)",
      href: "https://www.bits-pilani.ac.in/",
      degree: "B.E. in Computer Science and Engineering",
      logoUrl: "/BITS_Pilani-Logo.svg.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Suryadatta National School",
      href: "https://www.suryadattaschool.org/",
      degree: "CBSE PCM",
      logoUrl: "/SNS.jpg",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "PeerCompute",
      href: "https://clean-type.vercel.app/",
      dates: "March 2025 - Ongoing",
      active: true,
      description:
        "A super minimalist write experience, type with minimalist, no noise and distraction, completely fresh Windows app, with a clean UI and no ads, just pure writing experience.",
      technologies: [
        "Rust",
        "Tauri",
        "Typescript",
        "CSS",
        "Vite",
        "Git",
        "React",
      ],
      links: [
        {
          type: "Website",
          href: "https://clean-type.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/StarKnightt/CleanType",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://video.gumlet.io/6745e593080b60408ca085f7/68011ca73ab3a7b826bbfac0/download.mp4",
    },
    {
      title: "Wallpaperz",
      href: "https://www.wallpaperz.in/",
      dates: "January 2025 - February 2025",
      active: true,
      description:
        "A modern wallpaper discovery platform where you can find stunning wallpapers and generate images with AI.",
      technologies: [
        "Next.js",
        "Git",
        "TailwindCSS",
        "Framer-motion",
        "TypeScript",
        "Imagekit",
        "shadcnUI",
        "DreamStudio",
        "Stability AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.wallpaperz.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/StarKnightt/wallpaperz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://video.gumlet.io/6745e593080b60408ca085f7/67d5057eefcecbdea7560e35/download.mp4",
    },
    {
      title: "Resume Builder",
      href: "https://resume-builder-ten-opal.vercel.app/",
      dates: "May 2023 - Sept 2023",
      active: true,
      description:
        "It was my final year [Project](https://github.com/StarKnightt/ResumeBuilder) in our college, It is a interactive and versatile Dynamic CV Builder, completely build from scratch with backend functionallity .",
      technologies: [
        "CSS",
        "javascript",
        "MongoDB",
        "Express.js",
        "HTML",
        "Regex",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://builddresume.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/StarKnightt/ResumeBuilder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      
      image: "",
      video:
        "https://video.gumlet.io/6745e593080b60408ca085f7/6745e5e5080b60408ca08984/download.mp4",
    },
    {
      title: "GitHub Buddy Finder",
      href: "https://buddy-find.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "This innovative web application helps developers connect with like-minded individuals based on their GitHub activity and language preferences.",
      technologies: [
        "React.js",
        "Octokit",
        "Rest API",
        "TailwindCSS",
        "react-icons",
        "react-router-dom",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://buddy-find.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/StarKnightt/Buddy-Finder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://video.gumlet.io/6745e593080b60408ca085f7/6745ec82c84c6b7e105c3ee5/download.mp4",
    },
    {
      title: "Solar System",
      href: "https://solarrsystem.vercel.app/",
      dates: "September 2024 - October 2024",
      active: true,
      description:
        "This project is a visually stunning and interactive web application that provides information about the solar system and it's planet with music.",
      technologies: [
        "React.js",
        "font-awesome",
        "react-icons",
        "react-dom",
        "CSS3",
        "Vite",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://solarrsystem.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://video.gumlet.io/6745e593080b60408ca085f7/6745ef75b79a267f99668bda/download.mp4",
    },
    {
      title: "Coffee-Website",
      href: "https://coffee-websitee.vercel.app/",
      dates: "September 2024 - October 2024",
      active: true,
      description:
        "A web app, with the futurisitc yet nostalgic design of a coffee shop, with a menu and blend of retro vibes.",
      technologies: [
        "React.js",
        "Git",
        "TailwindCSS",
        "Framer-motion",
        "React-icons",
        "React-router-dom",
      ],
      links: [
        {
          type: "Website",
          href: "https://coffee-websitee.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/StarKnightt/Coffee-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://video.gumlet.io/6745e593080b60408ca085f7/6745ea2d080b60408ca0bc08/download.mp4",
    },
    {
      title: "3D Carousel Gallery",
      href: "https://3dcarousell.vercel.app/",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "A beautiful and interactive 3D carousel gallery built with Next.js, featuring image and video support with an integrated music player.",
      technologies: [
        "Next.js",
        "CSS 3D Transform",
        "SoundCloud Widget API",
        "Modern-Javascript",
        "Vercel",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://3dcarousell.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/StarKnightt/3D-Carousel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://video.gumlet.io/6745e593080b60408ca085f7/67912b93d696a7af3b2e38ef/download.mp4",
    }
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "March 23rd - 25th, 2022",
      location: "Bhubaneswar, India",
      description:
        "Developed a learing portal with some free education content with the best paid contents too, the project was called as 'EducationX'.",
      image:
        "/smart-india-hackathon.webp",
      mlh: "https://github.com/Synchrotek/E-LearningX",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "December 19th - 23rd, 2023",
      location: "Bhubaneswar, India",
      description:
        "Developed A collaborative coding web platform that enables Multiuser collboration on a coding project in real-time with features of group chat, to-do lists.",
      image:
        "/logo.webp",
      mlh: "https://nexuslink01v.netlify.app/",
      links: [],
    },
  ],
} as const;
