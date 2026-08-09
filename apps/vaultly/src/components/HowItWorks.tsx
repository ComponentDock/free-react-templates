import { Link2, LineChart, Sparkles, Target, type LucideIcon } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: Link2,
    title: 'Connect Your Accounts',
    description:
      'Securely link your bank accounts, credit cards, and investment accounts in just a few minutes.',
  },
  {
    icon: Target,
    title: 'Tell Finley Your Goals',
    description:
      'Share your financial goals — from paying off debt to buying a home to retiring comfortably.',
  },
  {
    icon: Sparkles,
    title: 'Get Your Personalized Plan',
    description:
      'Finley builds a tailored financial plan designed around your unique situation and priorities.',
  },
  {
    icon: LineChart,
    title: 'Automate & Grow',
    description:
      'Set it and forget it. Finley automates your savings, investments, and rebalancing as you grow.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Get Started in Minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            No spreadsheets, no jargon — just four simple steps to take control of your finances.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 text-white">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                Step {index + 1}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink
            href="#pricing"
            className="h-auto rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
          >
            Start Your Free Trial
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
