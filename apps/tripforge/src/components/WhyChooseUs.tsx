import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS, TESTIMONY, WHY } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function WhyChooseUs() {
  const [index, setIndex] = useState(0)
  const lastIndex = TESTIMONIALS.length - 1
  const active = TESTIMONIALS[index]!

  return (
    <section id="why" className="section-gap bg-mist">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading subheading={WHY.subheading} lead={WHY.titleLead} rest={WHY.titleRest} />
          {WHY.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-muted">
              {paragraph}
            </p>
          ))}
          <a href="#why" className="btn-pill-outline mt-4">
            {WHY.action}
          </a>
        </div>

        <div>
          <SectionHeading
            subheading={TESTIMONY.subheading}
            lead={TESTIMONY.titleLead}
            rest={TESTIMONY.titleRest}
          />
          <div role="region" aria-label="Guest testimonials" data-index={index}>
            <article className="testimony-card flex items-start gap-5">
              <div className="testimony-photo">
                <img src={active.photo} alt={active.name} />
                <span className="quote-badge">
                  <Quote aria-hidden="true" className="h-5 w-5" />
                </span>
              </div>
              <div>
                <p className="text-muted">{active.quote}</p>
                <p className="mt-3 font-medium text-heading">{active.name}</p>
                <p className="text-sm text-loc">{active.role}</p>
              </div>
            </article>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              disabled={index === 0}
              onClick={() => setIndex((value) => Math.max(0, value - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hair bg-white text-heading disabled:opacity-40"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              disabled={index === lastIndex}
              onClick={() => setIndex((value) => Math.min(lastIndex, value + 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hair bg-white text-heading disabled:opacity-40"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
