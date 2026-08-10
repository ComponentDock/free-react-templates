import { heroQuote, heroTitle, scrollLabel } from '../data'

/** Deterministic speckle particles (no particles.js dependency — a lightweight
 *  CSS drift animation over absolutely-positioned dots, recreated from the
 *  original canvas dust effect). */
const PARTICLE_COUNT = 22

function Particles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const left = (i * 37 + 11) % 100
        const top = (i * 53 + 7) % 100
        const size = 2 + (i % 3)
        return (
          <span
            key={i}
            className="animate-particle-drift absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${(i % 7) * 0.6}s`,
              animationDuration: `${4 + (i % 5)}s`,
            }}
          />
        )
      })}
    </div>
  )
}

/** Full-height navy hero with particle overlay, headline, quote, scroll pill. */
export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen flex-col items-center justify-center bg-navy px-4 text-center"
    >
      <Particles />
      <div className="relative">
        <h1 className="mx-auto max-w-5xl font-sans text-4xl font-bold uppercase leading-tight text-white md:text-[56px] md:leading-[60px]">
          {heroTitle}
        </h1>
        <p className="mx-auto mt-10 max-w-[870px] font-sans text-xl font-normal text-white/70 md:text-[26px] md:leading-[35px]">
          {heroQuote}
        </p>
      </div>
      <div
        role="img"
        aria-label={scrollLabel}
        className="animate-scroll-bounce absolute bottom-7 h-[60px] w-[35px] rounded-[25px] border border-white"
      >
        <span className="mx-auto mt-2 block h-2 w-2 rounded-full bg-white" />
      </div>
    </section>
  )
}
