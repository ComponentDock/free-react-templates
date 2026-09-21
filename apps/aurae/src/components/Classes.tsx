const classes = [
  {
    title: 'Artistic Yoga',
    image: 'https://picsum.photos/seed/aurae-yoga1/400/300',
    trainer: 'Lori Kennedy',
    description:
      'Express yourself through creative movement and flowing sequences that blend art with yoga.',
  },
  {
    title: 'Traditional Hatha',
    image: 'https://picsum.photos/seed/aurae-yoga2/400/300',
    trainer: 'Rebecca James',
    description:
      'Master classical postures and breathing techniques rooted in centuries of yogic tradition.',
  },
  {
    title: 'Yoga Therapy',
    image: 'https://picsum.photos/seed/aurae-yoga3/400/300',
    trainer: 'Lori Kennedy',
    description:
      'Targeted therapeutic sessions designed to heal, restore, and rejuvenate specific areas.',
  },
] as const

export function Classes() {
  return (
    <section id="classes" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Popular Classes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <div key={cls.title} className="group overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cls.image}
                  alt={`${cls.title} class`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink">{cls.title}</h3>
                <p className="mt-2 text-sm text-body">{cls.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-mist">{cls.trainer}</span>
                  <a
                    href="#contact"
                    className="text-sm font-semibold uppercase tracking-wide text-brand hover:text-brand-dark"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
