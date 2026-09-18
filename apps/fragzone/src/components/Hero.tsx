export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center bg-no-repeat py-20 md:min-h-[600px]"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/fragzone-hero/1600/900')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-6xl px-4">
        <h1 className="mb-4 text-4xl font-light leading-tight text-white md:text-5xl">
          The Best <span className="text-primary">Games</span> Out There
        </h1>
        <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-300">
          Discover the latest gaming news, tournaments, and reviews. Join our community of
          passionate gamers and stay ahead of the curve.
        </p>
        <a
          href="#games"
          className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-heading transition-colors hover:bg-primary-dark"
        >
          Explore Games
        </a>
      </div>
    </section>
  )
}
