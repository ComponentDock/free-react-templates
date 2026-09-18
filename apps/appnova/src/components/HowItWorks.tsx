import { Download, Settings, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  number: number
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    icon: Download,
    title: 'Download the App',
    description: 'Get Appnova from the App Store or Google Play. Quick install, zero hassle.',
  },
  {
    number: 2,
    icon: Settings,
    title: 'Set Up Your Profile',
    description: 'Customize your experience in seconds with our intuitive onboarding flow.',
  },
  {
    number: 3,
    icon: Zap,
    title: 'Start Working',
    description: 'Dive in and let Appnova handle the complexity while you focus on results.',
  },
] as const

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-mist py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Three simple steps to get started with Appnova.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <article
                key={step.number}
                className="relative bg-white px-8 py-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 dark:bg-gray-900"
              >
                <div className="mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-full bg-gradient-to-b from-teal to-purple-500">
                  <Icon className="h-9 w-9 text-white" aria-hidden="true" />
                </div>
                <div className="mt-4 font-display text-4xl font-bold text-purple-500">
                  {step.number}
                </div>
                <h3 className="mt-2 font-display text-[21px] font-semibold text-ink dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-5 leading-relaxed text-muted dark:text-gray-400">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
