export function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center bg-slate-900">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/shotglow-hero/1600/900')",
        }}
      />
      <div className="absolute inset-0 bg-slate-900/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex justify-end">
          <div className="max-w-lg text-center lg:text-right">
            <p className="mb-4 font-heading text-lg font-medium uppercase tracking-widest text-gray-200">
              Model Photography
            </p>
            <h1 className="mb-6 font-heading text-5xl font-bold uppercase leading-tight text-white sm:text-6xl">
              Creative <span className="text-gray-200">Studio</span>
            </h1>
            <p className="mb-8 text-lg font-light text-gray-300">Capturing moments from today</p>
            <a
              href="#gallery"
              className="inline-block border-2 border-white px-8 py-3 font-heading text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-slate-900"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
