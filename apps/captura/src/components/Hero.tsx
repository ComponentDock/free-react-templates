export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/captura-hero/1600/900')" }}
    >
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-6 text-3xl font-light leading-tight md:text-5xl">
          Hi, This is Captura, a professional Photographer
          <br />I Captured Moments
        </h1>
        <a
          href="#albums"
          className="inline-block border-2 border-brand-400 px-10 py-4 text-sm font-medium uppercase tracking-[3px] text-white transition-colors hover:bg-brand-400"
        >
          Explore Work
        </a>
      </div>
    </section>
  )
}
