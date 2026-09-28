import { MENU_ITEMS } from '../data'

/**
 * MenuGrid — "Best Ever Burgers" section: section title + 2×2 grid of burger
 * items (image + name + description + price). Source: .best_burgers_area.
 */
export function MenuGrid() {
  return (
    <section id="menu" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="block text-sm font-medium uppercase tracking-widest text-brand">
            Burger Menu
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-heading md:text-4xl">
            Best Ever Burgers
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-6 rounded-lg bg-light p-6 transition-shadow hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/200/200`}
                alt={item.name}
                loading="lazy"
                className="h-28 w-28 flex-shrink-0 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display text-lg font-bold text-heading">{item.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-body">{item.description}</p>
                <span className="mt-2 inline-block font-display text-lg font-bold text-brand">
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
