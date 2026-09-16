import { Users, Zap, Heart, HandHelping } from 'lucide-react'

const services = [
  {
    title: 'Become a Volunteer',
    icon: Users,
    color: 'bg-brand',
    description: 'Join our team of dedicated volunteers and make a difference in your community.',
  },
  {
    title: 'Quick Fundraising',
    icon: Zap,
    color: 'bg-blue',
    description: 'Start a fundraising campaign to support causes close to your heart.',
  },
  {
    title: 'Start Donating',
    icon: Heart,
    color: 'bg-emerald-500',
    description: 'Your donations help provide clean water, food, and shelter to those in need.',
  },
  {
    title: 'Get Involved',
    icon: HandHelping,
    color: 'bg-teal-500',
    description: 'Participate in community events and programs to create lasting change.',
  },
] as const

export function Services() {
  return (
    <section className="bg-gray-50 py-16 transition-colors dark:bg-gray-900 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Services
          </span>
          <h2 className="mt-3 text-2xl font-bold text-ink dark:text-white sm:text-3xl">
            What We Do
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
            >
              <div className={`${service.color} flex items-center justify-center px-6 py-8`}>
                <service.icon className="h-12 w-12 text-white" aria-hidden="true" />
              </div>
              <img
                src={`https://picsum.photos/seed/mercy-service-${service.title.replace(/\s+/g, '-').toLowerCase()}/400/200`}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink dark:text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
