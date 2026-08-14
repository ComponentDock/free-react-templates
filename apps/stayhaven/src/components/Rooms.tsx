import { ROOMS } from '../data'

/* Rooms (source: section.section#section-rooms — centered "Rooms & Suites"
   heading and a 3-column grid of room cards: photo, serif title and an
   uppercase price line). */
export function Rooms() {
  return (
    <section id="rooms" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-4xl font-bold text-ink">Rooms &amp; Suites</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ROOMS.map((room) => (
            <article key={room.name} className="text-center">
              <img src={room.image} alt={room.name} className="w-full rounded-lg" />
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{room.name}</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.1em] text-ink">
                {room.price} <span className="font-normal text-smoke">{room.unit}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
