export function ProServices() {
  return (
    <section className="relative py-0">
      <div className="relative min-h-[400px]">
        <img
          src="https://picsum.photos/seed/chamfer-proservices/1920/400"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-navy/60" />
        <div className="relative z-10 mx-auto flex max-w-6xl items-center px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase leading-snug text-white md:text-5xl">
              We will create modern and first class interior
            </h2>
            <a
              href="#services"
              className="mt-8 inline-flex items-center justify-center rounded-none bg-brand-red px-12 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark"
            >
              Discover More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
