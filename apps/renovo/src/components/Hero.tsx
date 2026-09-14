export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center min-h-[500px] flex items-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/renovo-hero/1600/900')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#888fff]/80 to-[#ce90ff]/60" />
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-xl">
          <p className="text-white text-sm uppercase tracking-widest mb-4">
            Don&apos;t look further, This is our Leader
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
            All things need to repair
          </h1>
          <p className="text-white/90 mb-6 max-w-md">
            Professional tech repair services for computers and mobile devices. We fix all types of
            hardware and software issues with expert care.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#222] px-8 py-3 rounded-full font-medium hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
