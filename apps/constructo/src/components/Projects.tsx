const projects = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  img: `https://picsum.photos/seed/constructo-proj-${i + 1}/400/300`,
}))

export function Projects() {
  return (
    <section className="relative bg-brand py-16">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://picsum.photos/seed/constructo-proj-bg/1600/400"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-white">
            Our Featured Works
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {projects.map((p) => (
            <div key={p.id} className="group relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-56"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-2 font-heading text-sm font-bold text-white">{p.title}</h3>
                <a href="#" className="text-xs font-bold uppercase text-accent hover:text-white">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
