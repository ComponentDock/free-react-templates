import { Calendar, HeartPulse, ShieldCheck, Siren, Star, Stethoscope } from 'lucide-react'

const services = [
  {
    icon: Calendar,
    title: 'Online Appointment Booking',
    text: 'Book visits with your preferred department in minutes, any time of day, with instant confirmation.',
  },
  {
    icon: Stethoscope,
    title: 'Expert Doctor Profiles',
    text: 'Review the credentials and specializations of our board-certified physicians before you book.',
  },
  {
    icon: HeartPulse,
    title: 'Comprehensive Medical Services',
    text: 'Preventive care, diagnostics and treatment delivered with the latest medical technology.',
  },
  {
    icon: Siren,
    title: '24/7 Emergency Hotline',
    text: 'Our emergency line is staffed around the clock by trained coordinators ready to help.',
  },
  {
    icon: Star,
    title: 'Patient Success Stories',
    text: 'Thousands of patients rate their Cura experience 4.9 out of 5 — read their stories below.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance & Payments',
    text: 'We accept most major insurance plans and offer transparent billing with no hidden fees.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Medical Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Comprehensive healthcare services delivered by expert physicians using the latest
            medical technology and a patient-first approach.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900/50 dark:text-primary-300">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
