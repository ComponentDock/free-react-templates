export function ArtistBio() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center py-24"
      id="about"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/cadence-about/1920/800)' }}
    >
      <div className="absolute inset-0 bg-cadence-overlay" />
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black uppercase text-white md:text-5xl">Artist Bio</h2>
          <p className="text-sm uppercase tracking-wider text-white/60">
            Sed porta cursus enim, vitae maximus felis luctus iaculis.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div>
            <img
              src="https://picsum.photos/seed/cadence-artist/600/400"
              alt="Artist performing on stage"
              className="w-full rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Bio text */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">Hello, It's Michael Smithson</h3>
            <p className="mb-4 leading-relaxed text-white/70">
              Nulla pretium tincidunt felis, nec sollicitudin mauris lobortis in. Aliquam eu feugiat
              ligula, laoreet efficitur nulla. Morbi nec neque porta, elementum massa at, vehicula
              nunc. Nulla facilisi. Donec id purus eu lectus imperdiet varius.
            </p>
            <p className="leading-relaxed text-white/70">
              Curabitur consectetur nunc sem, vitae cursus enim tempor eget. Praesent pellentesque
              nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare
              gravida.
            </p>
            <p className="mt-6 font-display text-3xl text-cadence-accent">Michael Smithson</p>
          </div>
        </div>
      </div>
    </section>
  )
}
