const works = [
  { title: 'Pool Decor', alt: 'Indoor pool with teal mosaic tiles' },
  { title: 'Seat Decor', alt: 'Lounge seating with soft fabrics' },
  { title: 'Intuitive Idea', alt: 'Bright open-plan interior concept' },
  { title: 'Decorations', alt: 'Stylish decorative accents in a living room' },
] as const

export function Works() {
  return (
    <section id="works" className="bg-paper py-20 dark:bg-gray-900 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-[3px] text-brand-dark">
          Portfolio
        </p>
        <h2 className="mt-3 text-center font-display text-4xl font-black uppercase text-ink dark:text-white">
          Our Works
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {works.map((work, index) => (
            <article
              key={work.title}
              className="group relative overflow-hidden rounded-2xl bg-coal"
            >
              <img
                src={`https://picsum.photos/seed/mint-work-${index + 1}/800/560`}
                alt={work.alt}
                className="h-80 w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-70"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="font-display text-lg font-bold uppercase text-white">
                  {work.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
