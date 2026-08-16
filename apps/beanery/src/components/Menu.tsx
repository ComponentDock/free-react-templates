import { menuCategories } from '../data'

/* Centered menu section with three category columns (Coffee / Drinks /
   Fast Food), each listing five items with dotted-leader names, copper
   prices and short descriptions. */
export function Menu() {
  return (
    <section id="menu" aria-label="Our menu" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold text-navy lg:text-[44px]">Our Menu</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed">
            Duis congue sapien eget nibh consequat, ac fermentum velit vehicula — every item on the
            board is made in-house and served fresh from our counter.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold text-copper">{category.title}</h3>
              <ul className="mt-8 space-y-7">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-end gap-2">
                      <span className="text-[17px] font-medium">{item.name}</span>
                      <span className="menu-leader mb-1.5 flex-1" aria-hidden="true" />
                      <span className="text-lg font-bold text-copper">{item.price}</span>
                    </div>
                    <p className="mt-1.5 text-base font-light leading-relaxed">
                      {item.description}
                    </p>
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
