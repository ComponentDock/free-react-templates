export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/kindfund-hero/1400/600)' }}
    >
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-lg">
          <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl">
            Get Started Today. Help the Children When They Need
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Together we can make a meaningful difference. Your generosity helps us provide
            education, food, and clean water to communities in need around the world.
          </p>
          <a
            href="#causes"
            className="mt-6 inline-block rounded bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-white/90"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
