const services = [
  {
    title: 'Business Consulting',
    description: 'The automated process starts as soon as your clothes go into the machine.',
    image: 'https://picsum.photos/seed/advisory-svc1/400/500',
  },
  {
    title: 'Media Planning',
    description: 'The automated process starts as soon as your clothes go into the machine.',
    image: 'https://picsum.photos/seed/advisory-svc2/400/500',
  },
  {
    title: 'Professional HR',
    description: 'The automated process starts as soon as your clothes go into the machine.',
    image: 'https://picsum.photos/seed/advisory-svc3/400/500',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-navy">
            Our Service
          </span>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">
            We bring ideas to life by combining years of experiences of our very talented team.
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-xl">
              <img
                src={s.image}
                alt={s.title}
                className="h-80 w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/30 p-6 text-center transition-colors group-hover:bg-navy/50">
                <h3 className="mb-2 text-xl font-bold text-white">{s.title}</h3>
                <p className="mb-4 text-sm text-white/90">{s.description}</p>
                <a
                  href="#contact"
                  className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Make Appointment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
