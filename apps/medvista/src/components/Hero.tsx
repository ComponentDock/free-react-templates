export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[700px] items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/medvista-hero/1920/700')" }}
      data-testid="hero"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="max-w-lg">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Welcome to Medvista
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            We are here for your Care
          </h1>
          <p className="mt-6 text-gray-300">
            We provide the best medical care for you and your family. Our team of experienced
            doctors is committed to delivering compassionate, personalized healthcare services.
          </p>
          <a
            href="#appointment"
            className="mt-8 inline-block rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Make an appointment
          </a>
        </div>
      </div>
    </section>
  )
}
