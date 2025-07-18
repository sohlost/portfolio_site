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
      title: "PeerCompute - Decentralized FaaS",
      href: "#",
      dates: "Sep 2024 - Jul 2025",
      active: true,
      description:
        "A research project under Dr. Arnab K. Paul, aimed at building a decentralized Function-as-a-Service (FaaS) platform that leverages volunteer PCs to run distributed compute workloads. The system features image caching, inter-node communication via MQTT, distributed intelligent scheduling via runtime prediction, robust fault tolerance, and a trust framework built on Hyperledger Fabric. Reverse-engineered AWS Lambda's workflow to build a custom invocation cycle and execution path for a peer-to-peer volunteer compute model running SEBS benchmarking images. Developed and integrated a reputation score tracker to evaluate node reliability based on task outcomes, aiding trust management and fault tolerance. Also researched supporting technologies, including Deep Reinforcement Learning (DRL) and Graph Neural Networks (GNNs), to explore intelligent scheduling and resource allocation in decentralized FaaS environments.",
      technologies: [
        "Python",
        "Django",
        "MQTT",
        "Hyperledger Fabric",
        "Docker",
        "SEBS",
        "Deep Reinforcement Learning",
        "Graph Neural Networks",
        "AWS Lambda",
      ],
      links: [],
    },
    {
      title: "Speculative Decoder - Paper Implementation",
      href: "https://colab.research.google.com/drive/16WLM61txmZq4qC8O6n5IrRuvUe_HJDW6?usp=sharing",
      dates: "Jul 2025 - Jul 2025",
      active: true,
      description:
        "Implemented Google's 'Accelerating Large Language Model Decoding with Speculative Sampling' using a GPT-2 Distil (draft) and GPT-2 (target) model pair. Achieved 2–3× faster decoding by drafting multiple tokens and verifying them in parallel with the larger model.",
      technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "GPT-2",
        "Machine Learning",
        "Natural Language Processing",
      ],
      links: [
        {
          type: "Colab",
          href: "https://colab.research.google.com/drive/16WLM61txmZq4qC8O6n5IrRuvUe_HJDW6?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Project BITScope - Engineering",
      href: "https://github.com/SEDSCelestiaBPGC/BITScope-WebPortal",
      dates: "Jan 2024 - Oct 2024",
      active: true,
      description:
        "Started as a student-led initiative to make deep sky observation more accessible, the project let users request celestial images via a web portal. With a motorized telescope, we built a system that uses Stellarium to locate, track, and capture objects autonomously. Built the auto-mailer bot for receiving images and integrated a MySQL database to manage user requests and status updates. Set up cron-based scheduling on a Raspberry Pi to automate object tracking and image capture routines.",
      technologies: [
        "Python",
        "MySQL",
        "Raspberry Pi",
        "Stellarium",
        "Linux",
        "Cron",
        "Email Automation",
        "Hardware Integration",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/SEDSCelestiaBPGC/BITScope-WebPortal",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Academa - Entrepreneurship",
      href: "#",
      dates: "Aug 2024 - Dec 2024",
      active: false,
      description:
        "Attempted to help schools deploy open-source Moodle LMS on AWS EC2 for their needs, offering solutions up to 7× cheaper than proprietary Indian alternatives. Engaged with 4 schools before discontinuing due to scaling challenges and low-margin viability.",
      technologies: [
        "Moodle",
        "AWS EC2",
        "Linux",
        "PHP",
        "MySQL",
        "System Administration",
        "Cloud Infrastructure",
      ],
      links: [],
    },
    {
      title: "ML Algorithms from Scratch",
      href: "#",
      dates: "Oct 2023 - Present",
      active: true,
      description:
        "Implemented fundamental machine learning algorithms from scratch to understand their mathematical foundations. Built linear and logistic regression models, K-Nearest Neighbors (KNN), decision trees, and neural networks without using high-level ML libraries, focusing on core algorithmic understanding and mathematical implementation.",
      technologies: [
        "Python",
        "NumPy",
        "Mathematics",
        "Machine Learning",
        "Algorithm Implementation",
        "Data Structures",
      ],
      links: [],
    },
    {
      title: "RAG-LLM QnA App",
      href: "https://github.com/sohlost/rag-llm-QnA-App",
      dates: "June 2024",
      active: true,
      description:
        "Built an LLM-RAG application which uses ChatGPT 3.5 and Text Embedding ada-002 model to answer user queries on research papers that helped build Gen-AI as a part of a pathway cohort on RAG-LLM. The application allows users to query influential AI research papers including 'Attention Is All You Need', 'A Mathematical Theory of Communication', and 'A Neural Probabilistic Language Model'.",
      technologies: [
        "Python",
        "OpenAI API",
        "ChatGPT 3.5",
        "Text Embedding",
        "Streamlit",
        "RAG",
        "LangChain",
        "Docker",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/sohlost/rag-llm-QnA-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Cajoo - Conversational Map Platform",
      href: "https://cajoo.vercel.app",
      dates: "Oct 2023 - Nov 2023",
      active: true,
      description:
        "A conversational map-based platform for local search, discovery, and reviews built with Next.js and TypeScript. The platform allows users to discover local businesses and services through an intuitive map interface with integrated chat functionality for enhanced user experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Map APIs",
        "JavaScript",
        "CSS",
        "Responsive Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://cajooo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Coalescence '24 Website",
      href: "https://celbitsgoa.in",
      dates: "Sept 2023 - Feb 2024",
      active: true,
      description:
        "Took the initiative of building Coalescence '24's website and built it with a team of 3. Website was a no-code website on WordPress. Made critical contributions to Coalescence '24's Sponsorship and Outreach through the website development and digital presence.",
      technologies: [
        "WordPress",
        "No-Code Development",
        "Web Design",
        "Event Management",
        "Digital Marketing",
        "Team Leadership",
      ],
      links: [
        {
          type: "Website",
          href: "https://celbitsgoa.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Takeaway - Campus Food Ordering App",
      href: "#",
      dates: "Sept 2023 - Oct 2023",
      active: true,
      description:
        "App built as part of the OOPS group project that allows anyone to pre-order items from campus restaurants. Built with Flask backend and enhanced the frontend using Bootstrap. Restructured the project architecture when the team was struggling to integrate frontend with backend, helping bridge the gap between design and functionality.",
      technologies: [
        "Flask",
        "Python",
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript",
        "SQLite",
        "Object-Oriented Programming",
      ],
      links: [],
    },
    {
      title: "Logic Gates Implementation in Qiskit",
      href: "#",
      dates: "October 2023",
      active: true,
      description:
        "Studied about basics of Quantum Computing from a textbook out of curiosity and implemented the Classical Logic Gates - NOT, OR, AND, XOR using Quantum Logic Gates in IBM Qiskit and ran it on IBM's Quantum Computers. This project helped understand the fundamental differences between classical and quantum computation.",
      technologies: [
        "Python",
        "IBM Qiskit",
        "Quantum Computing",
        "Quantum Logic Gates",
        "IBM Quantum Experience",
      ],
      links: [],
    },
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
