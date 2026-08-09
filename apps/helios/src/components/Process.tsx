import { Activity, CalendarCheck, FileText, HardHat, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'

interface Step {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Free Consultation',
    description:
      'We assess your energy usage, roof, and goals — then design a system tailored to you.',
    icon: CalendarCheck,
  },
  {
    number: '02',
    title: 'Design & Permits',
    description: 'Our engineers finalize the layout and handle all permits and utility paperwork.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Professional Installation',
    description:
      'Certified crews install your system in as little as one day — cleanly and safely.',
    icon: HardHat,
  },
  {
    number: '04',
    title: 'Activation & Monitoring',
    description:
      'We connect your system, flip the switch, and monitor performance for years to come.',
    icon: Activity,
  },
] as const

export function Process() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
              Process
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Going solar with Helios is simple — four clear steps from first call to clean power.
            </p>
          </div>
        </Reveal>
        <div className="relative mt-14">
          {/* connecting line on large screens */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-primary-200 lg:block dark:bg-primary-900"
          />
          <div
            role="list"
            aria-label="Installation process steps"
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 80}>
                <div role="listitem" className="flex flex-col items-center text-center">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-lg font-extrabold text-white shadow-lg shadow-primary-600/30">
                    {step.number}
                  </span>
                  <step.icon
                    className="mt-4 h-6 w-6 text-primary-600 dark:text-primary-400"
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
