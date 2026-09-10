import { Search, Layers, Sparkles, Smile } from 'lucide-react'

const steps = [
  { icon: Search, label: '1. Researching' },
  { icon: Layers, label: '2. Wireframing' },
  { icon: Sparkles, label: '3. Prototyping' },
  { icon: Smile, label: '4. Final Design' },
] as const

export function WorkingProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-ink md:text-3xl">Our Working Process</h2>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            It won&apos;t be a bigger problem to find one video game lover in your neighbor. Since
            the introduction of Virtual Game, it has been achieving.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-start to-brand-end">
                  <step.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h4 className="mt-4 text-sm font-medium text-ink">{step.label}</h4>
              </div>
              {i < steps.length - 1 && (
                <svg
                  className="h-4 w-10 text-brand-start sm:block"
                  viewBox="0 0 40 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 8h32m0 0l-6-5m6 5l-6 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
