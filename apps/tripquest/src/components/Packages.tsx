import { SectionTitle } from './SectionTitle'

const PLACES = ['New York', 'Maldives', 'Sri Lanka', 'Nepal', 'Thailand', 'Singapore'] as const

const PACKAGES = ['Cheap Packages', 'Luxury Packages', 'Camping Packages'] as const

/* Three white price cards floating over a cover photograph, each a list of
   destinations with a light price pill on the right and a yellow rule under
   the card heading. */
export function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden py-[120px]">
      <img
        src="https://picsum.photos/seed/tripquest-price-bg/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/80" aria-hidden="true" />
      <div className="relative">
        <SectionTitle
          title="We Provide Affordable Prices"
          subtitle="Transparent per-person pricing, published up front — the same desk handles the booking, the transfers and the paperwork."
        />
        <div className="mx-auto grid max-w-[1140px] gap-[30px] px-4 md:grid-cols-3">
          {PACKAGES.map((pack) => (
            <article key={pack} className="bg-white px-[30px] py-[30px]">
              <h4 className="border-b border-brand pb-[20px] text-center text-[18px] font-semibold text-ink">
                {pack}
              </h4>
              <ul className="mt-[30px] space-y-[10px]">
                {PLACES.map((place) => (
                  <li key={place} className="flex items-center justify-between">
                    <span className="text-[14px] text-body">{place}</span>
                    <a
                      href="#packages"
                      className="border border-line bg-panel px-[20px] py-[5px] text-[14px] font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
                    >
                      $1500
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
