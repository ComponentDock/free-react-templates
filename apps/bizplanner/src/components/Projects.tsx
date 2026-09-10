import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const CATEGORIES = [
  'All',
  'Web Design',
  'Photography',
  'Web Dev',
  'Online Marketing',
  'Digital Media',
  'Support',
] as const

type Category = (typeof CATEGORIES)[number]

interface Project {
  id: number
  title: string
  category: Category
  seed: string
}

const PROJECTS: Project[] = [
  { id: 1, title: 'Creative Branding', category: 'Web Design', seed: 'bizplanner-proj-1' },
  { id: 2, title: 'Product Photography', category: 'Photography', seed: 'bizplanner-proj-2' },
  { id: 3, title: 'E-Commerce Platform', category: 'Web Dev', seed: 'bizplanner-proj-3' },
  { id: 4, title: 'Social Campaign', category: 'Online Marketing', seed: 'bizplanner-proj-4' },
  { id: 5, title: 'Motion Graphics', category: 'Digital Media', seed: 'bizplanner-proj-5' },
  { id: 6, title: 'Help Desk Portal', category: 'Support', seed: 'bizplanner-proj-6' },
  { id: 7, title: 'Landing Page', category: 'Web Design', seed: 'bizplanner-proj-7' },
  { id: 8, title: 'Event Coverage', category: 'Photography', seed: 'bizplanner-proj-8' },
  { id: 9, title: 'SEO Strategy', category: 'Online Marketing', seed: 'bizplanner-proj-9' },
]

export interface ProjectsProps {
  className?: string
}

export function Projects({ className }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<Category>('All')

  const filtered =
    activeFilter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section id="project-section" className={cn('py-20', className)}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-heading md:text-4xl">
            Our Awesome Projects
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'rounded px-4 py-2 text-sm font-medium transition-colors',
                activeFilter === cat
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-smoke hover:bg-gray-200',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string
  category: string
  seed: string
}

function ProjectCard({ title, category, seed }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden">
      <img
        src={`https://picsum.photos/seed/${seed}/600/400`}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>
        <span className="text-sm text-gray-300">{category}</span>
      </div>
    </div>
  )
}
