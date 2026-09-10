import { Button } from '@free-react-templates/ui'

const categories = [
  {
    title: 'Pizza',
    description:
      'Hand-tossed dough with fresh toppings and our signature sauce baked to perfection.',
    image: 'https://picsum.photos/seed/loaf-cat1/200/200',
  },
  {
    title: 'Bread',
    description:
      'Artisan loaves baked daily with organic flour and slow fermentation for deep flavor.',
    image: 'https://picsum.photos/seed/loaf-cat2/200/200',
  },
  {
    title: 'Burgers',
    description: 'Juicy patties on freshly baked buns with crisp lettuce and our special sauce.',
    image: 'https://picsum.photos/seed/loaf-cat3/200/200',
  },
]

export function Categories() {
  return (
    <section id="categories" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">Our Categories</h2>
          <p className="mx-auto max-w-2xl text-body">
            Explore our wide range of freshly prepared items, each made with the finest ingredients
            and baked with love.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title} className="text-center">
              <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-brand">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="mb-3 text-xl font-semibold text-heading">{cat.title}</h4>
              <p className="mb-6 text-body">{cat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            className="rounded-full bg-brand px-8 py-3 text-white hover:bg-brand-dark"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
