const slides = [
  {
    heading: 'We Create Amazing Architecture Designs',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'https://picsum.photos/seed/archway-hero1/1920/1080',
  },
  {
    heading: 'Virtually Build Your House',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'https://picsum.photos/seed/archway-hero2/1920/1080',
  },
] as const

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 ${i === 0 ? 'z-10' : 'z-0'}`}>
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:w-1/2 lg:pl-16">
        <h1 className="mb-6 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          {slides[0].heading}
        </h1>
        <p className="mb-8 max-w-lg text-lg text-white/80">{slides[0].description}</p>
        <a
          href="#projects"
          className="inline-block border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
        >
          View our works
        </a>
      </div>
    </section>
  )
}
