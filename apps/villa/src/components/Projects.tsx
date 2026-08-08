const projects = [
  { title: 'Download Free Song For Ipod', seed: 'villa-2', width: 480, height: 320 },
  { title: 'Download Free Song For Ipod', seed: 'villa-3', width: 480, height: 320 },
  { title: 'Download Free Song For Ipod', seed: 'villa-4', width: 480, height: 320 },
] as const

export function Projects() {
  return (
    <section id="projects" className="relative bg-coal py-24 dark:bg-black sm:py-32">
      <div className="absolute inset-0 bg-[url(https://picsum.photos/seed/villa-bg/1600/900)] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-light text-white sm:text-4xl">
          Our latest <span className="font-bold text-brand">Projects</span>
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {projects.map((project, index) => (
            <article key={index} className="overflow-hidden rounded-3xl bg-black/40 backdrop-blur">
              <img
                src={`https://picsum.photos/seed/${project.seed}/${project.width}/${project.height}`}
                alt={`${project.title} preview`}
                className="aspect-[3/2] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  LCD screens are uniquely modern in style, and the liquid crystals that make them
                  work have allowed humanity to create slimmer, more portable technology than we’ve
                  ever had access to before.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
