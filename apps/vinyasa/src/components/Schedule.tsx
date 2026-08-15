import { scheduleRows, weekDays } from '../data'

export function Schedule() {
  return (
    <section id="schedule" aria-label="Class schedule" className="bg-mist py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-thin text-ink md:text-5xl">Schedule your Fitness Process</h1>
          <p className="mt-5 leading-relaxed text-muted">
            Weekly timetable — every class is open to members and drop-ins.
          </p>
        </div>
        <div className="mt-16 overflow-x-auto bg-white p-8 shadow-sm">
          <table className="w-full min-w-160 border-collapse text-center">
            <thead>
              <tr className="border-b border-gray-100">
                <th
                  scope="col"
                  className="px-4 py-4 text-left text-sm font-bold uppercase tracking-wider text-ink"
                >
                  Course name
                </th>
                {weekDays.map((day) => (
                  <th
                    key={day}
                    scope="col"
                    className="px-4 py-4 text-sm font-bold uppercase tracking-wider text-ink"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleRows.map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-gray-100 transition-colors hover:bg-white hover:shadow-[0px_20px_50px_rgba(153,153,153,0.2)]"
                >
                  <th scope="row" className="px-4 py-7 text-left text-base font-medium text-ink">
                    {row.name}
                  </th>
                  {row.times.map((time, index) => (
                    <td key={weekDays[index]} className="px-4 py-7 text-muted">
                      {time}
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
