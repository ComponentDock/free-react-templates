export function ServicesBanner() {
  return (
    <section
      id="services"
      className="relative flex items-center justify-center bg-cover bg-center py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/curate-services/1600/400)',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(4,9,30,0.5)]" />

      <div className="relative z-10 px-6 text-center">
        <h2 className="mb-3 text-3xl font-bold text-white">This is what we can do for you</h2>
        <p className="text-white/80">Who are in extremely love with eco friendly system..</p>
      </div>
    </section>
  )
}
