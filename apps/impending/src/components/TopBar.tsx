import { cn } from '@free-react-templates/ui'
import { PeakMark } from './PeakMark'
import { SignUpButton } from './SignUpButton'

export interface TopBarProps {
  className?: string
}

/**
 * The design's chrome: the white peak mark pinned left, the pill action pinned
 * right, and — unusually — the page's whole vertical rhythm carried by the
 * bar's own 185px bottom padding rather than by a spacer element.
 */
export function TopBar({ className }: TopBarProps) {
  return (
    <header
      data-testid="top-bar"
      className={cn(
        'flex w-full flex-wrap items-center justify-between pt-[22px] pr-[80px] pb-[185px] pl-[65px]',
        'max-[576px]:px-[15px] max-[768px]:pb-[60px]',
        className,
      )}
    >
      <PeakMark />
      <div className="my-[10px] flex flex-wrap">
        <SignUpButton />
      </div>
    </header>
  )
}
