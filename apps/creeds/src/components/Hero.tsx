import { heroEyebrow, heroImage, heroText, heroTitle } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[680px] items-center justify-center overflow-hidden bg-dark text-center"
    >
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay (rgba(4,9,30,0.8)) from the reference design */}
      <div className="absolute inset-0 bg-[rgba(4,9,30,0.8)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-sm font-normal uppercase tracking-[1.4px] text-white">{heroEyebrow}</p>
        <h1 className="mt-2 text-5xl font-bold leading-[1.1] text-white md:text-6xl">
          {heroTitle}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-white/85">{heroText}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#about"
            className="inline-block border border-brand bg-brand px-9 py-2.5 text-sm font-medium uppercase text-white transition-colors hover:bg-transparent hover:text-brand"
          >
            Get Started
          </a>
          <a
            href="#donate"
            className="inline-block border border-[#eeeeee] px-9 py-2.5 text-sm font-medium uppercase text-white transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  )
}
