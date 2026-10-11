import { Calendar, MapPin } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'

interface Pkg {
  seed: string
  day: string
  month: string
  place: string
  duration: string
  title: string
  price: number
}

const PACKAGES: readonly Pkg[] = [
  {
    seed: 'outpost-package-1',
    day: '18',
    month: 'December',
    place: 'Stockholmes',
    duration: '5 days 6 nights',
    title: 'Desert Riding Turning So much Flowery',
    price: 320,
  },
  {
    seed: 'outpost-package-2',
    day: '24',
    month: 'January',
    place: 'Santorini',
    duration: '4 days 3 nights',
    title: 'Aegean Cliff Walk with Sunset Sailing',
    price: 410,
  },
  {
    seed: 'outpost-package-3',
    day: '02',
    month: 'March',
    place: 'Lofoten',
    duration: '6 days 5 nights',
    title: 'Northern Ridge Crossing with Cabin Nights',
    price: 505,
  },
]

/* Trip-package cards: photo, gradient date badge that warms on hover, location
   and duration meta, serif title, copy and a gradient button. */
export function Packages() {
  return (
    <section id="packages" className="pt-[120px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle eyebrow="We're Offering these Trip Packages" title="Famous Trips Packages" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.seed}
              className="group border border-hairline bg-white transition-shadow duration-300 hover:shadow-[0px_5px_50px_rgba(129,74,255,0.2)]"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${pkg.seed}/600/420`}
                  alt={`${pkg.title} — ${pkg.place}`}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <div className="absolute left-0 top-0">
                  <span
                    data-testid={`date-badge-${pkg.seed}`}
                    className={cn(
                      'brand-gradient block px-[11px] py-[12px] text-center text-white transition-colors duration-300',
                      'group-hover:date-gradient',
                    )}
                  >
                    <span className="block font-display text-[32px] font-bold leading-none">
                      {pkg.day}
                    </span>
                    <span className="block text-[13px]">{pkg.month}</span>
                  </span>
                </div>
              </div>

              <div className="p-[30px]">
                <p className="flex flex-wrap items-center gap-6 text-[13px]">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                    {pkg.place}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brand" aria-hidden="true" />
                    {pkg.duration}
                  </span>
                </p>
                <h4 className="mt-4 font-display text-[21px] font-bold text-ink">{pkg.title}</h4>
                <p className="mt-3">
                  Small groups, local guides and an itinerary that leaves room to wander — from $
                  {pkg.price} per traveller.
                </p>
                <ButtonLink
                  href="#newsletter"
                  className="brand-gradient mt-6 rounded-none px-[32px] py-[12px] text-[12px] font-semibold uppercase tracking-[1px] text-white hover:brand-gradient"
                >
                  Read More
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
