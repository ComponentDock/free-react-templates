export function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        {/* Text */}
        <div className="space-y-6">
          <h1 className="font-heading text-4xl font-bold leading-tight text-dark-purple sm:text-5xl">
            Best quality pillow
          </h1>
          <p className="max-w-md text-lg text-secondary-text">
            Discover premium pillows crafted for the perfect night's sleep. Soft, supportive, and
            built to last — your comfort is our mission.
          </p>
          <a
            href="#products"
            className="inline-block rounded-[5px] bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
          >
            Shop Now
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/plumhero/600/400"
            alt="Quality pillow on a bed"
            className="w-full max-w-md rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
