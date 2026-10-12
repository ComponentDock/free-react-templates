import { cn } from '@free-react-templates/ui'
import { CountdownRow } from './CountdownRow'
import { Heading } from './Heading'

export interface HeroProps {
  className?: string
}

/**
 * The middle band of the page: a centred column holding the hairline heading and
 * the countdown clock. Because the shell distributes its bands with
 * `justify-between`, this block floats in the vertical middle of the viewport
 * rather than being positioned by its own padding.
 */
export function Hero({ className }: HeroProps) {
  return (
    <div
      data-testid="hero"
      className={cn(
        'flex flex-col items-center justify-center px-[15px] pt-[50px] pb-[120px]',
        className,
      )}
    >
      <Heading />
      <CountdownRow />
    </div>
  )
}
