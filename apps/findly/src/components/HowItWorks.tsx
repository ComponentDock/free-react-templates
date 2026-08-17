import { CalendarCheck, Search, Star, type LucideIcon } from 'lucide-react'
import { STEPS, type StepIcon } from '../data'

const STEP_ICONS: Record<StepIcon, LucideIcon> = {
  search: Search,
  star: Star,
  calendar: CalendarCheck,
}

/* How It Work? — three centered step cards (icon, title, blurb) on the
   pale blue-grey section background. */
export function HowItWorks() {
  return (
    <section id="about" className="bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-display text-4xl font-semibold text-navy">How It Work?</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = STEP_ICONS[step.icon]
            return (
              <div key={step.title} className="rounded-[10px] bg-paper p-8 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h5 className="mt-5 font-display text-xl font-semibold text-navy">{step.title}</h5>
                <p className="mt-3 text-lg font-light leading-relaxed text-muted">{step.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
