import { useState } from 'react'

const slides = [
  {
    headline: 'Arise, Shine',
    text: 'Join our community of faith and discover a place where you belong. Experience worship that transforms lives.',
    cta: 'Watch Now',
    image: 'https://picsum.photos/seed/liturgy-hero-1/1920/1080',
  },
  {
    headline: 'Explore Our Weekend Services',
    text: 'Experience powerful worship, inspiring messages, and genuine community every weekend.',
    cta: 'Explore Now',
    image: 'https://picsum.photos/seed/liturgy-hero-2/1920/1080',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="relative h-screen min-h-[700px] w-full">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            i === current ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="mx-auto max-w-3xl px-4 text-center">
              <h1 className="mb-6 font-heading text-[40px] font-light leading-tight text-white md:text-5xl">
                {slide.headline}
              </h1>
              <p className="mb-8 text-lg font-light leading-relaxed text-white">{slide.text}</p>
              <a
                href="#"
                className="inline-block border-2 border-white px-8 py-3 text-[13px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-24 left-0 z-20 flex w-full justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full border-2 transition-colors ${
              i === current ? 'border-white bg-white' : 'border-white/50 bg-transparent'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
