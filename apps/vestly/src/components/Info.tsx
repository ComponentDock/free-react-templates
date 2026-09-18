import { Wallet, CreditCard, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Wallet,
    title: 'Create your wallet',
    text: 'Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Duis non volutpat arcu.',
  },
  {
    icon: CreditCard,
    title: 'Make payments',
    text: 'Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Duis non volutpat arcu.',
  },
  {
    icon: BarChart3,
    title: 'Buy or sell orders',
    text: 'Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Duis non volutpat arcu.',
  },
] as const

export function Info() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section title */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            take a look at our
          </div>
          <h2 className="text-3xl font-normal text-heading">A simple trading system</h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-heading/10">
                <step.icon className="h-8 w-8 text-heading" />
              </div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-heading">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-body-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
