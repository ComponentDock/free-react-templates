import { cn } from '@free-react-templates/ui'
import { BrandMark } from './BrandMark'
import { Countdown } from './Countdown'
import { SignUpPill } from './SignUpPill'

export interface TopBarProps {
  className?: string
}

/**
 * The top band: one wrapping row in which the wordmark's growing wrapper eats the
 * slack and shoves the countdown and the outline pill to the right edge. The
 * countdown lives here rather than in the centre — this design's signature — and
 * the whole row wraps onto more lines instead of overflowing on narrow screens.
 */
export function TopBar({ className }: TopBarProps) {
  return (
    <div
      data-testid="top-bar"
      className={cn('flex w-full flex-wrap items-center justify-between', className)}
    >
      <BrandMark />
      <Countdown />
      <SignUpPill />
    </div>
  )
}
