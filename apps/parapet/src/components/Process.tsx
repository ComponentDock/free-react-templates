import { ClipboardList, Hammer, KeyRound, MessagesSquare } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We meet to discuss your vision, requirements, budget, and timeline to ensure perfect alignment from day one.',
    icon: MessagesSquare,
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'Detailed blueprints, engineering specs, permits, and a comprehensive project timeline with clear milestones.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Construction',
    description:
      'Expert execution with rigorous quality checkpoints, regular progress updates, and transparent communication.',
    icon: Hammer,
  },
  {
    number: '04',
    title: 'Handover',
    description:
      'Final inspection, quality assurance walkthrough, complete documentation, and confident project delivery.',
    icon: KeyRound,
  },
] as const

export function Process() {
  return (
    <section id="process" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            How We Build
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Our proven four-step process ensures every project is delivered on time, on budget, and
            to the highest quality standards.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-3xl font-extrabold text-gray-200 dark:text-gray-700">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
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
