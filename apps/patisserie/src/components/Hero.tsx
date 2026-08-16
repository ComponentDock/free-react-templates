import { hero } from '../data'

/**
 * Full-width 700px hero with a darkened cover photo, a thin white display
 * headline and a large square gold "Order Now" button.
 */
export function Hero() {
  return (
    <section id="home" className="relative">
      <div
        className="flex h-[700px] items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-ink/60" />
        <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6">
          <div className="max-w-[640px]">
            <h1 className="font-display text-[48px] leading-[1.2] text-white sm:text-[70px]">
              {hero.headline}
            </h1>
            <a
              href="#cakes"
              className="mt-[41px] inline-block border border-heading-light bg-brand px-[55px] py-[35px] text-[15px] font-normal tracking-wide text-ink uppercase transition-colors hover:border-brand hover:bg-transparent hover:text-brand"
            >
              {hero.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
