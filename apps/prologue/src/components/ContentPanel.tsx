import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { BrandMark } from './BrandMark'
import { HeroBlock } from './HeroBlock'
import { SocialBand } from './SocialBand'

export interface ContentPanelProps {
  className?: string
}

/**
 * The white side of the split: a `space-between` column whose own padding is
 * the layout mechanism — the mark sits on the top edge, the hero block fills
 * the middle band and the socials sit on the bottom edge. The credit line is
 * pinned absolutely so it never joins the three-band geometry.
 */
export function ContentPanel({ className }: ContentPanelProps) {
  return (
    <div
      data-testid="content-panel"
      className={cn(
        'relative flex w-[37%] flex-col justify-between bg-panel',
        'pt-[37px] pr-[50px] pb-[52px] pl-[70px]',
        'max-[1200px]:w-[60%]',
        'max-[992px]:w-full max-[992px]:pr-[15px] max-[992px]:pl-[15px]',
        className,
      )}
    >
      <BrandMark />

      <HeroBlock />

      <SocialBand />

      <Attribution className="absolute inset-x-0 bottom-1 text-center" />
    </div>
  )
}
