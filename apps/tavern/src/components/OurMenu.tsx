const menuItems = [
  {
    name: 'Grilled Caesar salad, shaved reggiano',
    description: 'Crisp romaine, parmesan shavings, house-made dressing.',
    price: '$12.00',
  },
  {
    name: 'Spicy Calamari and beans',
    description: 'Tender calamari tossed with cannellini beans and chili.',
    price: '$12.00',
  },
  {
    name: 'Bacon wrapped wild gulf prawns',
    description: 'Jumbo prawns wrapped in applewood bacon.',
    price: '$18.00',
  },
  {
    name: 'Seared ahi tuna fillet*, honey-ginger sauce',
    description: 'Sushi-grade tuna, seared rare, with sweet ginger glaze.',
    price: '$16.00',
  },
]

export function OurMenu() {
  return (
    <section id="menu" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">Our Menu</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-200 pb-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
                <span className="whitespace-nowrap text-lg font-bold text-flame-600">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
