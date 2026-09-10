export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand/5 py-24 sm:py-32">
      {/* Decorative watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-decorative text-[8rem] leading-none text-brand/10 sm:text-[14rem]"
      >
        Delicious
      </span>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Delicious Cake For Everyone
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We bake fresh every day with premium ingredients. From classic chocolate to custom
            wedding cakes — there is something for every celebration.
          </p>
          <a
            href="#product"
            className="mt-8 inline-block rounded-full bg-gradient-to-l from-brand to-brand-dark px-8 py-3 font-heading text-sm font-bold text-white shadow-lg shadow-brand/25 transition-transform hover:scale-105"
          >
            Explore Menu
          </a>
        </div>

        {/* Hero image */}
        <img
          src="https://picsum.photos/seed/batterly-hero/800/600"
          alt="Assorted cakes on display"
          width={800}
          height={600}
          className="mt-10 w-full rounded-lg object-cover sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:w-1/2 sm:-translate-y-1/2"
        />
      </div>
    </section>
  )
}
