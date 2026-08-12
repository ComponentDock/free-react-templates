import { SCHEDULE_HEAD, SCHEDULE_ROWS } from '../data'

/**
 * Schedule — "Get Your Schedule" section: photo column left (large screens
 * only) and content right with a bordered table whose header row is red
 * `#ff0000` with white text and whose 6 rows list the "Fitness Aero" class
 * times.
 */
export function Schedule() {
  return (
    <section id="schedule" className="overflow-hidden bg-white">
      <div className="grid items-center lg:grid-cols-2">
        <div className="hidden h-full lg:block">
          <img
            src="https://picsum.photos/seed/swole-schedule/900/700"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="px-4 py-20 sm:px-8 lg:px-16 lg:py-28">
          <h2 className="text-4xl font-bold text-ink lg:text-5xl">Get Your Schedule</h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-body">
            Weekly classes run every day of the week. Pick a slot, show up, and let the coach run
            the session.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border border-line text-left">
              <thead>
                <tr className="bg-brand text-white">
                  {SCHEDULE_HEAD.map((head) => (
                    <th key={head} scope="col" className="px-5 py-5 text-sm font-normal capitalize">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_ROWS.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-t border-line">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-5 py-5 text-sm font-light text-body">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
