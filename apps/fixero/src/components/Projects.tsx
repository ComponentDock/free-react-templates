import { Plus } from 'lucide-react'

const projects = [
  {
    image: 'https://picsum.photos/seed/fixero-proj1/600/400',
    category: 'Renovate',
    title: 'Modern Kitchen Renovation',
  },
  {
    image: 'https://picsum.photos/seed/fixero-proj2/600/400',
    category: 'Build',
    title: 'Custom Home Construction',
  },
  {
    image: 'https://picsum.photos/seed/fixero-proj3/600/400',
    category: 'Renovate',
    title: 'Bathroom Remodel',
  },
  {
    image: 'https://picsum.photos/seed/fixero-proj4/600/400',
    category: 'Build',
    title: 'Office Space Build-Out',
  },
  {
    image: 'https://picsum.photos/seed/fixero-proj5/600/400',
    category: 'Finishing',
    title: 'Interior Finishing Work',
  },
  {
    image: 'https://picsum.photos/seed/fixero-proj6/600/400',
    category: 'Fence',
    title: 'Privacy Fence Installation',
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white">Our Projects</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-brand" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-2 text-xs font-medium uppercase tracking-wider text-brand">
                  {project.category}
                </span>
                <Plus className="mb-2 text-white" size={24} />
                <span className="text-sm font-bold text-white">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
