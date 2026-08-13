import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { skills, testimonials } from '../data'

/** Skills & testimonials section (reference `.skills-and-testimonials-
 *  section.spad`): five colored progress bars on the left, a testimonial
 *  slider on the right with a light quote bubble and round author photo. */
export function SkillsTestimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const testimonial = testimonials[index]!

  const goTo = (next: number) => setIndex((next + total) % total)

  return (
    <section id="about" aria-label="Skills and testimonials" className="bg-white py-[105px]">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-heading text-4xl font-semibold text-ink">Our Skills</h2>
          <div className="mt-12 space-y-8">
            {skills.map(({ label, value, color }) => (
              <div key={label}>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-black">{label}</p>
                  <p className="text-sm font-semibold text-black">{value}%</p>
                </div>
                <div className="h-2 rounded-[15px] bg-mist">
                  <div
                    className="h-2 rounded-[15px]"
                    style={{ width: `${value}%`, backgroundColor: color }}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={label}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[15px] bg-mist px-8 py-12 sm:px-10">
            <blockquote className="text-base leading-relaxed text-ink">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-14 w-14 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-heading text-sm font-bold text-black">{testimonial.name}</p>
                <p className="text-sm font-bold text-primary-600">{testimonial.role}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -left-4 hidden -translate-y-1/2 text-eyebrow transition-colors hover:text-primary-600 sm:block"
          >
            <ChevronLeft className="h-8 w-8" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="absolute top-1/2 -right-4 hidden -translate-y-1/2 text-eyebrow transition-colors hover:text-primary-600 sm:block"
          >
            <ChevronRight className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
