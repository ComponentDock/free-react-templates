import { BookOpen, GraduationCap, Users, Award } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const features = [
  {
    icon: BookOpen,
    heading: 'Knowledge is power',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: GraduationCap,
    heading: 'Senior High School',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    icon: Users,
    heading: 'College of Arts & Sciences',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
  },
  {
    icon: Award,
    heading: 'Unmatched Professors',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  },
]

export function Knowledge() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.heading}
              className="rounded bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={cn(
                  'mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-400',
                )}
              >
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
              <a
                href="#about"
                className="mt-4 inline-block text-sm font-medium text-brand-400 hover:text-brand-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
