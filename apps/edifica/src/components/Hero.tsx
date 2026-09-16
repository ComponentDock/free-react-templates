export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/edifica-hero/1920/800')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 text-center">
        <p className="mb-2 text-lg font-light uppercase tracking-wider text-white/80">
          We&apos;re here to help you
        </p>
        <h1 className="text-5xl font-bold text-white md:text-6xl">Home Builder</h1>
      </div>
    </section>
  )
}
