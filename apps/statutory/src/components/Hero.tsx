export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center pt-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(29,34,39,0.5),rgba(29,34,39,0.5)), url(https://picsum.photos/seed/statutory-hero/1920/1080)',
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20">
        <div className="max-w-xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Don&apos;t Feel Helpless We Fight for Justice
          </h1>
          <p className="mb-6 text-lg text-white/90">
            A dedicated team of attorneys committed to defending your rights and delivering justice.
            We stand beside you through every legal challenge.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-block rounded bg-gold px-6 py-3 font-semibold text-white transition hover:bg-gold/90"
            >
              Contact us
            </a>
            <a
              href="#about"
              className="inline-block rounded border border-white px-6 py-3 font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
