const slides = [
  {
    subtitle: 'Discover true personalization.',
    title: 'Made to Measure Dress Shirts',
    cta: 'Explore Collection',
    image: 'https://picsum.photos/seed/sartorial-hero1/1200/600',
  },
  {
    subtitle: 'Expert craftsmanship.',
    title: 'Bespoke Tailoring for Gentlemen',
    cta: 'Book Consultation',
    image: 'https://picsum.photos/seed/sartorial-hero2/1200/600',
  },
]

export function Hero() {
  return (
    <section id="home" className="relative bg-midnight">
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(11,20,22,0.55), rgba(11,20,22,0.7)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex h-full items-center">
              <div className="mx-auto max-w-7xl px-4">
                <p className="font-script text-3xl text-brand md:text-5xl">{slide.subtitle}</p>
                <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
                  {slide.title}
                </h1>
                <a
                  href="#services"
                  className="mt-8 inline-block border border-brand bg-transparent px-8 py-4 font-display text-sm font-semibold uppercase tracking-[3px] text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
