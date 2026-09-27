export function Hero() {
  return (
    <section
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://picsum.photos/seed/tidestone-hero/1600/900)',
      }}
    >
      <div className="px-4 text-center text-white">
        <h4 className="mb-3 text-sm font-medium uppercase tracking-widest">
          See What a Difference a Stay Makes
        </h4>
        <h1 className="font-display text-5xl font-bold italic md:text-6xl">
          Luxury <em className="not-italic">is</em> Personal
        </h1>
        <a
          href="#book"
          className="mt-8 inline-block border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
        >
          Book Now
        </a>
      </div>
    </section>
  )
}
