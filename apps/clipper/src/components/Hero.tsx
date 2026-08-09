export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/clipper-hero/1920/1080"
        alt="Barber at work trimming a client's hair"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="font-script text-7xl text-white md:text-9xl">Clipper</h1>
        <p className="mt-4 font-script text-3xl text-white/90 md:text-4xl">Barber Shop</p>
      </div>
    </section>
  )
}
