export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/echo-hero/1200/800')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <p className="mb-4 text-lg text-white/70">Hello! I&apos;m</p>
        <h1 className="text-5xl font-bold md:text-7xl">Echo</h1>
      </div>
    </section>
  )
}
