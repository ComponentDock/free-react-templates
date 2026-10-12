import { CalendarCheck, Search, Star, type LucideIcon } from 'lucide-react'
import { ABOUT_ID, HOW_IT_WORKS_TITLE, STEPS, type StepIcon } from '../lib/site'
import { bandClass, containerClass, sectionTitleClass } from '../lib/styles'

const STEP_GLYPHS: Record<StepIcon, LucideIcon> = {
  search: Search,
  star: Star,
  calendar: CalendarCheck,
}

/**
 * How It Work? — the three step cards on the pale blue-grey band: a round tinted glyph, the title
 * and the blurb, centred in each card.
 */
export function HowItWorks() {
  return (
    <section id={ABOUT_ID} className={bandClass}>
      <div className={containerClass}>
        <h2 className={sectionTitleClass}>{HOW_IT_WORKS_TITLE}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => {
            const Glyph = STEP_GLYPHS[step.icon]
            return (
              <div
                key={step.title}
                data-testid="step-card"
                className="rounded-[10px] bg-paper p-8 text-center shadow-sm"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Glyph className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-lg font-light leading-relaxed text-muted">{step.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
