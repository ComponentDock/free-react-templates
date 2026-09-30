import { Fragment, useState } from 'react'
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
    order: '2741',
    name: 'Elena Marsh',
    occupation: 'Web Designer',
    occupationNote: 'Somewhere beyond the rolling hills, behind the old mill',
    contact: '+49 30 9018 2245',
    education: 'Westbrook University',
  },
  {
    order: '5823',
    name: 'Theo Brandt',
    occupation: 'Graphic Designer',
    occupationNote: 'Somewhere beyond the rolling hills, behind the old mill',
    contact: '+81 3 5811 3390',
    education: 'Halden College',
  },
  {
    order: '6047',
    name: 'Priya Nair',
    occupation: 'Mobile Developer',
    occupationNote: 'Somewhere beyond the rolling hills, behind the old mill',
    contact: '+1 212 555 0186',
    education: 'Fairview High',
  },
  {
    order: '8395',
    name: 'Marcus Webb',
    occupation: 'Illustrator',
    occupationNote: 'Somewhere beyond the rolling hills, behind the old mill',
    contact: '+65 6812 4477',
    education: 'Ashford Institute',
  },
]

const columns = ['Order', 'Name', 'Occupation', 'Contact', 'Education']

/* White row-card cell on the gray page: no borders, 0.75rem horizontal +
   20px vertical padding, light weight, rounded left/right corners on the
   first/last cell (the tr carries the 7px radius + overflow hidden). */
const cellClass =
  'bg-surface px-3 py-5 align-top font-light text-muted first:rounded-l-[7px] last:rounded-r-[7px]'

/* Row card: rounded corners + subtle hover shadow-lift (~0.3s ease). The
   checked state intentionally adds NO row styling — only the checkbox
   indicator changes. */
const rowClass =
  'rounded-[7px] transition-[box-shadow] duration-300 ease hover:shadow-[0_2px_10px_-5px_rgba(0,0,0,0.1)]'

export function DataTable() {
  const [checkedRows, setCheckedRows] = useState<Set<number>>(() => new Set())
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
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[900px] border-separate border-spacing-0 text-left">
        <thead>
          <tr>
            <th scope="col" className="p-3 align-bottom">
              <CustomCheckbox checked={allChecked} onChange={toggleAll} label="Select all rows" />
            </th>
            {columns.map((col) => (
              <th key={col} scope="col" className="p-3 align-bottom font-bold text-ink">
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
              <tr className={rowClass}>
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
