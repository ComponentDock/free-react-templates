import { HERO_IMAGE } from '../data'

/* Hero (source: section.banner_area — dark band on a resort photo with a
   yellow uppercase kicker, 60px white headline, paragraph and a yellow
   "Get Started" button). */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-night"
    >
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-32 text-center">
        <h6 className="text-[14px] font-normal uppercase tracking-[1.4px] text-brand">
          Away from monotonous life
        </h6>
        <h1 className="mt-4 text-[42px] font-bold leading-[1.1] text-white sm:text-[60px] sm:leading-[60px]">
          Relax Your Mind
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[14px] font-light leading-[24px] text-white/90">
          If you are looking at blank cassettes on the web, you may be very confused at the
          difference in price. You may see some for as low as $.17 each.
        </p>
        <a
          href="#accomodation"
          className="mt-8 inline-block bg-brand px-[30px] py-[14px] text-[14px] font-medium uppercase text-white transition-colors hover:bg-brand-dark"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
