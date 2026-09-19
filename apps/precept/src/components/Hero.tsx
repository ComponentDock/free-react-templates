export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/precept-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-6">
            We Ensure Better Education for a Better World
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl">
            In the history of modern education, there is probably no one greater leap forward than
            the building and launch of accessible learning platforms known as the future of
            knowledge.
          </p>
          <a
            href="#courses"
            className="inline-block bg-brand text-white px-8 py-3 text-sm font-semibold uppercase hover:bg-white hover:text-brand border border-transparent hover:border-brand transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
