import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-hero-bg pb-16 pt-28 sm:pt-36 lg:pb-32 lg:pt-44"
      data-testid="hero"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Illustration placeholder */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://picsum.photos/seed/indigo-hero/560/420"
              alt="Software dashboard illustration"
              className="w-full max-w-md rounded-lg"
              loading="eager"
            />
          </div>

          {/* Copy */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Advanced software made simple
            </h1>
            <p className="mt-5 text-base text-white/70 sm:text-lg">
              Streamline your workflow with powerful tools designed for modern teams. From analytics
              to automation, everything you need in one platform.
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
