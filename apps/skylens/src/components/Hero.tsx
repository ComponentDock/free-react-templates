export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/skylens-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(7,17,18,0.2)]" />
      <div className="relative z-10 max-w-3xl px-4 text-center">
        <span className="mb-4 inline-block font-body text-sm font-semibold uppercase tracking-widest text-hero-accent">
          Drone Photography &amp; Videography
        </span>
        <h1 className="mb-6 font-sans text-5xl font-bold uppercase leading-tight text-white md:text-7xl">
          Capturing Every Angle
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-white/90">
          Professional aerial photography and videography services for real estate, construction,
          and commercial projects.
        </p>
        <a
          href="#services"
          className="inline-block border-2 border-white px-10 py-5 font-sans text-sm font-medium uppercase tracking-widest text-white transition-all hover:bg-white hover:text-brand"
        >
          Explore Services
        </a>
      </div>
    </section>
  )
}
