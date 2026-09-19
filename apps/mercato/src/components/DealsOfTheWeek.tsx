const deals = [
  {
    title: 'Black Lace Heels',
    price: 189,
    oldPrice: 210,
    image: 'https://picsum.photos/seed/mercato-r1/120/120',
  },
  {
    title: 'Running Sneakers',
    price: 145,
    oldPrice: 180,
    image: 'https://picsum.photos/seed/mercato-r2/120/120',
  },
  {
    title: 'Sport Boots',
    price: 199,
    oldPrice: 240,
    image: 'https://picsum.photos/seed/mercato-r3/120/120',
  },
  {
    title: 'Urban Walkers',
    price: 120,
    oldPrice: 160,
    image: 'https://picsum.photos/seed/mercato-r4/120/120',
  },
  {
    title: 'Training Shoes',
    price: 165,
    oldPrice: 200,
    image: 'https://picsum.photos/seed/mercato-r5/120/120',
  },
  {
    title: 'Comfort Slides',
    price: 89,
    oldPrice: 120,
    image: 'https://picsum.photos/seed/mercato-r6/120/120',
  },
  {
    title: 'Trail Runners',
    price: 175,
    oldPrice: 210,
    image: 'https://picsum.photos/seed/mercato-r7/120/120',
  },
  {
    title: 'Flex Sneakers',
    price: 130,
    oldPrice: 170,
    image: 'https://picsum.photos/seed/mercato-r8/120/120',
  },
  {
    title: 'Classic Loafers',
    price: 110,
    oldPrice: 150,
    image: 'https://picsum.photos/seed/mercato-r9/120/120',
  },
]

export function DealsOfTheWeek() {
  return (
    <section className="bg-bg-light py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-heading dark:text-white">
            Deals of the Week
          </h2>
          <p className="mt-2 text-ink dark:text-gray-400">Don't miss our best weekly offers</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {deals.map((deal) => (
                <div
                  key={deal.title}
                  className="flex gap-4 rounded-lg bg-white p-3 shadow-sm dark:bg-gray-800"
                >
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="h-20 w-20 flex-shrink-0 rounded-md object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-col justify-center">
                    <a
                      href="#"
                      className="text-sm font-medium text-heading transition-colors hover:text-brand dark:text-white"
                    >
                      {deal.title}
                    </a>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-sm font-semibold text-heading dark:text-white">
                        ${deal.price}.00
                      </span>
                      <span className="text-xs text-ink line-through dark:text-gray-400">
                        ${deal.oldPrice}.00
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <a href="#" className="block overflow-hidden rounded-xl">
              <img
                src="https://picsum.photos/seed/mercato-promo/400/600"
                alt="Promotional offer"
                className="h-full w-full object-cover transition-transform hover:scale-105"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
