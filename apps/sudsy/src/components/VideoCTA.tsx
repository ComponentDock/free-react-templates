export function VideoCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-16 lg:py-24">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/sudsy-cta/1600/600"
          alt="Car after professional wash"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-white lg:text-4xl">
          Your car will look as your new one
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
          From basic washes to full detailing packages, we bring back that showroom shine. Trust our
          experienced team to make your car look its absolute best.
        </p>
      </div>
    </section>
  )
}
