export function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/forgehub-hero/1600/600')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">
          We Love To Build <span className="text-primary">Web Apps</span>
        </h1>
        <p className="mb-8 text-lg text-white/80">
          Creative agency specializing in digital products and brand experiences
        </p>
        <a
          href="#"
          className="inline-block rounded bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary-hover"
        >
          Watch Video
        </a>
      </div>
    </section>
  )
}
