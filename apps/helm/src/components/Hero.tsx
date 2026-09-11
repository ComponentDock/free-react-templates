export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-gray-900">
      <img
        src="https://picsum.photos/seed/helm-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
      />
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-4 py-28 sm:px-6 lg:py-36">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            We can make it together
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  )
}
