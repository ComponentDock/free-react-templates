export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/stamp-hero/1600/600)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white">
        <p className="text-lg font-light uppercase tracking-widest">
          Since <span className="font-semibold text-brand">1990</span>
        </p>
        <h1 className="mt-4 text-5xl font-bold uppercase md:text-6xl">Real Solutions!</h1>
        <h2 className="mt-4 text-xl font-light md:text-2xl">
          Manufacturing Relationships Distributing Quality
        </h2>
        <a
          href="#about"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-white hover:text-brand"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}
