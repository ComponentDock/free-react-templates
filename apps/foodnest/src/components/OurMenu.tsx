const menuItems = [
  {
    name: 'Grilled Caesar salad, shaved reggiano',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus.',
    price: '$12.00',
    image: 'foodnest-menu-a',
  },
  {
    name: 'Bacon wrapped wild gulf prawns',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus.',
    price: '$18.00',
    image: 'foodnest-menu-b',
  },
  {
    name: 'Spicy Calamari and beans',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus.',
    price: '$12.00',
    image: 'foodnest-menu-c',
  },
  {
    name: 'Seared ahi tuna fillet, honey-ginger sauce',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus.',
    price: '$16.00',
    image: 'foodnest-menu-d',
  },
] as const

export function OurMenu() {
  return (
    <section className="relative bg-paper py-16">
      {/* Top slant */}
      <div
        className="absolute top-0 left-0 right-0 -mt-1 h-12 bg-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />
      {/* Bottom slant */}
      <div
        className="absolute bottom-0 left-0 right-0 -mb-1 h-12 bg-white"
        style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}
      />

      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-heading">Our Menu</h2>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {menuItems.map((item, idx) => (
            <div
              key={item.name}
              className={`flex flex-col gap-4 sm:flex-row ${
                idx % 2 === 1 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              <img
                src={`https://picsum.photos/seed/${item.image}/300/200`}
                alt={item.name}
                className="w-full object-cover sm:h-40 sm:w-40"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-heading">{item.name}</h3>
                <p className="mb-2 text-sm text-mist">{item.description}</p>
                <p className="text-xl font-bold text-brand">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
