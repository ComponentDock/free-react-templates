import { Bike, Car, Dumbbell, Martini, Utensils, Waves, type LucideIcon } from 'lucide-react'
import { FACILITIES, FACILITIES_IMAGE } from '../data'

/* Facility icons (source: span.lnr Linearicons glyphs) — mapped to lucide
   equivalents. */
const FACILITY_ICONS: Record<(typeof FACILITIES)[number]['title'], LucideIcon> = {
  Restaurant: Utensils,
  'Sports CLub': Bike,
  'Swimming Pool': Waves,
  'Rent a Car': Car,
  Gymnesium: Dumbbell,
  Bar: Martini,
}

/* Facilities (source: section.facilities_area.section_gap — dark #04091e
   band on a photo background with 6 bordered translucent icon cards; original
   titles keep their misspellings). */
export function Facilities() {
  return (
    <section id="facilities" className="relative overflow-hidden bg-night py-[120px]">
      <img
        src={FACILITIES_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-[36px] font-semibold leading-[45px] text-white">Royal Facilities</h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility) => {
            const Icon = FACILITY_ICONS[facility.title]
            return (
              <div
                key={facility.title}
                className="rounded-[10px] border border-[#777777] bg-[rgba(249,249,255,0.102)] p-[31px_40px_37px] text-white"
              >
                <Icon className="h-9 w-9 text-brand" aria-hidden="true" />
                <h3 className="mt-5 text-[20px] font-semibold">{facility.title}</h3>
                <p className="mt-3 text-[14px] leading-[24px] text-white/80">{facility.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
