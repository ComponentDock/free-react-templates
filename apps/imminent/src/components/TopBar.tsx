import { cn } from '@free-react-templates/ui'
import { Socials } from './Socials'
import { Wordmark } from './Wordmark'

export interface TopBarProps {
  className?: string
}

/**
 * The top of the screen: the wordmark grown to fill the row on the left, the
 * three white social discs on the right, on one wrapping space-between line
 * with the design's wide asymmetric insets.
 */
export function TopBar({ className }: TopBarProps) {
  return (
    <header
      className={cn(
        'flex flex-wrap items-center justify-between',
        'pl-[75px] pr-[60px] pb-[165px]',
        'max-[576px]:pr-0 max-[576px]:pl-[5px] max-[576px]:pb-[65px]',
        className,
      )}
    >
      <Wordmark />
      <Socials />
    </header>
  )
}
