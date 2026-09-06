const dishes = [
  { name: 'Grilled Salmon', price: 28 },
  { name: 'Filet Mignon', price: 45 },
  { name: 'Truffle Risotto', price: 32 },
  { name: 'Lobster Bisque', price: 24 },
]

export function SpecialMenu() {
  return (
    <section id="special-menu" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-gray-900">
          Special Menu
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <article key={dish.name} className="rounded-xl bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{dish.name}</h3>
              <p className="mt-2 text-primary font-bold">${dish.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
