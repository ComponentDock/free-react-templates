import { useState } from 'react'
import { members as initialMembers, type Member } from '../data/members'
import { MemberRow } from './MemberRow'

const headerCells = [
  { label: '', scoped: false },
  { label: 'Email', scoped: true },
  { label: 'Username', scoped: true },
  { label: 'Status', scoped: true },
  { label: '', scoped: false },
]

export function StatusTable() {
  const [rows, setRows] = useState<Member[]>(initialMembers)

  const toggleRow = (id: string) =>
    setRows((prev) => prev.map((row) => (row.id === id ? { ...row, checked: !row.checked } : row)))

  const removeRow = (id: string) => setRows((prev) => prev.filter((row) => row.id !== id))

  return (
    <div className="overflow-x-auto">
      <table className="mb-4 w-full min-w-[1000px] border-collapse text-ink shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]">
        <thead>
          <tr className="border-b-4 border-line bg-white">
            {headerCells.map((cell, index) => (
              <th
                key={index}
                scope={cell.scoped ? 'col' : undefined}
                className="border-none p-[30px] text-left text-[13px] font-medium text-body-ink align-bottom"
              >
                {cell.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="border-none bg-white p-[30px] text-center text-[14px] text-body-ink"
              >
                No members to show.
              </td>
            </tr>
          ) : (
            rows.map((member) => (
              <MemberRow
                key={member.id}
                member={member}
                onToggle={toggleRow}
                onRemove={removeRow}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
