import type { RefObject } from 'react'
import { MenuToggle } from './MenuToggle'
import { Wordmark } from './Wordmark'

export interface HeaderProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The transparent header: absolutely positioned at the very top of the document
 * and floating over the image band, with no background, no border, no shadow and
 * no scroll listener — it scrolls away with the photograph. The wordmark sits at
 * the left and the single hamburger at the right, which is the page's only
 * navigation control at every width: the reference ships its desktop nav row
 * permanently hidden, so there is no row here to hand states over to.
 */
export function Header({ isOpen, onToggle, toggleRef }: HeaderProps) {
  return (
    <header role="banner" className="absolute inset-x-0 top-0 z-[1999] w-full py-6 lg:py-12">
      <div
        data-testid="header-container"
        className="mx-auto flex w-full items-center justify-between px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]"
      >
        <Wordmark />
        <MenuToggle isOpen={isOpen} onToggle={onToggle} toggleRef={toggleRef} />
      </div>
    </header>
  )
}
