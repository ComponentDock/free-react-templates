import { Cloud, Gauge, Headset, Settings, Shield, ShieldCheck, Zap } from 'lucide-react'
import { guarantees } from '../data'

const iconMap = {
  'shield-check': ShieldCheck,
  shield: Shield,
  headset: Headset,
  cloud: Cloud,
  settings: Settings,
  zap: Zap,
  gauge: Gauge,
} as const

export function ServiceGrid({ services }: { services: typeof guarantees }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = iconMap[service.icon]
        return (
          <article
            key={service.title}
            className="bg-white p-[30px] shadow-[0_2px_5px_rgba(0,0,0,0.03)]"
          >
            <div className="flex h-20 w-20 items-center justify-center bg-[linear-gradient(45deg,#12e6ca,#8be55d)]">
              <Icon className="h-9 w-9 text-white" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-ink">{service.title}</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-gray-500">{service.blurb}</p>
          </article>
        )
      })}
    </div>
  )
}

export function Guarantee() {
  return (
    <section aria-label="The WebHost Guarantee" className="bg-light py-24" id="about">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">
          The WebHost Guarantee
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center text-base font-light text-gray-500">
          Even the all-powerful Pointing has no control about the blind texts.
        </p>
        <div className="mt-14">
          <ServiceGrid services={guarantees} />
        </div>
      </div>
    </section>
  )
}
