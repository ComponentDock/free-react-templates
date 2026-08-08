import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    day: 'Sunday',
    name: 'Sunday Worship',
    time: '9:00 AM & 11:00 AM',
    description:
      "Our main worship services with contemporary and traditional music, inspiring messages, and children's programs.",
  },
  {
    day: 'Wednesday',
    name: 'Wednesday Bible Study',
    time: '7:00 PM',
    description:
      'Mid-week Bible study and prayer meeting. Dive deeper into Scripture with our community.',
  },
  {
    day: 'Friday',
    name: 'Youth Group',
    time: '6:30 PM',
    description:
      'Weekly gathering for middle and high school students with games, worship, and relevant teaching.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Service Times
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We&apos;d love to have you join us for worship. Here&apos;s when you can find us.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-800">
              <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900 dark:text-primary-100">
                {service.day}
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-gray-900 dark:text-white">
                {service.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-gold">{service.time}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="#contact"
            className="rounded-full bg-primary-600 px-8 py-4 text-base font-medium text-white hover:bg-primary-700"
          >
            Plan Your Visit
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
