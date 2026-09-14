import { MessageSquare, CheckCircle, Trophy } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consultation',
    description: 'Schedule a free consultation to discuss your legal needs and options.',
  },
  {
    icon: CheckCircle,
    number: '02',
    title: 'Choose Service',
    description: 'Select the practice area that best fits your case requirements.',
  },
  {
    icon: Trophy,
    number: '03',
    title: 'Get Results',
    description: 'Our attorneys will work diligently to achieve the best possible outcome.',
  },
] as const

export function Steps() {
  return (
    <section className="bg-brand py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">How We Work</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30">
                  <Icon className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-white/70">
                  Step {step.number}
                </span>
                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
