export function Hero() {
  return (
    <section id="home" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Boost Productivity with Boost
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mist">
            A complete all-in-one productivity suite for modern teams. Plan, collaborate, and ship
            faster with tools that work the way you do.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-block rounded bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:brightness-95"
          >
            Try it for free
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-brand/10" aria-hidden="true" />
          <img
            src="https://picsum.photos/seed/boost-hero/1200/900"
            alt=""
            className="relative w-full rounded-xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
