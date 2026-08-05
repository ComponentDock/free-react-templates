import { Smile, UserCircle, UserPlus, type LucideIcon } from 'lucide-react'

interface Step {
  number: string
  icon: LucideIcon
  title: string
  copy: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Sign Up for free',
    copy: 'Create your account in seconds and explore everything Applab has to offer.',
  },
  {
    number: '02',
    icon: UserCircle,
    title: 'Make your profile',
    copy: 'Tell us about your team and customize your workspace to fit your needs.',
  },
  {
    number: '03',
    icon: Smile,
    title: 'Enjoy the app',
    copy: 'Invite your teammates and start shipping great work right away.',
  },
] as const

export function HowItWorks() {
  return (
    <section className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy dark:text-white sm:text-4xl">
            Get started in three simple steps
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <article
                key={step.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <p className="font-display text-5xl font-extrabold text-primary-200 dark:text-primary-900">
                  {step.number}
                </p>
                <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-lavender text-sky dark:bg-gray-800">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-navy dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted dark:text-gray-400">
                  {step.copy}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
