import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center bg-dark">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://picsum.photos/seed/fitforge-hero/1920/1080')" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white">
          Don't stop when
          <br />
          you're tired.
          <br />
          Stop when
          <br />
          you're <span className="text-brand">done</span>
        </h1>
        <a
          href="#subscription"
          className="mt-8 inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-lg font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          Get Started
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
