import { useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIES, TESTIMONY_BG } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * TestimonyCarousel — photo-backdrop "Testimony / Happy Customer" section
 * (source `.testimony-section` owl carousel): a carousel of five customer
 * quotes, each with a 130px circular photo, a white circular quote badge with
 * a red quote icon, the quote paragraph, the customer name and role. Dots
 * switch slides; the active dot is brand red.
 */
export function TestimonyCarousel() {
  const [active, setActive] = useState(0)
  const testimony = TESTIMONIES[active]!

  return (
    <section id="stories" className="relative overflow-hidden py-24">
      <img src={TESTIMONY_BG} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4">
        <SectionHeading script="Testimony" title="Happy Customer" light />
        <div key={active} className="mt-12 text-center" aria-live="polite">
          <div className="relative mx-auto mb-6 h-[130px] w-[130px]">
            <img
              src={testimony.src}
              alt={`Portrait of ${testimony.name}`}
              className="h-full w-full rounded-full object-cover"
            />
            <span className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <Quote className="h-5 w-5 fill-brand text-brand" aria-hidden="true" />
            </span>
          </div>
          <blockquote className="mx-auto max-w-2xl text-base leading-relaxed text-white/70">
            {testimony.quote}
          </blockquote>
          <p className="mt-4 font-semibold text-white">{testimony.name}</p>
          <span className="mt-1 block text-sm text-white/70">{testimony.role}</span>
        </div>
        <div className="mt-8 flex justify-center gap-3" role="tablist" aria-label="Testimonies">
          {TESTIMONIES.map((item, index) => (
            <button
              key={`${item.name}-${index}`}
              type="button"
              aria-label={`Show testimony ${index + 1}`}
              aria-current={index === active}
              onClick={() => setActive(index)}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                index === active ? 'bg-brand' : 'bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
