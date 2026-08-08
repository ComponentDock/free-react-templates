import { useState } from 'react'
import {
  Briefcase,
  Handshake,
  Rocket,
  Search,
  UserCircle2,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Step {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const seekers: Step[] = [
  {
    number: '01',
    title: 'Create Your Profile',
    description:
      'Build a standout profile showcasing your skills, experience, and career goals. Upload your resume and let employers find you.',
    icon: UserCircle2,
  },
  {
    number: '02',
    title: 'Discover Opportunities',
    description:
      'Search and filter thousands of jobs by role, location, salary, and more. Get personalized recommendations.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Apply & Get Hired',
    description:
      'Apply with one click, track your applications, and connect directly with hiring managers.',
    icon: Rocket,
  },
] as const

const employers: Step[] = [
  {
    number: '01',
    title: 'Post Your Opening',
    description:
      'Create compelling job listings in minutes. Specify requirements, benefits, and company culture.',
    icon: Briefcase,
  },
  {
    number: '02',
    title: 'Review Candidates',
    description:
      'Access a curated pool of pre-screened talent. Use smart filters to find candidates that fit.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Hire Top Talent',
    description:
      'Schedule interviews, collaborate with your team, and make offers — all within the platform.',
    icon: Handshake,
  },
] as const

type Audience = 'seekers' | 'employers'

export function HowItWorks() {
  const [audience, setAudience] = useState<Audience>('seekers')
  const steps = audience === 'seekers' ? seekers : employers

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Your Path to Success
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Whether you&rsquo;re searching for your next role or building your team, Jobfield makes
            it simple.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
            <button
              type="button"
              onClick={() => setAudience('seekers')}
              aria-pressed={audience === 'seekers'}
              className={cn(
                'rounded-lg px-6 py-3 text-sm font-semibold transition-colors',
                audience === 'seekers'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700',
              )}
            >
              For Job Seekers
            </button>
            <button
              type="button"
              onClick={() => setAudience('employers')}
              aria-pressed={audience === 'employers'}
              className={cn(
                'rounded-lg px-6 py-3 text-sm font-semibold transition-colors',
                audience === 'employers'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700',
              )}
            >
              For Employers
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-gray-300 dark:text-gray-600">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
