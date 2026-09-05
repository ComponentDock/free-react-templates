import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/structura-hero/1600/900)' }}
    >
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="mb-6 h-1 w-16 bg-lime-accent" />
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Discover</span>
            Your Dream <span className="text-lime-accent">Home</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            Why over <span className="font-semibold text-white">50,000+</span> customers have chosen
            architecture &amp; interior design.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 bg-lime-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:bg-lime-accent/90"
          >
            See Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
