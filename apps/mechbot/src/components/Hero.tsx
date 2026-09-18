import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:py-28">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block rounded-full bg-brand-light px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Next-Gen Robotics
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl lg:text-6xl">
            Build the Future <span className="text-brand">with Mechbot</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base text-body lg:mx-0">
            Advanced robotic kits and AI-powered platforms designed for makers, educators, and
            innovators who push the boundaries of technology.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand/90 hover:shadow-xl"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-heading/20 px-8 py-3 text-sm font-semibold text-heading transition-colors hover:border-brand hover:text-brand"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/mechbot-hero/600/500"
            alt="Mechbot robotic platform"
            className="mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
