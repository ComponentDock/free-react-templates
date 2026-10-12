import { cn } from '@free-react-templates/ui'
import { containerClass } from '../lib/styles'
import { useNavCollapse } from '../lib/use-nav-collapse'
import { MenuToggle } from './MenuToggle'
import { Nav } from './Nav'
import { Wordmark } from './Wordmark'

/**
 * The one-tier header, floating on the band: absolutely placed at the top of the
 * page with `z-index: 5`, transparent at every width from 768px up (30px of its own
 * padding above and below) and turned into a solid black bar below that, where its
 * own padding collapses to nothing. Nothing here sticks and nothing scrolls with
 * the page — the photograph below is the only thing that moves.
 */
export function Header() {
  const { isOpen, isDesktop, toggle, close, settle, toggleRef, regionRef, regionStyle } =
    useNavCollapse()

  return (
    <header role="banner" className="absolute inset-x-0 top-0 z-[5] w-full py-0 md:py-[30px]">
      <nav
        aria-label="Site navigation"
        className="flex flex-wrap items-center justify-between bg-bar px-4 py-2 md:flex-nowrap md:justify-start md:bg-transparent md:py-0"
      >
        <div
          className={cn(
            containerClass,
            'flex flex-wrap items-center justify-between max-md:px-0 md:flex-nowrap',
          )}
        >
          <Wordmark />
          <MenuToggle isOpen={isOpen} onToggle={toggle} toggleRef={toggleRef} />
          <Nav
            isDesktop={isDesktop}
            isOpen={isOpen}
            onClose={close}
            onSettle={settle}
            regionRef={regionRef}
            regionStyle={regionStyle}
          />
        </div>
      </nav>
    </header>
  )
}
