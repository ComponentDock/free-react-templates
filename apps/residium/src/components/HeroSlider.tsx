import { ArrowRight } from 'lucide-react'

export function HeroSlider() {
  return (
    <section id="home" className="relative flex min-h-[600px] items-center bg-navy-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/residium-hero/1600/900)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/41" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        <div className="max-w-xl">
          <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-6xl">
            We Create your dream apartment
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Discover exceptional living spaces crafted with precision and care. Your perfect home
            awaits.
          </p>
          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 border-2 border-red-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            View Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
