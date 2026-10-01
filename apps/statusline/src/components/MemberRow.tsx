import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { Member } from '../data/members'
import { Checkbox } from './Checkbox'
import { StatusPill } from './StatusPill'

interface MemberRowProps {
  member: Member
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

/** Shared body-cell classes: 14px ink text, 30px padding, no borders, white. */
const bodyCell = 'border-none bg-white p-[30px] text-[14px] align-middle text-ink'

export function MemberRow({ member, onToggle, onRemove }: MemberRowProps) {
  return (
    <tr className="mb-[10px] border-b-4 border-page last:border-b-0">
      <td className={bodyCell}>
        <Checkbox
          checked={member.checked}
          onChange={() => onToggle(member.id)}
          label={`Select ${member.username}`}
        />
      </td>
      <td className={cn(bodyCell, 'text-left')}>
        <div className="flex items-center">
          <div
            aria-hidden="true"
            className="h-[50px] w-[50px] shrink-0 rounded-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/${member.avatarSeed}/100/100)`,
            }}
          />
          <div className="pl-4">
            <span className="block">{member.email}</span>
            <span className="block text-[12px] text-subtext">{member.added}</span>
          </div>
        </div>
      </td>
      <td className={cn(bodyCell, 'text-left')}>{member.username}</td>
      <td className={cn(bodyCell, 'text-left')}>
        <StatusPill status={member.status} />
      </td>
      <td className={cn(bodyCell, 'text-right')}>
        <button
          type="button"
          aria-label="Close"
          onClick={() => onRemove(member.id)}
          className="float-right appearance-none border-0 bg-transparent p-0 text-inherit opacity-50 transition-opacity hover:opacity-75 focus-visible:opacity-75"
        >
          <X aria-hidden="true" size={12} className="text-danger" />
        </button>
      </td>
    </tr>
  )
}
