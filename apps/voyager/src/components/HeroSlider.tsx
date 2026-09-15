const slides = [
  {
    subtitle: '2 Days Tour',
    heading: 'Amazing Maldives Tour',
    image: 'https://picsum.photos/seed/voyager-hero-1/1600/900',
  },
  {
    subtitle: '10 Days Cruises',
    heading: 'From Greece to Spain',
    image: 'https://picsum.photos/seed/voyager-hero-2/1600/900',
  },
  {
    subtitle: 'Our Travel Agency',
    heading: 'Explore the World',
    image: 'https://picsum.photos/seed/voyager-hero-3/1600/900',
  },
] as const

const firstSlide = slides[0]!

export function HeroSlider() {
  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden"
      aria-label="Hero slider"
    >
      {/* Background image (first slide as default) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${firstSlide.image})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center">
        {slides.map((slide, i) => (
          <div
            key={slide.heading}
            className={i === 0 ? 'block' : 'hidden'}
            data-testid={`slide-${i}`}
          >
            <p className="mb-2 text-lg font-light tracking-wide text-white/80 uppercase md:text-xl">
              {slide.subtitle}
            </p>
            <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              {slide.heading}
            </h1>
          </div>
        ))}
      </div>
    </section>
  )
}
