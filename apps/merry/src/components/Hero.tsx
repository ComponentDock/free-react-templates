import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-950 py-24 lg:py-36">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://picsum.photos/seed/merry-hero/1600/900"
          alt="Carousel showcase background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Featured Stories Carousel
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Discover Inspiring Stories & Visuals
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Explore our curated carousel showcase featuring stunning photography, expert insights,
            and interactive design elements.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-dark"
            >
              Explore Showcase
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
