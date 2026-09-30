import { useState } from 'react'
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
    order: '3519',
    name: 'James Yarrow',
    occupation: 'Web Designer',
    occupationNote: 'Far away beyond the rolling hills, behind the old mill',
    contact: '+61 2 8765 4321',
    education: 'Riverside University',
  },
  {
    order: '6284',
    name: 'Marta Ellison',
    occupation: 'Graphic Designer',
    occupationNote: 'Far away beyond the rolling hills, behind the old mill',
    contact: '+1 415 555 0142',
    education: 'Kingsway College',
  },
  {
    order: '9702',
    name: 'Darius Cole',
    occupation: 'Mobile Developer',
    occupationNote: 'Far away beyond the rolling hills, behind the old mill',
    contact: '+81 3 1234 5678',
    education: 'Northgate High',
  },
  {
    order: '4168',
    name: 'Ivan Petrov',
    occupation: 'Illustrator',
    occupationNote: 'Far away beyond the rolling hills, behind the old mill',
    contact: '+33 1 42 68 53 00',
    education: 'St. Aldan Institute',
  },
]

const columns = ['Order', 'Name', 'Occupation', 'Contact', 'Education']

const cellClass =
  'border-t border-line px-3 py-5 align-top font-light text-muted transition-colors duration-300 ease'

function rowStateClass(active: boolean) {
  return cn(
    active && 'border-b border-accent bg-tint',
    'group-hover:border-b group-hover:border-accent group-hover:bg-tint',
  )
}

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
          {tableRows.map((row, index) => {
            const active = checkedRows.has(index)
            return (
              <tr key={row.order} className="group">
                <th scope="row" className={cn(cellClass, rowStateClass(active))}>
                  <CustomCheckbox
                    checked={active}
                    onChange={() => toggleRow(index)}
                    label={`Select row ${row.name}`}
                  />
                </th>
                <td className={cn(cellClass, rowStateClass(active))}>{row.order}</td>
                <td className={cn(cellClass, rowStateClass(active))}>{row.name}</td>
                <td className={cn(cellClass, rowStateClass(active))}>
                  {row.occupation}
                  <small className="block text-[0.8em] font-light text-subtle">
                    {row.occupationNote}
                  </small>
                </td>
                <td className={cn(cellClass, rowStateClass(active))}>{row.contact}</td>
                <td className={cn(cellClass, rowStateClass(active))}>{row.education}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
