import { cn } from '@free-react-templates/ui'
import { LeftColumn } from './LeftColumn'
import { NewsletterCard } from './NewsletterCard'

export interface BodyBandProps {
  className?: string
}

/**
 * The body of the screen: the copy block and the newsletter card spread across
 * the width on one wrapping line, inset from the right by the design's wide
 * right padding, dropping to a centred stack on narrow screens.
 */
export function BodyBand({ className }: BodyBandProps) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-wrap justify-around pr-[200px]',
        'max-[1400px]:p-[15px] max-[1200px]:flex-col max-[1200px]:items-center',
        className,
      )}
    >
      <LeftColumn />
      <NewsletterCard />
    </div>
  )
}
