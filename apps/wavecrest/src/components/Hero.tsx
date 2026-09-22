export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/wavecrest-hero/1920/800')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/76" />

      <div className="relative z-10 text-center">
        <h1 className="font-heading text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
          Luxury &amp; Comfort
        </h1>
        <p className="mt-4 font-decorative text-xl text-white/80">Beach Hotel — More than a stay</p>
      </div>
    </section>
  )
}
