export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/bezel-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
          Now you can feel the Heat
        </p>
        <h1 className="mb-8 text-5xl font-bold leading-tight text-white md:text-7xl">
          Smart New Future
        </h1>
        <a
          href="#products"
          className="inline-block rounded-full bg-white px-10 py-3 text-sm font-semibold uppercase text-body transition-colors hover:bg-gray-100"
        >
          Buy Now
        </a>
      </div>
    </section>
  )
}
