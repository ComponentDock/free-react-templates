export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/gala-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-navy/60" />
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold uppercase tracking-wide md:text-7xl">
          Gathering of Innovation
        </h1>
        <p className="mb-8 text-lg font-light text-gray-200 md:text-xl">
          Join 500+ industry leaders for three days of inspiration, networking, and breakthrough
          ideas.
        </p>
        <a
          href="#cta"
          className="inline-block rounded-sm bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white opacity-90 transition-opacity hover:opacity-80"
        >
          Get Your Ticket
        </a>
      </div>
    </section>
  )
}
