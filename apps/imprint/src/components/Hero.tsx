import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/imprint-hero/1920/1080)',
        }}
      >
        <div className="absolute inset-0 bg-dark-900/60" />
      </div>

      {/* Large vertical brand text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 rotate-90 transform select-none sm:right-16 lg:right-24">
        <span className="font-display text-[14vw] font-black leading-none tracking-widest text-white/5 uppercase sm:text-[10vw]">
          Imprint
        </span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 px-4 text-center">
        <p className="mb-4 font-serif text-lg italic text-gold-400">Personal Portfolio</p>
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-7xl">
          Creative <span className="text-gold-400">Designer</span> &amp; Writer
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-white/70">
          Crafting digital experiences with passion and precision. Welcome to my world of design and
          creativity.
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 border border-gold-400 px-8 py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-400 hover:text-dark-900"
        >
          Learn More
          <ChevronDown size={16} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/40" size={24} />
      </div>
    </section>
  )
}
