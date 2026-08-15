import { Home, KeyRound, Search } from 'lucide-react'
import { steps } from '../data'
import type { Step } from '../data'

const icons: Record<Step['icon'], typeof Search> = {
  search: Search,
  key: KeyRound,
  home: Home,
}

export function HowItWorks() {
  return (
    <section
      id="howitworks-section"
      aria-label="How It Works"
      className="bg-brand py-20 text-white"
    >
      <div className="mx-auto max-w-[1170px] px-4">
        <h2 className="text-center font-heading text-3xl font-light uppercase md:text-4xl">
          How It Works
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = icons[step.icon]
            return (
              <div key={step.number} className="relative text-center">
                {i < steps.length - 1 && (
                  <span
                    className="absolute left-[calc(50%+56px)] top-5 hidden w-[calc(100%-112px)] border-t border-black/40 md:block"
                    aria-hidden="true"
                    data-connector="true"
                  />
                )}
                <div className="flex items-center justify-center gap-4">
                  <span className="font-heading text-5xl font-light">{step.number}</span>
                  <Icon className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-light uppercase">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/85">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
