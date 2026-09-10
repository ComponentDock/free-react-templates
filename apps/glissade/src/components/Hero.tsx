import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[540px] items-center bg-gradient-to-b from-brand-start to-brand-end"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <h1 className="text-3xl font-semibold uppercase leading-tight text-white md:text-4xl lg:text-5xl">
          Don&apos;t look anywhere, <br className="hidden sm:inline" /> This is the best place on
          web
        </h1>
        <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-white/90">
          Living in today&apos;s metropolitan world of cellular phones, mobile computers and other
          high-tech gadgets is not just hectic but very demanding.
        </p>
        <a
          href="#elements"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white px-7 py-2.5 text-sm font-medium text-white transition-all hover:border-transparent hover:bg-white/20"
        >
          Get Started
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
