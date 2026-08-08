import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'We Are Specialist In The Field of Architect',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus harum, error minima?',
    seed: 'lintel-hero-1',
  },
  {
    heading: 'Design That Makes You Feel At Home',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt.',
    seed: 'lintel-hero-2',
  },
  {
    heading: 'Ready To Start Your Home',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, autem odit quae!',
    seed: 'lintel-hero-3',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)

  function goTo(next: number) {
    setIndex((next + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative min-h-[560px] overflow-hidden bg-slate">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={slide.seed}
            src={`https://picsum.photos/seed/${slide.seed}/1600/900`}
            alt={slide.heading}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
              i === index ? 'opacity-100' : 'opacity-0',
            )}
            aria-hidden={i !== index}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl flex-col items-center justify-center px-4 py-24 sm:px-6">
        <div className="w-full max-w-2xl bg-white px-6 py-12 text-center shadow-xl sm:px-12">
          <h1 className="text-2xl font-bold uppercase leading-tight text-ink sm:text-4xl">
            {slides[index]!.heading}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-mist">{slides[index]!.text}</p>
          <ButtonLink
            href="#contact"
            className="mt-8 rounded-none bg-brand px-8 py-4 text-xs font-bold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Contact Us
          </ButtonLink>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-none border border-white/40 text-white transition-colors hover:bg-white hover:text-slate"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.seed}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === index ? 'bg-brand' : 'bg-white/50 hover:bg-white',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-none border border-white/40 text-white transition-colors hover:bg-white hover:text-slate"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
