import { Video, Camera, Image, Lightbulb } from 'lucide-react'
import {
  servicesSubtitle,
  servicesHeading,
  servicesText,
  servicesButtonLabel,
  serviceCards,
} from '../data'

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Video,
  Camera,
  Image,
  Lightbulb,
}

export function Services() {
  return (
    <section id="services" className="py-[130px] bg-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/60">
            {servicesSubtitle}
          </p>
          <h2 className="mb-6 text-4xl font-bold uppercase tracking-wider text-white">
            {servicesHeading}
          </h2>
          <p className="mb-8 leading-relaxed text-white/70">{servicesText}</p>
          <a
            href="#services"
            className="inline-block min-w-[135px] border-y-2 border-white py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-dark"
          >
            {servicesButtonLabel}
          </a>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
          {serviceCards.map((card) => {
            const Icon = iconMap[card.iconName]
            return (
              <div
                key={card.title}
                className="rounded-lg bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
              >
                {Icon && (
                  <Icon className="mx-auto mb-4 h-10 w-10 text-white/80" aria-hidden="true" />
                )}
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">
                  {card.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/60">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
