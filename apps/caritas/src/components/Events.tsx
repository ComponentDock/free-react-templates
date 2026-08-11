import { EVENTS, EVENTS_CAPTION, EVENTS_TITLE } from '../data'
import { SectionTitle } from './SectionTitle'

/* .event_part — "Upcoming Event" + 4 rows: thumbnail + H5 title +
   one-line description. Rows bg #fafafa, 46px top-left + bottom-right
   radius. Padding 140px 0 80px. */
export function Events() {
  return (
    <section id="event" className="bg-white px-4 pt-[140px] pb-[80px] max-[991px]:pt-[70px]">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-md">
          <SectionTitle title={EVENTS_TITLE} caption={EVENTS_CAPTION} />
        </div>

        <ul className="space-y-[60px]">
          {EVENTS.map((event) => (
            <li
              key={event.seed}
              className="flex flex-col items-center gap-6 bg-mist p-6 rounded-tl-[46px] rounded-br-[46px] sm:flex-row sm:gap-10"
            >
              <img
                src={`https://picsum.photos/seed/${event.seed}/220/160`}
                alt=""
                className="w-full max-w-[220px] rounded-[10px] object-cover sm:shrink-0"
              />
              <div>
                <h3 className="text-[20px] font-semibold text-ink">{event.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-gray-600">{event.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
