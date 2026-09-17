export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-navy"
    >
      <img
        src="https://picsum.photos/seed/pixelcraft-hero/1920/1080"
        alt="Creative agency workspace"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="eager"
      />
      <div className="relative z-10 px-4 text-center">
        <p
          className="mb-4 text-lg uppercase tracking-widest text-green-title"
          style={{ fontFamily: 'var(--font-subtitle)' }}
        >
          Pixelcraft
        </p>
        <h1
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          We Craft Awesome Web And Graphic Design Solutions
        </h1>
        <p
          className="mx-auto mt-6 max-w-xl text-lg text-white/70"
          style={{ fontFamily: 'var(--font-subtitle)' }}
        >
          Support bright students today for a better tomorrow
        </p>
      </div>
    </section>
  )
}
