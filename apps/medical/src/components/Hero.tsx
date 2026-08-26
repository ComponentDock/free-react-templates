export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/medical-hero/1920/800')",
      }}
    >
      <div className="absolute inset-0 bg-ink/60" />
      <div className="relative z-10 max-w-3xl px-4 text-center">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          We Care for Your Health Every Moment
        </h1>
        <p className="mt-4 text-white/80">
          Providing quality healthcare with compassion and excellence.
        </p>
        <a
          href="#appointment"
          className="mt-6 inline-block rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          GET STARTED
        </a>
      </div>
    </section>
  )
}
