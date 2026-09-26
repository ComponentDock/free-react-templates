import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/gaze-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-5xl font-bold leading-tight text-white md:text-7xl">
          Gaze
          <br />
          Gallery
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Photography Showcase
          <br />
          January 23 – February 14
        </p>
        <a
          href="#gallery"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
