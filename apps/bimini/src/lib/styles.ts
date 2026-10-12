import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The page root: the positioning context the header and the sheet both resolve against, on the
 * page's own `#fafafa` surface.
 */
export const pageClass = 'relative min-h-screen bg-page font-sans'

/** The skip link, hidden until it is focused. */
export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1100]',
  'focus:bg-hero focus:px-4 focus:py-2 focus:font-semibold focus:text-on-dark',
)

/**
 * The container the page is built on: `width:100%` with `15px` gutters and four tiers —
 * **540 / 720 / 960 / 1140** from **576 / 768 / 992 / 1200** up (measured `1140 @ x = 150` at
 * 1440px, `720 @ x = 135.5` at 991, `540 @ x = 113.5` at 767, `375 @ x = 0` at 375).
 */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/**
 * The same container with both gutters zeroed — the one the hero sits in, which is what makes the
 * hero band **edge-to-edge** while the header keeps its own `15px`.
 */
export const flushContainerClass = cn(containerClass, 'px-0')

/** The header: `padding:2em 0` (`32px 0`), absolute against the top of the page, `z-index:9`. */
export const headerClass =
  'absolute top-0 right-0 left-0 z-[9] mx-auto py-8 max-md:py-4'

/**
 * The header's own line: the wordmark at one end and the burger at the other. The design floats the
 * two apart; one flex line puts them at the same measured x and keeps the header's `92.8px` height
 * (`32px 0` of padding around the burger's own `28.8px` box).
 */
export const headerRowClass = 'flex items-center justify-between'

/** The header's wordmark: `12px`, weight `600`, tracked `5px`, uppercase, on `#fff`. */
export const brandClass = 'text-[12px] leading-[1.5] font-semibold tracking-[5px] text-on-dark uppercase'

/**
 * The burger: a **`20 × 28.8px`** control — measured `20 × 28.8 @ x = 1255, y = 32` at 1440px —
 * which moves `10px` in from the container's right edge below 768px. Its three bars overhang the
 * box: the middle one is `20 × 2` and the two outer ones `30 × 2`, 7px above and below it.
 */
export function toggleClass(): string {
  return cn(
    'group relative z-[1003] block h-[28.8px] w-[20px] cursor-pointer border-0 bg-transparent p-0',
    'max-md:mr-[10px]',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  )
}

/** The burger's own box, inside the control. */
export const burgerClass = 'relative block h-[28.8px] w-[20px]'

export const BAR_PARTS = ['top', 'middle', 'bottom'] as const

export type BarPart = (typeof BAR_PARTS)[number]

/**
 * One bar of the burger. The three rest `7px` apart — `20px` wide in the middle, `30px` at the two
 * edges, each overhanging the control's `20px` box by `5px` — and the two outer bars spread `3px`
 * further apart on hover over `0.2s`.
 */
export function barClass(part: BarPart): string {
  const resting: Record<BarPart, string> = {
    top: 'top-[6.4px] -left-[5px] w-[30px] group-hover:-translate-y-[3px]',
    middle: 'top-[13.4px] left-0 w-[20px]',
    bottom: 'top-[20.4px] -left-[5px] w-[30px] group-hover:translate-y-[3px]',
  }

  return cn('absolute h-[2px] bg-on-dark transition-transform duration-200', resting[part])
}

/**
 * The sheet: **`inset:0`, `100% × 100%`, `rgba(0,0,0,0.99)`, `z-index:1002`**, centred text and
 * scrolling over its own content. At rest it is `invisible`, `opacity:0` and `scale(0)`; while it is
 * open it is `visible`, fully opaque and at its natural size, and it gets there over **`0.8s`** on
 * the design's own **springy** curve. It is pinned to the viewport rather than to the page box —
 * see the note on `SHEET_STATE_CLASS` — so it is always exactly one window wide and tall.
 */
export function overlayClass(isOpen: boolean): string {
  return cn(
    'fixed inset-0 z-[1002] h-full w-full overflow-y-scroll bg-sheet text-center',
    'transition-all duration-[800ms] ease-sheet',
    isOpen ? 'visible scale-100 opacity-100' : 'invisible scale-0 opacity-0',
  )
}

/**
 * The photograph behind the sheet's centred column: full-bleed, `cover`, centred, with a
 * `rgba(0,0,0,0.3)` scrim laid over it. The design's own sheet declares this layer but ships no
 * picture with it, so the placeholder it carries here is a documented delta.
 */
export const photoLayerClass = cn(
  'absolute inset-0 bg-cover bg-center bg-no-repeat',
  'after:absolute after:inset-0 after:bg-scrim after:content-[""]',
)

/** The sheet's centring layout: a real table of one cell, which is what centres the column. */
export const sheetTableClass = 'table h-full w-full'

export const sheetCellClass = 'table-cell align-middle'

/** The sheet's own row and column: a wrapping line `15px` in from each side of the sheet. */
export const sheetRowClass = 'flex w-full flex-wrap justify-center'

export const sheetColumnClass = 'w-full px-[15px] text-center'

/** The `h1` wrapped round the sheet's wordmark: `24px` of tail under it. */
export const overlayBrandHeadingClass = 'mb-6'

/**
 * The sheet's wordmark: **`40px`**, weight **`700`**, `#fff`, uppercase, tracked `2px`, on a `1.5`
 * line — measured `353.7 × 60 @ x = 535.7` at 1440px. The design gives `h1`s a black weight-400 rule
 * and then overrides it here, so the size and weight are set on the link itself.
 */
export const overlayBrandClass =
  'inline-block text-[40px] leading-[1.5] font-bold tracking-[2px] text-on-dark uppercase'

/** The sheet's menu: no margin, no markers, and `20px` of head below 768px. */
export const menuListClass = 'm-0 list-none p-0 max-md:pt-5'

/**
 * One label's row: **`14px`**, weight **`600`**, uppercase, tracked **`5px`**, on the design's own
 * `1.8` line (`25.2px`) — so each of the four rows measures **`35.2px`** and the list pitches them
 * at that spacing (measured `1425 × 140.8 @ y = 421.6` at 1440px).
 */
export const menuRowClass = 'list-none text-[14px] leading-[1.8] font-semibold tracking-[5px] uppercase'

/**
 * One label's own link: a block with `5px` of air above and below it, resting on white — or on the
 * gold `#f8b500` when this is the block the page is standing in. The design strips outlines on
 * focus; the ring kept here is a documented delta.
 */
export function menuLabelClass(current: boolean): string {
  return cn(
    'block py-[5px] transition-colors duration-300',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
    current ? 'text-current-row' : 'text-on-dark',
  )
}

/**
 * The label's own box, `10px` wider than its text on each side, carrying the design's signature: a
 * **`2px` amber hairline** held under it, kept by the current row and wiped in from the left on
 * hover by every other one. The rule itself lives in `index.css` so that the rest state and the
 * hover state cannot race each other in the cascade.
 */
export const menuLabelTextClass = 'menu-label-hairline relative inline-block px-[10px]'

/** The sheet's close control: **`44 × 44px`**, `40px` in from the top and the right of the sheet. */
export function closeClass(isVisible: boolean): string {
  return cn(
    'absolute top-10 right-10 z-[1003] h-11 w-11 border-0 bg-transparent p-0 leading-none',
    'transition-opacity duration-300',
    isVisible ? 'visible opacity-100' : 'invisible opacity-0',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  )
}

/** The close control's own box: `44 × 44px`, the two crossed bars centred inside it. */
export const closeGlyphClass = 'relative block h-11 w-11'

export const CLOSE_BAR_PARTS = ['top', 'middle', 'bottom'] as const

export type CloseBarPart = (typeof CLOSE_BAR_PARTS)[number]

/**
 * One bar of the close control: two **`30 × 2px`** white bars crossed at `±45deg` over a third that
 * is left transparent, all three sitting on the control's midline.
 */
export function closeBarClass(part: CloseBarPart): string {
  const parts: Record<CloseBarPart, string> = {
    top: 'rotate-45',
    middle: 'bg-transparent',
    bottom: '-rotate-45',
  }

  return cn('absolute top-[18px] left-[7px] h-[2px] w-[30px] bg-on-dark', parts[part])
}

/** The hero: exactly viewport height, `#202020`, with its copy centred on both axes. */
export const heroClass =
  'flex min-h-screen items-center bg-hero supports-[height:100dvh]:min-h-dvh'

/** The hero's row: a wrapping line that centres its column inside the full-height band. */
export const heroRowClass = 'flex w-full flex-wrap items-center justify-center'

export const heroColumnClass = 'w-full px-[15px] text-center'

/**
 * The hero's headline: **`6vw`** at weight **`700`** on the design's `1.5` line, uppercase and
 * white — measured `86.4px` (`129.6px` box) at 1440px and `22.5px` at 375, where it wraps.
 */
export const heroHeadingClass = 'mb-2 text-[6vw] leading-[1.5] font-bold text-on-dark uppercase'

/** The hero's lead: `18px` on the same `1.5` rhythm, on white at `0.8` opacity. */
export const heroLeadClass = 'mb-2 text-[18px] leading-[1.5] text-on-dark-muted'

/** One materialised destination: a block below the hero, with room above it to breathe. */
export const sectionClass = 'mx-auto w-full max-w-[1140px] px-[15px] py-20'

export const eyebrowClass = 'text-[12px] font-semibold tracking-[5px] text-accent uppercase'

export const sectionHeadingClass = 'mt-3 text-[32px] leading-[1.5] text-heading'

export const bodyClass = 'mt-4 max-w-[68ch]'

export const itemGridClass = 'mt-10 grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-3'

export const itemClass = 'list-none'

export const itemImageClass = 'mb-4 h-48 w-full object-cover'

export const itemTitleClass = 'text-[18px] leading-[1.5] font-medium text-heading'

export const itemBodyClass = 'mt-2 text-[15px] leading-[1.8]'

/** The strip at the foot of the page, and the one outbound credit it carries. */
export const footerClass = 'border-t border-[rgba(0,0,0,0.08)] py-10'
export const footerRowClass = 'mx-auto flex w-full max-w-[1140px] flex-wrap justify-between gap-4 px-[15px]'
export const footerTextClass = 'm-0 text-[14px]'
export const footerLinkClass =
  'font-medium transition-colors duration-300 hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'

/** Rolling to a destination keeps its heading clear of the header, which is never in the flow. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
