import { SectionTitle } from './SectionTitle'

const DESTINATIONS = [
  { name: 'Mountain River', place: 'Paraguay', price: '$150', seed: 'tripquest-dest-1' },
  { name: 'Dream City', place: 'Paris', price: '$250', seed: 'tripquest-dest-2' },
  { name: 'Cloud Mountain', place: 'Sri Lanka', price: '$350', seed: 'tripquest-dest-3' },
] as const

/* Three photo cards: the photo darkens under a navy wash on hover and the
   square yellow price badge fades in over it. */
export function Destinations() {
  return (
    <section id="destinations" className="py-[120px]">
      <SectionTitle
        title="Popular Destinations"
        subtitle="Hand-picked places our travellers keep coming back to, priced for the season you want to go."
      />
      <div className="mx-auto grid max-w-[1140px] gap-[30px] px-4 md:grid-cols-3">
        {DESTINATIONS.map((destination) => (
          <article key={destination.name} className="group relative overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${destination.seed}/600/420`}
              alt={destination.name}
              className="h-[300px] w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="overlay-navy absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute inset-x-0 bottom-[22px] px-[24px]">
              <h4 className="text-[20px] font-semibold text-white">{destination.name}</h4>
              <p className="text-[14px] text-white/80">{destination.place}</p>
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand px-[30px] py-[6px] text-[14px] font-semibold text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Book at {destination.price}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
