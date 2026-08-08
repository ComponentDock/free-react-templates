import { Badge } from '@free-react-templates/ui'

type Drink = {
  name: string
  price: string
  description: string
  tags?: string[]
  popular?: boolean
}

type Category = {
  title: string
  note: string
  drinks: Drink[]
}

const categories: Category[] = [
  {
    title: 'Espresso Drinks',
    note: 'Crafted with our signature house blend',
    drinks: [
      { name: 'Espresso', price: '$3.50', description: 'Rich, bold, and perfectly extracted' },
      { name: 'Cortado', price: '$4.50', description: 'Equal parts espresso and steamed milk' },
      {
        name: 'Cappuccino',
        price: '$5.00',
        description: 'Velvety foam with a double shot',
        popular: true,
      },
    ],
  },
  {
    title: 'Pour Overs',
    note: 'Single-origin beans, brewed to order',
    drinks: [
      {
        name: 'Ethiopian Yirgacheffe',
        price: '$6.00',
        description: 'Floral, citrus, and tea-like',
        tags: ['Bergamot', 'Jasmine', 'Lemon'],
        popular: true,
      },
      {
        name: 'Colombian Huila',
        price: '$5.50',
        description: 'Caramel, red apple, and milk chocolate',
        tags: ['Caramel', 'Apple', 'Chocolate'],
      },
      {
        name: 'Guatemalan Antigua',
        price: '$5.50',
        description: 'Smoky, cocoa, and spice',
        tags: ['Cocoa', 'Smoke', 'Spice'],
      },
    ],
  },
  {
    title: 'Cold Drinks',
    note: 'Refreshing and smooth',
    drinks: [
      {
        name: 'Cold Brew',
        price: '$5.00',
        description: '18-hour steeped perfection',
        popular: true,
      },
      { name: 'Iced Latte', price: '$5.50', description: 'Espresso over ice with cold milk' },
      {
        name: 'Nitro Cold Brew',
        price: '$6.00',
        description: 'Smooth, creamy, and nitrogen-infused',
      },
    ],
  },
]

export function Menu() {
  return (
    <section id="menu" className="scroll-mt-20 bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Menu
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Handcrafted drinks and fresh-baked goods, made with love
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-primary-100 bg-primary-50/60 p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{category.note}</p>

              <ul className="mt-6 space-y-6">
                {category.drinks.map((drink) => (
                  <li key={drink.name}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">{drink.name}</h4>
                        {drink.popular && <Badge variant="warning">Popular</Badge>}
                      </div>
                      <span className="font-display text-lg font-semibold text-primary-700 dark:text-primary-300">
                        {drink.price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {drink.description}
                    </p>
                    {drink.tags && drink.tags.length > 0 && (
                      <p className="mt-2 text-xs uppercase tracking-wider text-primary-500 dark:text-primary-400">
                        {drink.tags.join(' · ')}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
