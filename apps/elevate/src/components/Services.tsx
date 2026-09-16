import { Users, TrendingUp, Target, Heart } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Life Coaching',
    description:
      'Discover your purpose and create a roadmap to achieve your personal and professional goals.',
  },
  {
    icon: TrendingUp,
    title: 'Business Coaching',
    description:
      'Scale your business with proven strategies, operational improvements, and leadership development.',
  },
  {
    icon: Target,
    title: 'Career Coaching',
    description:
      'Navigate career transitions, sharpen your professional brand, and land the role you deserve.',
  },
  {
    icon: Heart,
    title: 'Wellness Coaching',
    description:
      'Build sustainable habits for physical and mental well-being that support peak performance.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-light dark:text-gray-400">
            We offer a range of coaching services designed to help you thrive in every area of your
            life.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition-colors dark:bg-gray-800"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10">
                <service.icon className="h-7 w-7 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-light dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
