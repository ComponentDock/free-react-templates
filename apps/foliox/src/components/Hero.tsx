export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-end bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(https://picsum.photos/seed/foliox-hero/1920/1080)',
      }}
    >
      <div className="mr-12 text-right md:mr-24">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">For More Agency</h1>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-heading px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
        >
          <span aria-hidden="true">+</span> View Portfolio
        </a>
      </div>
    </section>
  )
}
