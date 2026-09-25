import { Search, Layers, Palette, Smile } from 'lucide-react'
import type { ReactNode } from 'react'

interface ProcessStep {
  icon: ReactNode
  label: string
}

const STEPS: ProcessStep[] = [
  { icon: <Search size={28} className="text-brand-blue" />, label: 'Researching' },
  { icon: <Layers size={28} className="text-brand-blue" />, label: 'Wireframing' },
  { icon: <Palette size={28} className="text-brand-blue" />, label: 'Prototyping' },
  { icon: <Smile size={28} className="text-brand-blue" />, label: 'Final Design' },
]

export function WorkingProcess() {
  return (
    <section className="py-20" id="about">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <h2 className="mb-4 text-[30px] font-medium text-heading">Our Working Process</h2>
          <p className="text-sm font-light leading-relaxed text-body">
            It won&apos;t be a bigger problem to find one video game lover in your neighbor. Since
            the introduction of Virtual Game, it has been achieving new heights of success.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-4">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-light-bg">
                  {step.icon}
                </div>
                <h4 className="text-sm font-medium text-heading">
                  {i + 1}. {step.label}
                </h4>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden text-2xl text-brand-blue md:block">&rarr;</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
