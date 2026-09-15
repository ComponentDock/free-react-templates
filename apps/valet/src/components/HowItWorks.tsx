import { ClipboardList, Users, Rocket } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Tell Us What You Need',
    description:
      'Share your requirements and we will match you with the perfect virtual assistant.',
  },
  {
    icon: Users,
    title: 'We Assign a VA',
    description: 'A skilled virtual assistant is assigned to handle your tasks professionally.',
  },
  {
    icon: Rocket,
    title: 'Start Productivity',
    description: 'Watch your productivity soar as your VA takes care of the rest.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Procedure
          </p>
          <h2 className="text-3xl font-bold">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                <step.icon className="h-8 w-8" />
              </div>
              <span className="mb-2 block text-sm text-gray-500">Step {i + 1}</span>
              <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
