import { Microscope, Home, Pill, FlaskConical, Ambulance } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const serviceIcons = [
  {
    icon: Microscope,
    title: 'Diagnostics',
    desc: 'Advanced diagnostic services with modern equipment for accurate results.',
  },
  {
    icon: Home,
    title: 'Home Appointments',
    desc: 'Professional medical care delivered to the comfort of your home.',
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    desc: 'Full-service pharmacy with quality medications and expert guidance.',
  },
  {
    icon: FlaskConical,
    title: 'Lab Research',
    desc: 'State-of-the-art laboratory for comprehensive health testing.',
  },
  {
    icon: Ambulance,
    title: 'Medical Transport',
    desc: 'Reliable emergency and non-emergency medical transportation services.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink-900">
            Comprehensive services for our patients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mute-600">
            We offer a wide range of medical services to ensure the best care for our patients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceIcons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-lg border border-gray-100 p-6 transition-shadow hover:shadow-lg"
            >
              <Icon className="mb-4 h-10 w-10 text-blue-400" aria-hidden="true" />
              <h3 className="mb-2 text-lg font-semibold text-ink-900">{title}</h3>
              <p className="text-sm text-mute-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <img
            src="https://picsum.photos/seed/curenova-svc1/600/400"
            alt="Medical services"
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
          <img
            src="https://picsum.photos/seed/curenova-svc2/600/400"
            alt="Healthcare facility"
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" className="rounded-full bg-blue-400 px-8 text-white hover:bg-blue-500">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
