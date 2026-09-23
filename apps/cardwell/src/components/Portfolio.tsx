const works = [
  {
    title: 'Creative Branding',
    category: 'Design',
    image: 'https://picsum.photos/seed/cardwell-portfolio-1/1200/600',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Development',
    image: 'https://picsum.photos/seed/cardwell-portfolio-2/1200/600',
  },
  {
    title: 'Mobile App UI',
    category: 'UI/UX',
    image: 'https://picsum.photos/seed/cardwell-portfolio-3/1200/600',
  },
  {
    title: 'Photography Showcase',
    category: 'Creative',
    image: 'https://picsum.photos/seed/cardwell-portfolio-4/1200/600',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24" role="region" aria-label="Portfolio">
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-heading)] text-[250px] font-bold uppercase leading-none text-[#f0f0f0] opacity-50"
      >
        Work
      </span>

      {/* Rotated vertical label */}
      <span
        aria-hidden="true"
        className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[4px] text-gray-300"
      >
        Portfolio
      </span>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="space-y-4">
          {works.map((work, index) => (
            <article key={index} className="group relative overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/60">
                <div className="translate-y-4 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm uppercase tracking-[2px] text-white/80">{work.category}</p>
                  <h3 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
                    {work.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
