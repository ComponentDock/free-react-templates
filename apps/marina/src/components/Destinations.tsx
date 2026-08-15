import { destinations } from '../data'

export function Destinations() {
  return (
    <section aria-label="Our Destinations" className="bg-light py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
          Our Destinations
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.title}
              className="bg-white shadow-[0_0_30px_-5px_rgba(0,0,0,0.2)]"
            >
              <img
                src={destination.image}
                alt={destination.title}
                loading="lazy"
                className="h-[240px] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{destination.title}</h3>
                <p className="mt-2 font-body text-sm font-light text-body">{destination.dates}</p>
                <span className="mt-4 inline-block rounded-[4px] bg-brand px-2.5 py-1 text-sm font-semibold text-white">
                  {destination.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
