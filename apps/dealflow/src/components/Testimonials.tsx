import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Dealflow transformed our sales process. We went from scattered spreadsheets to a unified pipeline that increased our close rate by 40% in just three months.',
    name: 'Sarah Chen',
    role: 'VP of Sales, TechScale Inc.',
    initial: 'S',
  },
  {
    quote:
      'The AI lead scoring alone is worth the investment. Our reps now focus on the right deals at the right time, and our average deal size has grown by 25%.',
    name: 'Marcus Johnson',
    role: 'Sales Director, GrowthWave',
    initial: 'M',
  },
  {
    quote:
      'We evaluated six CRM platforms before choosing Dealflow. The onboarding was seamless and our team was productive within the first week.',
    name: 'Emily Rodriguez',
    role: 'Head of Revenue, CloudFirst',
    initial: 'E',
  },
  {
    quote:
      'The email automation sequences have completely changed how we nurture leads. Our response rates tripled and we are booking more demos than ever.',
    name: 'David Park',
    role: 'Sales Manager, DataBridge',
    initial: 'D',
  },
  {
    quote:
      'Dealflow integrates perfectly with our existing tech stack. Slack notifications, Zoom scheduling, Gmail sync — it all just works seamlessly.',
    name: 'Rachel Foster',
    role: 'RevOps Lead, ScaleUp Labs',
    initial: 'R',
  },
  {
    quote:
      'The analytics dashboards give us real-time visibility into our pipeline health. We can forecast revenue accurately and make smarter hiring decisions.',
    name: 'James Mitchell',
    role: 'CRO, Velocity Partners',
    initial: 'J',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  // index is always in [0, testimonials.length) via the modulo updates below
  const current = testimonials[index]!

  const showNext = () => setIndex((value) => (value + 1) % testimonials.length)
  const showPrevious = () =>
    setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      id="testimonials"
      className="border-y border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Trusted by Sales Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            See how Dealflow helps sales teams around the world close more deals and grow revenue.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <figure className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-10">
            <blockquote>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                &ldquo;{current.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6 flex flex-col items-center gap-2">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white"
                aria-hidden="true"
              >
                {current.initial}
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">{current.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{current.role}</span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-primary-600 hover:text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 sm:-left-14"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-primary-600 hover:text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 sm:-right-14"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
