export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-light-bg pt-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:px-8">
        {/* Left content */}
        <div className="flex flex-col justify-center py-16 lg:py-0">
          <h1 className="font-heading text-5xl font-bold leading-tight text-ink md:text-6xl">
            Delicious
            <br />
            Cupcakes
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-body">
            Crafting sweet moments with the finest ingredients. Every bite is a celebration of
            flavor, freshness, and passion for great food.
          </p>
          <a
            href="#menu"
            className="mt-10 inline-block w-fit rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Check Our Menu
          </a>
        </div>

        {/* Right decorative area */}
        <div className="relative flex items-center justify-center py-16 lg:py-0">
          <div className="relative h-80 w-80 md:h-96 md:w-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-brand/20" />
            {/* Middle ring */}
            <div className="absolute inset-6 rounded-full border border-brand/10" />
            {/* Inner circle with image */}
            <div className="absolute inset-12 overflow-hidden rounded-full bg-brand/5">
              <img
                src="https://picsum.photos/seed/bites-hero/400/400"
                alt="Delicious food"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating accent dots */}
            <div className="absolute -top-2 right-12 h-4 w-4 rounded-full bg-brand/30" />
            <div className="absolute bottom-8 -left-2 h-3 w-3 rounded-full bg-brand/20" />
            <div className="absolute top-1/4 -right-4 h-2 w-2 rounded-full bg-brand/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
