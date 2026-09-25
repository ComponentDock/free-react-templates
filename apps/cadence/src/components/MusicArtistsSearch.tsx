export function MusicArtistsSearch() {
  return (
    <section className="grid md:grid-cols-2" id="artists">
      {/* Music search */}
      <div
        className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/cadence-music/960/600)' }}
      >
        <div className="absolute inset-0 bg-cadence-overlay-light" />
        <div className="relative text-center">
          <h2 className="mb-2 text-4xl font-black uppercase text-white md:text-5xl">Music</h2>
          <p className="text-lg text-white/80">Search for the best music</p>
        </div>
      </div>

      {/* Artists search */}
      <div
        className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/cadence-artists/960/600)' }}
      >
        <div className="absolute inset-0 bg-cadence-overlay-light" />
        <div className="relative text-center">
          <h2 className="mb-2 text-4xl font-black uppercase text-white md:text-5xl">Artists</h2>
          <p className="text-lg text-white/80">Search for the best artists</p>
        </div>
      </div>
    </section>
  )
}
