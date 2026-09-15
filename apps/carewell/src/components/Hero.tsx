export function Hero() {
  return (
    <section className="relative flex min-h-[500px] items-center bg-text-primary md:min-h-[700px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/carewell-hero/1920/800)' }}
      />
      <div className="absolute inset-0 bg-black/33" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-32 text-center md:py-40">
        <h1 className="mb-4 text-3xl font-bold uppercase tracking-wider text-white md:text-5xl">
          Together We Can
          <br />
          Change Lives
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
          If you are looking at blank cassettes on the web, you may be very confused at the
          difference in price. You may see some for as low as each.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#donate"
            className="inline-block bg-brand px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Donate Now
          </a>
          <a
            href="#causes"
            className="inline-block border border-white bg-white/10 px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20"
          >
            View Activity
          </a>
        </div>
      </div>
    </section>
  )
}
