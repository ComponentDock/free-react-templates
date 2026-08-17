import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PANELS } from '../data'

/* Two 50/50 half-content CTA panels: panel one puts the cover image on the
   left and the copy on the right (10% padding); panel two mirrors it.
   Each panel carries a heading, a paragraph, a brand-blue check list and a
   blue "Learn more" button. */
export function HalfContent() {
  return (
    <section aria-label="Business growth panels" className="bg-white">
      {PANELS.map((panel, index) => {
        const imageRight = index === 1
        return (
          <div key={panel.heading} className="flex flex-col lg:flex-row">
            <div className={cn('h-[400px] lg:h-auto lg:w-1/2', imageRight && 'lg:order-2')}>
              <img
                src={panel.image}
                alt={panel.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className={cn(
                'flex items-center bg-white p-10 lg:w-1/2 lg:p-[10%]',
                imageRight && 'lg:order-1',
              )}
            >
              <div>
                <h2 className="mb-4 font-display text-3xl font-bold text-ink">{panel.heading}</h2>
                <p className="mb-8 leading-relaxed text-muted">{panel.body}</p>
                <ul className="mb-8 space-y-3">
                  {panel.checks.map((check) => (
                    <li key={check} className="flex items-start gap-3">
                      <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
                      <span className="text-ink/80">{check}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-brand px-8 py-3 text-xs font-bold uppercase tracking-[.1rem] text-white transition-colors hover:bg-brand-dark"
                >
                  {panel.actionLabel}
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
