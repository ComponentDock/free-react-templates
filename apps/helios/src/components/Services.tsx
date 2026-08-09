import { Battery, Building2, Gauge, HardHat, Home, Wrench, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'

interface Service {
  title: string
  blurb: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: 'Residential Solar',
    blurb: 'Custom rooftop systems that cut your monthly bill and increase your home value.',
    icon: Home,
  },
  {
    title: 'Commercial Solar',
    blurb: 'Large-scale installations for businesses, warehouses, and industrial facilities.',
    icon: Building2,
  },
  {
    title: 'Battery Storage',
    blurb: 'Store excess daytime energy and keep your lights on during outages.',
    icon: Battery,
  },
  {
    title: 'Solar Maintenance',
    blurb: 'Cleaning, inspections, and repairs that keep your system producing at peak.',
    icon: Wrench,
  },
  {
    title: 'Energy Audit',
    blurb: 'A detailed review of your usage and roof to recommend the right system size.',
    icon: Gauge,
  },
  {
    title: 'Roof Assessment',
    blurb: 'Structural evaluation to confirm your roof is ready for a solar installation.',
    icon: HardHat,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
              Services
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Complete Solar Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              From initial consultation to ongoing maintenance, we handle every step of your solar
              journey with a single trusted partner.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 60}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
