import { ArrowRight } from 'lucide-react'
import { hero } from '../data'

/** Light-gray hero (reference `.banner_part`): giant two-line Poppins
 *  headline, hot-pink "learn more" button, and a circular framed photo on
 *  the right, decorated with abstract colorful geometric shards. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[820px] items-center overflow-hidden bg-hero-bg"
    >
      {/* Abstract colorful geometric shards (CSS shapes, no copied overlays). */}
      <div
        aria-hidden="true"
        className="absolute -left-10 top-16 h-40 w-40 rotate-12 rounded-2xl bg-primary-600/15"
      />
      <div
        aria-hidden="true"
        className="absolute -left-4 bottom-24 h-24 w-24 -rotate-6 rounded-xl bg-[#14b8a6]/20"
      />
      <div
        aria-hidden="true"
        className="absolute right-1/4 top-10 h-20 w-20 rotate-45 rounded-lg bg-navy/10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 left-1/3 h-16 w-16 rounded-full bg-primary-600/10"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 py-28 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="font-display font-extrabold uppercase leading-[1.02] text-navy-deep">
            <span className="block text-6xl md:text-[88px]">{hero.lineOne}</span>
            <span className="block text-5xl md:text-[64px]">{hero.lineTwo}</span>
          </h1>
          <p className="mt-6 font-sans text-4xl font-light uppercase text-navy-deep md:text-5xl">
            {hero.lineThree}
          </p>
          <a
            href="#about"
            className="mt-12 inline-flex items-center gap-3 rounded-[4px] bg-primary-600 px-[42px] py-[19.5px] text-sm font-medium uppercase text-white shadow-[0_10px_30px_0_rgba(190,0,88,0.35)] transition-colors hover:bg-primary-700"
          >
            {hero.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="rounded-full bg-[conic-gradient(from_0deg,#ff1481,#14b8a6,#162b45,#ff1481)] p-2">
            <img
              src={hero.photo}
              alt=""
              width={480}
              height={480}
              className="h-96 w-96 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
