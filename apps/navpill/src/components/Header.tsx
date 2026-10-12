import type { RefObject } from 'react'
import { MenuToggle } from './MenuToggle'
import { NavRow } from './NavRow'
import { Wordmark } from './Wordmark'

export interface HeaderProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The transparent header: absolutely positioned 32px below the top of the
 * document and floating over the hero band, with no background, no border, no
 * shadow and no scroll listener — it scrolls away with the photograph. Its
 * container steps at 540/720/960/1140px, the wordmark column narrows at 1200px,
 * the row column only exists from 1200px up and the hamburger column only below.
 */
export function Header({ isOpen, onToggle, toggleRef }: HeaderProps) {
  return (
    <header role="banner" className="absolute inset-x-0 top-8 z-[1999] w-full">
      <div
        data-testid="header-container"
        className="mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]"
      >
        <div className="-mx-[15px] flex flex-wrap items-center">
          <div className="w-11/12 px-[15px] xl:w-1/6">
            <Wordmark />
          </div>
          <div className="hidden w-full px-[15px] md:w-10/12 xl:block">
            <NavRow />
          </div>
          <div className="relative top-[3px] mr-auto inline-block py-4 xl:hidden">
            <MenuToggle isOpen={isOpen} onToggle={onToggle} toggleRef={toggleRef} />
          </div>
        </div>
      </div>
    </header>
  )
}
