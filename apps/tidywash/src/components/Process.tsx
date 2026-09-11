import { ClipboardList, CalendarCheck, ThumbsUp } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Pick a suitable plan',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
  },
  {
    icon: CalendarCheck,
    number: '02',
    title: 'Set your schedule',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
  },
  {
    icon: ThumbsUp,
    number: '03',
    title: 'Get things done',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
  },
] as const

export function Process() {
  return (
    <section aria-label="How it works" className="bg-primary-400 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-white/80">
          How it Works
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-white">
          Get Amazing Cleaning in 3 Simple Ways
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40">
                <step.icon className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <span className="mt-4 block text-sm font-bold text-white/60">{step.number}</span>
              <h3 className="mt-1 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
