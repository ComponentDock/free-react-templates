import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { Countdown } from './Countdown'
import { FormRow } from './FormRow'
import { Glyph } from './Glyph'
import { Heading } from './Heading'
import { Subtitle } from './Subtitle'

export interface ComingSoonProps {
  className?: string
}

/** The placeholder photograph standing in for the design's own botanical shot. */
const PHOTO = 'https://picsum.photos/seed/forthcoming-bg/1900/900'

/**
 * The whole page: one full-viewport photograph under a TWO-layer purple
 * treatment — a magenta→plum wash at 90% opacity and, painted over it, a 20%
 * black scrim — with the wrapper itself carrying the viewport height, the
 * `55px 15px` inset and the two-axis centring. Inside sits one 790px column:
 * glyph, heading, subtitle, boxed clock, one-row form and the credit. There is
 * no navbar, no social row, no scrolling section and no footer band — the
 * washed photograph is the design.
 */
export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-full flex-wrap items-center justify-center',
        'bg-wash-top bg-cover bg-center bg-no-repeat px-[15px] py-[55px]',
        className,
      )}
      style={{ backgroundImage: `url('${PHOTO}')` }}
    >
      <div
        aria-hidden="true"
        data-testid="wash-layer"
        className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-wash-bottom),var(--color-wash-top))] opacity-90"
      />
      <div aria-hidden="true" data-testid="scrim-layer" className="absolute inset-0 bg-scrim" />

      <div className="relative w-[790px] max-w-full">
        <Glyph />
        <Heading />
        <Subtitle />
        <Countdown />
        <FormRow />
        <Attribution />
      </div>
    </div>
  )
}
