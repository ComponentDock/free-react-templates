export function Hero() {
  return (
    <section
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/smokeshade-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#e32879]">
          Office Fashion
        </p>
        <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">New Fashion</h1>
        <p className="mb-8 text-lg text-[#b3b3b3]">
          We are the best fashion agency in the world, creating trends that define the future of
          style and elegance.
        </p>
        <a
          href="#about"
          className="inline-block rounded-full bg-[#e32879] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c41f65]"
        >
          Read More
        </a>
      </div>
    </section>
  )
}
