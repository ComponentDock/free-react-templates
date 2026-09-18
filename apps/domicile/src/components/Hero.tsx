export function Hero() {
  return (
    <section
      className="relative min-h-[500px] bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/domicile-hero/1600/900)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-32 flex items-end min-h-[500px]">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-2">853 S Lucerne Blvd</h1>
          <p className="flex items-center gap-2 text-white/80 mb-2">
            <span className="fa fa-map-marker text-brand" aria-hidden="true" />
            Los Angeles, CA 90005
          </p>
          <p className="text-2xl font-bold mb-4">$2,250,500</p>
          <a
            href="#properties"
            className="text-sm font-bold uppercase tracking-widest text-white hover:text-brand transition-colors"
          >
            More Details
          </a>
        </div>
      </div>
    </section>
  )
}
