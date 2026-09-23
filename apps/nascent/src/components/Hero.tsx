export function Hero() {
  return (
    <section
      id="home"
      data-testid="hero"
      className="relative flex min-h-[600px] items-center bg-peach pt-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Left content */}
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            We are new but doing great
          </p>
          <h1 className="text-4xl font-bold font-heading leading-tight text-gray-900 md:text-5xl">
            We give the power back to the user
          </h1>
          <p className="max-w-md text-base leading-relaxed text-body">
            Empowering startups with modern tools and infrastructure. We believe every great idea
            deserves a world-class platform to bring it to life.
          </p>
          <a
            href="#services"
            className="inline-block rounded bg-orange-400 px-8 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Explore Us
          </a>
        </div>

        {/* Right image */}
        <div className="relative flex justify-center">
          <img
            src="https://picsum.photos/seed/nascent-hero/600/450"
            alt="Startup team collaborating"
            className="w-full max-w-md rounded object-cover shadow-lg"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
