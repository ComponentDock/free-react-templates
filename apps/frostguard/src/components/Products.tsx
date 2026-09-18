const products = [
  { name: 'Central AC Unit', price: '$1,299', img: 'frostguard-product-1', label: 'New' },
  { name: 'Window AC 12000BTU', price: '$449', img: 'frostguard-product-2', label: '-10%' },
  { name: 'Portable Heater', price: '$189', img: 'frostguard-product-3', label: '' },
  { name: 'Smart Thermostat', price: '$249', img: 'frostguard-product-4', label: 'Out of stock' },
]

const labelColors: Record<string, string> = {
  New: 'bg-green-500',
  '-10%': 'bg-red-500',
  'Out of stock': 'bg-gray-500',
}

export function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-['Saira_Condensed'] text-3xl md:text-4xl font-bold text-[#142336]">
            Heating & Cooling Store
          </h2>
          <a
            href="#"
            className="hidden md:inline-block border-2 border-[#4586D5] text-[#4586D5] font-['Saira_Condensed'] font-bold px-6 py-2 rounded-[60px] hover:bg-[#4586D5] hover:text-white transition-colors"
          >
            View all products
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <div className="relative">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(https://picsum.photos/seed/${p.img}/400/400)` }}
                />
                {p.label && (
                  <span
                    className={`absolute top-3 right-3 ${labelColors[p.label]} text-white text-xs px-3 py-1 rounded`}
                  >
                    {p.label}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-['Mulish'] text-sm font-semibold text-[#142336] mb-1">
                  {p.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-['Saira_Condensed'] text-lg font-bold text-[#142336]">
                    {p.price}
                  </span>
                  <a
                    href="#"
                    className="text-[#4586D5] text-xs font-semibold hover:underline font-['Mulish']"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
