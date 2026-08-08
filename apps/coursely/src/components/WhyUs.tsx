import { Award, Clock3, Rocket, Users } from 'lucide-react'

const reasons = [
  {
    icon: Clock3,
    title: 'Learn at Your Pace',
    blurb: 'Lifetime access to every course, with lessons you can watch on your schedule.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    blurb: 'Learn from practitioners at Google, Netflix, Airbnb and AWS.',
  },
  {
    icon: Rocket,
    title: 'Hands-on Projects',
    blurb: 'Build real portfolio projects that prove what you have learned.',
  },
  {
    icon: Award,
    title: 'Certificates',
    blurb: 'Earn shareable certificates for every course you complete.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            Why Coursely
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            The Best Platform to Learn New Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Everything you need to go from beginner to job-ready.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                <reason.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {reason.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
