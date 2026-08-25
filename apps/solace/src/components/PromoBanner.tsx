export function PromoBanner() {
  return (
    <section
      className="relative flex min-h-[400px] items-center justify-center bg-ink bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(https://picsum.photos/seed/solace-promo/1920/800)',
      }}
    >
      <div className="px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">
          Find the Best Hotel in Your Next Vacation
        </h2>
        <a
          href="#rooms"
          className="mt-8 inline-block rounded bg-brand px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
        >
          Book Now
        </a>
      </div>
    </section>
  )
}
