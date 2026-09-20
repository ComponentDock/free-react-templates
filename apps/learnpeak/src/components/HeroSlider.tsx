import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

const SLIDES = [
  {
    title: 'Complete Online Courses',
    subtitle:
      'Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue ut.',
  },
  {
    title: 'Expert Instructors',
    subtitle:
      'Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus.',
  },
  {
    title: 'Learn Anytime, Anywhere',
    subtitle:
      'Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Donec vehicula efficitur nibh.',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % SLIDES.length)
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-dark">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={`https://picsum.photos/seed/learnpeak-slide-${i}/1920/900`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <div className="text-3xl font-bold tracking-tight mb-4">
              <span className="text-brand">●</span> learn<span className="text-brand">peak</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
              {slide.title}
            </h1>
            <p className="text-muted-light max-w-2xl mb-8 text-sm md:text-base leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="flex gap-4">
              <button className="bg-brand hover:bg-brand-hover text-white font-semibold uppercase text-xs tracking-wider px-8 h-12 flex items-center gap-2 transition-colors">
                Learn More <ChevronRight size={16} />
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold uppercase text-xs tracking-wider px-8 h-12 flex items-center gap-2 hover:bg-white hover:text-dark transition-colors">
                See All Courses <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-dark/50 hover:bg-brand text-white flex items-center justify-center transition-colors"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-dark/50 hover:bg-brand text-white flex items-center justify-center transition-colors"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-brand' : 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  )
}
