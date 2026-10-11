import { cn } from '@free-react-templates/ui'
import { Socials } from './Socials'
import { Wordmark } from './Wordmark'

export interface TopBarProps {
  className?: string
}

/**
 * The top of the screen: the wordmark grown to fill the row on the left, the
 * three social buttons on the right, on one wrapping space-between line with
 * the design's wide asymmetric insets.
 */
export function TopBar({ className }: TopBarProps) {
  return (
    <header
      className={cn(
        'relative flex flex-wrap items-center justify-between',
        'pl-[80px] pr-[74px] pb-[175px]',
        'max-[576px]:pl-[20px] max-[576px]:pr-[14px] max-[576px]:pb-[50px]',
        className,
      )}
    >
      <Wordmark />
      <Socials />
    </header>
  )
}
