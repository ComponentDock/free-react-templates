const procedures = [
  {
    title: 'Body procedures',
    copy: 'Body contouring and reshaping treatments tailored to your goals.',
    img: 'https://picsum.photos/seed/vitalis-body/600/400',
  },
  {
    title: 'Facial Procedures',
    copy: 'Rejuvenating facelifts, fillers, and skin-tightening solutions.',
    img: 'https://picsum.photos/seed/vitalis-facial/600/400',
  },
  {
    title: 'Breast procedures',
    copy: 'Augmentation, reduction, and reconstruction by certified surgeons.',
    img: 'https://picsum.photos/seed/vitalis-breast/600/400',
  },
  {
    title: 'Skin care & Beauty',
    copy: 'Daily care programs and beauty treatments for a natural glow.',
    img: 'https://picsum.photos/seed/vitalis-skin/600/400',
  },
] as const

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/vitalis-band/1600/700"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center text-white">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Our services
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Offer for you</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            From routine care to advanced cosmetic surgery, we cover every step of your journey.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {procedures.map((procedure) => (
            <article
              key={procedure.title}
              className="group overflow-hidden rounded-lg bg-white text-ink shadow-sm transition-colors hover:bg-brand hover:text-white dark:bg-gray-900 dark:text-white dark:hover:bg-brand"
            >
              <div className="overflow-hidden">
                <img
                  src={procedure.img}
                  alt={procedure.title}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{procedure.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-70">{procedure.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
