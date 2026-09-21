export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/zestly-hero/1200/600)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="font-display text-5xl text-white md:text-6xl">
          Chicken dish with per boiled egg
        </h1>
        <p className="mt-4 font-body text-lg text-white/80">
          Discover the art of cooking with our curated collection of recipes
        </p>
        <a
          href="#recipes"
          className="mt-8 inline-block rounded bg-gradient-to-r from-brand-pink to-brand-coral px-8 py-3 font-body font-medium text-white transition-opacity hover:opacity-90"
        >
          Explore Recipes
        </a>
      </div>
    </section>
  )
}
