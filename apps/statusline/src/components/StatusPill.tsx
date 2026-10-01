import { cn } from '@free-react-templates/ui'
import type { MemberStatus } from '../data/members'

interface PillStyle {
  label: string
  pill: string
  dot: string
}

const pillStyles: Record<MemberStatus, PillStyle> = {
  active: {
    label: 'Active',
    pill: 'bg-active-bg text-active-text',
    dot: 'bg-active-dot',
  },
  waiting: {
    label: 'Waiting for Resassignment',
    pill: 'bg-wait-bg text-wait-text',
    dot: 'bg-wait-dot',
  },
}

interface StatusPillProps {
  status: MemberStatus
}

export function StatusPill({ status }: StatusPillProps) {
  const style = pillStyles[status]
  return (
    <span
      className={cn('relative inline-block rounded-[30px] py-1 pl-[25px] pr-[10px]', style.pill)}
    >
      <span
        aria-hidden="true"
        className={cn('absolute left-[10px] top-[9px] h-[10px] w-[10px] rounded-full', style.dot)}
      />
      {style.label}
    </span>
  )
}
