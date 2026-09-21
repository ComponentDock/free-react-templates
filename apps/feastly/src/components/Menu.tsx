const menuItems = [
  {
    name: 'Mexican Eggrolls',
    price: '$14.50',
    desc: 'Crispy eggrolls filled with seasoned vegetables and spices.',
    img: 'feastly-food1',
  },
  {
    name: 'Chicken Burger',
    price: '$9.50',
    desc: 'Juicy grilled chicken patty with fresh toppings.',
    img: 'feastly-food2',
  },
  {
    name: 'Tofu Lasagne',
    price: '$12.50',
    desc: 'Layered pasta with creamy tofu and rich tomato sauce.',
    img: 'feastly-food3',
  },
  {
    name: 'Pepper Potatoes',
    price: '$14.50',
    desc: 'Roasted potatoes tossed with bell peppers and herbs.',
    img: 'feastly-food4',
  },
  {
    name: 'Bean Salad',
    price: '$8.50',
    desc: 'Fresh garden salad with mixed beans and vinaigrette.',
    img: 'feastly-food5',
  },
  {
    name: 'Beetball Hoagie',
    price: '$11.50',
    desc: 'Hearty beetballs in a toasted hoagie with marinara.',
    img: 'feastly-food6',
  },
] as const

export function Menu() {
  return (
    <section id="menu" className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 max-w-lg">
          <h2 className="font-display text-3xl font-bold text-ink">
            <span className="italic text-primary-400">We serve</span>
            <br />
            delicious food
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-smoke">
            Our menu features carefully crafted dishes using the freshest ingredients, bold flavors,
            and authentic recipes from around the world.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div key={item.name} className="group overflow-hidden rounded transition-all">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${item.img}/400/300`}
                  alt={item.name}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="bg-mist p-6 transition-colors duration-500 group-hover:bg-primary-400">
                <div className="flex items-baseline justify-between">
                  <h5 className="font-display text-lg font-bold capitalize text-ink">
                    {item.name}
                  </h5>
                  <span className="text-lg font-bold text-primary-400 transition-colors duration-500 group-hover:text-ink">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-smoke transition-colors duration-500 group-hover:text-ink">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
