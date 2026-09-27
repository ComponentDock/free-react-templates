import { Search, Home, Key, Smile } from 'lucide-react'

interface Step {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

const STEPS: Step[] = [
  {
    number: 1,
    title: 'Choose a category',
    description: 'Rhoncus est pellentesque elit ullamcorper dignissim.',
    icon: <Search size={28} />,
  },
  {
    number: 2,
    title: 'Find real estate',
    description: 'Rhoncus est pellentesque elit ullamcorper dignissim.',
    icon: <Home size={28} />,
  },
  {
    number: 3,
    title: 'Take the keys',
    description: 'Rhoncus est pellentesque elit ullamcorper dignissim.',
    icon: <Key size={28} />,
  },
  {
    number: 4,
    title: 'Live happy',
    description: 'Rhoncus est pellentesque elit ullamcorper dignissim.',
    icon: <Smile size={28} />,
  },
]

export function ProcessSteps() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-mist text-primary">
                {step.icon}
              </div>
              <div className="mb-2 text-sm font-bold text-primary">
                {String(step.number).padStart(2, '0')}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-heading">{step.title}</h3>
              <p className="text-sm text-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
