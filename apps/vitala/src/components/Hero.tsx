export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://picsum.photos/seed/vitala-hero/1600/600)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl text-white">
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            Caring for Your Health with Compassion and Excellence
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Providing world-class medical services with state-of-the-art facilities and a team of
            experienced professionals dedicated to your well-being.
          </p>
          <a
            href="#about"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-8 py-3 text-sm font-medium uppercase text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
