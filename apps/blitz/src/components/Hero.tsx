import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/blitz-hero/1920/1080')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand/60" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <p className="mb-2 font-display text-sm font-medium uppercase tracking-widest text-white/60">
          Creative Agency
        </p>
        <h1 className="mb-4 font-display text-5xl font-bold text-white md:text-7xl">
          Modern design easy to use
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
          Maecenas id orci rutrum, vehicula nunc sit amet, fringilla ante. Nulla efficitur vitae
          ligula commodo varius.
        </p>
        <a
          href="#services"
          className="inline-block rounded bg-accent px-8 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
        >
          Discover More
        </a>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scroll down */}
      <a
        href="#icon-boxes"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  )
}
