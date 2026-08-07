import { FilePen, MailPlus, Send, UserPlus } from 'lucide-react'

const steps = [
  {
    title: 'Sign Up',
    blurb: 'Create your free account in under a minute with just an e-mail address.',
    icon: UserPlus,
  },
  {
    title: 'Create',
    blurb: 'Set up your inbox and personalize your workspace to match your flow.',
    icon: MailPlus,
  },
  {
    title: 'Compose',
    blurb: 'Write beautiful messages with smart suggestions and rich formatting.',
    icon: FilePen,
  },
  {
    title: 'Send',
    blurb: 'Deliver your mail instantly with reliable, secure servers worldwide.',
    icon: Send,
  },
] as const

export function HowItWorks() {
  return (
    <section
      id="process"
      aria-label="How the app works"
      className="bg-primary-50/50 py-20 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-gray-100">
            How The App Works?
          </h2>
          <p className="mt-4 text-smoke dark:text-gray-400">
            Four simple steps from sign-up to your first sent message.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-primary-100 bg-white p-7 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-400 text-white">
                <step.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-gray-100">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {step.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
