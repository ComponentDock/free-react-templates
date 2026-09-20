import { cn } from '@free-react-templates/ui'

const events = [
  {
    image: 'https://picsum.photos/seed/gathr-event-1/80/80',
    date: '15 Mar 2026',
    title: 'Opening Keynote',
    time: '9:00 AM',
    speaker: 'Patricia Stone',
  },
  {
    image: 'https://picsum.photos/seed/gathr-event-2/80/80',
    date: '16 Mar 2026',
    title: 'Innovation Workshop',
    time: '2:00 PM',
    speaker: 'James Oliver',
  },
  {
    image: 'https://picsum.photos/seed/gathr-event-3/80/80',
    date: '17 Mar 2026',
    title: 'Closing Ceremony',
    time: '5:00 PM',
    speaker: 'Carla Banks',
  },
]

export function Calendar() {
  return (
    <section id="events" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#18181c] md:text-4xl">
          Upcoming Events
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="pb-4 text-sm font-semibold uppercase tracking-wider text-[#838383]">
                  Event
                </th>
                <th className="pb-4 text-sm font-semibold uppercase tracking-wider text-[#838383]">
                  Date
                </th>
                <th className="hidden pb-4 text-sm font-semibold uppercase tracking-wider text-[#838383] sm:table-cell">
                  Time
                </th>
                <th className="hidden pb-4 text-sm font-semibold uppercase tracking-wider text-[#838383] md:table-cell">
                  Speaker
                </th>
                <th className="pb-4 text-sm font-semibold uppercase tracking-wider text-[#838383]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr
                  key={event.title}
                  className="border-b border-gray-100 transition hover:bg-gray-50"
                >
                  <td className="flex items-center gap-4 py-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-20 w-20 rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-semibold text-[#18181c]">{event.title}</h3>
                      <p className="text-sm text-[#838383] sm:hidden">
                        {event.date} · {event.time}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-[#838383]">{event.date}</td>
                  <td className="hidden py-4 text-sm text-[#838383] sm:table-cell">{event.time}</td>
                  <td className="hidden py-4 text-sm text-[#838383] md:table-cell">
                    {event.speaker}
                  </td>
                  <td className="py-4">
                    <a
                      href="#"
                      className={cn(
                        'inline-block rounded-full bg-[#f50136] px-5 py-2',
                        'text-xs font-semibold text-white transition hover:bg-[#d4002e]',
                      )}
                    >
                      Buy Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
