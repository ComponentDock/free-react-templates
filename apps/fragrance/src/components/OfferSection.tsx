export function OfferSection() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-fixed bg-center py-24"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/frag-offer/1600/600')",
      }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 px-4 text-center text-white">
        <span className="font-heading text-sm uppercase tracking-widest text-brand-light">
          Winter Sale
        </span>
        <h2 className="mt-3 font-heading text-4xl font-bold md:text-5xl">Up To 50% Off</h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
          Grab the best deals this season. Premium fashion at half the price — limited time only.
        </p>
        <a
          href="#"
          className="mt-6 inline-block rounded-full bg-brand px-8 py-3 font-heading text-sm font-medium text-white hover:bg-transparent hover:text-white hover:ring-2 hover:ring-white"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
