import { ServerCog, DatabaseBackup, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: ServerCog,
    title: 'Managed IT services',
    blurb:
      'There earth face earth behold. She stars made void two given and also our own grass days.',
  },
  {
    icon: DatabaseBackup,
    title: 'Backup and recovery',
    blurb:
      'Greater male shall there faced earth behold she star, made for the long run with your team.',
  },
  {
    icon: ShieldCheck,
    title: 'Cyber security',
    blurb: 'Sea forth fill have divide be dominion from life — protected on every front.',
  },
] as const

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl dark:text-white">
            IT solutions for startup and enterprises
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-paper p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <service.icon className="mx-auto h-12 w-12 text-primary-500" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold text-navy dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body dark:text-gray-400">
                {service.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
