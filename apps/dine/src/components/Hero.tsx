export function Hero() {
  return (
    <section id="home" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="space-y-12">
          {/* Slide 1 */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Delicious Food, Crafted with Passion
            </h1>
            <p className="max-w-lg text-lg text-white/80">
              Experience culinary excellence with our carefully curated menu.
            </p>
            <button
              type="button"
              className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Get Started
            </button>
          </div>

          {/* Slide 2 */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Fine Dining Experience Awaits
            </h2>
            <p className="max-w-lg text-lg text-white/80">
              Indulge in a world of flavors and create lasting memories.
            </p>
            <button
              type="button"
              className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
