import { Gift, Rocket, Wand2 } from 'lucide-react'

const ITEMS = [
  {
    title: 'Easy Flight Search',
    icon: Rocket,
    body: 'Compare the routes that actually matter and lock the fare while it is still low.',
  },
  {
    title: 'Get Hotel Offers',
    icon: Wand2,
    body: 'Member rates, late checkouts, and the quiet upgrades you only hear about on arrival.',
  },
  {
    title: 'Holiday Packages',
    icon: Gift,
    body: 'Flights, rooms, and transfers bundled into one price with nothing hidden.',
  },
] as const

/* Centered header plus a 2x3 grid of icon cards (the three items repeat, as
   in the reference). On hover/focus the icon stroke is painted with the brand
   gradient defined below — see the `.facility-card` rule in index.css. */
export function Facilities() {
  return (
    <section id="service" className="bg-white pb-[100px]">
      <svg data-testid="facility-gradient" aria-hidden="true" className="absolute h-0 w-0">
        <defs>
          <linearGradient id="voyara-brand-gradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#f62e71" />
            <stop offset="100%" stopColor="#f9ab72" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-[70px] max-w-[720px] text-center">
          <h1 className="text-[36px] font-semibold text-ink">Superb Facilities</h1>
          <p className="mt-4">
            Everything you need for a trip that runs itself — search, offer, and package in one
            place.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[...ITEMS, ...ITEMS].map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              data-testid="facility-card"
              tabIndex={0}
              className="facility-card group"
            >
              <item.icon
                className="facility-icon h-9 w-9 text-body transition-colors"
                aria-hidden="true"
              />
              <h4 className="mt-10 text-[18px] font-semibold text-ink">{item.title}</h4>
              <p className="mt-3">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
