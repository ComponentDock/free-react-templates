export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/brightoral-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 text-center">
        <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-white/70">
          Welcome to Brightoral
        </p>
        <h1 className="mb-4 text-5xl font-black text-white md:text-6xl">
          Your <span className="font-black">New Smile</span>
        </h1>
        <p className="mb-8 text-lg font-light text-white/70">
          We provide the best dental care for you and your family
        </p>
        <a
          href="#appointment"
          className="inline-block border-2 border-white px-8 py-3 text-sm font-light uppercase tracking-widest text-white transition-all hover:bg-white hover:text-ink"
        >
          Book Appointment
        </a>
      </div>
    </section>
  )
}
