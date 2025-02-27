import BlurFade from "@/components/magicui/blur-fade";
import dynamic from "next/dynamic";
import { DATA } from "@/data/resume";
import { ProjectSkeleton } from "@/components/skeletons/project-skeleton";

export const metadata = {
  title: "Projects",
  description: "Check out my latest projects and experiments.",
};

const BLUR_FADE_DELAY = 0.04;

const ProjectCard = dynamic(() => import("@/components/project-card").then(mod => mod.ProjectCard), {
  loading: () => <ProjectSkeleton />
});

export default function ProjectsPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">projects</h1>
      </BlurFade>
      <div className="grid gap-4 sm:grid-cols-2">
        {DATA.projects.map((project, id) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
            <ProjectCard 
              {...project} 
              tags={Array.from(project.technologies)}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
