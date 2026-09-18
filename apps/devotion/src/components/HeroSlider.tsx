const slides = [
  {
    caption: 'Upcoming Events',
    heading: 'December Camp Meeting',
    cta: 'Register Now',
    image: 'https://picsum.photos/seed/devotion-hero1/1600/900',
  },
  {
    caption: 'Solemn Assembly',
    heading: 'Seek The Lord While He Will Be Found',
    cta: 'Join With Us',
    image: 'https://picsum.photos/seed/devotion-hero2/1600/900',
  },
] as const

export function HeroSlider() {
  return (
    <section className="relative h-[500px] overflow-hidden md:h-[600px]">
      {slides.map((slide, i) => (
        <div
          key={slide.heading}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === 0 ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div>
              <span className="mb-3 inline-block rounded-full bg-amber px-4 py-1 text-sm font-semibold text-navy">
                {slide.caption}
              </span>
              <h1 className="mb-6 font-amatic text-5xl font-bold text-white md:text-6xl">
                {slide.heading}
              </h1>
              <a
                href="#"
                className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-brand hover:text-white"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
