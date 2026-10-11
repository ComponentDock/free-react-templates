import { cn } from '@free-react-templates/ui'
import { SignUpButton } from './SignUpButton'
import { Wordmark } from './Wordmark'

export interface TopBarProps {
  className?: string
}

/** The design's chrome: the wordmark pinned left, the pill action pinned right. */
export function TopBar({ className }: TopBarProps) {
  return (
    <header
      data-testid="top-bar"
      className={cn(
        'flex w-full flex-wrap items-center justify-between px-[80px] pt-[22px]',
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
