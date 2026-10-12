import { cn } from '@free-react-templates/ui'
import { EmailForm } from './EmailForm'
import { SocialRow } from './SocialRow'

export interface BottomBarProps {
  className?: string
}

/**
 * The bottom band: a wrapping row carrying the three social rings on the left and
 * the e-mail capture on the right.
 */
export function BottomBar({ className }: BottomBarProps) {
  return (
    <div
      data-testid="bottom-bar"
      className={cn('flex w-full flex-wrap items-center justify-between', className)}
    >
      <SocialRow />
      <EmailForm />
    </div>
  )
}
