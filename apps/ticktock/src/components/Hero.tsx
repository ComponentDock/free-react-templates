export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-br from-primary-800 via-primary-600 to-primary-500"
    >
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/ticktock-hero/1920/1080')] bg-cover bg-center opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-200">
          Now you can feel the heat
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Smart New Future
        </h1>
        <a
          href="#products"
          className="inline-block rounded bg-white px-8 py-3 text-sm font-semibold uppercase text-primary-600 shadow-lg transition hover:bg-primary-50"
        >
          Buy Now
        </a>
      </div>
    </section>
  )
}
