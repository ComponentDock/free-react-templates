const sessions = [
  {
    sl: 1,
    session: 'Opening Ceremony',
    speaker: 'Will Peters',
    venue: 'Main Hall',
    time: '09:00 AM',
  },
  {
    sl: 2,
    session: 'Keynote Speech',
    speaker: 'Abigail McMillan',
    venue: 'Auditorium',
    time: '10:00 AM',
  },
  { sl: 3, session: 'Coffee Break', speaker: '—', venue: 'Lobby', time: '11:30 AM' },
  {
    sl: 4,
    session: 'Tech Workshop',
    speaker: 'Jean Keenan',
    venue: 'Workshop Room',
    time: '12:00 PM',
  },
  {
    sl: 5,
    session: 'Panel Discussion',
    speaker: 'Justin Clark',
    venue: 'Main Hall',
    time: '02:00 PM',
  },
  {
    sl: 6,
    session: 'Closing Ceremony',
    speaker: 'Will Peters',
    venue: 'Auditorium',
    time: '04:00 PM',
  },
]

export interface ScheduleProps {
  className?: string
}

export function Schedule({ className }: ScheduleProps) {
  return (
    <section id="schedule" className={`bg-[#f9f9ff] py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wider text-[#222] md:text-4xl">
          Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#8ab92d] bg-white text-left text-sm font-semibold uppercase tracking-wider text-[#222]">
                <th className="px-4 py-3">Sl</th>
                <th className="px-4 py-3">Session</th>
                <th className="px-4 py-3">Speaker</th>
                <th className="px-4 py-3">Venue</th>
                <th className="px-4 py-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((row) => (
                <tr
                  key={row.sl}
                  className="border-b border-gray-200 bg-white text-sm text-[#777] transition-colors hover:bg-[#8ab92d] hover:text-white"
                >
                  <td className="px-4 py-3 font-medium">{row.sl}</td>
                  <td className="px-4 py-3 font-medium text-[#222]">{row.session}</td>
                  <td className="px-4 py-3">{row.speaker}</td>
                  <td className="px-4 py-3">{row.venue}</td>
                  <td className="px-4 py-3">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
