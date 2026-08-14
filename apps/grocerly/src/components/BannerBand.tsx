import { banners } from '../data'

/** Two side-by-side promotional image banners (stack on mobile). */
export function BannerBand() {
  return (
    <section aria-label="Promotions" className="bg-white pb-10">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <a
          href="#shop"
          onClick={(event) => event.preventDefault()}
          aria-label="Seasonal fruit offer"
        >
          <img
            src={banners.first}
            alt="Seasonal fruit offer"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </a>
        <a
          href="#shop"
          onClick={(event) => event.preventDefault()}
          aria-label="Fresh produce offer"
        >
          <img
            src={banners.second}
            alt="Fresh produce offer"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </a>
      </div>
    </section>
  )
}
