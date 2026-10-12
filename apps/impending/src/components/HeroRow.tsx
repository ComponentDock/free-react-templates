import { cn } from '@free-react-templates/ui'
import { Countdown } from './Countdown'
import { HeroColumn } from './HeroColumn'
import { SocialRail } from './SocialRail'

export interface HeroRowProps {
  className?: string
}

/**
 * The hero band. The `row-reverse` axis is the whole trick of the layout: the
 * two in-flow children land right-to-left, so the countdown sits at the RIGHT
 * edge and the social rail at the LEFT edge, while the copy column is taken out
 * of flow entirely and pinned at 19% from the left — which is why the clock
 * stays hard right no matter how long the copy is. At ≤992px the row becomes a
 * centred column.
 */
export function HeroRow({ className }: HeroRowProps) {
  return (
    <div
      data-testid="hero-row"
      className={cn(
        'relative flex flex-row-reverse justify-between pr-[46px] pl-[58px]',
        'max-[992px]:flex-col max-[992px]:items-center max-[992px]:justify-start max-[992px]:px-[15px]',
        className,
      )}
    >
      <HeroColumn />
      <Countdown />
      <SocialRail />
    </div>
  )
}
