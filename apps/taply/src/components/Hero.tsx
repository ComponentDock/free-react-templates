import { hero } from '../data'

/** Gradient hero: light-weight white headline, subtext, centered phone
 *  mockup. Deep purple #3c0876 → hot pink #fa0076 diagonal gradient. */
export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-hero-1 to-hero-2 px-4 pb-0 pt-32 text-center text-white lg:pt-40"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-light leading-tight lg:text-6xl">{hero.heading}</h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/85 lg:text-lg">{hero.subtext}</p>
        <img
          src={hero.phoneImage}
          alt="Taply app on a phone screen"
          className="mx-auto mt-12 h-[420px] w-auto rounded-t-3xl object-cover shadow-2xl lg:h-[520px]"
        />
      </div>
    </section>
  )
}
