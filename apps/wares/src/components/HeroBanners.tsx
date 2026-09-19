export function HeroBanners() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-4 px-4 py-6 md:grid-cols-2">
      {/* New Collection Banner */}
      <div className="relative overflow-hidden rounded bg-ink px-8 py-12 text-white">
        <h2 className="mb-2 text-3xl font-bold">New Collection</h2>
        <p className="mb-4 text-sm text-gray-300">
          Discover the latest trends in fashion and accessories.
        </p>
        <a
          href="#"
          className="inline-block rounded bg-brand px-6 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          Shop Now
        </a>
        <img
          src="https://picsum.photos/seed/wares-new/400/250"
          alt="New collection"
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-40"
        />
      </div>

      {/* Hot Deal Banner */}
      <div className="relative overflow-hidden rounded bg-brand px-8 py-12 text-white">
        <h2 className="mb-2 text-3xl font-bold">
          Hot Deal
          <br />
          <span className="font-normal">Up to 50% OFF</span>
        </h2>
        <p className="mb-4 text-sm text-white/80">Limited time offer on selected items.</p>
        <a
          href="#"
          className="inline-block rounded bg-white px-6 py-2 text-sm font-semibold text-brand hover:bg-gray-100 transition-colors"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
