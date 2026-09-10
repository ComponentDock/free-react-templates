export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-navy pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          We Craft Awesome Web And
          <br />
          <span className="text-mint">Graphic Design Solutions</span>
        </h1>
        <p className="mx-auto mt-8 max-w-md font-serif text-xl text-white/80">
          Support bright students today for a better tomorrow
        </p>
        <a
          href="#services"
          className="mt-10 inline-block border-2 border-white px-8 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-navy"
        >
          Discover More
        </a>
      </div>
    </section>
  )
}
