import { ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/supper-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <h1
          className="mb-6 text-5xl font-bold text-white md:text-6xl"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Welcome to Supper
        </h1>
        <a
          href="#reservation"
          className="inline-flex items-center gap-2 rounded border border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-charcoal"
        >
          Reserve A Table
          <ChevronRight size={16} />
        </a>
      </div>
    </section>
  )
}
