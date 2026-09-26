const PROJECTS = [
  {
    title: 'Playtime Website Manager',
    tag: 'UI/UX, Art Direction',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small',
    image: 'https://picsum.photos/seed/pivot-work1/800/600',
  },
  {
    title: 'Race Mobile Application',
    tag: 'UI/UX, Art Direction',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small',
    image: 'https://picsum.photos/seed/pivot-work2/800/600',
  },
  {
    title: 'Playtime Website Manager',
    tag: 'UI/UX, Art Direction',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small',
    image: 'https://picsum.photos/seed/pivot-work3/800/600',
  },
]

export function Work() {
  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-smoke">Work</span>
          <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
            Happy spending my time to this projects
          </h2>
        </div>
        <div className="space-y-12">
          {PROJECTS.map((project, i) => (
            <div key={i} className="grid gap-8 md:grid-cols-2">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="flex flex-col justify-center">
                <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-primary-400">
                  {project.tag}
                </span>
                <h3 className="mb-4 text-2xl font-semibold text-ink">{project.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-smoke">{project.description}</p>
                <div>
                  <a
                    href="#"
                    className="inline-block border-2 border-primary-400 bg-primary-400 px-6 py-2 text-sm font-medium text-ink transition-colors hover:bg-primary-500 hover:border-primary-500"
                  >
                    See details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
