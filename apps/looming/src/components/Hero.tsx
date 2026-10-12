import { cn } from '@free-react-templates/ui'
import { EmailForm } from './EmailForm'
import { Heading } from './Heading'
import { SubLine } from './SubLine'

export interface HeroProps {
  className?: string
}

/**
 * The panel's middle band: a full-width row centred on both axes that holds the
 * heading, the sub-line and the e-mail capture in that order.
 */
export function Hero({ className }: HeroProps) {
  return (
    <div
      data-testid="hero"
      className={cn('flex w-full items-center justify-center pt-[80px] pb-[90px]', className)}
    >
      <div className="max-w-full">
        <Heading />
        <SubLine />
        <EmailForm />
      </div>
    </div>
  )
}
