import { Carousel } from './Carousel'
import { Countdown } from './Countdown'
import { hero } from '../data'

/** Full-viewport hero: rotated "Welcome to Gatherly." edge text on the far
 *  left, the two-slide carousel, and the yellow countdown bar anchored to
 *  the bottom-right (source #home-section + #timer). */
export function Hero() {
  return (
    <section
      id="home-section"
      data-testid="hero"
      className="relative min-h-screen overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 bg-black/60" />
      <Carousel />
      <div className="absolute bottom-0 right-0 z-10 w-full lg:w-[40%]">
        <Countdown />
      </div>
      <p
        aria-hidden="true"
        className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.4em] text-white/60 md:block"
      >
        {hero.edgeText}
      </p>
    </section>
  )
}
