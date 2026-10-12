import { ButtonLink } from '@free-react-templates/ui'
import { ArrowLeftRight, Database, ServerCog, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'

interface Service {
  title: string
  text: string
  icon: LucideIcon
}

const SERVICES: Service[] = [
  {
    title: 'Cloud backup',
    text: 'Snapshots every night into three regions, with one-click restores that take seconds.',
    icon: Database,
  },
  {
    title: 'Data migration',
    text: 'Our team moves your existing sites, mailboxes and databases over without downtime.',
    icon: ArrowLeftRight,
  },
  {
    title: 'Virtual servers',
    text: 'Dedicated vCPU and NVMe storage you can resize from the dashboard, billed hourly.',
    icon: ServerCog,
  },
]

/**
 * The service band: three white cards over a violet photo field with a mint
 * hover outline and a "Read more" chip floating 32 px below each card. The band
 * keeps a solid violet fill behind the photo so the white heading stays legible
 * even if the image never loads.
 */
export function ServiceBand() {
  return (
    <section
      id="services"
      className="relative scroll-mt-[124px] overflow-hidden bg-plum-mid pt-[96px] pb-[127px]"
    >
      <img
        src="https://picsum.photos/seed/skyvault-band/1920/1080"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(32,14,53,.9),rgba(77,29,133,.86))]"
      />

      <div className="relative mx-auto w-full max-w-[1140px] px-5">
        <h2 className="text-center text-[36px] leading-[0.75] text-white max-[575px]:text-[30px]">
          Services built for uptime
        </h2>

        <div className="mt-[95px] flex flex-wrap">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="w-full px-4 max-[991px]:mb-[95px] min-[992px]:w-1/3"
              >
                <Reveal>
                  <article className="group relative rounded-[12px] border-2 border-transparent bg-surface px-[30px] pt-[58px] pb-[66px] text-center transition-colors hover:border-mint focus-within:border-mint">
                    <Icon
                      className="mx-auto h-[75px] w-[75px] text-icon-muted transition-colors group-hover:text-mint"
                      aria-hidden="true"
                    />
                    <h3 className="mt-[39px] text-[24px] max-[575px]:text-[20px]">
                      {service.title}
                    </h3>
                    <p className="mt-[19px] text-[15px] text-body-copy">{service.text}</p>
                    <ButtonLink
                      href="#contact"
                      className="absolute bottom-[-32px] left-1/2 h-[63px] w-[157px] -translate-x-1/2 rounded-[12px] bg-surface-chip text-[16px] font-semibold text-body-copy hover:bg-mint hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
                    >
                      Read more
                    </ButtonLink>
                  </article>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
