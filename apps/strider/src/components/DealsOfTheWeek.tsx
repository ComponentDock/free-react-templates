const deals = [
  {
    name: 'Black Lace Heels',
    price: '$189.00',
    original: '$210.00',
    image: 'https://picsum.photos/seed/strider-d1/120/120',
  },
  {
    name: 'Canvas Sneakers',
    price: '$95.00',
    original: '$130.00',
    image: 'https://picsum.photos/seed/strider-d2/120/120',
  },
  {
    name: 'Running Shorts',
    price: '$45.00',
    original: '$65.00',
    image: 'https://picsum.photos/seed/strider-d3/120/120',
  },
  {
    name: 'Denim Jacket',
    price: '$120.00',
    original: '$160.00',
    image: 'https://picsum.photos/seed/strider-d4/120/120',
  },
  {
    name: 'Training Gloves',
    price: '$35.00',
    original: '$50.00',
    image: 'https://picsum.photos/seed/strider-d5/120/120',
  },
  {
    name: 'Sport Watch',
    price: '$210.00',
    original: '$280.00',
    image: 'https://picsum.photos/seed/strider-d6/120/120',
  },
  {
    name: 'Yoga Mat',
    price: '$40.00',
    original: '$60.00',
    image: 'https://picsum.photos/seed/strider-d7/120/120',
  },
  {
    name: 'Compression Tee',
    price: '$55.00',
    original: '$80.00',
    image: 'https://picsum.photos/seed/strider-d8/120/120',
  },
  {
    name: 'Cross Training Bag',
    price: '$75.00',
    original: '$110.00',
    image: 'https://picsum.photos/seed/strider-d9/120/120',
  },
]

export function DealsOfTheWeek() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Deals of the Week
          </h2>
          <p className="mt-2 text-body">Don't miss out on these incredible weekly savings.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {deals.map((deal) => (
                <div
                  key={deal.name}
                  className="flex gap-3 rounded-lg border border-gray-100 p-3 transition-shadow hover:shadow-md"
                >
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="h-16 w-16 flex-shrink-0 rounded-md object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-medium text-heading">{deal.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-brand">{deal.price}</span>
                      <span className="text-[10px] text-body line-through">{deal.original}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/strider-sidebar/400/500"
              alt="Featured category"
              className="w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
