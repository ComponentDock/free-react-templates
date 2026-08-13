import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { classSlides } from '../data'

export function Classes() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % classSlides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="classes-section" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black text-primary">Classes</h2>
          <p className="mt-4 text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out sm:[--slide-step:50%] lg:[--slide-step:33.3333%]"
            style={{ transform: `translateX(calc(-${index} * var(--slide-step, 100%)))` }}
          >
            {classSlides.map((slide, i) => (
              <div
                key={`${slide.category}-${i}`}
                className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
              >
                <div className="group relative overflow-hidden">
                  <img
                    src={slide.image}
                    alt={`Pumply ${slide.category} class`}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 flex items-end bg-primary/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div>
                      <h3 className="text-xl font-bold text-white">{slide.title}</h3>
                      <span className="mt-1 block text-sm text-white/70">{slide.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          {classSlides.map((slide, i) => (
            <button
              key={`${slide.category}-dot-${i}`}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === index ? 'bg-primary' : 'bg-[#e6e6e6]',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
