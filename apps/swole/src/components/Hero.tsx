import { BRAND } from '../data'

/**
 * Hero — full-screen background photo with a dark gradient overlay (strong
 * `rgba(10,10,10,0.9)` on the left fading to `rgba(50,50,50,0.2)` on the
 * right), white tagline with a short rule, a huge uppercase Oswald headline,
 * and a red "Browse Services" button.
 */
export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <img
        src="https://picsum.photos/id/453/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/20"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-40 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-base font-light uppercase tracking-wide text-white">
            Working hard in order to get perfect shape.
          </p>
          <span aria-hidden="true" className="mt-4 block h-px w-24 bg-white" />
          <h1 className="mt-8 font-sans text-6xl font-bold uppercase leading-none text-white sm:text-7xl lg:text-8xl">
            {BRAND} Fitness Studio
          </h1>
          <a
            href="#courses"
            className="mt-10 inline-block bg-brand px-10 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:bg-ink"
          >
            Browse Services
          </a>
        </div>
      </div>
    </section>
  )
}
