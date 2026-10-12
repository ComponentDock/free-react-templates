import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The page root: the positioning context the fixed rail, the burger and the pushed column all
 * resolve against, on the page's own `#fafafa` surface.
 */
export const pageClass = 'relative min-h-screen bg-page font-sans'

/** The skip link, hidden until it is focused. */
export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1100]',
  'focus:bg-rail focus:px-4 focus:py-2 focus:font-semibold focus:text-heading',
)

/**
 * The rail: a **fixed, full-height column pinned to the left edge** — 20% of the viewport from
 * 992px up (288px of a 1440px window), `100vh` with a `100dvh` upgrade behind `@supports`,
 * `overflow-y:hidden`, `z-index:1001`, white, on `48px 48px 40px` of padding and a `0.5s` tween.
 * Below 992px the same element becomes a **270px drawer** translated a full 270px off the left edge
 * on the barely-there `rgba(0,0,0,0.04)` sheet, with `padding-top:2em` (the source's `2em` over the
 * 48px sides) — and, while it is open, it slides back to `translateX(0)` on white at `z-index:999`.
 * It is square and shadowless: the design ships no rounding and no shadow at all.
 */
export function railClass(isOpen: boolean): string {
  return cn(
    'fixed top-0 bottom-0 left-0 z-[1001] flex w-[270px] flex-col overflow-y-hidden bg-rail',
    'h-screen supports-[height:100dvh]:h-dvh lg:w-[20%]',
    'p-[48px_48px_40px] max-lg:p-[32px_48px_40px] transition-[transform,background-color] duration-500',
    isOpen
      ? 'translate-x-0 max-lg:z-[999] max-lg:bg-rail'
      : '-translate-x-[270px] max-lg:bg-drawer lg:translate-x-0',
  )
}

/** The menu's own list: reset to no margin and no markers, holding the six labels. */
export const menuListClass = 'm-0 list-none p-0'

/**
 * One label's row: `22px` at weight 500 on a `1.5` line — a **33px** box — with `10px` of tail, so
 * the six of them pitch **43px** apart and the list measures 248px. The last row drops its tail,
 * which is what keeps the list at that height.
 */
export const menuRowClass = 'mb-[10px] list-none text-[22px] leading-[1.5] font-medium last:mb-0'

/**
 * One label's own link, and the design's signature: the ink is **black** at rest, a `10px`-padded
 * box that overhangs its row top and bottom, and under every label there is a **2px coral rule**
 * (`bottom:7px`, full label width) that rests `visibility:hidden` + `scaleX(0)` and wipes in from
 * the left on hover over a **springy** `0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)`. The
 * **current** row is the only one that is both painted `#ff6768` and carries the rule permanently;
 * a hovered plain row keeps its black ink and only reveals the rule. The design strips outlines on
 * focus — the focus ring kept here is a documented delta.
 */
export function menuLabelClass(current: boolean): string {
  return cn(
    'relative block py-[10px] transition-colors duration-300',
    'after:absolute after:inset-x-0 after:bottom-[7px] after:h-[2px] after:bg-accent',
    'after:origin-left after:scale-x-0 after:invisible after:transition-all after:duration-300',
    'after:ease-underline after:content-[""]',
    'hover:after:visible hover:after:scale-x-100',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
    current ? 'text-accent after:visible after:scale-x-100' : 'text-label',
  )
}

/**
 * The rail's own sign-off, under the list and pushed to the foot of the column: the app's name in
 * 14px, tracked and uppercased, resting on the grey ink and turning coral on hover. The design's
 * rail carries no wordmark at all, so this line and its link to the page top are a documented delta
 * — it sits **below** the menu so the labels keep the source's own content origin.
 */
export const railSignOffClass = cn(
  'mt-auto inline-block pt-6 text-[14px] font-medium tracking-[0.08em] text-ink uppercase',
  'transition-colors duration-300 hover:text-accent',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
)

/**
 * The content column beside the rail: `float:right`, `width:80%`, `padding:40px` from 992px up
 * (measured 1152 × 592.8 at x = 288 of a 1440px window) and full width with the same padding below
 * it. Its `0.5s` tween is the **push**: while the drawer is out, the column travels 270px to the
 * right so the rail is never draped over the content.
 */
export function columnClass(isOpen: boolean): string {
  return cn(
    'w-full p-10 transition-transform duration-500 lg:float-right lg:w-[80%]',
    isOpen ? 'translate-x-[270px] lg:translate-x-0' : 'translate-x-0',
  )
}

/**
 * The band at the top of the column: the design's `padding:24px 0 112px` — a `24px` head that beats
 * the section's own generous top padding, and a `112px` tail — plus a `48px` margin under it.
 */
export const bandClass = 'mb-12 pt-6 pb-28'

/**
 * The band's container: full width. Its `15px` gutters are zeroed from 768px up, which is what
 * makes the band **edge-to-edge** on desktop (measured 1072 wide at x = 328 of a 1440px window),
 * and `16px` wide below that width. The design ships no max-width tier for this one.
 */
export const bandContainerClass = 'w-full px-4 md:px-0'

/** The band's row: a wrapping flex line with the columns' gutters cancelled out. */
export const bandRowClass = 'flex flex-wrap -mx-[15px]'

/** The lead block's column: the whole row, with `24px` of tail under it. */
export const leadBlockClass = 'mb-6 w-full px-[15px]'

/** The band's single heading: 32px at weight 400 on a 1.5 line, black, with 8px of tail. */
export const bandHeadingClass = 'mb-2 text-[32px] leading-[1.5] font-normal text-heading'

/** The band's lead paragraph, one line of air under it. */
export const bandLeadClass = 'mb-4'

/**
 * One sub-block's column: half the row from 768px up, the whole of it below — which is what stacks
 * the two of them on a narrow window.
 */
export const colBlockClass = 'w-full px-[15px] md:max-w-[50%] md:flex-[0_0_50%]'

/** A sub-block's heading: 24px at weight 400 on a 1.5 line, black, with 8px of tail. */
export const colHeadingClass = 'mb-2 text-[24px] leading-[1.5] font-normal text-heading'

/** A content block: a hairline under it, breathing room above and below. */
export const sectionClass = 'scroll-mt-[300px] border-b border-black/5 py-16 last:border-b-0'

/** The block's small accent kicker. */
export const eyebrowClass = 'text-[11px] font-medium tracking-[2px] text-accent uppercase'

/** The block's own heading, on the band's sub-block scale. */
export const sectionHeadingClass = 'text-[24px] leading-[1.5] font-normal text-heading'

/** The block's opening paragraph, kept to a readable measure. */
export const bodyClass = 'max-w-[760px] text-[16px]'

/** The card grid inside a block that lists things. */
export const itemGridClass = 'mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3'

/** One card: a white surface inside the grey page, held apart by its own hairline. */
export const itemClass = 'scroll-mt-[300px] border border-black/5 bg-white p-6'

/** A card's picture: a fixed band of the card's own width. */
export const itemImageClass = 'mb-4 h-[200px] w-full object-cover'

/** A card's title. */
export const itemTitleClass = 'text-[18px] leading-[1.5] font-semibold text-heading'

/** A card's own paragraph. */
export const itemBodyClass = 'text-[15px]'

/** The closing band: a strip under a hairline at the foot of the column. */
export const footerClass = 'border-t border-black/10'

/** The strip's own row. */
export const footerRowClass =
  'flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between'

/** A line of the closing strip. */
export const footerTextClass = 'text-[14px]'

/** The one link on the page that leaves it for the dock's own site. */
export const footerLinkClass = cn(
  'font-semibold text-accent transition-colors duration-300 hover:text-heading',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/**
 * The burger: a real control, **fixed at `left:-12px; top:0`** on `z-index:9999` with `20px` of
 * padding (a 30px glyph inside it measures 70 × 68.8), on screen **only below 992px** — from 992px
 * up it is gone from the layout entirely and cannot be focused. While the drawer is out it travels
 * the same 270px to the right as the column, over the same `0.5s`, so it rides the drawer's edge
 * instead of hiding under it. The design strips every outline on this control; the focus ring kept
 * in its place is a documented delta.
 */
export function toggleClass(isOpen: boolean): string {
  return cn(
    'group fixed top-0 -left-[12px] z-[9999] cursor-pointer border-0 bg-transparent p-5',
    'transition-[transform,background-color,visibility] duration-500 lg:hidden',
    isOpen ? 'translate-x-[270px]' : 'translate-x-0',
  )
}

/** The glyph's own box: three 30 × 2 bars whose centres sit 7px apart. */
export const burgerClass = 'relative block h-4 w-[30px]'

export type BarPart = 'top' | 'middle' | 'bottom'

/** The three bars, in the order they stack. */
export const BAR_PARTS: BarPart[] = ['top', 'middle', 'bottom']

/**
 * One bar of the burger, at rest or folded. At rest the three bars are 30 × 2 bars of `#000` whose
 * centres sit **7px** apart; hovering the control spreads the outer two to **10px** — the design's
 * own `-7px`/`-10px` pseudo-element offsets, here as a 3px nudge either way. Folded, the middle bar
 * goes transparent and the outer two rotate to **±45deg** onto the middle's own line, which is the
 * design's X. Every move is a `0.2s` tween, and all of them land immediately under reduced motion.
 */
export function barClass(part: BarPart, isOpen: boolean): string {
  const resting: Record<BarPart, string> = {
    top: 'top-0 group-hover:-translate-y-[3px]',
    middle: 'top-[7px]',
    bottom: 'top-[14px] group-hover:translate-y-[3px]',
  }

  const folded: Record<BarPart, string> = {
    top: 'top-[7px] rotate-45',
    middle: 'bg-transparent',
    bottom: 'top-[7px] -rotate-45',
  }

  return cn(
    'absolute left-0 h-[2px] w-[30px] bg-toggle transition-transform duration-200 ease-out',
    isOpen ? folded[part] : resting[part],
  )
}

/** Rolling to a destination keeps its heading clear of the burger, which is never in the flow. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
