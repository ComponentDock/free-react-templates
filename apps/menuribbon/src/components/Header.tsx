import type { RefObject } from 'react'
import { useStickyHeader } from '../lib/use-sticky-header'
import { MenuToggle } from './MenuToggle'
import { NavRow } from './NavRow'
import { Wordmark } from './Wordmark'

export interface HeaderProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The white header bar: the accent wordmark absolute at its far left, the seven
 * bare black labels right-aligned from 992px up, and the hamburger at the right
 * edge below that. Its own wrapper is what the sticky hook measures, so once the
 * page scrolls past it the bar pins to the top of the viewport at the wrapper's
 * width with the reference's soft shadow.
 */
export function Header({ isOpen, onToggle, toggleRef }: HeaderProps) {
  const { wrapperRef, isStuck, headerWidth } = useStickyHeader()

  return (
    <div ref={wrapperRef} data-testid="sticky-wrapper" className="relative z-[100] w-full">
      <header
        role="banner"
        data-stuck={isStuck}
        style={isStuck ? { width: `${headerWidth}px` } : undefined}
        className={`relative z-[1999] w-full bg-white py-12 transition-all duration-300 ease-[ease] lg:py-4${
          isStuck ? ' fixed top-0 left-0 shadow-sticky' : ''
        }`}
      >
        <div
          data-testid="header-container"
          className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]"
        >
          <div className="-mx-[15px] flex flex-wrap items-center lg:relative">
            <div className="relative z-[3] w-full px-[15px] lg:absolute lg:top-1/2 lg:left-[15px] lg:w-auto lg:-translate-y-1/2">
              <Wordmark />
            </div>
            <div className="hidden w-full px-[15px] text-right lg:ml-auto lg:block">
              <NavRow />
            </div>
            <div className="absolute top-0 right-0 inline-block py-12 lg:hidden">
              <MenuToggle isOpen={isOpen} onToggle={onToggle} toggleRef={toggleRef} />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
