export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center text-center text-white"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/artful-hero/1920/1080)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
          Crafting Best Experience
        </h1>
        <p className="mb-8 text-lg font-light text-white/80">
          We provide best art and crafting services to bring your creative vision to life with
          precision and passion.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full border border-white px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-artful-red hover:border-artful-red"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
