import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { HeroRow } from './HeroRow'
import { Slideshow } from './Slideshow'
import { TopBar } from './TopBar'

export interface ComingSoonProps {
  className?: string
}

/**
 * The whole page: a fixed three-photograph background slideshow under a single
 * 70% black scrim — no gradient, no accent colour — and three bands on top of
 * it: the top bar (which carries the vertical rhythm with its own bottom
 * padding), the hero row (an out-of-flow column, a vertical clock and a
 * vertical social rail) and the Component Dock credit. No navbar, no footer
 * band, no scrolling section.
 */
export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <div data-testid="coming-soon" className={cn('relative w-full', className)}>
      <Slideshow />

      <div data-testid="content-layer" className="relative z-1 min-h-screen w-full">
        <div aria-hidden="true" data-testid="scrim" className="absolute inset-0 -z-10 bg-scrim" />

        <TopBar />
        <HeroRow />
        <Attribution />
      </div>
    </div>
  )
}
