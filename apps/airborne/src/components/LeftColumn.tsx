import { cn } from '@free-react-templates/ui'
import { Eyebrow } from './Eyebrow'
import { FlipClock } from './FlipClock'
import { Headline } from './Headline'

export interface LeftColumnProps {
  className?: string
}

/** The copy block: eyebrow, headline and the flip-clock countdown. */
export function LeftColumn({ className }: LeftColumnProps) {
  return (
    <div className={cn('flex flex-col pt-[34px] pb-[60px] max-[1200px]:items-center', className)}>
      <Eyebrow />
      <Headline />
      <FlipClock />
    </div>
  )
}
