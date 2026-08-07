const projects = [
  { title: 'Downside Low House', location: 'Melbourne, Australia' },
  { title: 'Top Commercial Building', location: 'Melbourne, Australia' },
  { title: 'Big Building Concept', location: 'Melbourne, Australia' },
] as const

const gridImages = [
  { seed: 'keystone-work-1', alt: 'House with dramatic roofline' },
  { seed: 'keystone-work-2', alt: 'Glass commercial tower' },
  { seed: 'keystone-work-3', alt: 'Curved building concept model' },
  { seed: 'keystone-work-4', alt: 'Concrete facade detail' },
] as const

export function Work() {
  return (
    <section id="work" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Popular Work</p>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-navy dark:text-white">
          Our Best Recent Popular Work
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {gridImages.map((image) => (
            <img
              key={image.seed}
              src={`https://picsum.photos/seed/${image.seed}/400/500`}
              alt={image.alt}
              className="h-56 w-full object-cover lg:h-64"
            />
          ))}
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="border border-line p-6 transition-colors hover:border-brand dark:border-gray-800"
            >
              <h3 className="font-display text-xl font-bold uppercase text-navy dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-mist dark:text-gray-400">{project.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
