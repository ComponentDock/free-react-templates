export function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/trailquest-hero/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <h1 className="font-display text-5xl text-white md:text-7xl">Discover A new Place</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Find great places to stay, eat, shop, or visit from local experts
        </p>
      </div>
    </section>
  )
}
