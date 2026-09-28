export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-navy">
      <img
        src="https://picsum.photos/seed/forkful-hero/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-32 text-center sm:px-6">
        <h6 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
          The most interesting food in the world
        </h6>
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Discover the flavors of <span className="text-brand">forkful</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/80">
          A restaurant landing page celebrating the art of great food — crafted with passion and
          served with love.
        </p>
      </div>
    </section>
  )
}
