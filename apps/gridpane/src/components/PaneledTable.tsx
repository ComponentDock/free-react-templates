import { Fragment, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { CustomCheckbox } from './CustomCheckbox'

export interface TableRow {
  order: string
  name: string
  occupation: string
  occupationNote: string
  contact: string
  education: string
}

export const tableRows: TableRow[] = [
  {
    order: '1392',
    name: 'James Yates',
    occupation: 'Web Designer',
    occupationNote: 'Far far away, behind the word mountains',
    contact: '+63 983 0962 971',
    education: 'NY University',
  },
  {
    order: '4616',
    name: 'Matthew Wasil',
    occupation: 'Graphic Designer',
    occupationNote: 'Far far away, behind the word mountains',
    contact: '+02 020 3994 929',
    education: 'London College',
  },
  {
    order: '9841',
    name: 'Sampson Murphy',
    occupation: 'Mobile Dev',
    occupationNote: 'Far far away, behind the word mountains',
    contact: '+01 352 1125 0192',
    education: 'Senior High',
  },
  {
    order: '9548',
    name: 'Gaspar Semenov',
    occupation: 'Illustrator',
    occupationNote: 'Far far away, behind the word mountains',
    contact: '+92 020 3994 929',
    education: 'College',
  },
]

const columns = ['Order', 'Name', 'Occupation', 'Contact', 'Education']

/* White row-card cell on the gray panel: no borders, 0.75rem horizontal +
   20px vertical padding, light weight, rounded left/right corners on the
   first/last cell (the tr carries the 7px radius + overflow hidden). */
const cellClass =
  'bg-surface border-none px-3 py-5 align-top font-light text-muted first:rounded-l-[7px] last:rounded-r-[7px]'

/* Row card: 7px radius, ~0.3s ease transition, subtle hover shadow-lift.
   A CHECKED row dims to 40% opacity (opacity-40) — the signature
   treatment: card, text, and checkbox all fade into the gray panel. */
const rowClass =
  'rounded-[7px] transition-all duration-300 ease hover:shadow-[0_2px_10px_-5px_rgba(0,0,0,0.1)]'

export function PaneledTable() {
  /* Row 2 (Matthew Wasil, order 4616) ships checked, mirroring the
     source's initial static state. Header checked ⇔ all rows checked
     (the source does not use indeterminate). */
  const [checkedRows, setCheckedRows] = useState<Set<number>>(() => new Set([1]))
  const allChecked = tableRows.every((_, index) => checkedRows.has(index))

  function toggleAll() {
    setCheckedRows(allChecked ? new Set() : new Set(tableRows.map((_, index) => index)))
  }

  function toggleRow(index: number) {
    setCheckedRows((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    /* Gray rounded panel (#efefef / 20px padding / 4px radius) wraps the
       whole table — header labels sit directly on the gray. The panel
       doubles as the horizontal scroll wrapper below the 900px min-width. */
    <div className="w-full overflow-x-auto rounded-[4px] bg-panel p-5">
      <table className="w-full min-w-[900px] border-separate border-spacing-0 text-left">
        <thead>
          <tr>
            <th scope="col" className="p-3 align-bottom">
              <CustomCheckbox checked={allChecked} onChange={toggleAll} label="Select all rows" />
            </th>
            {columns.map((col) => (
              <th
                key={col}
                scope="col"
                className="p-3 align-bottom text-xs font-bold uppercase tracking-[0.1rem] text-ink"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <Fragment key={row.order}>
              {index > 0 && (
                <tr aria-hidden="true">
                  <td colSpan={columns.length + 1} className="h-[10px] p-0" />
                </tr>
              )}
              <tr className={cn(rowClass, checkedRows.has(index) && 'opacity-40')}>
                <th scope="row" className={cellClass}>
                  <CustomCheckbox
                    checked={checkedRows.has(index)}
                    onChange={() => toggleRow(index)}
                    label={`Select row ${row.name}`}
                  />
                </th>
                <td className={cellClass}>{row.order}</td>
                <td className={cellClass}>
                  <a
                    href="#"
                    className="text-accent no-underline transition-colors duration-300 ease hover:text-accent-dark"
                  >
                    {row.name}
                  </a>
                </td>
                <td className={cellClass}>
                  {row.occupation}
                  <small className="block text-[0.8em] font-light text-subtle">
                    {row.occupationNote}
                  </small>
                </td>
                <td className={cellClass}>{row.contact}</td>
                <td className={cellClass}>{row.education}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
