import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The bar: one tier, opaque white and **in the flow** at every width, so the band
 * below starts at its bottom edge rather than passing underneath it — a 16px pad
 * around a 64px row from 992px up (96px) and around the 40.8px wordmark below it
 * (72.8px). It is never sticky and never fixed; only its layer is raised, so the
 * wordmark stays legible over the veil the drawer opens behind.
 */
export const headerClass = 'relative z-[1999] w-full bg-white px-4 py-4'

/**
 * The bar's container: full width with 15px gutters, taking the classic tiers —
 * 540px from 576px, 720px from 768px, 960px from 992px and the widest 1140px cap
 * from 1200px, where the design's container stops growing.
 */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/** The bar's row: a wrapping flex line with the container's gutters cancelled out. */
export const rowClass = 'relative flex flex-wrap items-center -mx-[15px]'

/**
 * One third of the bar: full width below 992px, exactly a third of the row from
 * there up (33.33333% of 1140px is the design's measured 379.98px column), with the
 * container's 15px gutters as padding. All three columns carry it, which is what puts
 * the six rows and the wordmark on a single 64px line.
 */
export const columnClass = 'relative w-full px-[15px] lg:max-w-[33.33333%] lg:flex-[0_0_33.33333%]'

/** The left third: its group hugs the middle column, so its rows are right-aligned. */
export const leftGroupClass = cn(columnClass, 'mr-auto text-right')

/** The right third: its group starts away from the middle, so its rows are left-aligned. */
export const rightGroupClass = cn(columnClass, 'ml-auto text-left')

/**
 * The middle third: full width and left-aligned below 992px, where the wordmark
 * reads as a floated box at the bar's left edge; from 992px up the column is the
 * page's middle third, so centring inside it centres the wordmark on the page.
 */
export const wordmarkColumnClass = cn(columnClass, 'text-left lg:text-center')

/** The wordmark itself: lowercase, 27.2px, weight 400, in the brand green. */
export const wordmarkClass =
  'inline-block text-[1.7rem] leading-[1.5] font-normal lowercase text-brand transition-colors duration-300'

/** The bar's lists: 1140px-wide rows of inline-block labels, gone below 992px. */
export const navListClass = 'm-0 hidden list-none p-0 lg:block'

export type NavVariant = 'desktop' | 'drawer'

/** A row's box on the wide bar: `inline-block`; a full-width block in the drawer. */
export function navRowClass(variant: NavVariant): string {
  return variant === 'desktop' ? 'inline-block' : 'relative block w-full'
}

export interface NavLabelOptions {
  variant: NavVariant
  /** The current destination rests in the brand green instead of black. */
  current?: boolean
}

/**
 * A row's label. On the wide bar it is an `inline-block` at 16px on a 24px line
 * with the design's 20px of vertical padding and 15px either side — 64px rows —
 * in black, lifting to the brand green on hover or focus. Inside the drawer the
 * same row is a 50px block (10px by 20px) at 20px on a 30px line, in ink, with the
 * current row carrying the brand green. The colour lift is the design's own
 * affordance restored: its stylesheet declares one and loses it to an `!important`
 * base rule, so only the current row ever changed colour there.
 */
export function navLabelClass({ variant, current = false }: NavLabelOptions): string {
  if (variant === 'drawer') {
    return cn(
      'block w-full px-5 py-[10px] text-[20px] leading-[30px] transition-colors duration-300',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
      current ? 'text-brand' : 'text-ink hover:text-brand focus-visible:text-brand',
    )
  }

  return cn(
    'mx-[15px] inline-block py-5 text-[16px] leading-6 whitespace-nowrap transition-colors duration-300',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
    current ? 'text-brand' : 'text-label hover:text-brand focus-visible:text-brand',
  )
}

/**
 * The hamburger's column: parked against the row's right padding edge and on
 * screen only below 992px, where the two groups hand over to the drawer.
 */
export const toggleColumnClass = 'absolute top-0 right-0 w-7 lg:hidden'

/**
 * The hamburger: a 28px-wide control inside the column, its 28px icon centred on
 * the design's own line. Its padding takes the tap target to 65.6px tall — taller
 * than the 41.6px box the design's wrapper measures, so the control stays an easy
 * target, and short enough to stay inside the 72.8px bar rather than overflowing
 * it as the design's 48px-padded anchor does.
 */
export const menuToggleClass = cn(
  '-mt-3 flex h-[65.59px] w-7 cursor-pointer items-center justify-center text-label',
  'transition-colors duration-300 hover:text-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
)

/** The band below the bar: one full-height, cover-fitted photographic surface. */
export const heroClass = 'relative h-screen w-full bg-cover bg-center bg-no-repeat'

/** Rolling to a section keeps its heading clear of the bar above it. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const

/**
 * The panel: 300px wide, parked 110% of its own width off the right edge, sliding
 * to 0 over the design's 300ms `ease-in-out`, with its own soft shadow.
 */
export function drawerPanelClass(open: boolean): string {
  return cn(
    'fixed top-0 right-0 z-[2000] h-screen w-[300px] bg-white pt-5 shadow-drawer',
    'transition-transform duration-300 ease-drawer',
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
