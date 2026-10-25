import { gradebook } from '../data'
import { bandClass, bandFor, scoreClass } from '../lib/gradebook'
import { SCROLL_OFFSET, sectionChip } from '../lib/site'

const WEIGHTS = [15, 15, 10, 20, 20, 20] as const

/** A real table rather than a screenshot: seven learners, six weighted
 * components, a final band per row, and a colour rule that says which learner is
 * in trouble before you read a number. */
export function Gradebook() {
  return (
    <section id="gradebook" className={`section-band bg-gray-50 ${SCROLL_OFFSET}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className={sectionChip}>Assessment</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl">
            A gradebook that shows you who is in trouble
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Weighted columns, visible marking status, and a final grade you can defend at an appeal
            because every component is on the same screen.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white shadow-soft">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-200 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-gray-900">{gradebook.course}</p>
              <p className="mt-1 font-mono text-xs text-gray-500">{gradebook.meta}</p>
            </div>
            <div className="flex gap-2">
              {gradebook.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-md bg-gray-100 px-2.5 py-1 font-mono text-xs text-gray-600"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[52rem] border-collapse text-left">
              <caption className="sr-only">
                Gradebook for {gradebook.course}, {gradebook.meta}
              </caption>
              <thead>
                <tr className="border-b border-gray-200">
                  <th
                    scope="col"
                    className="sticky left-0 z-10 bg-white px-5 py-3 text-left font-mono text-xs tracking-wider text-gray-500 uppercase"
                  >
                    Learner
                  </th>
                  {gradebook.columns.map((column, index) => (
                    <th
                      key={column.code}
                      scope="col"
                      className="px-3 py-3 text-center font-mono text-xs tracking-wider text-gray-500 uppercase"
                    >
                      {column.code}
                      <span className="mt-1 block font-normal normal-case">
                        {WEIGHTS[index]}% · /100
                      </span>
                    </th>
                  ))}
                  <th
                    scope="col"
                    className="px-5 py-3 text-right font-mono text-xs tracking-wider text-gray-500 uppercase"
                  >
                    Final
                  </th>
                </tr>
              </thead>
              <tbody>
                {gradebook.learners.map((learner) => {
                  const hasMissing = learner.scores.some((score) => score === null)
                  const band = bandFor(learner.mean, hasMissing)

                  return (
                    <tr key={learner.name} className="border-b border-gray-100 last:border-0">
                      <th
                        scope="row"
                        className="sticky left-0 z-10 bg-white px-5 py-3 text-left text-sm font-medium text-gray-900"
                      >
                        {learner.name}
                        <span className="mt-0.5 block font-mono text-xs font-normal text-gray-400">
                          {learner.group}
                        </span>
                      </th>
                      {learner.scores.map((score, index) => (
                        <td
                          key={`${learner.name}-${index}`}
                          className="px-3 py-3 text-center font-mono text-sm tabular-nums"
                        >
                          {score === null ? (
                            <span className="text-gray-300">—</span>
                          ) : (
                            <span className={scoreClass(score)}>{score}</span>
                          )}
                        </td>
                      ))}
                      <td className="px-5 py-3 text-right">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-xs tabular-nums ${bandClass[band]}`}
                        >
                          {learner.mean.toFixed(1)} · {band}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p className="border-t border-gray-200 px-5 py-3 font-mono text-xs text-gray-500 lg:hidden">
            Scroll the table sideways for the remaining assessments →
          </p>
        </div>

        <ul className="mt-6 space-y-2">
          {gradebook.legend.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm text-gray-600">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
