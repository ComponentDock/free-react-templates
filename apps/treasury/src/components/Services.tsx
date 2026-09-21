import { Briefcase, Headphones } from 'lucide-react'

const services = [
  {
    Icon: Briefcase,
    title: 'Business Consulting',
    description:
      'Expert guidance to help your business grow with tailored financial strategies and market analysis.',
  },
  {
    Icon: Headphones,
    title: 'Banking Consultation',
    description:
      'Personalized banking advice to optimize your accounts, loans, and investment portfolio.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-16 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-brand md:text-4xl">Our Services</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg bg-white p-8 shadow-sm transition-colors dark:bg-gray-800"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
