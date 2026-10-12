import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { Hero } from './Hero'
import { Slideshow } from './Slideshow'
import { SocialRow } from './SocialRow'
import { TopBar } from './TopBar'

export interface ComingSoonProps {
  className?: string
}

/**
 * The whole page: a fixed four-photograph background slideshow on a layer with
 * no backdrop colour of its own, under a single 50% black scrim — no gradient,
 * no accent colour. The content layer is itself the layout
 * (`flex flex-col items-center justify-between` at `min-h-screen`), so its three
 * bands land on the top, middle and bottom of the viewport: the top bar, the
 * centred hero block and the bottom band (the social row above the Component
 * Dock credit). No navbar, no footer band, no form, no scrolling section.
 */
export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <div data-testid="coming-soon" className={cn('relative w-full', className)}>
      <Slideshow />

      <div
        data-testid="content-layer"
        className="relative z-1 flex min-h-screen w-full flex-col items-center justify-between"
      >
        <div aria-hidden="true" data-testid="scrim" className="absolute inset-0 -z-10 bg-scrim" />

        <TopBar />
        <Hero />

        <div data-testid="bottom-band" className="flex w-full flex-col items-center">
          <SocialRow />
          <Attribution />
        </div>
      </div>
    </div>
  )
}
