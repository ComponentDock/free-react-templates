import { PiggyBank, Smartphone, Timer, UserCheck } from 'lucide-react'

const reasons = [
  {
    icon: PiggyBank,
    title: 'Save Up to 35%',
    blurb:
      'Bundle your policies and enjoy multi-line discounts without sacrificing coverage quality.',
  },
  {
    icon: Timer,
    title: 'Claims in 24 Hours',
    blurb: 'Our digital claims process gets you an answer within one business day — no runaround.',
  },
  {
    icon: UserCheck,
    title: 'Personal Advisors',
    blurb:
      'A dedicated licensed advisor reviews your coverage every year and adjusts it to your life.',
  },
  {
    icon: Smartphone,
    title: 'Digital First',
    blurb: 'Manage policies, file claims, and chat with support right from your phone, anytime.',
  },
] as const

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            Why ShieldGuard
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            The Smart Choice for Coverage
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Fifty thousand families already trust us with what matters most. Here is why.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-600/10 text-accent-600 dark:bg-accent-600/20 dark:text-accent-400">
                <reason.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {reason.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
