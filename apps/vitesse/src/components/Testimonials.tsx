import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const go = (step: number) =>
    setIndex((i) => (i + step + TESTIMONIALS.length) % TESTIMONIALS.length)

  const active = TESTIMONIALS[index]!

  return (
    <section className="relative overflow-hidden py-24 md:py-40">
      <img
        src="https://picsum.photos/seed/vitesse-testimonial-bg/1920/1080"
        loading="lazy"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-header/70" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Clients Testimonials" title="What Our Clients Say!" light />

        <div className="mt-14">
          <Quote aria-hidden="true" className="h-10 w-10 text-accent" />
          <blockquote>
            <p className="mt-6 text-lg font-medium text-quote">{active.quote}</p>
            <footer className="mt-10 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-accent font-semibold text-white"
              >
                {active.initials}
              </span>
              <div>
                <cite className="not-italic font-display text-2xl font-semibold text-white">
                  {active.name}
                </cite>
                <p className="text-white/70">{active.role}</p>
              </div>
            </footer>
          </blockquote>

          <div className="mt-10 flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-white/40 text-white transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-white/40 text-white transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-16 rounded-[10px] bg-white p-8 text-center md:p-12">
          <h3 className="font-display text-3xl font-semibold text-dark">
            Always listening, always understanding.
          </h3>
          <ButtonLink href="#quote" className="btn mt-7 px-11 py-4 text-white">
            <span>Request a Quote</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
