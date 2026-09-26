export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat py-32 md:min-h-[700px]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/clareo-hero/1920/1080)',
      }}
    >
      <div className="text-center">
        <h1 className="font-display text-5xl font-bold text-white md:text-7xl">
          Classy Rebel Fashion Photoshoot
        </h1>
        <p className="mt-4 text-lg text-white/80">Capturing moments that last forever</p>
        <a
          href="#gallery"
          className="mt-8 inline-block rounded bg-brand-400 px-8 py-3 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-500"
        >
          View Gallery
        </a>
      </div>
    </section>
  )
}
