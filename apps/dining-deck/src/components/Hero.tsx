import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center bg-gray-900"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/diningdeck-hero/1920/1080')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <p className="font-script text-3xl text-gold-400 md:text-4xl">Premium</p>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">Quality</p>
        <h1 className="mt-4 text-5xl font-light leading-tight text-white sm:text-6xl md:text-7xl">
          Restaurant <br />
          <span className="font-script text-6xl md:text-8xl">&amp; Dishes</span>
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 text-white/60 transition-colors hover:border-white hover:text-white"
        >
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
