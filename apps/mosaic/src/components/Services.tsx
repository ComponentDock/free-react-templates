import { Code2, Compass, LifeBuoy, Palette } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { SERVICES, type Service } from '../data'
import { cn } from '@free-react-templates/ui'

const SERVICE_ICONS: Record<Service['icon'], ComponentType<SVGProps<SVGSVGElement>>> = {
  compass: Compass,
  palette: Palette,
  code2: Code2,
  lifebuoy: LifeBuoy,
}

const CHIP_BG: Record<string, string> = {
  blush: 'bg-blush',
  cream: 'bg-cream',
  frost: 'bg-frost',
  mint: 'bg-mint',
}

const CHIP_ICON: Record<string, string> = {
  brand: 'text-brand',
  peach: 'text-peach',
  azure: 'text-azure',
  green: 'text-green',
}

/* Services — centered heading + blurb and four service cards, each with
   a tinted hexagon icon chip (reference uses hexagon chips in four tinted
   color variants: pink, peach, blue, green). */
export function Services() {
  return (
    <section id="services" aria-label="Our Services" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Our Services</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon]
            return (
              <article key={service.title} className="text-center">
                <span
                  className={cn(
                    'inline-flex h-20 w-20 items-center justify-center',
                    '[clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]',
                    CHIP_BG[service.chip],
                  )}
                >
                  <Icon
                    className={cn('h-8 w-8', CHIP_ICON[service.iconColor])}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
