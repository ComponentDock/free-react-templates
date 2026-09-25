import { ChevronDown } from 'lucide-react'

const heroSlide = {
  title: 'Cadence',
  subtitle: 'Music Theme',
  bg: 'https://picsum.photos/seed/cadence-hero1/1920/1080',
}

export function Hero() {
  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroSlide.bg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-cadence-overlay" />
      {/* Gradient bar at bottom */}
      <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-cadence-pink to-cadence-purple" />

      {/* Big watermark text */}
      <h2 className="pointer-events-none absolute text-[12rem] font-black uppercase leading-none text-white/[0.04] select-none md:text-[18rem]">
        Cadence
      </h2>

      {/* Slide content */}
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-5xl font-black uppercase text-white drop-shadow-lg md:text-7xl">
          {heroSlide.title} <span className="text-cadence-accent">{heroSlide.title}</span>
        </h1>
        <p className="text-lg font-medium uppercase tracking-widest text-white/70">
          {heroSlide.subtitle}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/50">
        <span className="mb-2 block text-xs uppercase tracking-widest">Slide Down</span>
        <ChevronDown size={20} className="mx-auto animate-bounce" />
      </div>
    </section>
  )
}
