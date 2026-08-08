const works = [
  { title: 'Residence Work 01', image: 'https://picsum.photos/seed/bastion-6/800/600' },
  { title: 'Residence Work 02', image: 'https://picsum.photos/seed/bastion-7/800/600' },
  { title: 'Residence Work 03', image: 'https://picsum.photos/seed/bastion-8/800/600' },
  { title: 'Residence Work 04', image: 'https://picsum.photos/seed/bastion-9/800/600' },
  { title: 'Residence Work 05', image: 'https://picsum.photos/seed/bastion-10/800/600' },
  { title: 'Residence Work 06', image: 'https://picsum.photos/seed/bastion-11/800/600' },
  { title: 'Residence Work 07', image: 'https://picsum.photos/seed/bastion-12/800/600' },
  { title: 'Residence Work 08', image: 'https://picsum.photos/seed/bastion-13/800/600' },
] as const

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-paper py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
            Our work
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((work) => (
            <a
              key={work.title}
              href="#contact"
              className="group relative block overflow-hidden rounded-xl"
            >
              <img
                src={work.image}
                alt={work.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent p-5">
                <h3 className="font-display text-base font-bold text-white">{work.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
