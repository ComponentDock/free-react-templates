import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TRAINERS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Trainers — carousel of five trainer entries (photo, name, role) with
 * next/prev controls.
 */
export function Trainers() {
  const [index, setIndex] = useState(0)
  const visible = 3
  const maxIndex = TRAINERS.length - visible

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1))
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1))

  return (
    <section id="trainers" aria-label="Trainers" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Our Trainers"
          intro="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
        />

        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {TRAINERS.map((trainer) => (
                <div key={trainer.name} className="w-1/3 shrink-0 px-3">
                  <div className="text-center">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      loading="lazy"
                      className="mx-auto h-72 w-full object-cover object-top"
                    />
                    <div className="pt-5">
                      <h3 className="text-lg">{trainer.name}</h3>
                      <span className="text-sm text-neutral-500">{trainer.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous trainers"
              className="flex h-10 w-10 items-center justify-center border border-neutral-300 text-neutral-500 transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next trainers"
              className="flex h-10 w-10 items-center justify-center border border-neutral-300 text-neutral-500 transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
