const projects = [
  { img: 'https://picsum.photos/seed/bizmark-proj1/400/300', title: 'Startup Project' },
  { img: 'https://picsum.photos/seed/bizmark-proj2/400/300', title: 'Startup Project' },
  { img: 'https://picsum.photos/seed/bizmark-proj3/400/300', title: 'Startup Project' },
  { img: 'https://picsum.photos/seed/bizmark-proj4/400/300', title: 'Startup Project' },
]

export function Portfolio() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Quote card */}
          <div className="flex items-center justify-center rounded-xl bg-section-bg p-8 lg:col-span-1">
            <blockquote className="text-center">
              <h2 className="mb-4 text-2xl font-bold leading-snug text-heading">
                Explore Our Best Practice Area
              </h2>
              <p className="leading-relaxed text-body">
                Male bring land. Dominion over can yielding his moveth under him is. Multiply which
                firmament.
              </p>
            </blockquote>
          </div>

          {/* Project cards */}
          {projects.map((p) => (
            <div
              key={p.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <h5 className="mb-1 text-lg font-semibold text-heading">{p.title}</h5>
                <p className="text-sm text-body">All days lights grass midst from unto</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
