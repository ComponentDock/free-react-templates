export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/lodgely-hero/1600/900)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:py-32">
        <span className="text-sm font-bold uppercase tracking-widest text-primary-400">
          Welcome To 5 Star Hotel
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          A Best Place To Stay
        </h1>
        <a
          href="#booking"
          className="mt-8 inline-block rounded-full bg-primary-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-600"
        >
          Book Now
        </a>
        <a
          href="#about"
          className="mt-6 text-sm font-medium text-gray-300 transition-colors hover:text-primary-400"
          aria-label="Scroll down"
        >
          Scroll Down
        </a>
      </div>
    </section>
  )
}
