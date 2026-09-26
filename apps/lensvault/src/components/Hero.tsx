export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[500px] items-center justify-center bg-black">
      <img
        src="https://picsum.photos/seed/lensvault-hero/1600/500"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 text-4xl font-semibold text-white md:text-5xl">
          LensVault Photography
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
          Capturing moments that last forever. Professional photography services for every occasion.
        </p>
        <a
          href="#gallery"
          className="inline-block bg-brand px-8 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-yellow-400"
        >
          Explore Gallery
        </a>
      </div>
    </section>
  )
}
