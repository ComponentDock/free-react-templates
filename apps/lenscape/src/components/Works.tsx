const WORKS = [
  { title: 'Brand Identity', category: 'Branding', seed: 'lenscape-work-1' },
  { title: 'Mobile App UI', category: 'UI/UX', seed: 'lenscape-work-2' },
  { title: 'E-commerce Site', category: 'Web Dev', seed: 'lenscape-work-3' },
  { title: 'Photo Campaign', category: 'Photography', seed: 'lenscape-work-4' },
  { title: 'Dashboard Design', category: 'UI/UX', seed: 'lenscape-work-5' },
  { title: 'Landing Page', category: 'Web Dev', seed: 'lenscape-work-6' },
]

export function Works() {
  return (
    <section id="works-section" className="bg-light-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-gold">
            Portfolio
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">Recent Works</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((work) => (
            <div key={work.title} className="group relative cursor-pointer overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/${work.seed}/600/400`}
                alt={work.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-1 text-lg font-semibold text-white">{work.title}</h3>
                <span className="text-sm text-gold">{work.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
