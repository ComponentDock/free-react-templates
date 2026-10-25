import { cn } from '@free-react-templates/ui'
import { availability, weekdays, type ChipState } from '../content'
import { SectionHeading, containerClass } from './ui'

const chipClass: Record<ChipState, string> = {
  booked: 'bg-primary-700 text-white',
  held: 'bg-accent-100 text-accent-800',
  open: 'bg-white text-gray-400 ring-1 ring-gray-200 ring-inset',
  off: 'bg-gray-100 text-gray-400 [background-image:repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(0,0,0,0.05)_4px,rgba(0,0,0,0.05)_8px)]',
}

const stateWord: Record<ChipState, string> = {
  booked: 'Booked',
  held: 'Held, unconfirmed',
  open: 'Open',
  off: 'Not working',
}

/**
 * Four people and a room across one week. The four chip states differ by
 * more than colour: filled, pale, ringed, and a hatch with no figure.
 */
export function Availability() {
  return (
    <section id="availability" className="scroll-mt-28 border-y border-gray-200 bg-gray-50 py-20 lg:py-28">
      <div className={containerClass}>
        <SectionHeading kicker={availability.kicker} title={availability.title} />

        <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-200 bg-white p-5">
          <table className="w-full min-w-[46rem] border-separate border-spacing-1">
            <caption className="sr-only">{availability.caption}</caption>
            <thead>
              <tr>
                <th scope="col" className="text-left text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase">
                  Team
                </th>
                {weekdays.map((weekday) => (
                  <th
                    key={weekday.name}
                    scope="col"
                    className="text-center text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase"
                  >
                    {weekday.name.slice(0, 3)}
                  </th>
                ))}
                <th scope="col" className="text-right text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase">
                  Used
                </th>
              </tr>
            </thead>
            <tbody>
              {availability.rows.map((row) => (
                <tr key={row.name}>
                  <th scope="row" className="pr-3 text-left align-middle">
                    <span className="block text-sm leading-5 font-semibold text-gray-900">{row.name}</span>
                    <span className="block text-xs leading-5 text-gray-500">{row.role}</span>
                  </th>
                  {row.cells.map((cell) => (
                    <td key={`${row.name}-${cell.day}`} className="p-0.5">
                      <div
                        title={`${row.name}, ${cell.day} — ${stateWord[cell.state]}`}
                        className={cn(
                          'grid h-11 place-items-center rounded-md text-xs leading-4 font-medium',
                          chipClass[cell.state],
                        )}
                      >
                        {cell.figure === undefined ? null : <span>{cell.figure}</span>}
                        <span className="sr-only">{stateWord[cell.state]}</span>
                      </div>
                    </td>
                  ))}
                  <td className="pl-3 text-right text-sm font-semibold text-gray-900 tabular-nums">{row.utilisation}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {availability.legend.map((item) => (
            <li key={item.state} className="flex items-center gap-2 text-xs leading-5 text-gray-600">
              <span aria-hidden="true" className={cn('h-4 w-6 rounded', item.className)} />
              {item.state}
            </li>
          ))}
        </ul>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-500">{availability.note}</p>
      </div>
    </section>
  )
}
