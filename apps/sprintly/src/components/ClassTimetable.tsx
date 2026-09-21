const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const schedule: Record<string, string[]> = {
  Mon: ['6:00 — Crossfit Lv1', '10:00 — BootCamp', '17:00 — Body Balance'],
  Tue: ['7:00 — Energy Blast', '11:00 — Crossfit Lv1', '18:00 — Yoga Flow'],
  Wed: ['6:00 — Crossfit Lv1', '10:00 — Body Balance', '17:00 — BootCamp'],
  Thu: ['7:00 — Crossfit Lv2', '12:00 — Energy Blast', '18:00 — Crossfit Lv1'],
  Fri: ['6:00 — BootCamp', '10:00 — Crossfit Lv1', '17:00 — Body Balance'],
  Sat: ['8:00 — Crossfit Lv2', '11:00 — BootCamp'],
  Sun: ['9:00 — Yoga Flow'],
}

export function ClassTimetable() {
  return (
    <section id="schedule" className="bg-dark-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-500">
            Schedule
          </span>
          <h2 className="mt-2 font-heading text-4xl font-bold uppercase text-white">
            Class Timetable
          </h2>
        </div>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                {days.map((day) => (
                  <th
                    key={day}
                    className="border-b-2 border-brand-500 px-4 py-3 text-left font-heading text-sm font-semibold uppercase text-brand-500"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }, (_, rowIdx) => (
                <tr key={rowIdx} className="border-b border-dark-600">
                  {days.map((day) => (
                    <td key={day} className="px-4 py-3 text-sm text-dark-200">
                      {schedule[day]?.[rowIdx] ?? '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
