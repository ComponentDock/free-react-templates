import { Award, Clock, FileBadge, LifeBuoy, Users, Wrench, type LucideIcon } from 'lucide-react'

const features: ReadonlyArray<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: 'Expert-Led Content',
    description:
      "Learn from industry veterans who have shipped products at the world's top companies.",
    icon: Award,
  },
  {
    title: 'Hands-On Projects',
    description: 'Build a portfolio of real projects that demonstrate exactly what you can do.',
    icon: Wrench,
  },
  {
    title: 'Learn at Your Pace',
    description: 'Self-paced lessons with lifetime access, designed to fit around your schedule.',
    icon: Clock,
  },
  {
    title: 'Career Support',
    description: 'Resume reviews, interview prep, and guidance from dedicated career coaches.',
    icon: LifeBuoy,
  },
  {
    title: 'Community Access',
    description: 'Join a global network of learners, mentors, and alumni who have your back.',
    icon: Users,
  },
  {
    title: 'Certificates',
    description: 'Earn shareable certificates that prove your new skills to employers.',
    icon: FileBadge,
  },
] as const

export function Features() {
  return (
    <section className="bg-gray-100/50 py-20 dark:bg-gray-900/50 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A complete learning ecosystem built around one goal: your career growth.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="card-hover rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
