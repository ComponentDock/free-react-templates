import { Badge } from '@free-react-templates/ui'

const dishes = [
  {
    name: 'Burrata',
    price: '$18',
    description: 'Creamy burrata with prosciutto di Parma, arugula, and aged balsamic.',
    image: 'https://picsum.photos/seed/sapor-2/800/600',
    alt: 'Burrata with prosciutto and arugula',
    featured: true,
  },
  {
    name: 'Spaghetti alla Carbonara',
    price: '$24',
    description: 'House-made spaghetti tossed with guanciale, pecorino romano, and farm egg.',
    image: 'https://picsum.photos/seed/sapor-3/800/600',
    alt: 'Spaghetti alla carbonara',
    featured: false,
  },
  {
    name: 'Branzino al Forno',
    price: '$38',
    description: 'Oven-roasted Mediterranean sea bass with lemon, herbs, and olive oil.',
    image: 'https://picsum.photos/seed/sapor-4/800/600',
    alt: 'Roasted branzino with lemon and herbs',
    featured: false,
  },
  {
    name: 'Tiramisu',
    price: '$12',
    description: 'Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa.',
    image: 'https://picsum.photos/seed/sapor-5/800/600',
    alt: 'Tiramisu dusted with cocoa',
    featured: false,
  },
] as const

export function Menu() {
  return (
    <section id="menu" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary-600">
            Our Menu
          </span>
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Chef's Selections
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Discover our most beloved dishes, crafted with the finest ingredients and time-honored
            recipes.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                {dish.featured && (
                  <Badge className="absolute left-4 top-4 bg-primary-600 text-white">
                    Chef's Pick
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold text-gray-900">{dish.name}</h3>
                  <span className="text-lg font-semibold text-primary-600">{dish.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
