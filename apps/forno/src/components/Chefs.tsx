const chefs = [
  {
    name: 'Ava Laurent',
    role: 'Restaurant Owner',
    image: 'https://picsum.photos/id/1027/600/750',
  },
  {
    name: 'Rebeca Welson',
    role: 'Head Chef',
    image: 'https://picsum.photos/id/64/600/750',
  },
  {
    name: 'Maya Chen',
    role: 'Pastry Chef',
    image: 'https://picsum.photos/id/823/600/750',
  },
  {
    name: 'Sofia Reyes',
    role: 'Sous Chef',
    image: 'https://picsum.photos/id/996/600/750',
  },
] as const

/**
 * Chefs — team grid (source `.ftco-section`): script "Chef" subheading,
 * "Our Master Chef" heading and four photo cards. Portraits are
 * subject-screened picsum IDs; picsum has no male headshots, so names are
 * adapted to fit the available portraits.
 */
export function Chefs() {
  return (
    <section id="chefs" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="font-script text-4xl text-primary-500">Chef</span>
          <h2 className="mt-2 text-3xl font-semibold uppercase tracking-wide text-gray-900 sm:text-4xl">
            Our Master Chef
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {chefs.map((chef) => (
            <article
              key={chef.name}
              className="group overflow-hidden rounded-md bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={chef.image}
                  alt={`${chef.name}, ${chef.role}`}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{chef.name}</h3>
                <p className="mt-1 text-sm text-primary-600">{chef.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
