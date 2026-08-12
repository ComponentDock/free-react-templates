interface Project {
  label: string
  caption: string
  image: string
}

const PROJECTS: Project[] = [
  {
    label: 'Vector Illustration',
    caption: 'A bold vector identity system crafted for a modern tech startup launch.',
    image: 'https://picsum.photos/seed/imagine-project-1/800/600',
  },
  {
    label: 'Brand Identity',
    caption: 'Full brand guidelines with logo, palette, and voice for a boutique studio.',
    image: 'https://picsum.photos/seed/imagine-project-2/800/600',
  },
  {
    label: 'Mobile Experience',
    caption: 'End-to-end mobile app design focused on speed, clarity, and delight.',
    image: 'https://picsum.photos/seed/imagine-project-3/800/600',
  },
  {
    label: 'Web Platform',
    caption: 'A marketing site rebuild that doubled conversions within its first quarter.',
    image: 'https://picsum.photos/seed/imagine-project-4/800/600',
  },
]

/* Projects grid recreated from the source's carousel: a centered heading
   with a responsive row of project cards, each with an image, an uppercase
   label, and a caption paragraph. */

export function Projects() {
  return (
    <section id="project" aria-label="Projects" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-ink lg:text-4xl">Latest Project on the go</h2>
          <p className="mt-4 text-sm leading-relaxed text-icon">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <article key={project.label} className="group">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.label}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                  {project.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-icon">{project.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
