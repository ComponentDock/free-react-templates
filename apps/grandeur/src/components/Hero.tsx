import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[500px] items-center bg-ink bg-cover bg-center bg-no-repeat md:min-h-[700px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-ink/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <p className="mb-3 font-sans text-sm uppercase tracking-widest text-white/80">Welcome to</p>
        <h1 className="mb-6 font-heading text-5xl font-bold text-white md:text-7xl">Grandeur</h1>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/80">
          Experience luxury hospitality where every detail is crafted for your comfort. From elegant
          rooms to world-class dining, discover a stay beyond expectation.
        </p>
        <a
          href="#"
          className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
          aria-label="Play introduction video"
        >
          <Play className="ml-1 h-6 w-6" />
        </a>
      </div>

      {/* Background image */}
      <img
        src="https://picsum.photos/seed/grandeur-hero/1920/1080"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        aria-hidden="true"
      />
    </section>
  )
}
