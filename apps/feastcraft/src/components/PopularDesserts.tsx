interface Dessert {
  name: string
  price: string
  imageSeed: string
}

const DESSERTS: Dessert[] = [
  { name: 'Chocolate Cake', price: '$8.99', imageSeed: 'fc-choc-cake' },
  { name: 'Tiramisu', price: '$9.50', imageSeed: 'fc-tiramisu' },
  { name: 'Cheesecake', price: '$8.50', imageSeed: 'fc-cheesecake' },
  { name: 'Panna Cotta', price: '$7.99', imageSeed: 'fc-panna' },
]

export function PopularDesserts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-wider text-orange">Choose Desserts</p>
          <h2
            className="text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Popular Desserts
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {DESSERTS.map((dessert) => (
            <div key={dessert.name} className="flex items-center gap-4 rounded-lg bg-peach/30 p-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full">
                <img
                  src={`https://picsum.photos/seed/${dessert.imageSeed}/200/200`}
                  alt={dessert.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-heading">{dessert.name}</h3>
                <p className="text-sm font-semibold text-orange">{dessert.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
