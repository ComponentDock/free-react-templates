export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/verdant-hero/1600/600')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Plants exist in the weather and light rays that surround them
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          We create beautiful outdoor spaces that bring nature closer to you. Our expert team
          designs, plants, and maintains gardens of every size.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="rounded border-2 border-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand hover:text-white"
          >
            GET STARTED
          </a>
          <a
            href="#contact"
            className="rounded bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  )
}
