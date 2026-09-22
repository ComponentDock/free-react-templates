const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const schedule = [
  {
    time: '6:00 AM',
    classes: [
      { day: 'Monday', name: 'Vinyasa Flow', trainer: 'Sarah Lee' },
      { day: 'Wednesday', name: 'Power Yoga', trainer: 'Mike Chen' },
      { day: 'Friday', name: 'Hatha Yoga', trainer: 'Anna Patel' },
    ],
  },
  {
    time: '8:00 AM',
    classes: [
      { day: 'Tuesday', name: 'Ashtanga Yoga', trainer: 'Mike Chen' },
      { day: 'Thursday', name: 'Vinyasa Flow', trainer: 'Sarah Lee' },
      { day: 'Saturday', name: 'Yin Yoga', trainer: 'Anna Patel' },
    ],
  },
  {
    time: '10:00 AM',
    classes: [
      { day: 'Monday', name: 'Hatha Yoga', trainer: 'Anna Patel' },
      { day: 'Wednesday', name: 'Restorative Yoga', trainer: 'Sarah Lee' },
      { day: 'Friday', name: 'Power Yoga', trainer: 'Mike Chen' },
    ],
  },
  {
    time: '4:00 PM',
    classes: [
      { day: 'Tuesday', name: 'Yin Yoga', trainer: 'Sarah Lee' },
      { day: 'Thursday', name: 'Hatha Yoga', trainer: 'Anna Patel' },
      { day: 'Saturday', name: 'Vinyasa Flow', trainer: 'Mike Chen' },
    ],
  },
  {
    time: '6:00 PM',
    classes: [
      { day: 'Monday', name: 'Ashtanga Yoga', trainer: 'Mike Chen' },
      { day: 'Wednesday', name: 'Vinyasa Flow', trainer: 'Sarah Lee' },
      { day: 'Friday', name: 'Restorative Yoga', trainer: 'Anna Patel' },
    ],
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="bg-white py-16 sm:py-20" data-testid="schedule">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-1 text-center font-display text-2xl text-ember-400">Plan Your Week</p>
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Class Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="bg-sage-400 text-white">
                <th className="px-4 py-3 text-left font-semibold">Time</th>
                {days.map((day) => (
                  <th key={day} className="px-4 py-3 text-center font-semibold">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map(({ time, classes }) => (
                <tr key={time} className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">{time}</td>
                  {days.map((day) => {
                    const cls = classes.find((c) => c.day === day)
                    return (
                      <td key={day} className="px-4 py-3 text-center">
                        {cls ? (
                          <div>
                            <p className="font-medium text-gray-900">{cls.name}</p>
                            <p className="text-xs text-gray-400">{cls.trainer}</p>
                          </div>
                        ) : (
                          <span className="text-gray-300">&mdash;</span>
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
