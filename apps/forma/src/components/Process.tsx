import { MessagesSquare, PenTool, Rocket, SlidersHorizontal } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Consult',
    blurb:
      'We listen first. Site visits, interviews, and goal-setting sessions shape a clear design brief.',
    icon: MessagesSquare,
  },
  {
    step: '02',
    title: 'Design',
    blurb:
      'Concepts become renderings, mood boards, and material palettes refined together with you.',
    icon: PenTool,
  },
  {
    step: '03',
    title: 'Refine',
    blurb:
      'Drawings and specifications are detailed, priced, and revised until every element is resolved.',
    icon: SlidersHorizontal,
  },
  {
    step: '04',
    title: 'Execute',
    blurb:
      'Our team manages procurement and installation, delivering a finished space that matches the vision.',
    icon: Rocket,
  },
] as const

export function Process() {
  return (
    <section id="process" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Process
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            How We Work
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A proven four-step process that keeps every project on time, on budget, and on vision.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="relative rounded-2xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="font-serif text-4xl font-bold text-primary-200 dark:text-primary-800">
                  {item.step}
                </span>
                <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
