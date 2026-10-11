import { cn } from '@free-react-templates/ui'
import { ContentColumn } from './ContentColumn'
import { Countdown } from './Countdown'
import { TopBar } from './TopBar'

export interface ComingSoonProps {
  className?: string
}

/** The placeholder photograph standing in for the design's own interior shot. */
const PHOTO = 'https://picsum.photos/seed/imminent-bg/1900/900'

/**
 * The whole page: one full-viewport photograph washed by the magenta→indigo
 * gradient, with the padding carried by an inner `min-h-screen` box that stacks
 * the top bar, the content column and the countdown. No navbar, no scrolling
 * section, no footer band — the washed photograph is the design.
 */
export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-full flex-col',
        'bg-wash bg-cover bg-center bg-no-repeat',
        className,
      )}
      style={{ backgroundImage: `url('${PHOTO}')` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-wash-bottom),var(--color-wash-top))] opacity-90"
      />

      <div className="relative flex min-h-screen w-full flex-col px-[15px] pt-[30px] pb-[50px]">
        <TopBar />
        <ContentColumn />
        <Countdown />
      </div>
    </div>
  )
}
