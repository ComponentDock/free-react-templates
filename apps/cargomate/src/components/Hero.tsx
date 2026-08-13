import { hero } from '../data'

/** Hero (reference `.home_banner_area`): full-width shipping-port photo
 *  with a split content block — a dark navy headline panel on the left and
 *  a white copy panel with the navy "Explore More" button anchored to its
 *  bottom-right corner. */
export function Hero() {
  return (
    <section id={hero.id} aria-label="Hero" className="relative">
      <img
        src={hero.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-[100px] lg:px-8 lg:py-[194px]">
        <div className="flex max-w-4xl flex-col md:flex-row">
          <div className="bg-navy px-[30px] py-[60px] md:max-w-xl md:px-[53px] md:text-right">
            <h1 className="font-heading text-[35px] leading-tight font-bold text-white uppercase lg:text-5xl">
              {hero.headline}
            </h1>
          </div>
          <div className="relative flex-1 bg-white px-[20px] py-[60px] md:px-10">
            <p className="max-w-[498px] text-sm leading-relaxed text-muted">{hero.subtext}</p>
            <a
              href="#quote"
              className="btn-main absolute right-0 bottom-0 bg-navy text-white hover:bg-brand"
            >
              {hero.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
