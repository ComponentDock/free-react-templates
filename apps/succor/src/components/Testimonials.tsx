import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Seeded picsum placeholder for the source testimonial side photograph
   (images/testimony-img.png; must not be copied). */
const STORY_IMAGE = 'https://picsum.photos/seed/succor-story/800/900'

const AVATAR_IMAGE = 'https://picsum.photos/seed/succor-person/160/160'

/* section.testimony-section — #6b76ff background with a #232931 overlay at
   70% opacity; left photo panel (overlapping up -150px on desktop), right
   column with the white "Success Stories" heading and an index-based
   carousel of quote + 80px round avatar + name + position. */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  const previous = () =>
    setIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setIndex((current) => (current + 1) % TESTIMONIALS.length)

  return (
    <section id="stories" aria-label="Success stories" className="relative bg-violet">
      <div aria-hidden="true" className="absolute inset-0 bg-slate/70" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-[7em] lg:flex-row lg:items-start">
        {/* .testimony-img — cover photo, margin-top -150px ≥992px. */}
        <div
          className="h-[420px] w-full bg-cover bg-[top_center] lg:mt-[-150px] lg:w-1/2"
          style={{ backgroundImage: `url('${STORY_IMAGE}')` }}
        />

        {/* Right column — heading + carousel. */}
        <div className="mt-10 w-full py-5 lg:mt-0 lg:w-1/2 lg:pl-10">
          <h2 className="text-[32px] font-black text-white lg:text-[40px]">Success Stories</h2>

          <div className="mt-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <figure key={testimonial.name} className={cn(i === index ? 'block' : 'hidden')}>
                <blockquote className="mb-4 max-w-[520px] text-[20px] leading-relaxed text-soft-white">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="flex items-center">
                  <img
                    src={AVATAR_IMAGE}
                    alt=""
                    loading="lazy"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-[20px] font-extrabold text-white">{testimonial.name}</p>
                    <span className="text-white/70">{testimonial.position}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Carousel controls — prev/next arrows + dot indicators. */}
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous story"
              onClick={previous}
              className="cursor-pointer rounded-full border border-white/40 p-2 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((testimonial, i) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Go to story ${i + 1}`}
                  aria-pressed={i === index}
                  onClick={() => setIndex(i)}
                  className={cn(
                    'h-3 w-3 cursor-pointer rounded-full transition-colors',
                    i === index ? 'bg-brand' : 'bg-white/40 hover:bg-white/70',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next story"
              onClick={next}
              className="cursor-pointer rounded-full border border-white/40 p-2 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
