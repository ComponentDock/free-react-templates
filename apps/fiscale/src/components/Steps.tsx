import { ArrowRight, BarChart3, Rocket, Search, TrendingUp } from 'lucide-react'
import { STEPS, type StepIcon } from '../data'

const STEP_ICONS: Record<StepIcon, typeof Search> = {
  search: Search,
  chart: BarChart3,
  rocket: Rocket,
  growth: TrendingUp,
}

/* Steps — four white cards on a light background that overlap the section
   below (negative bottom margin) and reveal a blue top border on hover. */
export function Steps() {
  return (
    <section aria-label="Steps" className="bg-light pb-0">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ul role="list" className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = STEP_ICONS[step.icon]
            return (
              <li
                key={step.title}
                data-testid="step-card"
                className="group relative mb-[-42px] border-t-2 border-transparent bg-white p-[30px] pb-[120px] shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <span className="mb-2.5 block text-brand" aria-hidden="true">
                  <Icon className="h-[45px] w-[45px]" strokeWidth={1.6} />
                </span>
                <h3 className="font-display text-base font-bold text-ink">
                  <a href="#services-section" className="transition-colors hover:text-brand">
                    {step.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{step.text}</p>
                <a
                  href="#services-section"
                  aria-label={`More about ${step.title}`}
                  className="absolute bottom-8 left-7 flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
