const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] as const

const scheduleRows = [
  {
    course: 'Fitness Aero',
    slots: [
      { day: 'Mon', time: '10:00 - 14:00' },
      { day: 'Wed', time: '10:00 - 14:00' },
      { day: 'Fri', time: '10:00 - 14:00' },
    ],
  },
  {
    course: 'Senior Fitness',
    slots: [
      { day: 'Tue', time: '10:00 - 14:00' },
      { day: 'Thu', time: '10:00 - 14:00' },
    ],
  },
] as const

export function Schedule() {
  return (
    <section id="schedule" aria-label="Class schedule" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">
          Schedule your Fitness Process
        </h2>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-ink">
                <th className="px-4 py-3 text-left font-semibold text-white">Course</th>
                {days.map((day) => (
                  <th key={day} className="px-4 py-3 text-center font-semibold text-white">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleRows.map((row) => (
                <tr key={row.course} className="border-b border-gray-200 bg-white">
                  <td className="px-4 py-4 font-medium text-ink">{row.course}</td>
                  {days.map((day) => {
                    const slot = row.slots.find((s) => s.day === day)
                    return (
                      <td key={day} className="px-4 py-4 text-center text-smoke">
                        {slot ? (
                          <span className="rounded bg-accent-400/20 px-2 py-1 text-xs font-medium text-accent-500">
                            {slot.time}
                          </span>
                        ) : (
                          '—'
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
