import { ClipboardList, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    title: 'Perfectly Design',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    icon: PenTool,
  },
  {
    title: 'Carefully Planned',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    icon: ClipboardList,
  },
  {
    title: 'Smartly Execute',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    icon: Rocket,
  },
] as const

export function Workflow() {
  return (
    <section aria-label="Work flow" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Our Work Flow
          </h2>
          <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="text-center">
              <span className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-brand text-white">
                <step.icon className="h-10 w-10" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
