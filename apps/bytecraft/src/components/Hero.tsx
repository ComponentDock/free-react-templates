export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-dark bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/bytecraft-hero/1920/1080)',
      }}
    >
      <div className="text-center">
        <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-white">
          We Work Hard, We Result Perfect
        </p>
        <h1 className="mb-6 text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
          Crafting Digital Agency
          <br />
          Experiences
        </h1>
        <a
          href="#services"
          className="inline-block rounded-full border border-brand px-8 py-3 text-sm font-medium text-white transition hover:bg-brand hover:text-dark"
        >
          Explore Us
        </a>
      </div>
    </section>
  )
}
