import { journeyBackdrop, journeyLabel, journeyTitle, trips } from '../data'
import { SectionHeading } from './SectionHeading'

export function Journey() {
  return (
    <section id="trips-section" aria-label={journeyTitle} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading backdrop={journeyBackdrop} label={journeyLabel} title={journeyTitle} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <article key={trip.title} className="group relative overflow-hidden">
              <img
                src={trip.image}
                alt=""
                className="w-full scale-[1.05] object-cover transition-transform duration-300 group-hover:scale-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 via-white/30 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-5 flex flex-col items-center gap-3 px-4 text-center">
                <span className="rounded-full bg-sand px-[30px] py-[5px] text-xs font-bold uppercase tracking-[0.2em] text-white">
                  {trip.price}
                </span>
                <h3 className="text-lg font-semibold text-white">{trip.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
