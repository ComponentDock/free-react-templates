export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[700px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sitecraft-hero/1920/900)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl px-4 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          Our Obsession Is Distinctive Interiors
        </h1>
        <p className="mt-6 text-lg text-white/80">Providing All Kinds of Construction Services</p>
      </div>
    </section>
  )
}
