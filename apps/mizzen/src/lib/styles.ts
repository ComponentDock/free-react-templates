import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The band the page opens on: the design's `padding:112px 0` (`7em`) over the page's own
 * `#fafafa`, with no horizontal padding at all — which is what lets the chrome row and the bar
 * inside it run full-bleed while the heading sits in the page's own container. Its 112px of top
 * padding, the heading's 42px line, its 8px tail and its column's 48px of air are together what
 * land the chrome row's top edge exactly 210px below the page top at every width.
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
 * The utility container the design calls `container-fluid` — its chrome row declares this one
 * rather than the centred container every sibling in the family uses: full width with **no**
 * `max-width` at all, carrying 15px gutters below 768px and the design's own 48px from 768px up.
 * It is the row that makes the circles flush with the content edge at 48px and the search field
 * flush with 1392px at 1440px.
 */
export const chromeClass = 'w-full px-[15px] md:px-[48px]'

/** The chrome's own row: a wrapping flex line with the two columns spread across its width. */
export const chromeRowClass = 'flex flex-wrap justify-between'

/**
 * The circles' column: the **first** child of the chrome row and a third of its width from 768px
 * up — the design's `cl-col-md-4` — carrying 20px of tail below 768px, where the chrome row
 * wraps and the circles take a line of their own. Its own flex line centres the circles in its
 * own box below 992px and leaves them flush with the content's left edge above it.
 */
export const socialColumnClass = cn(
  'mb-5 flex w-full justify-center px-[15px] md:mb-0 md:max-w-[33.33333%] md:flex-[0_0_33.33333%]',
  'lg:justify-start',
)

/**
 * The wordmark and search column: the chrome row's **second** child in the DOM but **last** on
 * screen through the design's own `order:13` — so the circles sit left and the wordmark with its
 * field sit right. Two thirds of the width from 768px up (`cl-col-md-8`).
 */
export const brandColumnClass =
  'w-full px-[15px] md:order-last md:max-w-[66.66667%] md:flex-[0_0_66.66667%]'

/** The wordmark's inner row: the centred lockup in one half, the field in the other. */
export const brandRowClass = 'flex flex-wrap justify-between'

/** The lockup's own half: centred text, half the inner row from 768px up. */
export const brandCellClass = 'w-full px-[15px] text-center md:max-w-[50%] md:flex-[0_0_50%]'

/**
 * The field's own half: a flex line pushing the field to its right edge from 768px up, and full
 * width with 16px of tail below it — the design's own `mb-3` / `mb-md-0`.
 */
export const searchCellClass =
  'mb-4 w-full px-[15px] md:mb-0 md:flex md:max-w-[50%] md:flex-[0_0_50%] md:justify-end'

/** The circles' list: four boxes and no bullets, top-aligned with the chrome row. */
export const socialListClass = 'm-0 flex list-none items-start p-0'

/**
 * One circle: a `40 × 40` round ring, `1px solid #e6e6e6` with **no** background at all, holding
 * its glyph centred and sitting 4px from the next one — the design's own `margin-right:4px` on
 * every circle, including the last, which is what makes the group 176px wide. Hovering fills the
 * circle and its ring with the accent red and turns the glyph white. The design ships no icon
 * font, so its own circles render **blank**; the real brand glyph inside and the focus ring kept
 * in place of the outlines it strips are both documented deltas.
 */
export const circleClass = cn(
  'mr-[4px] flex size-[40px] items-center justify-center rounded-full border border-circle text-glyph',
  'transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** A circle's glyph, sized inside the 40px ring. */
export const circleMarkClass = 'size-[18px]'

/**
 * The wordmark: the app's own name in one uppercase 20px line at `line-height:1.2` in black,
 * inside `5px 0` of padding, with the design's 16px of space after it and — unreset at every
 * width — its own **30px of bottom margin**, which is what makes the chrome row 78.4px tall
 * rather than 48.4px. It is the one link in the chrome that points back at the top of the page.
 * The design paints no state beyond the black it already wears, so the hover colour and the focus
 * ring here are documented deltas.
 */
export const wordmarkClass = cn(
  'mr-4 mb-[30px] inline-block py-[5px] text-[20px] leading-[1.2] font-bold whitespace-nowrap text-black uppercase',
  'transition-colors duration-300 hover:text-accent',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** The wordmark's second line: 12px at weight 500 on its own block line, at 30% black. */
export const wordmarkLineClass = 'block text-[12px] leading-[1.2] font-medium text-black/30'

/**
 * The search field: a `300 × 50` pill from 992px up — filled to its own column below that, which
 * is what makes it 204px at 768px and 278.7px at 992px — with the design's 40px radius, its
 * `overflow:hidden` (the clip that turns the square submit into the pill's right cap) and its
 * own `1px solid rgba(255,255,255,0.1)` ring, which is all but invisible on the light page. It is
 * never hidden at any width.
 */
export const searchFormClass = cn(
  'm-0 flex h-[50px] w-full overflow-hidden rounded-pill border border-white/10 bg-white',
  'lg:w-[300px] lg:shrink-0',
)

/** The field's text input: `calc(100% - 50px)` wide on the fixed 50px line, borderless. */
export const searchInputClass = cn(
  'h-[50px] w-[calc(100%-50px)] border-0 bg-white py-1.5 pr-3 pl-4 text-[14px] text-black/70',
  'placeholder:text-black/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/** The field's submit button: the design's own `50 × 50` accent-red square with the magnifier. */
export const searchButtonClass = cn(
  'flex size-[50px] shrink-0 cursor-pointer items-center justify-center border-0 bg-accent text-white',
  'transition-colors duration-300 hover:bg-black',
  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/** The magnifier itself, at the design's own 16px. */
export const searchMarkClass = 'size-4'

/**
 * The bar: the design's `#252525` on wide viewports and its `#000` below the width its rows fold
 * at, full-bleed, `padding:0` from 992px up (where its chrome padding drops to the design's own
 * `10px 15px`), `z-index:3` over the page, and **no shadow at all**. It is never sticky and never
 * fixed, so it scrolls away above the app's own content.
 */
export const barClass = 'relative z-[3] bg-bar p-0 max-lg:bg-black max-lg:p-[10px_15px]'

/** Below 992px the design drops the inner container's gutters — the bar's padding is the gutter. */
export const barContainerClass = 'w-full px-[15px] max-lg:px-0'

/**
 * The bar's own row: a flex line holding the toggler (**first** in the design's DOM, in front of
 * the list it opens), the wide list, and the folding panel. It wraps below 992px — which is what
 * lets the opened panel take a line of its own — and holds a single line from 992px up.
 */
export const barRowClass = 'flex flex-wrap items-center justify-between lg:flex-nowrap'

/**
 * The wide list's wrapper: the design's collapsible box, which grows to fill the bar and is what
 * centres the list inside it. It is hidden entirely below 992px, where the panel is the only
 * presentation of the rows.
 */
export const navWrapClass = 'hidden lg:flex lg:grow lg:items-center'

/**
 * The wide list: five boxes **centred inside the bar by the list's own auto margin** — the
 * design's `margin:auto` — which is exactly what puts ≈487.6px of air either side of the rows at
 * 1440px.
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
 * **11px tracked-out uppercase** label in white on the design's own `24px 20px` padding — 67.8px
 * tall, which is what sets the bar's height — with `line-height:19.8px`. Its hover treatment is
 * this variant's signature: a **2px accent-red bar pinned to the row's bottom edge**
 * (`bottom:0; left:0; height:2px`) that wipes in from `width:0` to `width:100%` over `0.3s`, at
 * the same moment the label itself turns red. The row the page is on is **red with no underline
 * at all** — the underline is hover-only in this design, where the family's other bars wear a
 * full-height slab.
 *
 * Inside the folding panel the same rows become full-width blocks of exactly 43.2px on the
 * design's own `11.2px` padding, resting at 70% white and going solid white when they are hovered
 * or current, with a 1px rule under each row below 768px only.
 */
export function navRowClass({ variant, current }: NavRowOptions): string {
  if (variant === 'panel') {
    return cn(
      'block w-full px-0 py-[11.2px] text-[11px] leading-[20.8px] font-medium tracking-[2px] uppercase',
      'transition-colors duration-300 max-md:border-b max-md:border-white/20',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
      current ? 'text-white' : 'text-white/70 hover:text-white focus-visible:text-white',
    )
  }

  return cn(
    'relative block px-5 py-6 text-[11px] leading-[19.8px] font-medium tracking-[2px] uppercase',
    'transition-colors duration-300',
    'before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-accent',
    'before:transition-[width] before:duration-300',
    'hover:text-accent hover:before:w-full',
    'focus-visible:text-accent focus-visible:before:w-full',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
    current ? 'text-accent' : 'text-row',
  )
}

/**
 * The rigging row's box: a flex line so the trigger and its menu share one positioned box, which
 * is what the absolutely placed menu hangs from.
 */
export const menuItemClass = 'relative flex'

/**
 * The menu itself, wide bar: white with **no border**, `min-width:160px`, `padding:8px 0`,
 * `margin:2px 0 0`, a `4px` radius and the page's only shadow, hung flush under the trigger's own
 * left edge and over everything the page draws (the design's `z-index:1000`).
 */
export const menuClass = cn(
  'absolute top-full left-0 z-[1000] m-0 mt-[2px] min-w-[160px] list-none rounded-menu border-0',
  'bg-white py-2 shadow-menu',
)

/**
 * The same menu inside the folding panel: the design renders it **permanently expanded** there —
 * `display:block`, `position:static`, the dark panel's own black surface, its 4px radius kept and
 * no shadow — so it is part of the panel's own height and readable without a hover.
 */
export const menuStaticClass = cn(
  'static m-0 mt-[2px] block min-w-[160px] list-none rounded-menu border-0 bg-black py-2 shadow-none',
)

/**
 * One menu item: `12px` in black on the design's own `4px 24px` padding, taking the accent fill
 * with white ink on hover and on focus — the source's own two states.
 */
export const menuLinkClass = cn(
  'block px-6 py-1 text-[12px] leading-[21.6px] text-black',
  'transition-colors duration-300 hover:bg-accent hover:text-white',
  'focus-visible:bg-accent focus-visible:text-white focus-visible:outline-2',
  'focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/** The same item inside the panel's dark standing menu: 80% white, going white under the accent. */
export const menuStaticLinkClass = cn(
  'block px-6 py-1 text-[12px] leading-[21.6px] text-white/80',
  'transition-colors duration-300 hover:bg-accent hover:text-white',
  'focus-visible:bg-accent focus-visible:text-white focus-visible:outline-2',
  'focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/**
 * The trigger's caret: the design renders the framework's own border triangle — a `6 × 3` box of
 * three 3px borders with the top one solid — after the label. The design's own caret follows the
 * label's colour, which leaves a white triangle beside a reddened hovered label; because the
 * hover rule here only re-colours the label, the caret is pinned to the label's resting white on
 * the wide bar and to 70% white inside the panel, and keeps its colour in both states.
 */
export const menuCaretClass =
  'ml-[2.805px] inline-block border-x-[3px] border-x-transparent border-t-[3px] border-t-white/70 align-[2.805px] lg:border-t-white'

/**
 * The bar's toggler: a real button, on screen only below 992px, carrying a 16px three-bar glyph
 * and a 16px tracked-out uppercase word in the design's own 50% white, on the bar's own
 * `4px 0 4px 12px` padding. It is the bar's **first** child. The design strips every outline on
 * this control; the focus ring kept in its place is a documented delta.
 */
export const togglerClass = cn(
  'flex cursor-pointer items-center gap-[6px] border-0 bg-transparent py-1 pr-0 pl-3',
  'text-[16px] leading-none tracking-[0.1em] text-white/50 uppercase',
  'transition-colors duration-300 hover:text-white lg:hidden',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** The design puts the glyph a hair below the label's own line. */
export const togglerIconClass = 'translate-y-px'

/**
 * The folding panel: a real height animation — the grid track travels from `0fr` to `1fr` over
 * the design's own `0.35s ease` — whose contents are mounted only while it is open, so a shut
 * panel holds no focusable copies of the bar's rows. Its `basis-full` is the design's own
 * `flex-basis:100%`, which is what makes the opened panel a full-width line of its own below the
 * chrome rather than a dropdown over it, and it is hidden entirely from 992px up.
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
 * The panel's own list: one column holding the five rows — with the rigging menu standing expanded
 * in the middle of them — and the design's own 10px of tail under it.
 */
export const panelListClass = 'm-0 flex list-none flex-col p-0 pb-[10px]'

/** A content block: a hairline under it, breathing room above and below. */
export const sectionClass = 'scroll-mt-[160px] border-b border-black/5 py-16 last:border-b-0'

/** The block's small accent kicker. */
export const eyebrowClass = 'text-[11px] font-medium tracking-[2px] text-accent uppercase'

/** The block's own title: the band's 28px scale, black, left-aligned. */
export const sectionHeadingClass = 'text-[28px] leading-[1.5] font-normal text-black'

/** The block's opening paragraph, kept to a readable measure. */
export const bodyClass = 'max-w-[760px] text-[16px]'

/** The card grid inside a block that lists things. */
export const itemGridClass = 'mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'

/**
 * One card: a surface inside the grey page, held apart by its own hairline, and kept clear of the
 * chrome when a row points at it directly.
 */
export const itemClass = 'scroll-mt-[160px] border border-black/5 bg-white p-6'

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
export const filterBarClass = cn('flex flex-wrap items-center justify-between gap-4 py-4 text-[14px]')

/** The filter line's own text. */
export const filterTextClass = 'm-0 text-[14px] text-ink'

/** The control that clears the search field. */
export const filterResetClass = cn(
  'cursor-pointer border border-black/10 bg-white px-4 py-2 text-[12px] font-medium tracking-[1px] uppercase',
  'text-black transition-colors duration-300 hover:bg-accent hover:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** The closing band: a strip under a hairline over the page's own grey. */
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
  'focus:bg-bar focus:px-4 focus:py-2 focus:font-semibold focus:text-white',
)

/** Rolling to a destination keeps its heading clear of the chrome, which is never pinned. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
