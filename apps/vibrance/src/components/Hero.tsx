import { ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://picsum.photos/seed/vibrance-hero/1920/1080)',
      }}
    >
      <div className="text-center">
        <p className="mb-4 text-sm uppercase tracking-[3px] text-white/80">
          Get your free template now
        </p>
        <h1 className="text-5xl font-bold uppercase leading-tight text-white md:text-7xl">
          Vibrance Design
        </h1>
        <p
          className="mt-2 text-4xl text-brand-pink md:text-6xl"
          style={{ fontFamily: "'Allura', cursive" }}
        >
          Studio
        </p>
        <a
          href="#"
          className="gradient-btn mt-8 inline-flex items-center gap-2 border-2 border-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[2px] text-white transition-all hover:text-white"
        >
          Discover It
          <ChevronRight size={16} />
          <ChevronRight size={16} className="opacity-50" />
        </a>
      </div>

      <a
        href="#social"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm uppercase tracking-widest text-white/70 transition-colors hover:text-white"
      >
        Scroll Down
      </a>
    </section>
  )
}
