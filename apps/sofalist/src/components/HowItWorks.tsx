import { Calculator, Factory, Package } from 'lucide-react'
import { HOW_IT_WORKS_CTA, STEPS, type Step } from '../data'
import { PillLink } from './Button'

const STEP_ICONS: Record<Step['icon'], typeof Calculator> = {
  quote: Calculator,
  production: Factory,
  delivery: Package,
}

/* HowItWorks — three steps with a white 130px circle icon + numbered
   badge, followed by a two-button CTA row. */
export function HowItWorks() {
  return (
    <section aria-label="How it works" className="bg-light pb-24 pt-4">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-display text-[38px] font-medium text-ink">How it Works</h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = STEP_ICONS[step.icon]
            return (
              <div key={step.badge} className="text-center">
                <div className="relative mx-auto flex h-[130px] w-[130px] items-center justify-center rounded-full bg-paper shadow-[0_24px_36px_-11px_rgba(0,0,0,0.09)]">
                  <span className="absolute top-2 right-3 text-sm font-semibold text-amber">
                    {step.badge}
                  </span>
                  <Icon className="h-10 w-10 text-steel" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            )
          })}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <PillLink href="#about" variant="primary">
            {HOW_IT_WORKS_CTA.primary}
          </PillLink>
          <PillLink href="#contact" variant="secondary">
            {HOW_IT_WORKS_CTA.secondary}
          </PillLink>
        </div>
      </div>
    </section>
  )
}
