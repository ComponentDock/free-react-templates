export function Hero() {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/cellarly-hero/1920/800')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 text-center">
        <h1
          className="mb-6 text-4xl font-bold text-white md:text-6xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Good <span className="text-brand">Drink</span> for Good{' '}
          <span className="text-brand">Moments</span>.
        </h1>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#products"
            className="rounded bg-brand px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="rounded border-2 border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  )
}
