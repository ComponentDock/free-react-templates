import { ROOMS } from '../data'

/* Accomodation (source: section.accomodation_area.section_gap — white
   section with the "Hotel Accomodation" heading (original misspelling kept),
   subtitle and 4 room cards: rounded image with a yellow "Book Now" overlay
   + hover zoom, title, blue price and blurb). */
export function Accomodation() {
  return (
    <section id="accomodation" className="bg-white py-[120px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-[36px] font-semibold leading-[45px] text-ink">Hotel Accomodation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[30px] text-smoke">
            We all live in an age that belongs to the young at heart. Life that is becoming
            extremely fast.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ROOMS.map((room) => (
            <article key={room.name} className="text-center">
              <div className="group relative overflow-hidden rounded-[10px]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.19]"
                />
                <a
                  href="#booking"
                  className="absolute bottom-5 left-1/2 max-w-[128px] -translate-x-1/2 bg-brand px-[25px] py-[5px] text-[13px] font-medium uppercase text-white transition-colors hover:bg-brand-dark"
                >
                  Book Now
                </a>
              </div>
              <h3 className="mt-6 text-[18px] font-semibold leading-[38px] text-ink">
                {room.name}
              </h3>
              <p className="text-[24px] font-semibold leading-[28px] text-sky">
                {room.price}
                <small className="ml-1 text-[14px] font-light text-smoke">/ {room.unit}</small>
              </p>
              <p className="mt-3 text-[13px] leading-[22px] text-smoke">{room.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
