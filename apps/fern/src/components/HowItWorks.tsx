import { Search, User, Handshake, Key } from 'lucide-react'

const STEPS = [
  {
    icon: Search,
    number: '01',
    title: 'Evaluate Property',
    description: 'Browse our curated listings and find properties that match your criteria.',
  },
  {
    icon: User,
    number: '02',
    title: 'Meet Your Agent',
    description: 'Connect with experienced agents who understand your needs.',
  },
  {
    icon: Handshake,
    number: '03',
    title: 'Close the Deal',
    description: 'Negotiate and finalize your purchase with expert guidance.',
  },
  {
    icon: Key,
    number: '04',
    title: 'Get Your Keys',
    description: 'Receive the keys to your new home and celebrate!',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-ink">How it Works</h2>
        <p className="mb-12 text-center text-mist">Four simple steps to your dream home</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                  <Icon size={28} />
                </div>
                <span className="mb-2 block text-sm font-bold text-brand">Step {step.number}</span>
                <h3 className="mb-2 text-lg font-bold text-ink">{step.title}</h3>
                <p className="text-sm text-mist">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
