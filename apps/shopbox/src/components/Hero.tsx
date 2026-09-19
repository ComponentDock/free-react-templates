export function Hero() {
  return (
    <section
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/shopbox-hero/1920/800')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Curated Collections
        </h1>
        <p className="mb-6 text-lg text-gray-200">
          Discover handpicked products for the modern lifestyle
        </p>
        <a
          href="#"
          className="inline-block bg-primary-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-primary-600"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
