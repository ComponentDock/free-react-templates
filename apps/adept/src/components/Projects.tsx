const projects = [
  { title: 'Project Alpha', seed: 'adept-proj-1' },
  { title: 'Project Beta', seed: 'adept-proj-2' },
  { title: 'Project Gamma', seed: 'adept-proj-3' },
  { title: 'Project Delta', seed: 'adept-proj-4' },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase md:text-4xl">
            Our Projects
          </h2>
          <p className="mx-auto max-w-2xl text-mist">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
            temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${p.seed}/400/300`}
                alt={p.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={400}
                height={300}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-display text-lg font-bold uppercase text-white">
                  {p.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
