const works = [
  { title: 'Lips Makeover', seed: 'bloom-work-1', alt: 'Lips makeover result' },
  { title: 'Hair Style', seed: 'bloom-work-2', alt: 'Styled hair in the salon' },
  { title: 'Makeup', seed: 'bloom-work-3', alt: 'Full makeup look' },
] as const

export function Work() {
  return (
    <section id="work" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            A Glimpse Of Our Craft
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase text-ink dark:text-white sm:text-4xl">
            Our Work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <figure
              key={work.title}
              className="group relative overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                src={`https://picsum.photos/seed/${work.seed}/600/500`}
                alt={work.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <span className="font-display text-lg font-bold text-white">{work.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
