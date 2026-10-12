import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The band the page opens on: the design's `padding:112px 0` (`7em`) over the page's own
 * `#fafafa`, holding the centred heading and — as the design lays it out, in a second
 * container inside the same band — the card itself.
 */
export const bandClass = 'py-28'

/**
 * The page's container: full width with 15px gutters, taking the classic tiers — 540px from
 * 576px, 720px from 768px, 960px from 992px and the widest 1140px cap from 1200px, where the
 * design's container stops growing.
 */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/** The band's row: a centred flex line with the container's gutters cancelled out. */
export const bandRowClass = 'flex flex-wrap justify-center -mx-[15px]'

/** The heading's column: half the row from 768px up, all of it below, with 48px of tail. */
export const bandColumnClass = 'mb-12 w-full px-[15px] md:max-w-[50%] md:flex-[0_0_50%]'

/** The band's heading: 28px on a 42px line, centred and black, with 8px of tail. */
export const bandHeadingClass = 'mb-2 text-center text-[28px] leading-[1.5] font-normal text-black'

/**
 * The card: white with the design's `10px` padding, its **`5px` radius** and its one soft
 * shadow, sitting `relative` at z-3 over the grey page. It is never sticky and never fixed.
 * Below 992px the very same box turns black with the design's own `10px 15px` padding — the
 * radius and the shadow declaration survive the breakpoint untouched.
 */
export const cardClass =
  'relative z-[3] w-full rounded-card bg-card p-[10px] shadow-card max-lg:bg-card-mobile max-lg:p-[10px_15px]'

/** Below 992px the design drops the inner container's gutters — the card's padding is the gutter. */
export const cardContainerClass = 'max-lg:px-0'

/**
 * The card's own row: a flex line holding the wordmark, the toggler (hidden above 992px), the
 * wide list and the collapsing panel. It wraps below 992px — which is what lets the opened
 * panel take a line of its own under the header row — and holds one line from 992px up. Only
 * the wordmark and the toggler share the narrow header line, so the card stands 66px tall at
 * every width below 992px and never wraps.
 */
export const cardRowClass = 'relative flex flex-wrap items-center justify-between lg:flex-nowrap'

/**
 * The wordmark: one uppercase line in black at the card's left — 20px on the design's own
 * 36px line inside `5px 0` of padding, a 46px box — with the design's 16px of space after it.
 * Below 992px the same text is white on the black card. It rests in the colour it hovers in,
 * so only its focus ring appears, and it is the one link in the chrome that points at the top
 * of the page rather than at a destination.
 */
export const wordmarkClass = cn(
  'mr-4 inline-block py-[5px] text-[20px] leading-[36px] whitespace-nowrap text-black uppercase max-lg:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/**
 * The wide list: five tracked-out boxes stretched to the card's own line height and pushed to
 * the **right** by the list's own auto margin — the design's `margin-left:auto` plus
 * `margin-right:1rem` — which leaves the design's 16px of air between the last row and the
 * card's right edge, where the circled cart link sits as the list's sixth item. It is hidden
 * entirely below 992px, where the panel is the only presentation of those six items.
 */
export const navListClass = 'm-0 ml-auto mr-4 hidden list-none items-stretch p-0 lg:flex'

/** One row of the card: the box the row's own label fills. */
export const navItemClass = 'relative flex'

export type NavVariant = 'desktop' | 'panel'

export interface NavRowOptions {
  variant: NavVariant
  current: boolean
}

/**
 * A row's box, in whichever of the two presentations it is drawn. On the wide card every row
 * is a **13px tracked-out uppercase** label on the design's own `19.2px 20px` padding — 61.8px
 * tall, which is what sets the card's 81.8px line — turning the amber accent on hover and on
 * focus, while the row the page is already on wears that same amber at rest. Inside the
 * collapsing panel the same rows become full-width blocks with no horizontal padding, resting
 * at 70% white with the open destination white instead. The accent is **text only**: this
 * design ships no underline, no slab and no fill for a row.
 */
export function navRowClass({ variant, current }: NavRowOptions): string {
  if (variant === 'panel') {
    return cn(
      'block w-full py-[14.4px] text-[13px] leading-[23.4px] tracking-[1px] uppercase',
      'transition-colors duration-300',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
      current ? 'text-white' : 'text-panel-row hover:text-white focus-visible:text-white',
    )
  }

  return cn(
    'block px-5 py-[19.2px] text-[13px] leading-[23.4px] tracking-[1px] uppercase',
    'transition-colors duration-300',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
    current ? 'text-accent' : 'text-row hover:text-accent focus-visible:text-accent',
  )
}

/**
 * The cart link's own box: the design centres it in the card's tall row on the wide card and
 * stacks it as the sixth full-width item of the panel, so the box is a flex line either way,
 * centred on the row's height and always `relative` — which is what the list below hangs from.
 */
export const cartItemClass = 'relative flex items-center'

/**
 * The circled cart link: `40px` with the design's own `1px solid #fec771` ring and an amber
 * glyph, `50%`-rounded and holding no padding of its own, vertically centred in the wide row
 * and keeping every one of those measurements as the panel's sixth stacked item. Hovering
 * fills it with the amber accent and turns the glyph white — a documented delta, since the
 * source leaves the circle untouched; so is the focus ring kept in place of the source's
 * `outline:none`.
 */
export const cartTriggerClass = cn(
  'flex size-10 cursor-pointer items-center justify-center rounded-full border border-accent',
  'bg-transparent p-0 text-accent transition-colors duration-300',
  'hover:bg-accent hover:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** The cart link's glyph, at the design's own `1em` on the list's 13px type. */
export const cartMarkClass = 'size-[13px]'

/**
 * The list the cart link opens: white with no border and no padding of its own, `4px`-rounded
 * and casting the design's second and only other shadow, hung **right-aligned** just under
 * the circle — the design's `position:absolute; top:100%; right:0` on the item it belongs to,
 * over everything the page draws (the design's `z-index:1000`).
 */
export const cartMenuClass = cn(
  'absolute top-full right-0 z-[1000] m-0 list-none rounded-menu bg-white p-0 shadow-menu',
)

/**
 * One bill item: `12px` in black on the design's own `4px 24px` padding, taking the amber fill
 * with white ink on hover **and** on focus — the source's own two states.
 */
export const cartMenuItemClass = cn(
  'block px-6 py-1 text-[12px] text-black transition-colors duration-300',
  'hover:bg-accent hover:text-white focus:bg-accent focus:text-white',
)

/** The rule between bill items: a `1px #e9ecef` hairline with the design's `8px 0` around it. */
export const cartMenuDividerClass = 'my-2 border-t border-divider'

/**
 * The card's toggler: a real button, on screen only below 992px, holding a 16px three-bar
 * glyph and a 16px tracked-out uppercase word in the same 50% white. The design removes every
 * outline on this control; the focus ring kept in its place is a documented delta.
 */
export const togglerClass = cn(
  'flex cursor-pointer items-center gap-[6px] border-0 bg-transparent p-0',
  'text-[16px] leading-none tracking-[0.1em] text-toggler uppercase lg:hidden',
  'transition-colors duration-300 hover:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)

/** The design puts the glyph a hair below the label's own line. */
export const togglerIconClass = 'translate-y-px'

/**
 * The collapsing panel: a real height animation — the grid track travels from `0fr` to `1fr`
 * over the design's `0.35s ease` — whose contents are mounted only while it is open, so a
 * shut panel holds no focusable copies of the card's items. Its `basis-full` is the design's
 * own `flex-basis:100%`, which is what makes the opened panel a full-width line of its own
 * below the header row rather than a dropdown over it, and it is hidden entirely from 992px
 * up, where the card's own list takes over.
 */
export function panelClass(isOpen: boolean): string {
  return cn(
    'grid basis-full transition-[grid-template-rows] duration-[350ms] ease-collapse lg:hidden',
    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
  )
}

/** The clip that lets the panel's own content travel out of a zero-height track. */
export const panelInnerClass = 'overflow-hidden'

/**
 * The panel's own list: one column holding the five rows and the cart link, with the design's
 * 10px of tail under it.
 */
export const panelListClass = 'm-0 flex list-none flex-col p-0 pb-[10px]'

/** A content section: a hairline under it, breathing room above and below. */
export const sectionClass = 'scroll-mt-20 border-b border-black/5 py-16 last:border-b-0'

/** The section's small accent kicker. */
export const eyebrowClass = 'text-[11px] font-medium tracking-[2px] text-accent uppercase'

/** The section's own title: the band's 28px scale, black, left-aligned. */
export const sectionHeadingClass = 'text-[28px] leading-[1.5] font-normal text-black'

/** The section's opening paragraph, kept to a readable measure. */
export const bodyClass = 'max-w-[760px] text-[16px]'

/** The card grid inside a section that lists things. */
export const itemGridClass = 'mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'

/**
 * One card: a square surface inside the grey page, held apart by its own hairline, and kept
 * clear of the card at the top of the page when something points at it directly.
 */
export const itemClass = 'scroll-mt-20 border border-black/5 bg-white p-6'

/** A card's picture: a fixed band of the card's own width. */
export const itemImageClass = 'mb-4 h-[200px] w-full object-cover'

/** A card's title. */
export const itemTitleClass = 'text-[18px] leading-[1.5] font-medium text-black'

/** A card's own paragraph. */
export const itemBodyClass = 'text-[15px]'

/** The closing strip: a band under a hairline over the page's own grey. */
export const footerClass = 'border-t border-black/10'

/** The strip's own row. */
export const footerRowClass =
  'flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between'

/** A line of the closing strip. */
export const footerTextClass = 'text-[14px]'

/** The one link on the page that leaves it for the yard's own site. */
export const footerLinkClass = cn(
  'font-semibold text-accent transition-colors duration-300 hover:text-black',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** The skip link, hidden until it is focused. */
export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[1100]',
  'focus:bg-card-mobile focus:px-4 focus:py-2 focus:font-semibold focus:text-white',
)

/** Rolling to a destination keeps its heading clear of the card, which is never pinned. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
