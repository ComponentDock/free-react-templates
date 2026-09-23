import { Users, Target, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Experience',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Target,
    title: 'Marketing Goals',
    description:
      'Separate they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    icon: Lightbulb,
    title: 'Targeting Vision',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function Services() {
  return (
    <section className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">Services</p>
          <h2 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">Services</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-ink dark:text-white">{service.title}</h3>
              <p className="text-muted dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
