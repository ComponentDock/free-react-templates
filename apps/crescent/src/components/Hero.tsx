const SLIDES = [
  {
    heading: 'Building The Hope',
    subtext: 'Learn about our mission, our beliefs, and the hope we have in Jesus.',
    cta: 'About Us',
    image: 'https://picsum.photos/seed/crescent-hero1/1920/780',
  },
  {
    heading: 'Making Jesus Known',
    subtext: 'Join us on a journey of faith, fellowship, and community.',
    cta: 'Contact Us',
    image: 'https://picsum.photos/seed/crescent-hero2/1920/780',
  },
]

export function Hero() {
  return (
    <section className="relative h-[450px] md:h-[600px] lg:h-[780px]" id="home" data-testid="hero">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-wide text-white md:text-5xl lg:text-7xl">
              {slide.heading}
            </h2>
            <p className="mb-8 max-w-2xl px-4 text-base text-white/80 md:text-lg">
              {slide.subtext}
            </p>
            <a
              href="#about"
              className="inline-block rounded-[3px] bg-brand px-8 py-3 text-xs font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              {slide.cta}
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
