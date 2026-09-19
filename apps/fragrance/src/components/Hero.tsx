export function Hero() {
  return (
    <section className="relative bg-light-bg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center lg:grid-cols-2">
        {/* Blue accent stripe */}
        <div className="hidden h-full w-1 bg-brand lg:block" />

        {/* Left: product image */}
        <div className="hidden justify-center px-8 py-12 lg:flex">
          <img
            src="https://picsum.photos/seed/fragrance-hero/500/500"
            alt="Featured fashion product"
            className="h-auto max-h-[450px] w-full max-w-[420px] rounded-lg object-cover"
          />
        </div>

        {/* Right: text */}
        <div className="flex flex-col items-start gap-4 px-6 py-12 lg:px-12">
          <span className="font-heading text-sm uppercase tracking-widest text-brand">
            Shop is fun
          </span>
          <h1 className="font-heading text-4xl font-bold leading-tight text-body md:text-5xl">
            Browse Our Premium Product
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Discover the latest trends in fashion. Our curated collection brings you premium quality
            at unbeatable prices. Start your shopping journey today.
          </p>
          <a
            href="#"
            className="mt-2 rounded-full bg-brand px-8 py-3 font-heading text-sm font-medium text-white hover:bg-transparent hover:text-brand hover:ring-2 hover:ring-brand"
          >
            Browse Now
          </a>
        </div>
      </div>
    </section>
  )
}
