import { Gavel, Scale, ShieldCheck, Siren } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '../data'
import type { Service } from '../data'

const icons: Record<Service['icon'], LucideIcon> = {
  gavel: Gavel,
  scale: Scale,
  siren: Siren,
  shield: ShieldCheck,
}

/** Cream services band: four 330px white cards whose full state is revealed on hover or focus. */
export function Services() {
  return (
    <section id="services" className="bg-cream px-4 py-[70px] md:py-[80px] xl:py-[130px]">
      <div className="mx-auto grid max-w-[1140px] gap-[30px] sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = icons[service.icon]

          return (
            <a
              key={service.title}
              href="#contact"
              className="group flex h-[300px] flex-col items-center bg-white px-6 pt-[60px] text-center transition-colors duration-500 hover:bg-[linear-gradient(-117deg,#ab7636_0%,#d7af7e_100%)] focus:bg-[linear-gradient(-117deg,#ab7636_0%,#d7af7e_100%)] xl:h-[330px]"
            >
              <span className="flex size-[72px] items-center justify-center rounded-full bg-[linear-gradient(0deg,#ab7636_0%,#d7af7e_100%)] text-white transition-all duration-500 group-hover:size-[72px] group-hover:bg-white group-hover:text-gold group-focus:bg-white group-focus:text-gold xl:size-[90px]">
                <Icon aria-hidden="true" className="size-[30px] xl:size-[40px]" />
              </span>
              <h2 className="mt-[34px] text-[18px] font-semibold tracking-[1px] text-ink uppercase transition-all duration-500 group-hover:text-[22px] group-hover:capitalize group-hover:text-white group-focus:text-[22px] group-focus:capitalize group-focus:text-white">
                {service.title}
              </h2>
              <p className="mt-5 hidden text-[15px] leading-[1.8] text-white group-hover:block group-focus:block">
                {service.description}
              </p>
            </a>
          )
        })}
      </div>
    </section>
  )
}
