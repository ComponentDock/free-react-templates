import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gray-900 pt-16">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center md:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 md:py-0">
          <span className="mb-4 text-sm font-semibold uppercase tracking-wider text-ops-400">
            Welcome to ByteOps
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Small Details Make A Big <span className="text-ops-400">Impression</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg text-gray-400">
            We are a digital agency specializing in business strategy, web design, development, and
            technology solutions that drive growth.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded bg-ops-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-ops-500"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="relative hidden h-full min-h-[500px] md:block">
          <img
            src="https://picsum.photos/seed/byteops-hero/800/600"
            alt="Digital agency workspace"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/40" />
        </div>
      </div>
    </section>
  )
}
