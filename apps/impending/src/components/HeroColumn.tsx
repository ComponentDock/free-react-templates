import { cn } from '@free-react-templates/ui'
import { EmailForm } from './EmailForm'
import { Heading } from './Heading'
import { SubLine } from './SubLine'

export interface HeroColumnProps {
  className?: string
}

/**
 * The copy column: taken out of flow at `top:0; left:19%` with a 600px cap so
 * the countdown stays hard right, and returned to normal flow as a centred
 * column at ≤992px.
 */
export function HeroColumn({ className }: HeroColumnProps) {
  return (
    <div
      data-testid="hero-column"
      className={cn(
        'absolute top-0 left-[19%] max-w-[600px]',
        'max-[992px]:relative max-[992px]:top-auto max-[992px]:left-auto',
        'max-[992px]:flex max-[992px]:max-w-full max-[992px]:flex-col max-[992px]:items-center',
        className,
      )}
    >
      <Heading />
      <SubLine />
      <EmailForm />
    </div>
  )
}
