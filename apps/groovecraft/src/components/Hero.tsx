import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/groove-hero/1920/1080')" }}
      role="banner"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/70">
          Latest album
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Beyond Time
        </h1>
        <a
          href="#albums"
          className="inline-flex items-center gap-2 bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-gray-200"
        >
          Discover
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
