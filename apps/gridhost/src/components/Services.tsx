import { ArrowRight, Layers, Leaf, Server, type LucideIcon } from 'lucide-react'
import { SERVICES, type Service } from '../lib/site'
import { SectionTitle } from './SectionTitle'

const ICONS: Record<Service['slug'], LucideIcon> = {
  shared: Server,
  reseller: Leaf,
  cloud: Layers,
}

/**
 * The services band: a warm `surface-warm` layer covers only its top half while
 * three white cards straddle the seam. Each card carries a 70px line glyph, a
 * navy 30px title, a one-line blurb, a navy round-arrow "get started" link and a
 * 40px pink ordinal — and floods every accent pink on hover.
 */
export function Services() {
  return (
    <section
      id="services"
      aria-label="Hosting services"
      className="relative pt-[65px] pb-[10px] min-[768px]:pt-[100px] min-[768px]:pb-[40px] min-[992px]:pt-[150px] min-[992px]:pb-[90px] min-[1200px]:pt-[195px] min-[1200px]:pb-[140px]"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-surface-warm" />

      <div className="relative mx-auto w-full max-w-[1140px] px-[15px]">
        <SectionTitle
          eyebrow="What we run"
          title="Services on the grid"
          className="mb-[50px] min-[768px]:mb-[100px]"
        />

        <div className="flex flex-wrap">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.slug]

            return (
              <article
                key={service.slug}
                className="group w-full px-[15px] pb-[50px] md:w-1/2 lg:w-1/3"
              >
                <div className="relative h-full overflow-hidden bg-surface pt-[42px] pr-[20px] pb-[9px] pl-[20px] transition-colors duration-300 min-[768px]:pt-[53px] min-[768px]:pr-[25px] min-[768px]:pb-[11px] min-[768px]:pl-[26px] min-[1200px]:pt-[94px] min-[1200px]:pr-[57px] min-[1200px]:pb-[30px] min-[1200px]:pl-[65px]">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1}
                    className="mb-[50px] h-[70px] w-[70px] text-navy-heading transition-colors duration-300 group-hover:text-brand"
                  />

                  <h3 className="font-heading text-[29px] font-semibold text-navy-heading min-[1200px]:text-[30px]">
                    <a
                      href="#pricing"
                      className="transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {service.title}
                    </a>
                  </h3>

                  <p className="mb-[30px] text-[15px] leading-[1.7] text-muted">{service.blurb}</p>

                  <a
                    href="#pricing"
                    className="inline-flex items-center font-heading text-[13px] font-bold tracking-[0.04em] text-navy-link uppercase transition-colors duration-300 group-hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    <span className="mr-[6px] grid h-6 w-6 place-items-center rounded-full bg-navy-link text-white transition-colors duration-300 group-hover:bg-brand">
                      <ArrowRight aria-hidden="true" className="h-[13px] w-[13px]" />
                    </span>
                    Get started
                  </a>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 bottom-0 h-[110px] w-[150px] bg-[radial-gradient(rgba(235,86,108,0.4)_1.5px,transparent_1.5px)] bg-[length:10px_10px]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-0 bottom-0 font-heading text-[40px] leading-none font-semibold text-brand"
                  >
                    {service.ordinal}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
