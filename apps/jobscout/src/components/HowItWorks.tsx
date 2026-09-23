import { Search, FileText, Briefcase } from 'lucide-react'
import type { ReactNode } from 'react'

interface Step {
  icon: ReactNode
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: <Search className="h-14 w-14 text-white" />,
    title: '1. Search a job',
    description: 'Browse thousands of job listings from top companies around the world.',
  },
  {
    icon: <FileText className="h-14 w-14 text-white" />,
    title: '2. Apply for job',
    description: 'Submit your application with a single click and track your progress.',
  },
  {
    icon: <Briefcase className="h-14 w-14 text-white" />,
    title: '3. Get your job',
    description: 'Land your dream job and start building your career today.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-process-bg py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-white/60">
            Apply Process
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">How it works</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded bg-white/10 p-10 text-center transition-all hover:bg-white/15"
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="mb-4 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
