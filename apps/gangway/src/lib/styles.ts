import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The bar's container: full width with no cap at any tier, 15px gutters until the
 * design hands over to its widest presentation at 1200px, where they grow to 7rem
 * (112px).
 */
export const containerClass = 'mx-auto w-full px-[15px] xl:px-28'

/** The bar's row: a wrapping flex line with the container's gutters cancelled out. */
export const rowClass = 'flex flex-wrap -mx-[15px]'

/**
 * The wordmark's column: half the bar, pinned to its left 5% from 768px up, where
 * it leaves the flow entirely — which is why the row itself measures no height at
 * all from that width. Below 768px it returns to the flow at the row's left.
 */
export const wordmarkColumnClass = cn(
  'relative w-1/2 max-w-[50%] px-[15px]',
  'md:absolute md:top-0 md:left-[5%] md:flex md:h-16 md:items-center',
)

/**
 * The calls-to-action column: the same half-width, absolutely placed against the
 * right 5% from 768px up, its own group pushed to its right edge. It carries the
 * hamburger too, so below 992px — where the pair is hidden — it is the column that
 * keeps the row at its measured 50px.
 */
export const ctaColumnClass = cn(
  'relative flex w-1/2 max-w-[50%] items-center justify-end px-[15px]',
  'md:absolute md:top-0 md:right-[5%] md:h-16',
)

/**
 * The centred list: pinned by a 50% offset plus a -50% translation against the
 * bar itself (never a flex alignment), and only on screen from 1200px up — below
 * that the drawer carries the same rows.
 */
export const navColumnClass = 'absolute top-0 left-1/2 z-[5] hidden -translate-x-1/2 xl:block'

/** The wordmark: 24px, uppercase, wide-tracked, fully white, weight 400. */
export const wordmarkClass =
  'text-[1.5rem] leading-9 font-normal tracking-[.2rem] whitespace-nowrap text-white uppercase'

export type NavVariant = 'desktop' | 'drawer'

/** A row's box on the wide bar: `inline-block` at 16px with 20px of padding (64px). */
export function navRowClass(variant: NavVariant): string {
  return variant === 'desktop' ? 'inline-block' : 'relative block w-full'
}

export interface NavLabelOptions {
  variant: NavVariant
  /** The current destination stays fully white (or fully black inside the drawer). */
  current?: boolean
  /** A row that owns a submenu reserves the room its caret sits in. */
  branch?: boolean
}

/**
 * A row's label. On the wide bar it is an `inline-block` at 16px with the design's
 * 20px padding on every side — including, on a row that owns a submenu, the
 * right-hand 20px the caret is pinned inside. Inside the drawer the same row is a
 * 50px block (10px by 20px) at 20px, drawn in ink and lifting to the brand green on
 * hover, focus or (for the current row) solid black.
 */
export function navLabelClass({ variant, current = false, branch = false }: NavLabelOptions): string {
  if (variant === 'drawer') {
    return cn(
      'block w-full px-5 py-[10px] text-[20px] transition-colors duration-300',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
      branch && 'pr-14',
      current ? 'text-black' : 'text-ink hover:text-brand focus-visible:text-brand',
    )
  }

  return cn(
    'inline-block text-[16px] font-normal whitespace-nowrap transition-colors duration-300',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
    'px-5 py-5',
    branch ? 'relative pr-5' : '',
    current ? 'text-white' : 'text-label hover:text-white focus-visible:text-white',
  )
}

/**
 * One submenu surface: white, square, at least 200px wide, hung flush under its row
 * with a 2px brand-green hairline along its top edge and the design's soft shadow. It
 * travels the last 20px of its opening — the closed state sits 20px down and
 * invisible, the open one flush and opaque — over the design's 200ms.
 */
export function flyoutClass(open: boolean, flipped: boolean): string {
  return cn(
    'absolute top-full z-[1000] min-w-[200px] border-t-2 border-brand bg-white text-left shadow-flyout',
    'transition-[opacity,visibility,margin-top] duration-200',
    open ? 'visible mt-0 opacity-100' : 'invisible mt-5 opacity-0',
    flipped ? 'right-0' : 'left-0',
  )
}

/**
 * One row of a submenu: 16px ink on `9px 20px`, at `line-height: 1.4`, washing to
 * the design's grey on hover or focus — never the brand green — and carrying the
 * green only when it is the destination already open.
 */
export function flyoutRowClass(current = false): string {
  return cn(
    'block px-5 py-[9px] text-[16px] leading-[1.4] whitespace-nowrap transition-none',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
    current
      ? 'bg-flyout-wash text-brand'
      : 'text-flyout-ink hover:bg-flyout-wash hover:text-ink focus-visible:bg-flyout-wash focus-visible:text-ink',
  )
}

/** The drawer's nested list, only mounted while its disclosure is open. */
export const submenuListClass = 'm-0 block list-none p-0'

/** A nested row inside the drawer: 16px on a 44px box, indented 40px, brand on hover. */
export const drawerSubRowClass = cn(
  'block py-[10px] pr-5 pl-10 text-[16px] transition-colors duration-300',
  'text-ink hover:text-brand focus-visible:text-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
)

/**
 * The drawer's per-row disclosure: a real 36px round button pinned to the row's
 * right, its 12px chevron rotating a half turn between the closed and open states
 * over 300ms.
 */
export function drawerArrowClass(expanded: boolean): string {
  return cn(
    'absolute top-[10px] right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full',
    'text-ink transition-colors duration-300 hover:bg-arrow-hover',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
    expanded && 'bg-arrow-hover',
  )
}

/** The chevron inside a disclosure control: a half turn between the two states. */
export function chevronClass(expanded: boolean): string {
  return cn('transition-transform duration-300', expanded && '-rotate-180')
}

/**
 * The outline half of the bar's pair: transparent with a 2px white border and white
 * text, inverting to a white surface with black text on hover or focus. It is
 * hidden below 992px, where the drawer carries its label instead.
 */
export const ctaSecondaryClass = cn(
  'hidden shrink-0 items-center gap-2 rounded-btn border-2 border-white bg-transparent px-3 py-1.5',
  'text-[16px] leading-6 whitespace-nowrap text-white transition-[color,background-color,border-color,box-shadow] duration-150',
  'hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  'lg:inline-flex',
)

/**
 * The filled half: the brand green on a 1px border of the same colour, with the
 * design's own 2px-shorter box than its outline twin (its border is one pixel
 * thinner) and a lighter green on hover or focus.
 */
export const ctaPrimaryClass = cn(
  'hidden shrink-0 items-center gap-2 rounded-btn border border-brand bg-brand px-3 py-1.5',
  'text-[16px] leading-6 whitespace-nowrap text-white transition-[color,background-color,border-color,box-shadow] duration-150',
  'hover:border-brand-hover hover:bg-brand-hover focus-visible:border-brand-hover focus-visible:bg-brand-hover',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  'lg:inline-flex',
)

/**
 * The hamburger: a 28px-wide, 42px-tall control sitting 8px down and 16px in from
 * the pair's right edge, on screen below 1200px and gone from there (the centred
 * list replaces it).
 */
export const menuToggleClass = cn(
  'mt-2 ml-4 flex h-[42px] w-7 shrink-0 cursor-pointer items-center justify-center text-white',
  'transition-colors duration-300 hover:text-white/75',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  'xl:hidden',
)

/** The panel: 300px wide, off the right edge by 110% of its own width, sliding to 0. */
export function drawerPanelClass(open: boolean): string {
  return cn(
    'fixed top-0 right-0 z-[2000] h-screen w-[300px] bg-white pt-5 shadow-drawer',
    'transition-transform duration-200 ease-drawer',
    open ? 'translate-x-0' : 'translate-x-[110%]',
  )
}

/** The veil the panel slides out over: a 50% black sheet that fades in behind it. */
export function veilClass(open: boolean): string {
  return cn(
    'fixed inset-0 z-[1002] bg-overlay transition-opacity duration-300',
    open ? 'visible opacity-100' : 'invisible opacity-0',
  )
}

/** The drawer's header strip, and the 30px close control pinned to its right. */
export const drawerStripClass = 'flex items-center justify-end px-5'

export const drawerCloseClass = cn(
  'mt-2 cursor-pointer text-ink transition-colors duration-300 hover:text-close-hover',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
)

/** The drawer's scrolling body: the viewport less the strip, with 150px of tail. */
export const drawerBodyClass = 'h-[calc(100vh-52px)] overflow-y-scroll px-5 pt-0 pb-[150px]'

/** The drawer's own list container. */
export const drawerListClass = 'relative m-0 list-none p-0'

/** Scrolling to a section keeps its heading clear of the floating bar. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
