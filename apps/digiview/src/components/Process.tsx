import { Lightbulb, PenTool, Rocket, CheckCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const steps = [
  {
    number: 1,
    icon: Lightbulb,
    title: 'Discovery',
    description: 'We analyze your goals, audience, and market to build a winning strategy.',
  },
  {
    number: 2,
    icon: PenTool,
    title: 'Design',
    description: 'Our designers craft beautiful, user-centered interfaces for your brand.',
  },
  {
    number: 3,
    icon: Rocket,
    title: 'Development',
    description: 'Engineers build fast, scalable solutions using modern technology.',
  },
  {
    number: 4,
    icon: CheckCircle,
    title: 'Launch',
    description: 'We deploy, monitor, and optimize to ensure lasting success.',
  },
]

interface ProcessProps {
  className?: string
}

export function Process({ className }: ProcessProps) {
  return (
    <section className={cn('bg-gray-50 py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Our Process</h2>
          <p className="mt-3 text-gray-500">A proven workflow that delivers results</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.number} className="relative text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl font-bold text-black">
                {s.number}
              </div>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center">
                <s.icon className="h-8 w-8 text-brand" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
