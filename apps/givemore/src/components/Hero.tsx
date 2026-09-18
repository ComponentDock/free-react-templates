export function Hero() {
  return (
    <section
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/givemore-hero/1400/600)' }}
    >
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-lg">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
            Bless others with your gift
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Together we can make a meaningful difference. Your generosity helps us provide
            education, clean water, and emergency relief to communities in need around the world.
          </p>
          <a
            href="#causes"
            className="mt-6 inline-block rounded bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-600"
          >
            Start Donation
          </a>
        </div>
      </div>
    </section>
  )
}
