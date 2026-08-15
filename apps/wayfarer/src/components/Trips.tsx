import { trips, tripsSectionTitle } from '../data'

export function Trips() {
  return (
    <section id="trips" className="bg-white py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="mb-14 text-center font-sans text-[38px] font-normal text-navy">
          {tripsSectionTitle}
        </h2>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <li key={trip.title}>
              <article>
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="h-60 w-full rounded-md object-cover"
                />
                <div className="pt-4">
                  <p className="font-sans text-sm text-muted">{trip.date}</p>
                  <h3 className="mt-2 font-sans text-[22px] leading-8 text-navy transition-colors hover:text-coral">
                    <a href="#trips" className="transition-colors hover:text-coral">
                      {trip.title}
                    </a>
                  </h3>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
