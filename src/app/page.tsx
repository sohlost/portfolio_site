import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { VideoCard } from "@/components/video-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { PersonSchema } from "@/components/schema/person-schema";
import { FeaturedGadgets } from "@/components/gadgets/featured-gadgets";
import { Metadata } from 'next';
import { Icons } from "@/components/icons";
import { Meteors } from "@/components/ui/meteors";
import ShinyButton from "@/components/ui/shiny-button";

const BlogCard = dynamic(() => import("@/components/blog-card").then(mod => mod.BlogCard), {
  ssr: true,
  loading: () => <div className="h-[120px] animate-pulse bg-muted rounded-lg" />
});

const GithubContributions = dynamic(() => import("@/components/github-calendar").then(mod => mod.GithubContributions), {
  ssr: false,
  loading: () => <div className="h-[200px] animate-pulse bg-muted rounded-lg" />
});

const ProjectCardDynamic = dynamic(() => import("@/components/project-card").then(mod => mod.ProjectCard), {
  ssr: true,
  loading: () => <div className="h-[300px] animate-pulse bg-muted rounded-lg" />
});

const HackathonCardDynamic = dynamic(() => import("@/components/hackathon-card").then(mod => mod.HackathonCard), {
  ssr: true,
  loading: () => <div className="h-[300px] animate-pulse bg-muted rounded-lg" />
});

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: DATA.name,
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

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <PersonSchema />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👨🏻‍💻`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  width={112}
                  height={112}
                  loading="eager"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="connect">
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Let's collaborate 🤝🏻</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {Object.entries(DATA.contact.social).map(([name, social], idx) => (
                <BlurFade key={name} delay={BLUR_FADE_DELAY * 5 + idx * 0.05}>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex items-center justify-center p-3 rounded-xl bg-card hover:bg-accent/50 transition-all duration-200 group"
                  >
                    <social.icon className="size-6 text-foreground" />
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="blogs">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Recent Blog Posts</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-col space-y-4">
              <BlogCard
                post={{
                  title: "Is Computer Science Saturated?",
                  publishedAt: "2024-06-18",
                  summary: "Blogs are preparing to launch. Stay tuned!",
                  slug: "hello-world"
                }}
              />
              <BlogCard
    post={{
      title: "Web Developement",
      publishedAt: "2024-06-19",
      summary: "Learn how to create a portfolio website using Next.js, Tailwind CSS, and TypeScript",
      slug: "nextjs-portfolio"
    }}
  />
              <Link
                href="/blog"
                className="mt-4 block"
              >
                <ShinyButton
                  className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-semibold"
                >
                  Read More Blogs→
                </ShinyButton>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="contributions">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <h2 className="text-xl font-bold">GitHub Contributions</h2>
          <GithubContributions />
        </BlurFade>
      </section>
      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Featured Projects</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="grid gap-4 sm:grid-cols-2">
              {DATA.projects.slice(0, 4).map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  tags={Array.from(project.technologies)}
                />
              ))}
            </div>
            <Link
              href="/projects"
              className="mt-4 block"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                View All Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Button>
            </Link>
          </BlurFade>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my college years, I participated in some hackathons.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCardDynamic
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
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

      {/* Gadgets Section */}
      <section id="gadgets">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <FeaturedGadgets />
        </BlurFade>
      </section>

      {/* Videos Section */}
      <section id="videos">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Recent Videos</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {DATA.videos.slice(-2).map((video, idx) => (
                <BlurFade key={video.url} delay={BLUR_FADE_DELAY * 11 + idx * 0.05}>
                  <VideoCard video={video} />
                </BlurFade>
              ))}
              <BlurFade delay={BLUR_FADE_DELAY * 12}>
                <Link
                  href="/videos"
                  className="mt-4 block"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    View All Videos
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Button>
                </Link>
              </BlurFade>
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Contact:</h2>
            <h2 className="text-xl font-medium">Feel free to reach out to me via email:</h2>

            <a
              href="mailto:prasenjitt4e@gmail.com"
              className="flex items-center gap-2 underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              <Icons.email className="size-4" />
              prasenjitt4e@gmail.com
            </a>

            <div className="mt-8">
              <h2 className="text-xl font-medium">Let's do a quick chat on X (Twitter)</h2>

              <a
                href={DATA.contact.social.X.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                Talk on X
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
      <footer className="mt-20 border-t py-8">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                Copyright &copy;{new Date().getFullYear()} {DATA.name}. All rights reserved.
              </div>
              <div className="flex space-x-4">
                <Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-foreground">
                  Sitemap
                </Link>
                <Link href="/rss.xml" className="text-sm text-muted-foreground hover:text-foreground">
                  RSS
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </footer>
    </main>
  );
}