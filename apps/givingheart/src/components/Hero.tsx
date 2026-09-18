export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/givingheart-hero/1920/1080"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Waiting for Help
          </h1>
          <a
            href="#donate"
            className="inline-block rounded-[25px] bg-gradient-to-r from-[#f40f68] via-[#f86e3d] to-[#fbcd11] px-8 py-3.5 text-sm font-bold text-white uppercase tracking-wider transition opacity-90 hover:opacity-100"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  )
}
