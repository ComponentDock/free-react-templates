import { ButtonLink } from '@free-react-templates/ui'

const dishes = [
  {
    name: 'Grilled Beef',
    price: '$29',
    ingredients: 'Beef, Potatoes, Rice, Tomato',
    image: 'https://picsum.photos/id/292/400/300',
    alt: 'Grilled beef with potatoes and rice',
  },
  {
    name: 'Roast Chicken',
    price: '$24',
    ingredients: 'Chicken, Mushroom, Asparagus, Thyme',
    image: 'https://picsum.photos/id/1080/400/300',
    alt: 'Roast chicken with mushrooms and asparagus',
  },
  {
    name: 'Seafood Pasta',
    price: '$32',
    ingredients: 'Prawns, Linguine, Garlic, Chilli',
    image: 'https://picsum.photos/id/429/400/300',
    alt: 'Seafood linguine with prawns',
  },
  {
    name: 'Veggie Bowl',
    price: '$19',
    ingredients: 'Quinoa, Avocado, Kale, Lemon',
    image: 'https://picsum.photos/id/225/400/300',
    alt: 'Veggie bowl with quinoa and avocado',
  },
  {
    name: 'Steak Frites',
    price: '$35',
    ingredients: 'Sirloin, Fries, Béarnaise, Rocket',
    image: 'https://picsum.photos/id/431/400/300',
    alt: 'Sirloin steak with fries',
  },
  {
    name: 'Tiramisu',
    price: '$12',
    ingredients: 'Espresso, Mascarpone, Cocoa, Ladyfingers',
    image: 'https://picsum.photos/id/312/400/300',
    alt: 'Tiramisu dusted with cocoa',
  },
] as const

export function MenuSection() {
  return (
    <section id="menu" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="text-center">
          <span className="font-script text-4xl text-primary-500">Specialties</span>
          <h2 className="mt-2 text-3xl font-semibold uppercase tracking-wide text-gray-900 sm:text-4xl">
            Our Menu
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {dishes.map((dish) => (
            <article key={dish.name} className="flex gap-6">
              <img
                src={dish.image}
                alt={dish.alt}
                loading="lazy"
                className="h-32 w-32 shrink-0 rounded-md object-cover"
              />
              <div className="flex flex-col">
                <div className="flex items-baseline justify-between gap-2 border-b border-gray-200 pb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{dish.name}</h3>
                  <span className="text-lg font-semibold text-primary-600">{dish.price}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{dish.ingredients}</p>
                <ButtonLink
                  href="#reservation"
                  className="mt-auto h-auto w-fit rounded-md px-4 py-2 text-xs font-medium uppercase tracking-wide"
                >
                  Order now
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
