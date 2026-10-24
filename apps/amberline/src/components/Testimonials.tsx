import { useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'
import { SectionHeading } from './SectionHeading'

const visible = 3
const groups = testimonials.length - visible + 1

export function Testimonials() {
  const [index, setIndex] = useState(0)

  return (
    <section className="bg-band py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-4">
        <SectionHeading eyebrow="Testimonial" title="Happy Clients" />
        <div className="mt-14 overflow-hidden">
          <ul
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.name}
                className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
              >
                <figure className="bg-white p-[35px_30px_30px] shadow-[0_10px_25px_-13px_rgba(0,0,0,0.1)]">
                  <div className="relative mb-6 size-20">
                    <img
                      src={`https://picsum.photos/seed/${testimonial.seed}/160/160`}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="size-20 rounded-full object-cover"
                    />
                    <span className="absolute -right-1 -bottom-1 flex size-[30px] items-center justify-center rounded-full bg-brand text-ink">
                      <Quote aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                  <figcaption>
                    <span className="block text-[20px] font-semibold uppercase text-ink">
                      {testimonial.name}
                    </span>
                    <span className="block text-[13px] uppercase tracking-[0.08em] text-deep-amber">
                      {testimonial.role}
                    </span>
                  </figcaption>
                  <blockquote className="mt-4 text-[15px] leading-[1.8]">
                    {testimonial.quote}
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: groups }, (_, bar) => (
            <button
              key={bar}
              type="button"
              aria-label={`Show testimonial group ${bar + 1}`}
              aria-current={bar === index ? 'true' : undefined}
              onClick={() => setIndex(bar)}
              className={cn('h-[2px] w-[30px] transition-colors', bar === index ? 'bg-brand' : 'bg-[#ddd]')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
