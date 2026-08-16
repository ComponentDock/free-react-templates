import { Camera, Image, Layers, Settings, type LucideIcon } from 'lucide-react'
import { about, services, type Service } from '../data'

const icons: Record<Service['icon'], LucideIcon> = {
  camera: Camera,
  settings: Settings,
  image: Image,
  layers: Layers,
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon]
  return (
    <div className="group relative h-full overflow-hidden rounded-lg bg-white p-[30px] transition-shadow hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand to-brand-pink opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative">
        <Icon
          className="h-10 w-10 text-brand transition-colors group-hover:text-white"
          aria-hidden="true"
        />
        <h3 className="mt-4 text-xl font-bold text-ink transition-colors group-hover:text-white">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted transition-colors group-hover:text-white">
          {service.description}
        </p>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-light pb-0">
      <div className="mx-auto max-w-7xl px-6 pt-28">
        <div className="max-w-lg">
          <span className="text-[11px] font-bold tracking-[.1rem] text-muted uppercase">
            Services
          </span>
          <h2 className="mt-2 text-5xl leading-none font-bold text-ink md:text-[80px]">
            Our Services
          </h2>
        </div>
        <div className="mt-14 grid gap-8 pb-40 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>

      <div
        id="about"
        className="relative z-10 mx-5 -mb-16 rounded-lg bg-white p-5 shadow-xl md:-mb-24 md:p-10"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="text-[11px] font-bold tracking-[.1rem] text-muted uppercase">
              {about.kicker}
            </span>
            <h3 className="mt-2 text-5xl leading-none font-bold text-ink md:text-[80px]">
              {about.title}
            </h3>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
            <a
              href="#pricing"
              className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-brand bg-white px-8 py-3 text-xs font-bold tracking-[.2rem] text-ink uppercase transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {about.ctaLabel}
            </a>
          </div>
          <div className="lg:-mt-24">
            <img
              src={about.image}
              alt="About Momentum"
              loading="lazy"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
