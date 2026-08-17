import { IMAGES } from '../data'
import { greenButton, whiteButton } from './buttonClasses'

/** Hero — full-height photo with a #222222/40 overlay, uppercase tagline,
    Prata headline with a green highlight span, and square CTAs. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[750px] items-end bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.hero})` }}
    >
      <div className="absolute inset-0 bg-dark/40" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-40 sm:px-6">
        <p className="text-base font-medium uppercase tracking-[0.2em] text-white/90">
          Finding Balance In Food, Health and Wellness
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-white sm:text-6xl">
          Eat Mindfully, <span className="text-brand">Sweat Often &amp; Self Love Always</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/70">
          A healthier relationship with food, movement, and yourself — guided by certified coaches
          who keep it simple and sustainable.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#appointment" className={greenButton}>
            Contact us
          </a>
          <a href="#about" className={whiteButton}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
