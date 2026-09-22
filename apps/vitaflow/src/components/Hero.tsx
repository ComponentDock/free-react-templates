export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/vitaflow-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-400">
            Welcome to Vitaflow
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Get in shape faster, live your happy life
          </h1>
          <p className="mb-6 text-lg text-white/70">
            Your journey to a healthier lifestyle starts here. Expert coaching, personalized plans,
            and a community that supports you every step of the way.
          </p>
          <div className="flex gap-4">
            <a
              href="#about"
              className="rounded bg-primary-400 px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-primary-500"
            >
              Learn more
            </a>
            <a
              href="#contact"
              className="rounded border border-white px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-white hover:text-ink"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
