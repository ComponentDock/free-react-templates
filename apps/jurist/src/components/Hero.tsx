export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/seed/jurist-hero/1600/900')",
      }}
    >
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="mb-4 text-4xl font-bold uppercase md:text-5xl lg:text-6xl">
          We Fight For Justice
        </h1>
        <p className="mb-8 text-lg text-gray-200">
          Dedicated legal professionals committed to protecting your rights and delivering results.
          Our experienced team handles every case with precision and care.
        </p>
        <a
          href="#contact"
          className="inline-block bg-brand px-8 py-3 font-bold uppercase tracking-wider text-white transition-colors hover:bg-amber-600"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
