import { Coffee, Flame, HeartHandshake, Sprout, type LucideIcon } from 'lucide-react'

type Step = {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

const steps: Step[] = [
  {
    step: 'Step 1',
    title: 'Sourcing',
    description:
      'We partner directly with farmers across the coffee belt, ensuring fair prices and sustainable practices.',
    icon: Sprout,
  },
  {
    step: 'Step 2',
    title: 'Roasting',
    description:
      'Small-batch roasting in our Portland facility, where we develop each bean to its full potential.',
    icon: Flame,
  },
  {
    step: 'Step 3',
    title: 'Cupping',
    description:
      'Rigorous quality control through daily cupping sessions to ensure consistency and excellence.',
    icon: Coffee,
  },
  {
    step: 'Step 4',
    title: 'Serving',
    description: 'From our hands to yours, every cup is crafted with care by our trained baristas.',
    icon: HeartHandshake,
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            From Origin to Cup
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our commitment to quality at every step
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-primary-100 bg-primary-50/60 p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
                <step.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-400">
                {step.step}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
