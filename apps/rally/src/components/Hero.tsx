import { heroImage } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[900px] items-center justify-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-32 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/80">
          June 17 – 19, 2026 · Santa Monica, CA
        </p>
        <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl md:text-6xl">
          International Digital Business Event
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-white/85">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <a
          href="#about"
          className="mt-10 inline-block rounded border border-[#7a8186] bg-white/10 px-8 py-3.5 text-[13px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-white/20"
        >
          View More Details
        </a>
      </div>
    </section>
  )
}
