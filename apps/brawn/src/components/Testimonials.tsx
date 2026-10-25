import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../content'
import { BandHeading, Container } from './ui'

/**
 * One 700 px card at a time, no autoplay (the reference does not autoplay
 * either), controls centred 40 px under the card and dimmed at both ends.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const last = TESTIMONIALS.length - 1
  const current = TESTIMONIALS[index]!

  return (
    <section id="coaches" aria-label="Testimonials" className="band bg-surface-light">
      <Container className="text-center">
        <BandHeading>Testimonial</BandHeading>

        <div
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${TESTIMONIALS.length}`}
          data-slide={index}
          className="mx-auto mt-16 w-full max-w-[700px] bg-white p-10 text-left transition-opacity duration-700"
        >
          <div className="flex items-center gap-5">
            <img
              src={current.avatar}
              alt=""
              width={60}
              height={60}
              loading="lazy"
              className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
            />
            <div>
              <h3 className="font-display text-[18px] leading-[1.5] font-light text-ink">
                {current.name}
              </h3>
              <p className="text-[1.05rem] text-meta">{current.role}</p>
            </div>
          </div>
          <blockquote className="mt-6 text-[16px] leading-[28.8px] text-body">
            “{current.quote}”
          </blockquote>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            aria-disabled={index === 0}
            onClick={() => setIndex((value) => Math.max(0, value - 1))}
            className={cn(
              'flex h-[54px] w-[54px] items-center justify-center rounded-btn text-ink transition-opacity',
              index === 0 ? 'opacity-20' : 'opacity-100 hover:text-brand',
            )}
          >
            <ChevronLeft aria-hidden="true" className="h-[30px] w-[30px]" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            aria-disabled={index === last}
            onClick={() => setIndex((value) => Math.min(last, value + 1))}
            className={cn(
              'flex h-[54px] w-[54px] items-center justify-center rounded-btn text-ink transition-opacity',
              index === last ? 'opacity-20' : 'opacity-100 hover:text-brand',
            )}
          >
            <ChevronRight aria-hidden="true" className="h-[30px] w-[30px]" />
          </button>
        </div>
      </Container>
    </section>
  )
}
