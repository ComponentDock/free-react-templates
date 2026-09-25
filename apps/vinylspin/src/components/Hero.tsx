import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/vinylspin-hero/1920/1080')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-void/60" />

      <div className="relative z-10 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent-400">
          New single release
        </p>
        <h1 className="mb-8 text-5xl font-bold leading-tight text-ink md:text-7xl">
          Love is all around
        </h1>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded bg-primary-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-primary-500"
        >
          Listen on Soundcloud
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
