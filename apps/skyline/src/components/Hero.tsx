import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[70vh] items-center justify-center bg-ink">
      <img
        src="https://picsum.photos/seed/skyline-hero/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="font-display text-6xl font-bold uppercase tracking-[0.15em] sm:text-8xl">
          Skyline
        </h1>
        <p className="mt-4 text-lg tracking-wide text-gray-300">Fine Dining Restaurant</p>
        <a
          href="#menu"
          aria-label="Scroll to menu"
          className="mt-8 inline-block animate-bounce text-white/70 transition-colors hover:text-brand"
        >
          <ChevronDown className="h-8 w-8" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
