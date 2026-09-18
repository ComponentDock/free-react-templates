import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-white pt-20">
      <div className="absolute inset-0 bg-primary-400/10" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
        <div className="py-16">
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Sleek and Clean
            <br />
            with same perspective
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-smoke">
            Living in today's metropolitan world of cellular phones, mobile computers and other
            high-tech gadgets.
          </p>
          <a
            href="#studio"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-400 px-8 py-3 text-sm font-medium uppercase text-ink transition-colors hover:bg-primary-400 hover:text-white"
          >
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/prism-hero/600/500"
            alt="Creative agency hero"
            className="w-full max-w-md rounded-lg object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
