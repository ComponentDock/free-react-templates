import { Droplets, Sun, Heart } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Clean Water',
    description:
      'We provide access to clean and safe drinking water for communities around the world, reducing waterborne diseases and improving quality of life.',
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    description:
      'Our renewable energy projects bring sustainable power to underserved areas, reducing carbon emissions and fostering economic growth.',
  },
  {
    icon: Heart,
    title: 'Protect Animals',
    description:
      'We work to protect endangered species and their habitats through conservation programs, anti-poaching efforts, and community education.',
  },
]

export function Services() {
  return (
    <section id="what-we-do" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-subtitle-green">
            What We Do
          </span>
          <h2 className="text-3xl font-bold text-ink lg:text-4xl">Our Core Services</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-lg border border-divider bg-white p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon size={32} className="text-brand" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-ink">{service.title}</h3>
                <p className="leading-relaxed text-body">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
