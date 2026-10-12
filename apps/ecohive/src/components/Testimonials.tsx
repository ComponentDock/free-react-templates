import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface Testimonial {
  id: string
  quote: string
  initials: string
  name: string
  role: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ceramics',
    quote:
      'Moving our shop across took a single afternoon, and the support team checked every page with us. The site has not dropped once since.',
    initials: 'NO',
    name: 'Nadia Okoye',
    role: 'Owner, Okoye Ceramics',
  },
  {
    id: 'freelance',
    quote:
      'I host twelve client sites here. Backups, staging and quick answers mean I can always promise my clients a fast fix.',
    initials: 'MH',
    name: 'Marek Halvorsen',
    role: 'Freelance web developer',
  },
]

/** Plum rounded testimonial card with an initials avatar and slide indicators. */
export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = TESTIMONIALS[active]!

  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-shell pb-24">
      <div className="mx-auto max-w-[1000px] px-4">
        <blockquote className="bg-shell-soft mx-auto rounded-xl px-8 py-14 text-center sm:px-20">
          <p className="text-lg leading-relaxed text-white">“{current.quote}”</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="font-heading flex h-[68px] w-[68px] items-center justify-center rounded-full bg-accent/20 text-lg font-semibold text-accent"
            >
              {current.initials}
            </span>
            <span className="text-left">
              <span className="font-heading block font-semibold text-white">{current.name}</span>
              <span className="block text-sm text-muted">{current.role}</span>
            </span>
          </div>
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-3">
          {TESTIMONIALS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show testimonial ${index + 1}: ${item.name}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => setActive(index)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                index === active ? 'w-10 bg-accent' : 'w-5 bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
