import { cn } from '@free-react-templates/ui'
import { Heading } from './Heading'
import { SubLine } from './SubLine'
import { SubscribeBar } from './SubscribeBar'

export interface HeroBlockProps {
  className?: string
}

/**
 * The panel's middle band: a full-width block inset 48px from the panel's text
 * edge (the inset drops away on small screens) that stacks the heading, the
 * sub-line and the subscribe bar.
 */
export function HeroBlock({ className }: HeroBlockProps) {
  return (
    <div
      data-testid="hero-block"
      className={cn('w-full pt-[100px] pb-[90px] pl-[48px] max-[768px]:pl-0', className)}
    >
      <Heading />

      <SubLine />

      <SubscribeBar />
    </div>
  )
}
