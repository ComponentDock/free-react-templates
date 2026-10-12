import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The band the page opens on: the design's `padding:112px 0` (`7em`) over the page's own
 * `#fafafa`, with no horizontal padding at all. Its 112px of top padding, the heading's 42px line,
 * its 8px tail and its column's 48px of air are together what land the bar's top edge exactly
 * **210px** below the page top at every width.
 */
export const bandClass = 'py-28'

/**
 * The page's container: full width with 15px gutters, taking the classic tiers — 540px from
 * 576px, 720px from 768px, 960px from 992px and the widest 1140px cap from 1200px, where the
 * design's container stops growing. The bar lives **inside** this container, which is what makes it
 * **15px narrower than the tier on each side** rather than full-bleed.
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
 * The bar: the design's `#1c2938` navy **inset inside the container's own gutters** — 1110px of a
 * 1140px tier at 1440px — with its `10px` padding, its **5px** rounding, the family's shallow
 * `0 5px 20px -17px rgba(0,0,0,0.34)` shadow, `z-index:3` over the page and `position:relative` so
 * its panel can anchor to it. Below 992px the surface turns `#000`, the padding becomes the
 * design's own `10px 15px` gutters, and the rounding and the shadow are **kept**. It is never
 * sticky and never fixed, so it scrolls away above the app's own content.
 */
export const barClass =
  'relative z-[3] w-full rounded-bar bg-bar p-[10px] shadow-bar max-lg:bg-black max-lg:p-[10px_15px]'

/**
 * The bar's inner container: a flex line holding the brand, the toggler and the list, spread across
 * the bar by `space-between`, holding one line from 992px up and wrapping below — which is what
 * lets the opened folding panel take a line of its own. Below 992px its gutters are dropped
 * entirely, because the bar's own padding is the gutter there.
 */
export const barContainerClass =
  'flex w-full flex-wrap items-center justify-between px-[15px] max-lg:px-0 lg:flex-nowrap'

/**
 * The wordmark: the app's own name in one uppercase 20px line at weight 700 in the design's own
 * white, inside `5px 0` of padding with the design's 16px of space after it and the inherited
 * `line-height:1.8` (36px), which is what makes it 46px tall and flush with the bar's content left
 * edge. The design paints no state beyond the white it already wears, so the amber hover and the
 * focus ring here are documented deltas.
 */
export const brandClass = cn(
  'mr-4 inline-block py-[5px] text-[20px] leading-[1.8] font-bold whitespace-nowrap text-white uppercase',
  'transition-colors duration-300 hover:text-accent',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/**
 * The wide list's wrapper: the design's collapsible box, which grows to fill the bar and is what
 * carries the list to its right edge. It is hidden entirely below 992px, where the folding panel is
 * the only presentation of the rows.
 */
export const navWrapClass = 'hidden lg:flex lg:grow lg:items-center'

/**
 * The wide list: four boxes **pushed to the bar's right edge by the list's own auto margin** — the
 * design's `margin-left:auto` — which is what puts ≈613px of air to the left of the rows at 1440px.
 */
export const navListClass = 'm-0 ml-auto flex list-none flex-col p-0 lg:flex-row lg:items-stretch'

/** One row of the bar: the box the row's own label fills. */
export const navItemClass = 'flex'

/**
 * The wide-panel row's own box: **`position:static`**, which is this variant's whole trick — the
 * panel is `width:100%` and `left:0`, and it only measures against the **bar** because the row
 * holding the trigger is not a positioned ancestor. Give this box `relative` and the panel snaps to
 * the trigger's own width and the whole layout collapses.
 */
export const menuItemClass = 'static flex'

export type NavVariant = 'desktop' | 'panel'

export interface NavRowOptions {
  variant: NavVariant
  current: boolean
  /** True while the wide panel this row opens is out, which the row itself shows. */
  open?: boolean
}

/**
 * A row's box, in whichever of the two presentations it is drawn. On the wide bar every row is a
 * **14px sentence-case** label in `#e6e6e6` on the design's own `19.2px 20px` padding — **63.6px**
 * tall, which is what sets the bar's 83.6px — with no uppercase transform, no letter-spacing, no
 * underline and no pseudo-element decoration anywhere. Hovering turns the label the accent
 * **`#fec771`**, the row the page is on wears that amber as well (`aria-current` is the app's own
 * addition — the design paints no current-row state at all), and the wide-panel row wears it while
 * its panel is out (the design's own mock shows the trigger amber, its sheet never does — both are
 * documented deltas). Both presentations are set `text-left`, because the panel row is a real
 * `<button>` where the design has an anchor, and a button's own label is centred otherwise.
 *
 * Inside the folding panel the same rows become full-width blocks of exactly **54px** on the
 * design's own `14.4px` padding, resting at 70% white and going solid white when they are hovered
 * or current, with **no** bottom rule at any mobile width.
 */
export function navRowClass({ variant, current, open = false }: NavRowOptions): string {
  if (variant === 'panel') {
    return cn(
      'block w-full px-0 py-[14.4px] text-left text-[14px] leading-[25.2px]',
      'transition-colors duration-300',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
      current ? 'text-white' : 'text-white/70 hover:text-white focus-visible:text-white',
    )
  }

  return cn(
    'block cursor-pointer px-5 py-[19.2px] text-left text-[14px] leading-[25.2px]',
    'transition-colors duration-300',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
    current || open ? 'text-accent' : 'text-row hover:text-accent focus-visible:text-accent',
  )
}

/**
 * The panel row's caret: the design renders the framework's own border triangle — **8 × 4**, a 4px
 * transparent border either side of a 4px solid top — after the label, following the label's own
 * colour. Only the wide-panel row carries one.
 */
export const menuCaretClass =
  'ml-[3.57px] inline-block border-x-4 border-x-transparent border-t-4 border-t-current align-[3.57px]'

/**
 * The wide panel — this variant's signature: **as wide as the bar and flush with its left edge**,
 * hung `2px` under the bar's bottom edge (`top:100%` + `margin-top:2px`), white, **borderless**,
 * with a **4px** rounding, the deeper `0 10px 34px -20px rgba(0,0,0,0.41)` shadow and the design's
 * own **24px** of padding.
 */
export const megaClass = cn(
  'absolute top-full left-0 z-[1000] m-0 mt-[2px] w-full list-none rounded-mega border-0 bg-white p-6 shadow-mega',
)

/**
 * The same panel inside the folding panel below 992px: an **in-flow static block**, full width and
 * flush, over the near-black `#202020` with the design's own **`padding:0`**, keeping its 4px
 * rounding and dropping the shadow.
 */
export const megaStaticClass = cn(
  'static m-0 block w-full list-none rounded-mega border-0 bg-mega p-0 shadow-none',
)

/** The panel's own row: the design's `margin:0 -15px` with the columns' 15px gutters inside it. */
export const megaRowClass = 'flex flex-wrap -mx-[15px]'

/**
 * One panel column: a full-width block below 768px and exactly **25%** from 768px up — the four
 * columns the panel divides into (273px each inside a 1440px bar).
 */
export const megaColumnClass = 'w-full px-[15px] md:max-w-[25%] md:flex-[0_0_25%]'

/**
 * The columns that carry a card: the same 25% block, **`display:none` below 768px**, so the mobile
 * panel is the four plain links and nothing else.
 */
export const megaCardColumnClass = cn(megaColumnClass, 'max-md:hidden')

/** The plain links' own list, inside the panel's first column. */
export const megaListClass = 'm-0 list-none p-0'

/**
 * One panel link: **12px** in black on the design's own `15px 20px` padding — **52.6px** rows — over
 * a `1px solid rgba(0,0,0,0.1)` rule, taking the accent **`#fec771`** fill with white ink on hover
 * and on focus, which are the source's own two states.
 */
export const megaItemClass = cn(
  'block border-b border-black/10 px-5 py-[15px] text-[12px] leading-[21.6px] whitespace-nowrap text-black',
  'transition-colors duration-300 hover:bg-accent hover:text-white',
  'focus-visible:bg-accent focus-visible:text-white focus-visible:outline-2',
  'focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/** The same link inside the folding panel: 80% white over a 10% white rule, under the accent fill. */
export const megaItemStaticClass = cn(
  'block border-b border-white/10 px-5 py-[15px] text-[12px] leading-[21.6px] whitespace-nowrap text-white/80',
  'transition-colors duration-300 hover:bg-accent hover:text-white',
  'focus-visible:bg-accent focus-visible:text-white focus-visible:outline-2',
  'focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/**
 * A card's picture: the full width of its column, **250px** tall, square-cornered and cropped from
 * the centre, with the design's own 20px of tail under it.
 */
export const megaShotClass = 'mb-5 block h-[250px] w-full object-cover'

/**
 * A card's title: **16px** at weight 600 with no tail, black on the white panel — and, from 768px
 * to 991px, where the same card sits over the panel's near-black mobile surface, white instead.
 * The design leaves these captions black-on-near-black there, which is invisible; restoring their
 * ink is a documented delta.
 */
export const megaCardTitleClass = 'text-[16px] leading-[1.5] text-black max-lg:text-white'

/** The title's own link, which is the second way into the card it names. */
export const megaCardLinkClass = cn(
  'text-black transition-colors duration-300 hover:text-accent',
  'max-lg:text-white max-lg:hover:text-accent',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** A card's meta line: 14px at 20% black on the white panel, white at 60% on the mobile surface. */
export const megaCardMetaClass = 'text-[14px] leading-[25.2px] text-black/20 max-lg:text-white/60'

/**
 * The bar's toggler: a real button, on screen only below 992px, carrying a 16px three-bar glyph and
 * a 16px tracked-out uppercase word in the design's own 50% white, on the bar's own
 * `4px 0 4px 12px` padding, **second in the bar's DOM** (after the brand) and pushed to the bar's
 * right edge by the row's own `space-between`. The design strips every outline on this control; the
 * focus ring kept in its place is a documented delta.
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
 * The folding panel: a real height animation — the grid track travels from `0fr` to `1fr` over the
 * design's own `0.35s ease` — whose contents are mounted only while it is open, so a shut panel
 * holds no focusable copies of the bar's rows. Its `basis-full` is the design's own
 * `flex-basis:100%`, which is what makes the opened panel a line of its own under the bar rather
 * than a dropdown over it, and it is hidden entirely from 992px up.
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
 * The panel's own list: one column holding the four rows — with the wide panel's row standing in
 * the last of them — and the design's own 10px of tail under it.
 */
export const panelListClass = 'm-0 flex list-none flex-col p-0 pb-[10px]'

/** A content block: a hairline under it, breathing room above and below. */
export const sectionClass = 'scroll-mt-[300px] border-b border-black/5 py-16 last:border-b-0'

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
 * bar when a row points at it directly.
 */
export const itemClass = 'scroll-mt-[300px] border border-black/5 bg-white p-6'

/** A card's picture: a fixed band of the card's own width. */
export const itemImageClass = 'mb-4 h-[200px] w-full object-cover'

/** A card's title. */
export const itemTitleClass = 'text-[18px] leading-[1.5] font-semibold text-black'

/** A card's own paragraph. */
export const itemBodyClass = 'text-[15px]'

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

/** Rolling to a destination keeps its heading clear of the bar, which is never pinned. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
