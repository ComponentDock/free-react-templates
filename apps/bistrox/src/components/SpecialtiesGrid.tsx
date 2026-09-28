interface Specialty {
  name: string
  description: string
  price: string
  image: string
}

const specialties: Specialty[] = [
  {
    name: 'Beef Steak',
    description:
      'Premium beef steak grilled to perfection with our signature seasoning and served with fresh vegetables and sauce.',
    price: 'from $10.00',
    image: 'https://picsum.photos/seed/bistrox-steak/600/400',
  },
  {
    name: 'Beef Ribs Steak',
    description:
      'Slow-cooked beef ribs with a rich, smoky flavor. Fall-off-the-bone tender and full of bold taste.',
    price: 'from $10.00',
    image: 'https://picsum.photos/seed/bistrox-ribs/600/400',
  },
  {
    name: 'Chopsuey',
    description:
      'A classic Asian stir-fry with fresh vegetables, tender meat, and a savory sauce over steamed rice.',
    price: 'from $10.00',
    image: 'https://picsum.photos/seed/bistrox-chopsuey/600/400',
  },
  {
    name: 'Roasted Chicken',
    description:
      'Whole roasted chicken with herbs and spices, crispy skin, and juicy meat. A family favorite.',
    price: 'from $10.00',
    image: 'https://picsum.photos/seed/bistrox-chicken/600/400',
  },
]

export function SpecialtiesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-12">
          {specialties.map((item, index) => (
            <div
              key={item.name}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-2xl font-bold text-text-dark mb-3 font-heading">{item.name}</h3>
                <p className="text-text-muted mb-4 leading-relaxed">{item.description}</p>
                <p className="text-brand font-bold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
