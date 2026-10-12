import type { RefObject } from 'react'
import { MenuToggle } from './MenuToggle'
import { Wordmark } from './Wordmark'

export interface HeaderProps {
  isOpen: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
}

/**
 * The transparent header: absolutely positioned at the very top of the document,
 * floating over the image band with no background, no border, no shadow and no
 * scroll listener — it scrolls away with the photograph. The single hamburger
 * sits at the left and the wordmark at the right: the source's two header columns
 * are mirrored against its right-hand sibling, and that order is kept rather than
 * normalised. Nothing else lives here, because the source ships its desktop nav
 * row permanently hidden — the hamburger is the page's only navigation control at
 * every width and there is no second nav to hand states over to.
 *
 * The 24px vertical padding is the source's own measured value (its raised
 * utility outranks the stylesheet's wider-viewport rule), so one padding ships at
 * every width.
 */
export function Header({ isOpen, onToggle, toggleRef }: HeaderProps) {
  return (
    <header role="banner" className="absolute inset-x-0 top-0 z-[1999] w-full py-6">
      <div
        data-testid="header-container"
        className="mx-auto flex w-full items-center justify-between px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]"
      >
        <MenuToggle isOpen={isOpen} onToggle={onToggle} toggleRef={toggleRef} />
        <Wordmark />
      </div>
    </header>
  )
}
