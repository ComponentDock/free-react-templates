import { useState } from 'react'
import { CustomCheckbox } from './CustomCheckbox'

export interface TableRow {
  order: string
  name: string
  occupation: string
  contact: string
  education: string
}

export const tableRows: TableRow[] = [
  {
    order: '2714',
    name: 'Elena Vos',
    occupation: 'Web Designer',
    contact: '+31 61234 5678',
    education: 'Rotterdam College of Arts',
  },
  {
    order: '5083',
    name: 'Marcus Reed',
    occupation: 'Graphic Designer',
    contact: '+44 20 7946 0958',
    education: 'London School of Design',
  },
  {
    order: '6927',
    name: 'Priya Nair',
    occupation: 'Mobile Developer',
    contact: '+91 98450 12345',
    education: 'Bengaluru Institute of Technology',
  },
  {
    order: '8451',
    name: 'Tomas Berg',
    occupation: 'Illustrator',
    contact: '+46 70 123 45 67',
    education: 'Stockholm Visual Academy',
  },
]

const columns = ['Order', 'Name', 'Occupation', 'Contact', 'Education']

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
      <table className="w-full min-w-[900px] border-collapse text-left">
        <thead>
          <tr>
            <th scope="col" className="p-3 align-top">
              <CustomCheckbox checked={allChecked} onChange={toggleAll} label="Select all rows" />
            </th>
            {columns.map((col) => (
              <th key={col} scope="col" className="p-3 align-top font-normal text-ink">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={row.order}>
              <th scope="row" className="border-t border-line p-3 align-top font-light text-muted">
                <CustomCheckbox
                  checked={checkedRows.has(index)}
                  onChange={() => toggleRow(index)}
                  label={`Select row ${row.name}`}
                />
              </th>
              <td className="border-t border-line p-3 align-top font-light text-muted">
                {row.order}
              </td>
              <td className="border-t border-line p-3 align-top font-light text-muted">
                {row.name}
              </td>
              <td className="border-t border-line p-3 align-top font-light text-muted">
                {row.occupation}
              </td>
              <td className="border-t border-line p-3 align-top font-light text-muted">
                {row.contact}
              </td>
              <td className="border-t border-line p-3 align-top font-light text-muted">
                {row.education}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
