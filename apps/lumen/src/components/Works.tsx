const WORKS = [
  { title: 'Shutterbug', seed: 'lumen-work-1' },
  { title: 'Woodcraft', seed: 'lumen-work-2' },
  { title: 'The Beetle', seed: 'lumen-work-3' },
  { title: 'Grow Green', seed: 'lumen-work-4' },
  { title: 'Guitarist', seed: 'lumen-work-5' },
  { title: 'Palmeira', seed: 'lumen-work-6' },
]

export function Works() {
  return (
    <section id="works" className="bg-surface-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-400">
            Recent Works
          </h2>
          <h3 className="mt-3 font-display text-3xl font-bold text-text-light md:text-4xl">
            We love what we do, check out some of our latest works
          </h3>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((work) => (
            <div key={work.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${work.seed}/600/400`}
                alt={work.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/60">
                <span className="font-display text-lg font-semibold text-text-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {work.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
