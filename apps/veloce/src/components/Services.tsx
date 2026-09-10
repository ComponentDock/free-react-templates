import { Wrench, Cog, Droplets, Gauge } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Engine Overhaul',
    description: 'Complete engine rebuilds and diagnostics to restore peak performance.',
    image: 'https://picsum.photos/seed/veloce-svc1/400/300',
  },
  {
    icon: Cog,
    title: 'Power Steering',
    description: 'Expert power steering repair and fluid replacement services.',
    image: 'https://picsum.photos/seed/veloce-svc2/400/300',
  },
  {
    icon: Droplets,
    title: 'Oil Change',
    description: 'Regular oil changes with premium synthetic oils for engine longevity.',
    image: 'https://picsum.photos/seed/veloce-svc3/400/300',
  },
  {
    icon: Gauge,
    title: 'Upgrades Car',
    description: 'Performance upgrades including turbo kits, exhaust systems, and tuning.',
    image: 'https://picsum.photos/seed/veloce-svc4/400/300',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">What We Do?</h2>
          <p className="mt-3 text-smoke">
            Professional automotive services delivered with precision and care.
          </p>
        </div>
        <div className="grid gap-0 md:grid-cols-2">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            const reverse = idx % 2 === 1
            return (
              <div
                key={svc.title}
                className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className="flex flex-1 items-start gap-4 p-8">
                  <Icon className="mt-1 h-10 w-10 shrink-0 text-primary-400" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{svc.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-smoke">{svc.description}</p>
                  </div>
                </div>
                <div className="h-48 w-full overflow-hidden md:h-auto md:w-1/2">
                  <img
                    src={svc.image}
                    alt={`${svc.title} service`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
