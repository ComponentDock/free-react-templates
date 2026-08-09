import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    kicker: 'We are best car repair services',
    title: 'Make your car last longer',
    seed: 'torquely-1',
  },
  {
    kicker: 'We care about your car',
    title: "It's time to come to repair your car",
    seed: 'torquely-2',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [])

  const slide = slides[index]!

  return (
    <section id="home" className="relative overflow-hidden text-white">
      {slides.map((item, i) => (
        <div
          key={item.seed}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
          style={{
            backgroundImage: `url('https://picsum.photos/seed/${item.seed}/1600/900')`,
          }}
        />
      ))}
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-40">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{slide.kicker}</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            {slide.title}
          </h1>
          <Button
            className="mt-8 rounded bg-brand px-8 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            size="lg"
          >
            Book an appointment
          </Button>
        </div>
        <div className="mt-10 flex gap-3">
          {slides.map((item, i) => (
            <button
              key={item.seed}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                i === index ? 'bg-brand' : 'bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
