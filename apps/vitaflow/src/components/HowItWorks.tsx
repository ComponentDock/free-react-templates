import { ClipboardList, Target, Leaf, Smile } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Follow the program',
    description:
      'Start with a personalized assessment and follow a structured plan designed specifically for your goals.',
  },
  {
    icon: Target,
    title: 'Work for result',
    description:
      'Stay committed to your goals with regular check-ins and adjustments to keep you on track.',
  },
  {
    icon: Leaf,
    title: 'Eat healthy food',
    description:
      'Fuel your body with nutritious meals that taste great and support your fitness journey.',
  },
  {
    icon: Smile,
    title: 'Enjoy your life',
    description:
      'Experience the joy of improved health, energy, and confidence as you transform your lifestyle.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-400">
            Other Services
          </p>
          <h2 className="text-2xl font-bold text-ink">How it works?</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                <step.icon size={28} className="text-primary-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-ink">{step.title}</h3>
              <p className="text-sm text-smoke">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
