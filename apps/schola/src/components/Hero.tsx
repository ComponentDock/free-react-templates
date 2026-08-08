import { ArrowRight, Award, Clock, PlayCircle, Star } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '100K+', label: 'Active Learners' },
  { value: '500+', label: 'Expert Courses' },
  { value: '95%', label: 'Completion Rate' },
  { value: '4.9', label: 'Average Rating' },
] as const

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600 dark:bg-primary-900/30 dark:text-primary-300">
              <Award className="h-4 w-4" aria-hidden="true" />
              New: AI &amp; Machine Learning Track
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Forge Your Future with Expert-Led Courses
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
              Master in-demand skills with hands-on projects and real-world applications. Join
              100,000+ professionals advancing their careers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#courses"
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-7 py-3.5 font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
              >
                Browse Courses
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <ButtonLink
                href="#pricing"
                variant="outline"
                className="rounded-xl border-2 border-gray-200 px-7 py-3.5 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                View Pricing
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="card-hover overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://picsum.photos/seed/schola-course/800/450"
                  alt="Complete Machine Learning & AI Bootcamp"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-3 top-3 flex gap-2">
                  <span className="rounded-lg bg-accent-500 px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
                    Bestseller
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="rounded-lg bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-700 backdrop-blur dark:bg-gray-900/90 dark:text-gray-300">
                    42 hours
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  Data Science
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-gray-900 dark:text-white">
                  Complete Machine Learning &amp; AI Bootcamp
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://picsum.photos/seed/schola-instructor/40/40"
                      alt="Dr. Maya Chen"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Dr. Maya Chen
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-gray-900 dark:text-white">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    4.96
                  </span>
                </div>
                <div className="mt-5 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <PlayCircle className="h-4 w-4 text-primary-500" aria-hidden="true" />
                    React Development Pro
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                  </div>
                  <p className="mt-2 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    Certificate Earned!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-gray-100 pt-10 dark:border-gray-800 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="order-2 text-sm text-gray-600 dark:text-gray-400">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
