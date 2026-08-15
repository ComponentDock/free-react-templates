import {
  destinationSectionText,
  destinationSectionTitle,
  destinations,
  placesPillSuffix,
} from '../data'

export function Destinations() {
  return (
    <section id="destination" className="bg-white py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-14 text-center">
          <h2 className="pb-2 font-sans text-[38px] font-normal text-navy">
            {destinationSectionTitle}
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-base leading-7 text-muted">
            {destinationSectionText}
          </p>
        </div>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <li key={destination.name}>
              <a href="#places" className="group relative block overflow-hidden rounded-md">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:-translate-y-2.5"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-7 left-7 flex items-center gap-3">
                  <h3 className="font-sans text-[22px] text-white transition-colors group-hover:text-coral">
                    {destination.name}
                  </h3>
                  <span className="rounded-full bg-teal px-3 py-0.5 font-sans text-xs text-white">
                    {destination.count} {placesPillSuffix}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
