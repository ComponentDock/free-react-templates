export function Hero() {
  const slides = [
    { heading: 'Crossfit is for', highlight: 'Everyone', sub: 'Shape your body' },
    { heading: 'Crossfit', highlight: 'Gym', sub: 'Get Your Body Fit' },
  ]

  return (
    <section id="home" className="relative h-[80vh] min-h-[500px]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(https://picsum.photos/seed/vigor-${i}/1920/1080)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="mb-4 text-5xl font-black uppercase tracking-wide md:text-7xl">
              {slide.heading} <span className="text-brand-400">{slide.highlight}</span>
            </h1>
            <p className="text-xl font-light uppercase tracking-widest text-gray-300">
              {slide.sub}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
