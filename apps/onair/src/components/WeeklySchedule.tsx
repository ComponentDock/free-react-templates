import { scheduleData } from '../data'

export function WeeklySchedule() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold uppercase">Weekly Schedule</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                {scheduleData.map((col) => (
                  <th
                    key={col.day}
                    className="border-b-2 border-border px-4 py-3 text-left text-sm font-semibold uppercase text-heading"
                  >
                    {col.day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from(
                { length: Math.max(...scheduleData.map((c) => c.shows.length)) },
                (_, rowIdx) => (
                  <tr key={rowIdx}>
                    {scheduleData.map((col) => (
                      <td key={col.day} className="border-b border-border px-4 py-3 align-top">
                        {col.shows[rowIdx] ? (
                          <>
                            <p className="text-sm font-medium text-heading">
                              {col.shows[rowIdx].name}
                            </p>
                            <span className="text-xs text-secondary">{col.shows[rowIdx].time}</span>
                          </>
                        ) : null}
                      </td>
                    ))}
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
