import { Home, CircleDollarSign, Building } from 'lucide-react'

const STEPS = [
  {
    icon: Home,
    title: 'Find Property.',
    description:
      'Browse our extensive listings to find the perfect property that matches your needs.',
  },
  {
    icon: CircleDollarSign,
    title: 'Buy Property.',
    description: 'Make an offer and we will guide you through the purchasing process seamlessly.',
  },
  {
    icon: Building,
    title: 'Make Investment.',
    description: 'Invest in real estate and watch your wealth grow with the right properties.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.title} className="text-center">
              <step.icon className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
