export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/learnwise-hero/1920/400')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <h2 className="mb-6 font-heading text-4xl font-bold text-white">Let's Study Together</h2>
        <a
          href="#courses"
          className="inline-block rounded-md bg-primary px-10 py-3 text-sm font-semibold uppercase text-white hover:bg-primary-hover"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
