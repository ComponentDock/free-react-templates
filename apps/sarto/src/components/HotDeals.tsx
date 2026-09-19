const deals = [
  { seed: 'sarto-deal-1', title: 'Hot Deals of this Month' },
  { seed: 'sarto-deal-2', title: 'Hot Deals of this Month' },
]

export function HotDeals() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {deals.map((deal) => (
            <div key={deal.seed} className="group relative overflow-hidden rounded-sm">
              <img
                src={`https://picsum.photos/seed/${deal.seed}/800/400`}
                alt="Hot deal"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <h2 className="mb-2 text-2xl font-medium text-white">{deal.title}</h2>
                <p className="text-sm uppercase tracking-widest text-white/80">shop now</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
