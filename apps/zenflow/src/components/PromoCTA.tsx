export function PromoCTA() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <img
        src="https://picsum.photos/seed/zenflow-promo/1920/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h2 className="font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
          Our Latest Design &amp; Creative Templates
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-primary-400" />
        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center border-2 border-white px-10 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
        >
          Download Now
        </a>
      </div>
    </section>
  )
}
