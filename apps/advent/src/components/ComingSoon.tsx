import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { CountdownBar } from './CountdownBar'
import { Headline } from './Headline'
import { FormRow } from './FormRow'

export interface ComingSoonProps {
  className?: string
}

/**
 * The whole page: one full-viewport pink→coral wash in a wrapping, centred
 * `space-between` column, so the countdown bar pins flush to the top edge, the
 * headline block floats in the middle and the attribution line sits just above
 * the bottom. No navbar, no imagery, no scrolling sections — the wash is the
 * design.
 */
export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <div
      className={cn(
        'flex min-h-screen w-full flex-wrap flex-col items-center justify-between',
        'bg-wash bg-[linear-gradient(to_top,var(--color-grad-a),var(--color-grad-b))]',
        'px-[15px] pb-[30px]',
        className,
      )}
    >
      <CountdownBar />

      <div className="flex w-full flex-col items-center pt-[50px] pb-[80px]">
        <Headline />
        <FormRow />
      </div>

      <Attribution />
    </div>
  )
}
