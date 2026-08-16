import { ctaBanners } from '../data'

export function CtaBanners() {
  return (
    <section aria-label="Promotions" className="bg-white pb-[120px]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        {ctaBanners.map((banner, index) => (
          <div
            key={index}
            className="relative flex h-[188px] items-center justify-between gap-4 overflow-hidden rounded-none bg-cover bg-center px-8 lg:px-12"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            <h2 className="relative font-display text-2xl font-normal leading-tight text-white lg:text-[32px]">
              {banner.headlineFirst}
              {banner.headlineSecond && (
                <>
                  <br />
                  {banner.headlineSecond}
                </>
              )}
            </h2>
            <a
              href="#latest"
              className="relative shrink-0 rounded-full bg-brand px-9 py-4 text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {banner.buttonLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
