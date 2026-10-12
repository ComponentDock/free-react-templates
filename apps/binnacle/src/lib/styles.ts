import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The band the page opens on: the design's `padding:112px 0` (`7em`) over the page's own
 * `#fafafa`, with no horizontal padding at all — which is what lets the strip and the bar inside
 * it run full-bleed while their own contents sit in the page's container.
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
 * The dark strip: full-bleed `#202020` with no padding of its own, sitting statically in the
 * flow. Its height is set by the 34px tiles on it, not by the phone line beside them.
 */
export const stripClass = 'bg-strip'

/** The strip's row: the phone at the left, the tiles at the right, inside the container's box. */
export const stripRowClass = 'flex min-h-[34px] flex-wrap items-center justify-between'

/**
 * The phone block: a 16px grey line whose glyph keeps the design's own quirk — the icon inherits
 * the page's grey `#808080` while the number itself is white at 12px.
 */
export const phoneClass = 'm-0 flex items-center gap-2 text-[16px] leading-[1.8] text-ink'

/** The phone's glyph: 16px, in the page's own grey rather than the link's white. */
export const phoneMarkClass = 'size-4 shrink-0'

/** The number itself: white at 12px, with a real hover and focus affordance (a delta). */
export const phoneLinkClass = cn(
  'text-[12px] leading-[21.6px] text-white',
  'transition-colors duration-300 hover:text-accent',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)

/** The strip's row of tiles: four 34px squares 1px apart, flush with the content right edge. */
export const socialListClass = 'm-0 flex list-none items-center gap-px p-0'

/**
 * One tile: a `34 × 34` square at `#4d4d4d` — `border-radius:0`, where the family's other social
 * rows use circles — centred on its glyph and filled with the gold accent on hover. The design
 * ships no icon font, so its own tiles render blank; the glyph inside and the focus ring kept in
 * place of its stripped outlines are both documented deltas.
 */
export const tileClass = cn(
  'flex size-[34px] items-center justify-center bg-tile text-white',
  'transition-colors duration-300 hover:bg-accent',
  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/** A tile's glyph, sized to the square it sits in. */
export const tileMarkClass = 'size-[18px]'

/**
 * The bar: white at every width — unlike the family's black narrow-width siblings — full-bleed,
 * `padding:0` from 992px up, z-3 over the page and holding the design's one and only bar shadow.
 * It is never sticky and never fixed, and below 992px it takes the design's own `10px 15px`
 * chrome padding.
 */
export const barClass =
  'relative z-[3] bg-white p-0 shadow-bar max-lg:bg-white max-lg:p-[10px_15px]'

/** Below 992px the design drops the inner container's gutters — the bar's padding is the gutter. */
export const barContainerClass = 'max-lg:px-0'

/**
 * The bar's own row: a flex line holding the wordmark, the search field, the toggler (hidden from
 * 992px up), the wide list and the folding panel. It wraps below 992px — which is what lets the
 * searched field and the toggler drop to a second line at 375px and what lets the opened panel
 * take a line of its own — and holds one line from 992px up.
 */
export const barRowClass = 'flex flex-wrap items-center justify-between lg:flex-nowrap'

/**
 * The wordmark: the app's own name in one uppercase 20px line on the design's own 20px line-height
 * inside `5px 0` of padding — a 42px box — followed by a 12px block line, with the design's 16px
 * of space after it. The design's own hover colour is the colour it already wears, so the hover
 * and focus affordances here are documented deltas; below 768px it keeps the design's 20px of
 * bottom margin, which is what makes the wrapped narrow-width bar 82px tall at 767px.
 */
export const wordmarkClass = cn(
  'mr-4 inline-block py-[5px] text-[20px] leading-none font-bold whitespace-nowrap text-black uppercase',
  'transition-colors duration-300 hover:text-accent max-md:mb-5',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** The wordmark's second line: 12px at weight 500 in the same black, on its own line. */
export const wordmarkLineClass = 'block text-[12px] leading-none font-medium text-black'

/**
 * The search field: `257 × 46`, the design's `1px solid rgba(0,0,0,.05)` border and its `5px`
 * radius with `overflow:hidden` — and it is **second in the DOM but last on screen** from 992px
 * up through the design's own `order:13`. It is never hidden at any width.
 */
export const searchFormClass = cn(
  'm-0 flex h-[46px] w-[257px] shrink-0 overflow-hidden rounded-search border border-black/5 bg-white',
  'lg:order-[13]',
)

/** The field's text input: `calc(100% - 46px)` wide on the fixed 46px line, borderless. */
export const searchInputClass = cn(
  'h-[46px] w-[calc(100%-46px)] border-0 bg-white py-1.5 pr-3 pl-4 text-[14px] text-black/70',
  'placeholder:text-black/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/** The field's submit button: the design's own `46 × 46` white square with the magnifier on it. */
export const searchButtonClass = cn(
  'flex size-[46px] shrink-0 cursor-pointer items-center justify-center border-0 bg-white text-black/70',
  'transition-colors duration-300 hover:text-accent',
  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/** The magnifier itself, at the design's own 18px. */
export const searchMarkClass = 'size-[18px]'

/**
 * The wide list's wrapper: the design's collapsible box, which is what grows to fill the bar and
 * what the panel replaces below 992px. Its own `overflow:hidden` is what clips the folding panel.
 */
export const navWrapClass = 'hidden lg:flex lg:grow lg:items-stretch'

/**
 * The wide list: five boxes centred **inside** the bar by the list's own auto margin — the
 * design's `margin:auto` — which is exactly what puts ≈132.7px of air either side of the rows at
 * 1440px. It is hidden entirely below 992px, where the panel is the only presentation of them.
 */
export const navListClass = 'm-auto flex list-none flex-col p-0 lg:flex-row lg:items-stretch'

/** One row of the bar: the box the row's own label fills. */
export const navItemClass = 'relative flex'

export type NavVariant = 'desktop' | 'panel'

export interface NavRowOptions {
  variant: NavVariant
  current: boolean
}

/**
 * A row's box, in whichever of the two presentations it is drawn. On the wide bar every row is an
 * **11px tracked-out uppercase** label at `#4d4d4d` on the design's own `32px 20px` padding —
 * 83.8px tall, which is what sets the bar's height — and its hover and current treatment is the
 * variant's signature: a full-height gold `#f1bc31` slab (`width:100%; height:100%; bottom:0;
 * left:0`) that is hidden at rest behind `scaleX(0)` and wiped in over `.2s ease-in-out`, with
 * the label turning **white**. The current row wears that slab permanently. There is **no**
 * underline, **no** border and **no** background on the link itself.
 *
 * Inside the folding panel the same rows become full-width blocks on the design's `14.4px`
 * vertical padding, resting at `#4d4d4d` with the current one black, **no slab** at all (the
 * design hides it below 992px) and a 1px rule under each row below 768px.
 */
export function navRowClass({ variant, current }: NavRowOptions): string {
  if (variant === 'panel') {
    return cn(
      'block w-full px-0 py-[14.4px] text-[11px] leading-[19.8px] font-medium tracking-[2px] uppercase',
      'transition-colors duration-300 max-md:border-b max-md:border-black/5',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
      current ? 'text-black' : 'text-row hover:text-accent focus-visible:text-accent',
    )
  }

  return cn(
    'relative block px-5 py-[32px] text-[11px] leading-[19.8px] font-medium tracking-[2px] uppercase',
    'transition-colors duration-300',
    'before:absolute before:inset-0 before:z-[-1] before:origin-left before:scale-x-0 before:bg-accent',
    'before:transition-transform before:duration-200 before:ease-in-out',
    'hover:text-white hover:before:scale-x-100',
    'focus-visible:text-white focus-visible:before:scale-x-100',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink',
    current ? 'text-white before:scale-x-100' : 'text-row',
  )
}

/**
 * The workshop row's box: a flex line so the trigger and its menu share one positioned box, which
 * is what the absolutely placed menu hangs from.
 */
export const menuItemClass = 'relative flex'

/**
 * The menu itself, wide bar: white with **no border**, `min-width:160px`, `padding:8px 0`,
 * `margin:2px 0 0`, a `4px` radius and the design's second and only other shadow, hung flush
 * under the trigger's own left edge and over everything the page draws (the design's
 * `z-index:1000`).
 */
export const menuClass = cn(
  'absolute top-full left-0 z-[1000] m-0 mt-[2px] min-w-[160px] list-none rounded-menu border-0',
  'bg-white py-2 shadow-menu',
)

/**
 * The same menu inside the folding panel: the design renders it **permanently expanded** there —
 * `display:block`, `position:static`, no shadow — so it is part of the panel's own height and
 * readable without a hover.
 */
export const menuStaticClass = cn(
  'static m-0 mt-[2px] block min-w-[160px] list-none rounded-menu border-0 bg-white py-2 shadow-none',
)

/**
 * One menu item: `12px` in black on the design's own `4px 24px` padding, taking the gold fill
 * with white ink on hover and on focus — the source's own two states.
 */
export const menuLinkClass = cn(
  'block px-6 py-1 text-[12px] leading-[21.6px] text-black',
  'transition-colors duration-300 hover:bg-accent hover:text-white',
  'focus-visible:bg-accent focus-visible:text-white focus-visible:outline-2',
  'focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/**
 * The trigger's caret: the design renders the framework's own border triangle — a `6 × 3` box of
 * three 3px borders with the top one in `currentColor`, so it follows the label from `#4d4d4d`
 * to white as the row is hovered.
 */
export const menuCaretClass = cn(
  'after:ml-[2.805px] after:inline-block after:border-x-[3px] after:border-x-transparent',
  'after:border-t-[3px] after:border-t-current after:align-[2.805px] after:content-[""]',
)

/**
 * The bar's toggler: a real button, on screen only below 992px, holding a 16px three-bar glyph and
 * a 16px tracked-out uppercase word in the design's own 50% black on the white bar. It is the
 * design's **third** child of the bar, after the wordmark and the search field. The design strips
 * every outline on this control; the focus ring kept in its place is a documented delta.
 */
export const togglerClass = cn(
  'flex cursor-pointer items-center gap-[6px] border-0 bg-transparent py-1 pr-0 pl-3',
  'text-[16px] leading-none tracking-[0.1em] text-toggler uppercase',
  'transition-colors duration-300 hover:text-black lg:hidden',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** The design puts the glyph a hair below the label's own line. */
export const togglerIconClass = 'translate-y-px'

/**
 * The folding panel: a real height animation — the grid track travels from `0fr` to `1fr` over
 * the design's `0.35s ease` — whose contents are mounted only while it is open, so a shut panel
 * holds no focusable copies of the bar's rows. Its `basis-full` is the design's own
 * `flex-basis:100%`, which is what makes the opened panel a full-width line of its own below the
 * chrome row rather than a dropdown over it, and it is hidden entirely from 992px up.
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
 * The panel's own list: one column holding the five rows — with the workshop menu standing
 * expanded in the middle of them — and the design's own 10px of tail under it.
 */
export const panelListClass = 'm-0 flex list-none flex-col p-0 pb-[10px]'

/** A content block: a hairline under it, breathing room above and below. */
export const sectionClass = 'scroll-mt-[122px] border-b border-black/5 py-16 last:border-b-0'

/** The block's small gold kicker. */
export const eyebrowClass = 'text-[11px] font-medium tracking-[2px] text-accent uppercase'

/** The block's own title: the band's 28px scale, black, left-aligned. */
export const sectionHeadingClass = 'text-[28px] leading-[1.5] font-normal text-black'

/** The block's opening paragraph, kept to a readable measure. */
export const bodyClass = 'max-w-[760px] text-[16px]'

/** The card grid inside a block that lists things. */
export const itemGridClass = 'mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'

/**
 * One card: a square surface inside the grey page, held apart by its own hairline, and kept clear
 * of the bar when a row points at it directly.
 */
export const itemClass = 'scroll-mt-[122px] border border-black/5 bg-white p-6'

/** A card's picture: a fixed band of the card's own width. */
export const itemImageClass = 'mb-4 h-[200px] w-full object-cover'

/** A card's title. */
export const itemTitleClass = 'text-[18px] leading-[1.5] font-medium text-black'

/** A card's own paragraph. */
export const itemBodyClass = 'text-[15px]'

/**
 * The line the search field draws while it is narrowing the page: a band under the first block,
 * carrying how much is left and the one control that puts everything back.
 */
export const filterBarClass = cn(
  'flex flex-wrap items-center justify-between gap-4 py-4 text-[14px]',
)

/** The filter line's own text. */
export const filterTextClass = 'm-0 text-[14px] text-ink'

/** The control that clears the search field. */
export const filterResetClass = cn(
  'cursor-pointer border border-black/10 bg-white px-4 py-2 text-[12px] font-medium tracking-[1px] uppercase',
  'text-black transition-colors duration-300 hover:bg-accent hover:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** The closing strip: a band under a hairline over the page's own grey. */
export const footerClass = 'border-t border-black/10'

/** The strip's own row. */
export const footerRowClass =
  'flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between'

/** A line of the closing strip. */
export const footerTextClass = 'text-[14px]'

/** The one link on the page that leaves it for the dock's own site. */
export const footerLinkClass = cn(
  'font-semibold text-accent transition-colors duration-300 hover:text-black',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** The skip link, hidden until it is focused. */
export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[1100]',
  'focus:bg-strip focus:px-4 focus:py-2 focus:font-semibold focus:text-white',
)

/** Rolling to a destination keeps its heading clear of the chrome, which is never pinned. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
