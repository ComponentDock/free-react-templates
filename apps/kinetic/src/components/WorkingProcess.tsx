import { Search, Layers, PenTool, Smile } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const steps = [
  { icon: Search, label: '1. Researching' },
  { icon: Layers, label: '2. Wireframing' },
  { icon: PenTool, label: '3. Prototyping' },
  { icon: Smile, label: '4. Final Design' },
]

export function WorkingProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-medium text-ink">Our Working Process</h2>
          <p className="text-sm font-light leading-relaxed text-smoke">
            It won&apos;t be a bigger problem to find one video game lover in your neighbor. Since
            the introduction of Virtual Game, it has been achieving great heights.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-mist">
                  <step.icon size={28} className="text-primary-400" />
                </div>
                <h4 className="text-sm font-medium text-ink">{step.label}</h4>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={20}
                  className="hidden text-primary-300 md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
