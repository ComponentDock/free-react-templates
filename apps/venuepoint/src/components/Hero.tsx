import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/venuepoint-hero/1920/1080)',
      }}
    >
      <div className="px-4 text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-white/80">The Venue is</p>
        <h1 className="font-display mt-4 text-5xl text-white md:text-7xl">
          An Extraordinary Experience
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus
          mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus
          faucibus finibus.
        </p>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" aria-hidden="true" />
      </div>
    </section>
  )
}
