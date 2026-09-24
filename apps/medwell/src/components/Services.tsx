import { Brain, SmilePlus, Stethoscope } from 'lucide-react'
import type { ReactNode } from 'react'

const services: {
  icon: ReactNode
  title: string
  description: string
}[] = [
  {
    icon: <Brain className="h-10 w-10 text-brand-500" />,
    title: 'Neurology Service',
    description:
      'Expert neurological care with advanced diagnostic tools and personalized treatment plans for brain and nervous system conditions.',
  },
  {
    icon: <SmilePlus className="h-10 w-10 text-brand-500" />,
    title: 'Dental Clinic',
    description:
      'Comprehensive dental services from routine check-ups to advanced procedures, ensuring your smile stays healthy and bright.',
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-brand-500" />,
    title: 'Plastic Surgery',
    description:
      'Board-certified surgeons providing reconstructive and cosmetic procedures with the highest standards of care and safety.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xs font-heading text-3xl font-bold leading-snug text-heading md:text-4xl">
            Awesome Health Service
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-body">
            Land meat winged called subdue without very light in all years sea appear midst forth
            image him third there set. Land meat winged called subdue without very light in all
            years sea appear.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-border bg-white p-10 text-center transition-shadow hover:shadow-md md:text-left"
            >
              <div className="mb-4 flex justify-center md:justify-start">{s.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-heading">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{s.description}</p>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
