export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/stall-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="text-4xl font-black uppercase tracking-wider text-white sm:text-5xl lg:text-6xl">
          Shop With Us
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-200">
          Discover the best products at unbeatable prices. Quality you can trust.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="rounded-none bg-white px-8 py-3 text-sm font-black uppercase text-gray-900 transition-colors hover:bg-brand hover:text-white"
          >
            Shop Now
          </a>
          <a
            href="#special"
            className="rounded-none border-2 border-white px-8 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Club Membership
          </a>
        </div>
      </div>
    </section>
  )
}
