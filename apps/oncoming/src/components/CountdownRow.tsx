import { Fragment, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { useCountdown } from '../hooks/useCountdown'
import { COUNTDOWN_UNITS, resolveTarget } from '../lib/countdown'
import { CountdownSeparator } from './CountdownSeparator'
import { CountdownUnit } from './CountdownUnit'

export interface CountdownRowProps {
  className?: string
}

/** The index of the unit whose preceding colon is the row's MIDDLE separator. */
const MIDDLE_SEPARATOR_INDEX = 2

/**
 * The clock: a wrapping centred row of four bare units separated by oversized
 * italic colons. It is capped at 370px at ≤992px and 170px at ≤576px, which —
 * against the 165px minimum unit width — is what makes the row wrap to two and
 * then one unit per line. The target is fixed on the first paint so the clock
 * never jumps between renders.
 */
export function CountdownRow({ className }: CountdownRowProps) {
  const [target] = useState(() => resolveTarget())
  const values = useCountdown(target)

  return (
    <div
      data-testid="countdown"
      className={cn(
        'flex flex-wrap justify-center',
        'max-[576px]:max-w-[170px] min-[577px]:max-[992px]:max-w-[370px]',
        className,
      )}
    >
      {COUNTDOWN_UNITS.map(({ key, label }, index) => (
        <Fragment key={key}>
          {index > 0 && (
            <CountdownSeparator position={index === MIDDLE_SEPARATOR_INDEX ? 'middle' : 'outer'} />
          )}
          <CountdownUnit value={values[key]} label={label} />
        </Fragment>
      ))}
    </div>
  )
}
