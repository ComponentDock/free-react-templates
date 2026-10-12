import { cn } from '@free-react-templates/ui'
import { SignUpButton } from './SignUpButton'
import { Wordmark } from './Wordmark'

export interface TopBarProps {
  className?: string
}

/**
 * The design's chrome: the white wordmark pinned left in a growing container and
 * the pill action pinned right, on a wrapping row that carries only a 22px top
 * padding — its height comes from its children, and the page's vertical rhythm
 * comes from the `justify-between` axis below it, not from a padding block.
 */
export function TopBar({ className }: TopBarProps) {
  return (
    <header
      data-testid="top-bar"
      className={cn(
        'flex w-full flex-wrap items-center justify-between pt-[22px] pr-[80px] pl-[80px]',
        'max-[576px]:px-[15px]',
        className,
      )}
    >
      <Wordmark />
      <div className="my-[10px] flex flex-wrap">
        <SignUpButton />
      </div>
    </header>
  )
}
