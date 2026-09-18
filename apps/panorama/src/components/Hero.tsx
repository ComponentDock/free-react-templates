import { ArrowDown, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/panorama-hero/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">We Are Panorama</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-200">
          Crafting exceptional digital experiences for brands that want to stand out. Strategy,
          design, and development — all under one roof.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ocean-700"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Scroll-down arrow */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <ArrowDown className="h-8 w-8" />
      </a>

      {/* Slanted bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
    </section>
  )
}
