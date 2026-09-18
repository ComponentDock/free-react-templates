export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/coachly-hero/1600/600')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-lg">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Professional Life Coaching
          </h1>
          <p className="mb-6 text-lg text-gray-200">
            Transform your life with expert guidance and personalized coaching programs designed to
            unlock your full potential.
          </p>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#3a4971] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2d3a5c]"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-gray-900"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
