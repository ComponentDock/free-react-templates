export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/gracecraft-hero/1200/600')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <h1 className="font-heading text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
          Belief in God as Father and Holy Spirit is at the heart of our faith.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-200">
          God has revealed himself through the Bible. God has revealed himself most clearly through
          the gift of his Son, Jesus Christ. God makes himself known personally to each believer
          through the work of the Holy Spirit.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-[3px] bg-brand px-12 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          Join with us
        </a>
      </div>
    </section>
  )
}
