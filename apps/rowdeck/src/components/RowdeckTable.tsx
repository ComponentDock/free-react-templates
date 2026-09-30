import { useState } from 'react'
import { X } from 'lucide-react'
import { initialRows, type RowEntry } from '../data/rows'

// Fifth header cell is an empty actions column (mirrors the source's &nbsp;).
const headerLabels = ['ID no.', 'First Name', 'Last Name', 'Email', ' ']

/** Shared body-cell classes: 14px ink text, 30px padding, white surface, no borders. */
const bodyCell = 'border-none bg-white p-[30px] text-[14px] text-ink'

/** Row-card signature: soft radius, transparent 1px border, subtle drop shadow. */
const rowCard =
  'rounded-[0.25rem] border border-transparent shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]'

export function RowdeckTable() {
  const [rows, setRows] = useState<RowEntry[]>(initialRows)

  function dismiss(id: string) {
    setRows((current) => current.filter((row) => row.id !== id))
  }

  return (
    <div className="overflow-x-scroll">
      <table className="w-full min-w-[1000px] border-separate border-spacing-y-[10px]">
        <thead className="bg-header-dark">
          <tr>
            {headerLabels.map((label) => (
              <th
                key={label}
                scope="col"
                className="border-none px-[30px] py-[30px] text-center text-[14px] font-bold text-white"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={headerLabels.length}
                className="p-[30px] text-center text-[14px] italic text-body-ink"
              >
                No rows to display.
              </td>
            </tr>
          ) : (
            rows.map((entry) => (
              <tr key={entry.id} className={rowCard}>
                <th scope="row" className={`${bodyCell} text-center font-bold`}>
                  {entry.id}
                </th>
                <td className={`${bodyCell} text-left`}>{entry.firstName}</td>
                <td className={`${bodyCell} text-left`}>{entry.lastName}</td>
                <td className={`${bodyCell} text-left`}>{entry.email}</td>
                <td className={`${bodyCell} text-left`}>
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => dismiss(entry.id)}
                    className="float-right flex items-center justify-center opacity-50 transition-opacity hover:opacity-75 focus-visible:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger"
                  >
                    <X aria-hidden="true" className="h-3 w-3 text-danger" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
