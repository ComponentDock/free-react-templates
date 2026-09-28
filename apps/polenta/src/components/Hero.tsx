export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/polenta-hero/1920/1080)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-heading text-5xl font-bold text-white md:text-6xl">
          Welcome To Polenta Restaurant
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Experience the finest traditional dishes crafted with the highest quality ingredients.
          Every meal is a journey through authentic flavors and timeless recipes.
        </p>
        <a
          href="#menu"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase text-white transition-opacity hover:opacity-80"
        >
          Discover Menu
        </a>
      </div>
    </section>
  )
}
