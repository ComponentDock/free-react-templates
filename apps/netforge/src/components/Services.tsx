import { Code, Cloud, Shield, Megaphone } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and cutting-edge technologies for optimal performance.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration services to keep your business agile and future-ready.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security audits and protection strategies to safeguard your digital assets.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Data-driven marketing campaigns that increase visibility and drive measurable business growth.',
  },
] as const

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            We offer a wide range of IT services to help your business succeed in the digital world.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-gray-200 p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white dark:bg-primary-900/30 dark:group-hover:bg-primary-500">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
