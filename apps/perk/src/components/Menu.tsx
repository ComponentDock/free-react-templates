const menuItems = [
  {
    name: 'Cappuccino',
    price: '$49',
    description: 'Usage of the Internet is becoming more common due to rapid advance.',
  },
  {
    name: 'Americano',
    price: '$49',
    description: 'Usage of the Internet is becoming more common due to rapid advance.',
  },
  {
    name: 'Espresso',
    price: '$49',
    description: 'Usage of the Internet is becoming more common due to rapid advance.',
  },
  {
    name: 'Macchiato',
    price: '$49',
    description: 'Usage of the Internet is becoming more common due to rapid advance.',
  },
  {
    name: 'Mocha',
    price: '$49',
    description: 'Usage of the Internet is becoming more common due to rapid advance.',
  },
  {
    name: 'Coffee Latte',
    price: '$49',
    description: 'Usage of the Internet is becoming more common due to rapid advance.',
  },
  {
    name: 'Piccolo Latte',
    price: '$49',
    description: 'Usage of the Internet is becoming more common due to rapid advance.',
  },
  {
    name: 'Ristretto',
    price: '$49',
    description: 'Usage of the Internet is becoming more common due to rapid advance.',
  },
  {
    name: 'Affogato',
    price: '$49',
    description: 'Usage of the Internet is becoming more common due to rapid advance.',
  },
]

export function Menu() {
  return (
    <section id="coffee" className="bg-paper py-20">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-ink md:text-4xl">
            What kind of Coffee we serve for you
          </h2>
          <p className="text-mist">Who are in extremely love with eco friendly system.</p>
        </div>

        {/* Menu grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div key={item.name} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
                <span className="text-lg font-semibold text-brand">{item.price}</span>
              </div>
              <p className="text-sm leading-relaxed text-mist">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
