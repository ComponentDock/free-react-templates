export function Hero() {
  return (
    <section
      className="relative flex min-h-[80vh] items-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/getawaypad-hero/1920/1080')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative mx-auto px-4">
        <div className="max-w-xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-[3px] text-brand">
            Welcome to GetawayPad
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Rent an apartment for your vacation
          </h1>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-block rounded bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[3px] text-white hover:bg-brand-dark transition-colors"
            >
              Learn more
            </a>
            <a
              href="#"
              className="inline-block rounded border-2 border-white px-6 py-3 text-xs font-semibold uppercase tracking-[3px] text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
