export function Banner() {
  return (
    <section className="relative overflow-hidden bg-ink" id="home">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/boutiquehaus-hero/1600/900"
          alt="Fashion banner background"
          className="h-full w-full object-cover opacity-50"
        />
      </div>
      <div className="absolute inset-0 bg-brand/30" />
      <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 sm:px-6 lg:min-h-[600px]">
        <div className="max-w-xl text-white">
          <span className="text-lg font-semibold uppercase tracking-widest text-white/80">
            Flat <span className="text-brand">75% Off</span>
          </span>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
            It&rsquo;s Happening
            <br />
            this Season!
          </h1>
          <a
            href="#category"
            className="mt-8 inline-block bg-brand px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
          >
            Purchase Now
          </a>
        </div>
      </div>
    </section>
  )
}
