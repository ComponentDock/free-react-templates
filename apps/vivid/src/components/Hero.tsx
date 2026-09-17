export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/vivid-hero/1920/1080)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark-bg opacity-80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
          We Are Creative Agency
        </h1>
        <p className="mb-8 text-lg text-white/80">
          Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in
          magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-[3px] border-2 border-white bg-white px-8 py-2.5 text-sm font-semibold text-heading transition-opacity hover:opacity-80"
          >
            Get Started!
          </a>
          <a
            href="#about"
            className="rounded-[3px] border-2 border-primary bg-primary px-8 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
