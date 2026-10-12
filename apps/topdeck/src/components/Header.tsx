import type { RefObject } from 'react'
import { cn } from '@free-react-templates/ui'
import { containerClass } from '../lib/styles'
import { useStickyHeader } from '../lib/use-sticky-header'
import { MenuToggle } from './MenuToggle'
import { Nav } from './Nav'
import { TopBar } from './TopBar'
import { Wordmark } from './Wordmark'

export interface HeaderProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The two-tier header, floating over the band: the utility bar above and the nav
 * row below it, both transparent, both white on the photograph, both in the
 * document flow to begin with. The wrapper around the nav row is what stays in the
 * flow once the row is pinned — so the utility bar scrolls away and the nav row
 * alone takes the top of the page and the brand blue surface, exactly the shape of
 * the original.
 *
 * The nav row keeps the source's two-column split: the wordmark in a 16.667%
 * column on the left, the nav (and the hamburger, below 992px) in an 83.333% one
 * on the right.
 */
export function Header({ isOpen, onToggle, toggleRef }: HeaderProps) {
  const { wrapperRef, rowRef, isSticky, height } = useStickyHeader()

  return (
    <header role="banner" className="absolute inset-x-0 top-0 z-[99] w-full">
      <TopBar />
      <div
        ref={wrapperRef}
        data-testid="sticky-wrapper"
        className="relative w-full"
        style={height > 0 ? { height: `${height}px` } : undefined}
      >
        <div
          ref={rowRef}
          data-testid="sticky-row"
          className={cn(
            'w-full transition-colors duration-300',
            isSticky ? 'fixed top-0 left-0 z-[120] bg-brand' : 'relative bg-transparent',
          )}
        >
          <div className={cn(containerClass, 'flex items-center')}>
            <div className="w-[16.667%]">
              <Wordmark />
            </div>
            <div className="flex w-[83.333%] items-center justify-end">
              <MenuToggle
                isOpen={isOpen}
                onToggle={onToggle}
                toggleRef={toggleRef}
                className="lg:hidden"
              />
              <Nav variant="desktop" sticky={isSticky} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
