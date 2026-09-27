import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  category: string
  seed: string
  className?: string
}

function ProjectCard({ title, category, seed, className = '' }: ProjectCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-lg ${className}`}>
      <img
        src={`https://picsum.photos/seed/${seed}/600/400`}
        alt={title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-bg/70 opacity-0 transition duration-300 group-hover:opacity-100">
        <a
          href="#"
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-300 text-dark-bg transition hover:bg-primary-400"
          aria-label={`View ${title}`}
        >
          <ArrowUpRight size={18} />
        </a>
        <h3 className="text-center text-lg font-semibold text-white">{title}</h3>
        <span className="text-sm text-white/70">{category}</span>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="work" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary-300">
            Projects
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink">Recent Projects</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            A showcase of our latest creative work across various industries.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="row-span-2">
            <ProjectCard
              title="Branding & Illustration Design"
              category="Web Design"
              seed="airy-proj-1"
              className="h-full"
            />
          </div>
          <div>
            <ProjectCard
              title="Branding & Illustration Design"
              category="Web Design"
              seed="airy-proj-2"
              className="h-48"
            />
          </div>
          <div>
            <ProjectCard
              title="Branding & Illustration Design"
              category="Web Design"
              seed="airy-proj-3"
              className="h-48"
            />
          </div>
          <div>
            <ProjectCard
              title="Branding & Illustration Design"
              category="Web Design"
              seed="airy-proj-4"
              className="h-48"
            />
          </div>
          <div>
            <ProjectCard
              title="Branding & Illustration Design"
              category="Web Design"
              seed="airy-proj-5"
              className="h-48"
            />
          </div>
          <div>
            <ProjectCard
              title="Branding & Illustration Design"
              category="Web Design"
              seed="airy-proj-6"
              className="h-48"
            />
          </div>
          <div>
            <ProjectCard
              title="Branding & Illustration Design"
              category="Web Design"
              seed="airy-proj-7"
              className="h-48"
            />
          </div>
          <div>
            <ProjectCard
              title="Branding & Illustration Design"
              category="Web Design"
              seed="airy-proj-8"
              className="h-48"
            />
          </div>
          <div>
            <ProjectCard
              title="Branding & Illustration Design"
              category="Web Design"
              seed="airy-proj-9"
              className="h-48"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
