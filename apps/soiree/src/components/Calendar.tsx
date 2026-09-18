const EVENTS = [
  {
    date: '14',
    month: 'February',
    title: 'Conference in Amsterdam',
    time: '08 AM — 04 PM',
    speaker: 'Daniel Hill',
    seed: 'event-1',
  },
  {
    date: '18',
    month: 'February',
    title: 'Workshop in Berlin',
    time: '09 AM — 05 PM',
    speaker: 'Sarah Connor',
    seed: 'event-2',
  },
  {
    date: '22',
    month: 'February',
    title: 'Summit in Paris',
    time: '10 AM — 06 PM',
    speaker: 'Mike Ross',
    seed: 'event-3',
  },
]

export function Calendar() {
  return (
    <section className="pb-16 font-[family-name:var(--font-montserrat)]">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[var(--color-heading)] text-white">
                <th className="p-4 text-sm font-bold uppercase" colSpan={5}>
                  Next Events Calendar
                </th>
              </tr>
            </thead>
            <tbody>
              {EVENTS.map((event) => (
                <tr key={event.date} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 w-16">
                    <img
                      src={`https://picsum.photos/seed/${event.seed}/80/80`}
                      alt={event.title}
                      className="w-12 h-12 rounded object-cover"
                      loading="lazy"
                    />
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-2xl font-bold text-[var(--color-brand)]">{event.date}</div>
                    <div className="text-xs text-[var(--color-body)]">{event.month}</div>
                  </td>
                  <td className="p-4">
                    <h5 className="font-bold text-sm text-[var(--color-heading)]">{event.title}</h5>
                    <p className="text-xs text-[var(--color-body)]">{event.time}</p>
                    <p className="text-xs text-[var(--color-body)]">Speaker: {event.speaker}</p>
                  </td>
                  <td className="p-4">
                    <a
                      href="#"
                      className="inline-block bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white px-4 py-1 rounded-full text-xs font-semibold transition-colors"
                    >
                      Read More
                    </a>
                  </td>
                  <td className="p-4">
                    <a
                      href="#"
                      className="text-sm text-[var(--color-brand)] hover:underline font-semibold"
                    >
                      buy now
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
