import { ClipboardCheck, Search, Zap } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Apply for loan',
    description:
      'Fill out our simple online application form with your basic details and loan requirements.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Application review',
    description: 'Our team reviews your application and verifies your information within 24 hours.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Get funding fast',
    description: 'Once approved, funds are transferred directly to your account within 48 hours.',
    icon: Zap,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">How it works</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body">
          Our streamlined process makes it easy to get the funding you need in just three simple
          steps.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-7 w-7 text-brand" />
                </div>
                <span className="mb-2 inline-block text-sm font-bold text-purple">
                  {step.number}
                </span>
                <h3 className="mb-2 text-xl font-bold text-navy">{step.title}</h3>
                <p className="text-sm text-body">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
