export function ExtraPromos() {
  return (
    <section className="flex flex-col md:flex-row" aria-label="Special promotions">
      <div className="group relative h-80 flex-1 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/vow-extra-1/960/320)',
          }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <p className="text-4xl font-bold">
            30%<span className="text-lg font-normal">off</span>
          </p>
          <h3 className="mt-2 text-xl font-semibold">On all shoes</h3>
          <p className="mt-2 max-w-xs text-sm text-white/80">
            Curated collection of premium footwear for every occasion.
          </p>
          <a href="#" className="btn-brand mt-4">
            Check Out
          </a>
        </div>
      </div>
      <div className="group relative h-80 flex-1 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/vow-extra-2/960/320)',
          }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <div className="flex items-baseline gap-2 text-3xl font-bold">
            <span>Mix</span>
            <span className="text-5xl font-light">&amp;</span>
            <span>Match</span>
          </div>
          <p className="mt-2 max-w-xs text-sm text-white/80">
            Mix and match your favorites to create the perfect look.
          </p>
          <a href="#" className="btn-brand mt-4">
            Check Out
          </a>
        </div>
      </div>
    </section>
  )
}
