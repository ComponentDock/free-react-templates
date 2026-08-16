import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'
import { Team } from './Team'

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="relative bg-dark">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-dark-soft" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="-mt-52 rounded-lg bg-white p-8 text-center md:p-12">
          <span className="text-[11px] font-bold tracking-[.1rem] text-muted uppercase">
            Testimonials
          </span>
          <h2 className="mt-2 text-5xl leading-none font-bold text-ink md:text-[80px]">
            People Says...
          </h2>
          <div className="mt-10">
            {testimonials.map((item, index) => (
              <figure
                key={index}
                aria-hidden={index !== active ? 'true' : undefined}
                className={cn(index !== active && 'hidden')}
              >
                <blockquote className="mx-auto max-w-2xl text-lg leading-relaxed text-ink">
                  {item.quote}
                </blockquote>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <img
                    src={item.avatar}
                    alt={`${item.name} avatar`}
                    loading="lazy"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <strong className="block text-ink">{item.name}</strong>
                    <span className="text-sm text-muted">{item.role}</span>
                  </div>
                </div>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
                onClick={() => setActive(index)}
                className={cn(
                  'h-3 w-3 rounded-full bg-light transition-colors hover:bg-brand/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                  index === active && 'bg-brand',
                )}
              />
            ))}
          </div>
        </div>
        <Team />
      </div>
    </section>
  )
}
