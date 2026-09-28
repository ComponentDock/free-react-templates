const dishes = [
  {
    title: 'Grilled Salmon',
    image: 'https://picsum.photos/seed/dish1/600/400',
    description:
      'Perfectly seared Atlantic salmon with a crispy skin, served on a bed of seasonal vegetables and a delicate lemon butter sauce.',
  },
  {
    title: 'Truffle Pasta',
    image: 'https://picsum.photos/seed/dish2/600/400',
    description:
      'Handmade fettuccine tossed in a rich truffle cream sauce with wild mushrooms and freshly shaved parmesan.',
  },
  {
    title: 'Wagyu Steak',
    image: 'https://picsum.photos/seed/dish3/600/400',
    description:
      'A5 Wagyu beef grilled to perfection, paired with roasted potatoes and a red wine reduction glaze.',
  },
]

export function Dishes() {
  return (
    <section id="dishes" className="py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold uppercase tracking-wide text-ink sm:text-4xl">
            Our Top Rated Dishes
          </h2>
          <p className="mx-auto max-w-2xl font-light text-mist">
            Every dish tells a story. These are the favorites our guests keep coming back for,
            crafted with care by our culinary team.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.title}
              className="group overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-ink">{dish.title}</h3>
                <p className="text-sm font-light leading-relaxed text-mist">{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
