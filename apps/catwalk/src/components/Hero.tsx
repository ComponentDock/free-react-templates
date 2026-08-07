import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden bg-black">
      <img
        src="https://picsum.photos/seed/catwalk-hero/1600/1000"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/80">Top Model</p>
        <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Your Career of A Model
        </h1>
        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/80">
          We Are Professional Model Agency Based in London
        </p>
        <a
          href="#contact"
          className="relative mt-10 inline-flex items-center gap-3 border-b-4 border-peach-light pb-2 pr-12 font-medium uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-white"
        >
          Contact Us
          <span className="absolute right-0 top-1/2 flex h-8 w-10 -translate-y-1/2 items-center bg-peach-deep">
            <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  )
}
