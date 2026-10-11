import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { MiddleBlock } from './MiddleBlock'
import { Slideshow } from './Slideshow'
import { SocialRow } from './SocialRow'
import { TopBar } from './TopBar'

export interface ComingSoonProps {
  className?: string
}

/**
 * The whole page: one full-viewport screen behind a fixed cross-fading
 * photograph slideshow, washed by a low-opacity violet gradient plus a black
 * scrim. The content column spreads three bands — the top bar, the centred
 * launch line and clock, and the bottom band with the social row and the
 * Component Dock credit. No navbar, no sign-up field, no scrolling section.
 */
export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <div data-testid="coming-soon" className={cn('relative w-full', className)}>
      <Slideshow />

      <div
        data-testid="content-column"
        className="relative z-1 flex min-h-screen w-full flex-col items-center justify-between"
      >
        <div
          aria-hidden="true"
          data-testid="wash"
          className={cn(
            'absolute inset-0 -z-10 bg-wash opacity-30',
            'bg-[linear-gradient(to_top,var(--color-wash-bottom),var(--color-wash-top))]',
          )}
        />
        <div aria-hidden="true" data-testid="scrim" className="absolute inset-0 -z-10 bg-scrim" />

        <TopBar />
        <MiddleBlock />
        <div data-testid="bottom-band" className="flex w-full flex-col items-center">
          <SocialRow />
          <Attribution />
        </div>
      </div>
    </div>
  )
}
