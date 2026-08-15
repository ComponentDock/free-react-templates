import { CreditCard, Download, UserPlus, type LucideIcon } from 'lucide-react'
import { howSteps, type HowStep } from '../data'

const stepIcons: Record<HowStep['icon'], LucideIcon> = {
  user: UserPlus,
  plan: CreditCard,
  download: Download,
}

export function How() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white lg:text-6xl">How it works</h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {howSteps.map((step) => {
            const Icon = stepIcons[step.icon]
            return (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h4 className="mt-6 text-xl font-semibold text-white">{step.title}</h4>
                <p className="mt-4 max-w-xs text-white/60">{step.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
