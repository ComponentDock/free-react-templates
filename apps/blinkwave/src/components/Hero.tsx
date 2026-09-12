import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-gradient-to-br from-navy-800 via-purple-accent to-navy-900">
      {/* Decorative circles */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-signal-400/10" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Don&rsquo;t suffer the buffer, get{' '}
            <span className="text-signal-400">super internet.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/70">
            High-speed broadband and fiber connections for homes and businesses. Experience seamless
            streaming, gaming, and browsing without limits.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-[0_10px] bg-signal-400 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-signal-500"
            >
              View Packages
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-[0_10px] border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
