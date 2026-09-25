import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-brand-700 via-deep-800 to-deep-950 px-6 pt-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent-purple/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-yellow">
          Featured Artist
        </p>
        <h1 className="font-heading text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
          Feel The Music
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          Experience the sound that moves souls. Discover tracks, upcoming live shows, and exclusive
          content from the artists you love.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#tracks"
            className="inline-flex items-center rounded-full bg-accent-yellow px-8 py-3 text-sm font-bold text-deep-950 transition-colors hover:bg-accent-yellow/90"
          >
            Explore Now
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            <Play size={16} fill="currentColor" />
            Watch Video
          </a>
        </div>
      </div>
    </section>
  )
}
