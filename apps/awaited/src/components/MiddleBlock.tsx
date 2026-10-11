import { cn } from '@free-react-templates/ui'
import { Countdown } from './Countdown'
import { Heading } from './Heading'

export interface MiddleBlockProps {
  className?: string
}

/** The centred band: the thin launch line over the four-unit clock. */
export function MiddleBlock({ className }: MiddleBlockProps) {
  return (
    <div
      data-testid="middle-block"
      className={cn(
        'flex flex-col items-center justify-center px-[15px] pt-[50px] pb-[120px]',
        className,
      )}
    >
      <Heading />
      <Countdown />
    </div>
  )
}
