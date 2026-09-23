export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/artgallery-hero/1920/1080)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 px-4 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[3px] text-accent">
          Opening on 21st February, 2025
        </p>
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          <span className="font-[family-name:var(--font-playfair)]">Exhibition on</span>
          <br />
          <span className="font-[family-name:var(--font-playfair)]">Modern Era</span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-base text-gray-300 md:text-lg">
          Experience the finest collection of modern art from world-renowned artists. Immerse
          yourself in creativity and innovation.
        </p>
        <a
          href="#ticket"
          className="inline-block bg-accent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
