import dynamic from 'next/dynamic';
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PersonSchema } from "@/components/schema/person-schema";
import { Metadata } from 'next';
import { Icons } from "@/components/icons";
import ShinyButton from "@/components/ui/shiny-button";
import { RainbowButton } from "@/components/ui/rainbow-button";

import { BlogSkeleton } from "@/components/skeletons/blog-skeleton";
import { ProjectSkeleton } from "@/components/skeletons/project-skeleton";
const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "hello! • 🧘‍♂️",
  description: DATA.summary,
  openGraph: {
    title: DATA.name,
    description: DATA.summary,
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: 'https://prasen.dev/portfolio.png',
        width: 1200,
        height: 630,
        alt: `${DATA.name}'s Portfolio`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DATA.name,
    description: DATA.summary,
    creator: '@' + 'Star_Knight12',
    images: ['https://prasen.dev/portfolio.png'],
  },
};

const BlogCard = dynamic(() => import("@/components/blog-card").then(mod => mod.BlogCard), {
  ssr: true,
  loading: () => <BlogSkeleton />
});

const ProjectCardDynamic = dynamic(() => import("@/components/project-card").then(mod => mod.ProjectCard), {
  ssr: true,
  loading: () => <ProjectSkeleton />
});

export default function Page() {
  return (
    <>
      
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <PersonSchema />
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-6 flex justify-end items-start">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} `}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="profile-wrapper">
                  <Avatar className="size-32 relative z-10">
                    <AvatarImage
                      alt={DATA.name}
                      src={DATA.avatarUrl}
                      width={128}
                      height={128}
                      loading="eager"
                    />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
        
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1.5 text-xs">-</span>
                <span>I'm a pre-final-year student at BITS Pilani, K.K. Birla Goa Campus.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1.5 text-xs">-</span>
                <span>Currently, working on AI infrastructure and Function-as-a-Service (FaaS) research .</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1.5 text-xs">-</span>
                <span>I'm deeply passionate about technology and enjoy reading tech-related non-fiction extensively.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1.5 text-xs">-</span>
                <span>Looking forward, I'm particularly curious about advancements in AI infrastructure and neural tech</span>
              </div>
    
            </div>
          </BlurFade>
        </section>



        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6.5 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  href={work.href}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  period={`${work.start} - ${work.end}`}
                  description={work.description}
                  location={work.location}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="blogs">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Recent Blog Posts</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 7.5}>
              <div className="flex flex-col space-y-4">
                <BlogCard
                  post={{
                    title: "My Reading and Content Recommendations",
                    publishedAt: "2024-12-08",
                    summary: "A curated list of books, articles, and other content that I recommend and will keep updating",
                    slug: "ubuntu-is-bloated"
                  }}
                />
                <a 
                  href="https://medium.com/@your-medium-username/beyond-scale-article-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group hover:opacity-80 transition-opacity"
                >
                  <div className="flex flex-col space-y-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium tracking-tight group-hover:underline">
                        Beyond Scale: The Data-First Shift Powering Small Language Models
                      </h3>
                      <span className="text-xs text-muted-foreground">Medium</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      2024-11-15
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Exploring how small language models are revolutionizing AI through strategic data utilization rather than sheer computational power
                    </p>
                  </div>
                </a>
                <Link
                  href="/blog"
                  className="mt-4 block"
                >
                  <RainbowButton
                    className="w-full sm:w-[160px] px-4 py-2 group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-bold text-sm"
                  >
                    Read More Blogs
                  </RainbowButton>
                </Link>
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <h2 className="text-xl font-bold">Featured Projects</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
              <div className="grid gap-4 sm:grid-cols-2">
                {DATA.projects.slice(0, 4).map((project) => (
                  <div key={project.title} className="relative overflow-hidden rounded-xl">
                    <ProjectCard
                      {...project}
                      tags={Array.from(project.technologies)}
                    />
                  </div>
                ))}
              </div>
              <Link
                href="/projects"
                className="mt-4 block"
              >
                <ShinyButton
                  className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-semibold"
                >
                  View All Projects →
                </ShinyButton>
              </Link>
            </BlurFade>
          </div>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 9.5 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10.5 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Contact</h2>
              
              <p className="text-muted-foreground">
                Always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
              </p>
              
              <div className="mt-6 space-y-4">
                <a
                  href="mailto:f20230343@goa.bits-pilani.ac.in"
                  className="flex items-center gap-2 underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  <Icons.email className="size-4" />
                  f20230343@goa.bits-pilani.ac.in
                </a>

                <a
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
                >
                  <DATA.contact.social.X.icon className="size-4" />
                  Connect on X
                </a>
              </div>
            </div>
          </BlurFade>
        </section>
        <footer className="mt-20 border-t py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </footer>
      </main>
    </>
  );
}