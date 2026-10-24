import { hero } from '../data'
import { Testimonial } from './Testimonial'

/* Full-viewport photographic hero: 35 % solid brand panel down the left edge,
   a rgba(0,0,0,.35) scrim over the photo, white display headline and a
   testimonial beneath it. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-dark"
    >
      <img
        src={`https://picsum.photos/seed/${hero.seed}/1800/1200`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[35%] bg-brand" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32">
        <div className="max-w-xl">
          <span className="block text-[13px] text-white">{hero.subheading}</span>
          <h1 className="mb-12 mt-3 font-display text-4xl font-bold leading-[1.15] text-white lg:text-[50px]">
            {hero.headline}
          </h1>
          <Testimonial
            quote={hero.quote}
            author={hero.author}
            location={hero.location}
            seed="flint-person-1"
          />
        </div>
      </div>
    </section>
  )
}
