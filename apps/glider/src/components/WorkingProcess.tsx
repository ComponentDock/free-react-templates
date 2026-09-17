import { Search, PenTool, Cpu, CheckCircle } from 'lucide-react'

const steps = [
  { icon: Search, label: 'Researching' },
  { icon: PenTool, label: 'Wireframing' },
  { icon: Cpu, label: 'Prototyping' },
  { icon: CheckCircle, label: 'Final Design' },
]

export function WorkingProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-3xl font-semibold text-[#222222]">
          Our Working Process
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-[120px] w-[120px] items-center justify-center rounded-[3px] bg-[#f9f9ff]">
                  <step.icon size={40} className="text-[#3e69fe]" />
                </div>
                <span className="text-sm font-medium text-[#222222]">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="mx-4 hidden text-[#3e69fe]/40 md:block">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
