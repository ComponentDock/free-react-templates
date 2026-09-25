const works = [
  { img: 'https://picsum.photos/seed/boldcraft-work-1/600/400', title: 'Brand Identity' },
  { img: 'https://picsum.photos/seed/boldcraft-work-2/600/400', title: 'Mobile App' },
  { img: 'https://picsum.photos/seed/boldcraft-work-3/600/400', title: 'Dashboard UI' },
  { img: 'https://picsum.photos/seed/boldcraft-work-4/600/400', title: 'Marketing Site' },
]

export function Gallery() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-text-primary">
          My Works
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {works.map((w) => (
            <div
              key={w.title}
              className="group relative cursor-pointer overflow-hidden"
              style={{ borderRadius: 'var(--radius-gallery)' }}
            >
              <img
                src={w.img}
                alt={w.title}
                className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-4 text-2xl font-bold text-white">{w.title}</h3>
                <a
                  href="#"
                  className="rounded-[30px] border-2 border-white px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-text-primary"
                >
                  More Work
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
