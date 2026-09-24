import { Heart, Stethoscope, Wind, Activity, Ear, Pill } from 'lucide-react'

const services = [
  {
    name: 'General Surgery',
    icon: Stethoscope,
    description: 'Expert surgical procedures with advanced techniques and care.',
  },
  {
    name: 'Outpatient Services',
    icon: Pill,
    description: 'Convenient outpatient care without the need for hospital stays.',
  },
  {
    name: 'Respiratory Therapy',
    icon: Wind,
    description: 'Comprehensive respiratory treatment and rehabilitation.',
  },
  {
    name: 'Cardiac Clinic',
    icon: Heart,
    description: 'Specialized cardiac care and heart health monitoring.',
  },
  {
    name: 'Laryngological Service',
    icon: Ear,
    description: 'Expert ear, nose, and throat treatment and diagnosis.',
  },
  {
    name: 'Diagnostic Imaging',
    icon: Activity,
    description: 'State-of-the-art imaging technology for accurate diagnosis.',
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            <span className="text-brand">Health Services</span> We Provided
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink dark:text-white">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
