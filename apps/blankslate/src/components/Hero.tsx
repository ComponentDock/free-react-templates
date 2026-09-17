import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[600px] items-center bg-dark">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand">
          Welcome to BlankSlate
        </p>
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          We Help to Build You the Product
        </h1>
        <p className="mt-4 max-w-xl font-display text-xl text-white/70">Business Solution</p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-[30px] bg-brand px-8 py-3 text-sm font-semibold text-dark transition-colors hover:bg-brand-dark"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
