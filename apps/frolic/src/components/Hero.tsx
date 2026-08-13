import { hero } from '../data'

/** Hero cover (reference `.site-section-cover.overlay`): light-gray
 *  full-height band with a cursive coral eyebrow, bold white headline,
 *  subtext, a tall red LEARN MORE button, and a portrait photo on the right. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="flex min-h-[777px] items-center bg-hero-gray pt-40 pb-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-cursive text-2xl text-coral">{hero.eyebrow}</p>
          <h1 className="mt-4 text-5xl leading-none font-bold text-white">{hero.headline}</h1>
          <p className="mt-6 text-lg text-white">{hero.subtext}</p>
          <a
            href="#packages"
            className="mt-10 inline-block bg-cherry px-8 py-4 text-sm tracking-[0.2rem] text-white uppercase transition-colors hover:bg-red-700 [border-radius:30px_0_30px_0]"
          >
            {hero.cta}
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={hero.image}
            alt=""
            className="max-h-[560px] w-full max-w-md rounded-[30px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
