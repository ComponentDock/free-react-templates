import { Brain, SmilePlus, UserRound } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Neurology Service',
    description:
      'Land meat winged called subdue without a very light in all years sea appear Lesser bring fly first land set female best perform.',
  },
  {
    icon: SmilePlus,
    title: 'Dental Clinic',
    description:
      'Land meat winged called subdue without a very light in all years sea appear Lesser bring fly first land set female best perform.',
  },
  {
    icon: UserRound,
    title: 'Plastic Surgery',
    description:
      'Land meat winged called subdue without a very light in all years sea appear Lesser bring fly first land set female best perform.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20" aria-label="Services">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold font-serif text-heading md:text-4xl">
            Awesome Health Service
          </h2>
          <p className="text-body-text leading-relaxed">
            Land meat winged called subdue without very light in all years sea appear midst forth
            image him third there set. Land meat winged called subdue without very light in all
            years sea appear.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded border border-border bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-heading">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-body-text">{service.description}</p>
              <a
                href="#"
                className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
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
