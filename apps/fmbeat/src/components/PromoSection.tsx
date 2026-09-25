const promos = [
  {
    title: "Our DJ's",
    image: 'https://picsum.photos/seed/fmbeat-promo1/600/370',
  },
  {
    title: 'Live Streams',
    image: 'https://picsum.photos/seed/fmbeat-promo2/600/370',
  },
  {
    title: 'Events',
    image: 'https://picsum.photos/seed/fmbeat-promo3/600/370',
  },
]

export function PromoSection() {
  return (
    <section data-testid="promo-section" className="bg-brand-dark-mid py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {promos.map((promo) => (
          <div
            key={promo.title}
            className="group relative h-[370px] overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-brand-yellow text-2xl md:text-3xl font-bold uppercase tracking-wider">
                {promo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
