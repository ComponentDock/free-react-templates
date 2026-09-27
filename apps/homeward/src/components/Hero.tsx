export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[500px] w-full">
        <img
          src="https://picsum.photos/seed/homeward-hero/1600/900"
          alt="Beautiful modern home exterior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-4 pb-8 sm:px-6 lg:px-24">
          <p className="mb-1 text-sm uppercase tracking-widest text-subtitle">
            198 West 21th Street, Suite 721
          </p>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Luxury Living Redefined
            </h1>
            <span className="shrink-0 rounded bg-price px-3 py-1 text-sm font-bold text-white">
              $1,250,000
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
