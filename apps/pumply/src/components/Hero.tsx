export function Hero() {
  return (
    <section
      id="home-section"
      aria-label="Hero"
      className="relative flex h-screen min-h-[900px] items-center justify-center overflow-hidden bg-hero-bg"
    >
      <img
        src="https://picsum.photos/seed/pumply-hero/1920/1080"
        alt="Gym interior with exercise equipment"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <h1 className="relative z-10 px-4 text-center text-5xl font-black text-white sm:text-6xl lg:text-7xl">
        Welcome To Pumply
      </h1>
    </section>
  )
}
