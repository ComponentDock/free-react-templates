export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-dark bg-cover bg-center font-['Quicksand',sans-serif]"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/timber-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">An Inspiring Built Space</h1>
        <p className="mb-8 text-lg text-white/70">Where design meets craftsmanship</p>
        <a
          href="#projects"
          className="inline-block rounded bg-primary px-8 py-3 font-semibold text-dark transition-colors hover:bg-primary-dark"
        >
          View Projects
        </a>
      </div>
    </section>
  )
}
