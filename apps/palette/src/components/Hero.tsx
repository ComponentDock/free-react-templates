export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[500px] items-center bg-dark-bg">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/palette-hero/1920/1080)' }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary-light">
          Hello! This is Palette
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Creative UI/UX Designer &amp; Developer
        </h1>
        <p className="mb-8 max-w-xl text-lg text-gray-300">
          I design and build beautiful, user-friendly websites and applications that help businesses
          grow and succeed in the digital world.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Hire me
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
