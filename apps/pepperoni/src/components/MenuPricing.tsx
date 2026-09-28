const leftItems = [
  { name: 'Italian Pizza', price: '$2.90' },
  { name: 'Hawaiian Pizza', price: '$3.50' },
  { name: 'Greek Pizza', price: '$2.90' },
  { name: 'Bacon Crispy Thins', price: '$4.10' },
] as const

const rightItems = [
  { name: 'Hawaiian Special', price: '$3.50' },
  { name: 'Ultimate Overload', price: '$4.90' },
  { name: 'Bacon Pizza', price: '$3.90' },
  { name: 'Ham & Pineapple', price: '$3.20' },
] as const

function PriceRow({ name, price }: { name: string; price: string }) {
  return (
    <li className="flex items-center justify-between border-b border-gray-100 py-3">
      <span className="font-medium text-ink">{name}</span>
      <span className="font-bold text-brand">{price}</span>
    </li>
  )
}

export function MenuPricing() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-ink">Our Menu Pricing</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ul className="rounded-lg bg-white p-6 shadow-sm">
            {leftItems.map((item) => (
              <PriceRow key={item.name} {...item} />
            ))}
          </ul>
          <ul className="rounded-lg bg-white p-6 shadow-sm">
            {rightItems.map((item) => (
              <PriceRow key={item.name} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
