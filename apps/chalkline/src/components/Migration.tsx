import { migration } from '../data'
import { SCROLL_OFFSET, sectionChip } from '../lib/site'

/** The nine-row comparison on the left, the four-stage timeline underneath it —
 * the band that answers "what actually survives". */
export function Migration() {
  return (
    <section id="migration" className={`section-band bg-gray-50 ${SCROLL_OFFSET}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className={sectionChip}>Switching</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl">
            Coming from Moodle, Canvas or Blackboard
          </h2>
          <p className="mt-4 text-lg text-gray-600">{migration.lead}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <h3 className="text-lg font-semibold text-gray-900">What comes across</h3>
            <div className="relative mt-4 overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <caption className="sr-only">
                  Which migration path each kind of content takes from Moodle, Canvas and Blackboard
                </caption>
                <thead>
                  <tr className="border-b border-gray-300">
                    <th scope="col" className="py-3 pr-4 font-mono text-xs tracking-wider text-gray-500 uppercase">
                      Item
                    </th>
                    {migration.vendors.map((vendor) => (
                      <th
                        key={vendor}
                        scope="col"
                        className="px-3 py-3 font-mono text-xs tracking-wider text-gray-500 uppercase"
                      >
                        {vendor}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {migration.rows.map((row) => (
                    <tr key={row.item} className="border-b border-gray-200">
                      <th scope="row" className="py-3 pr-4 text-sm font-normal text-gray-900">
                        {row.item}
                      </th>
                      {row.cells.map((cell, index) => (
                        <td
                          key={`${row.item}-${migration.vendors[index]}`}
                          className={
                            cell === 'Rebuild'
                              ? 'px-3 py-3 font-mono text-xs text-accent-600'
                              : 'px-3 py-3 font-mono text-xs text-gray-600'
                          }
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">{migration.legend}</p>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <h3 className="text-lg font-semibold text-gray-900">How a migration runs</h3>
            <ol className="mt-4 space-y-4">
              {migration.stages.map((stage) => (
                <li key={stage.stage} className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-xs tracking-wider text-accent-600 uppercase">
                      {stage.stage}
                    </span>
                    <span className="font-mono text-xs text-gray-400">{stage.duration}</span>
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-gray-900">{stage.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{stage.blurb}</p>
                  <p className="mt-4 border-t border-gray-200 pt-3 font-mono text-xs text-gray-500">
                    {stage.owner}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
          {migration.footnote}
        </p>
      </div>
    </section>
  )
}
