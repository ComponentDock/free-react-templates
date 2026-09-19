export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/sarto-hero/1600/600')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
            Fashion for
            <br />
            Upcoming Winter
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-gray-200">
            Discover the latest trends in fashion. Curated collections for the modern wardrobe,
            blending comfort with cutting-edge style.
          </p>
          <a
            href="#shop"
            className="inline-block bg-white px-8 py-3 text-sm font-medium uppercase tracking-wide text-gray-900 transition-colors hover:bg-brand-500 hover:text-white"
          >
            View Collection
          </a>
        </div>
      </div>
    </section>
  )
}
