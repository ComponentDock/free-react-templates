export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/shearglow-hero/1600/800')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-32">
        <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          We Care About Your Hair
        </h1>
        <p className="mt-5 max-w-lg text-white/85">
          Beautiful hair begins with expert care. At ShearGlow, every visit is a luxurious
          experience tailored to your unique style.
        </p>
        <a
          href="#about"
          className="mt-8 inline-block rounded-sm border border-gold-400 bg-gold-400 px-8 py-3 font-serif text-sm font-semibold uppercase text-white transition-colors hover:bg-gold-500"
        >
          About Us
        </a>
      </div>
    </section>
  )
}
