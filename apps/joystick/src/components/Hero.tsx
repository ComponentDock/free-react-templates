const slides = [
  {
    heading: 'The Power of Gaming',
    text: 'Discover the latest games, reviews, and gaming news from around the world. Your ultimate gaming destination.',
    image: 'https://picsum.photos/seed/joystick-hero1/1600/700',
  },
  {
    heading: 'Top Picks This Week',
    text: 'Our editors handpick the best games every week. See what made the list and join the conversation.',
    image: 'https://picsum.photos/seed/joystick-hero2/1600/700',
  },
]

export function Hero() {
  const slide = slides[0]!

  return (
    <section
      className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${slide.image})` }}
      aria-label="Hero"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {slide.heading}
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">{slide.text}</p>
        </div>
      </div>
    </section>
  )
}
