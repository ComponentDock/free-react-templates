import { Car, Snowflake, Tv, Waves, Wifi, type LucideIcon } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { FACILITIES } from '../data'

const FEATURE_ICONS: Record<(typeof FACILITIES)[number]['features'][number], LucideIcon> = {
  'Smart TV': Tv,
  'High Wi-fii': Wifi,
  AC: Snowflake,
  Parking: Car,
  Pool: Waves,
}

/* Facilities — two full-width photo panels (~796px tall): a white title
   and small uppercase subtitle near the top, an icon feature row and a
   white-outline reservation CTA near the bottom. The second panel keeps
   its photo anchored to the right edge. */
export function Facilities() {
  return (
    <section aria-label="Facilities" className="flex flex-col">
      {FACILITIES.map((facility) => (
        <div
          key={facility.title}
          className="relative flex h-[796px] flex-col justify-between overflow-hidden px-[100px] pb-[60px] pt-[95px]"
        >
          <img
            src={facility.image}
            alt={facility.title}
            className={cn(
              'absolute inset-0 h-full w-full object-cover',
              facility.flipped && 'object-right',
            )}
          />
          <div className="relative z-10">
            <h2 className="text-[40px] font-medium leading-[48px] text-white md:text-[48px]">
              {facility.title}
            </h2>
            <p className="mt-2 text-xs font-medium uppercase tracking-[4px] text-white">
              {facility.subtitle}
            </p>
          </div>
          <div className="relative z-10">
            {facility.features.length > 0 && (
              <div className="mb-[28px] flex flex-wrap gap-6">
                {facility.features.map((feature) => {
                  const Icon = FEATURE_ICONS[feature]
                  return (
                    <div key={feature} className="flex flex-col items-center gap-2 text-white">
                      <Icon aria-hidden="true" size={38} />
                      <p className="text-sm text-white">{feature}</p>
                    </div>
                  )
                })}
              </div>
            )}
            <ButtonLink
              href="#reservation"
              className="h-auto rounded-none border-[3px] border-white bg-transparent px-[38px] py-[18px] text-base font-normal text-white hover:bg-white hover:text-ink"
            >
              Make a Reservation
            </ButtonLink>
          </div>
        </div>
      ))}
    </section>
  )
}
