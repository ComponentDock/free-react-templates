import { Camera, Aperture, Sun, Mountain } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Portrait Photography',
  },
  {
    icon: Aperture,
    title: 'Landscape Photography',
  },
  {
    icon: Sun,
    title: 'Natural Light Sessions',
  },
  {
    icon: Mountain,
    title: 'Adventure Shoots',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">
            Life is about Creating Experiences
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[var(--font-sans)] text-base text-navy-500/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-50 text-navy-500">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-[var(--font-heading)] text-lg font-medium text-navy-900">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
