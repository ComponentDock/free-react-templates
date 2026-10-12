import { cn } from '@free-react-templates/ui'
import type { CountdownParts } from '../lib/countdown'
import { useCountdown } from '../hooks/useCountdown'
import { ColonDivider } from './ColonDivider'
import type { DividerVariant } from './ColonDivider'
import { CountdownGroup } from './CountdownGroup'

interface GroupSpec {
  readonly variant: DividerVariant
  readonly label: string
  readonly caption: string
  readonly unit: keyof CountdownParts
}

const GROUPS: readonly GroupSpec[] = [
  { variant: 'days', label: 'Days', caption: 'Days', unit: 'days' },
  { variant: 'hours', label: 'Hours', caption: 'Hrs', unit: 'hours' },
  { variant: 'minutes', label: 'Minutes', caption: 'Min', unit: 'minutes' },
  { variant: 'seconds', label: 'Seconds', caption: 'Sec', unit: 'seconds' },
]

export interface CountdownProps {
  className?: string
}

/**
 * The live flip-clock: four labelled groups of two navy tiles, separated by
 * oversized colons with a bold caption under each group. The wrapper caps its
 * width at 470px on mid-size screens and 210px on the smallest ones.
 */
export function Countdown({ className }: CountdownProps) {
  const parts = useCountdown()

  return (
    <div
      data-testid="countdown"
      className={cn(
        'mb-[20px] flex w-full max-w-full flex-wrap justify-center',
        'max-[1200px]:mr-[10px] max-[1200px]:max-w-[470px] max-[576px]:max-w-[210px]',
        className,
      )}
    >
      {GROUPS.map((group) => (
        <div key={group.variant} className="flex flex-wrap justify-center">
          <ColonDivider variant={group.variant} caption={group.caption} />
          <CountdownGroup label={group.label} value={parts[group.unit]} />
        </div>
      ))}
    </div>
  )
}
