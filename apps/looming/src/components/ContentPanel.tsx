import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { BrandMark } from './BrandMark'
import { Hero } from './Hero'
import { SocialRow } from './SocialRow'

export interface ContentPanelProps {
  className?: string
}

/**
 * The white half of the split: a `space-between` column whose own padding is
 * the whole layout mechanism — the mark stays pinned to the top edge, the hero
 * block is centred in the leftover space and the socials sit on the bottom edge
 * with the credit line beneath them.
 */
export function ContentPanel({ className }: ContentPanelProps) {
  return (
    <div
      data-testid="content-panel"
      className={cn(
        'flex w-1/2 flex-col justify-between bg-panel pt-[37px] pr-[80px] pb-[50px] pl-[65px]',
        'max-[1200px]:w-3/5',
        'max-[992px]:w-full max-[992px]:pr-[15px] max-[992px]:pl-[15px]',
        className,
      )}
    >
      <BrandMark />

      <Hero />

      <div data-testid="panel-bottom" className="w-full">
        <SocialRow />
        <Attribution className="px-0 pt-[20px] pb-0" />
      </div>
    </div>
  )
}
