export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center bg-no-repeat text-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/fulcrum-hero/1600/900')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">We Are Digital Services</h1>
        <p className="mb-8 text-lg text-gray-200">
          Delivering innovative digital solutions that transform businesses. From strategy to
          execution, we help you achieve your goals.
        </p>
        <a
          href="#services"
          className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Our Services
        </a>
      </div>
    </section>
  )
}
