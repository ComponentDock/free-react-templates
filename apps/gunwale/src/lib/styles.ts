import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The band the page opens on: the design's `padding:112px 0` (`7em`) over the page's own
 * `#fafafa`, holding the centred heading column, the white brand strip and — as the
 * design lays it out — the bar itself, so the band's 112px of tail closes the composition
 * under the bar.
 */
export const bandClass = 'py-28'

/**
 * The page's container: full width with 15px gutters, taking the classic tiers — 540px
 * from 576px, 720px from 768px, 960px from 992px and the widest 1140px cap from 1200px,
 * where the design's container stops growing.
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
 * The brand strip: the same container, a `space-between` row whose two columns are
 * `flex:1 0 0%` — half the row each — sitting transparently on the page's own surface.
 * It is 72px tall: the wordmark's 42px lockup plus the design's 30px of tail under it.
 */
export const stripRowClass = 'flex flex-wrap justify-between -mx-[15px]'

/** One of the strip's two halves. */
export const stripColumnClass = 'flex-[1_0_0%] px-[15px]'

/** The channels' own half: the row inside it is right-aligned. */
export const stripChannelColumnClass = cn(stripColumnClass, 'flex justify-end')

/**
 * The wordmark: two uppercase lines in black — the shop's name at 20px/700 on a 20px
 * line, and its trade at 12px/500 as a block line under it — reaching a 42px lockup
 * inside `padding:5px 0`, and the design's own 30px of tail is what makes the strip 72px
 * tall. It rests in the same black it hovers in, so only its focus ring appears.
 */
export const wordmarkClass = cn(
  'mr-4 mb-[30px] inline-block py-[5px] text-[20px] leading-none font-bold whitespace-nowrap text-black uppercase',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bar',
)

/** The wordmark's second line: a 12px block line inheriting the uppercase. */
export const wordmarkTradeClass = 'block text-[12px] leading-none font-medium'

/**
 * The row of channel circles: four 40px rings, right-aligned in the strip's second half
 * and pinned to its **top** (level with the wordmark's first line), each carrying the
 * design's own 4px of space after it.
 */
export const channelListClass = 'm-0 flex list-none items-start p-0'

/** One channel circle: a 40px hairline ring with its glyph centred inside it. */
export const channelLinkClass = cn(
  'mr-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-circle-ring text-circle-glyph',
  'transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-white',
  'focus-visible:border-gold focus-visible:bg-gold focus-visible:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bar',
)

/**
 * The bar: **full-bleed**, one solid navy band with no padding above 992px, turning black
 * with the design's own `10px 15px` below it. It is `relative` with its layer raised so
 * the dropdown panel paints over the page, and it carries no border, no radius and no
 * shadow at any width. It is never sticky and never fixed: it sits in the flow, so
 * scrolling takes it away with everything else.
 */
export const barClass =
  'relative z-[3] w-full bg-bar p-0 max-lg:bg-bar-dark max-lg:px-[15px] max-lg:py-[10px]'

/** Below 992px the design drops the container's gutters — the bar's own padding is the gutter. */
export const barContainerClass = 'max-lg:px-0'

/**
 * The bar's row: a nowrap flex line whose three children are the toggler (hidden above
 * 992px), the search form (last visually, whatever its DOM place) and the two
 * presentations of the list. Below 992px it wraps, so the collapsing panel takes a line
 * of its own under the toggler and the field.
 */
export const barRowClass = 'relative flex flex-nowrap items-center justify-between max-lg:flex-wrap'

/** The wide presentation's wrapper: it takes the space left between the list and the field. */
export const desktopNavClass = 'hidden lg:flex lg:flex-1 lg:basis-auto lg:items-center'

/**
 * The bar's list: five boxes stretched to the bar's full height and pushed to the
 * container's inner left edge by the list's own auto margin, which is what leaves all the
 * slack between the last row and the search field.
 */
export const desktopListClass = 'm-0 flex list-none items-stretch p-0 lg:mr-auto'

/**
 * One row of the bar: a flex box that is also the positioning context its panel hangs
 * from, which is what makes `top:100%; left:0` measure from the row rather than from the
 * bar's own edge. It wraps, so the folded presentation's sub-list can take a line of its
 * own under its trigger instead of being squeezed in beside it.
 */
export const navItemClass = 'relative flex flex-wrap'

/** The disclosure's `min-width:160px`, kept here so the placement guard can read it. */
export const PANEL_WIDTH = 160

export type NavVariant = 'desktop' | 'panel'

export interface NavRowOptions {
  variant: NavVariant
  current: boolean
}

/**
 * A row's box, in whichever of the two presentations it is drawn. On the wide bar every
 * row is an 11px tracked uppercase label on the design's 24px/20px padding — 67.8px tall,
 * which is what sets the bar's height — resting in `#fff`. Inside the collapsing panel
 * the same rows become full-width blocks at 11px on the design's `14.4px 0` (48.58px
 * each), the open destination wearing the gold the design gives it and the rest 70%
 * white. The row is the group the gold slab belongs to; on the wide bar the row that is
 * already open keeps that slab at rest rather than revealing it on hover.
 */
export function navRowClass({ variant, current }: NavRowOptions): string {
  if (variant === 'panel') {
    return cn(
      'group relative block w-full py-[14.4px] text-[11px] leading-[19.8px] font-medium tracking-[2px] uppercase',
      'transition-colors duration-300 hover:text-white',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
      current ? 'text-gold' : 'text-panel-row',
    )
  }

  return cn(
    'group relative block px-5 py-6 text-[11px] leading-[19.8px] font-medium tracking-[2px] text-white uppercase',
    'transition-colors duration-300',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
    current ? CURRENT_ROW_MARK : '',
  )
}

/** The open destination's own signal, beyond the slab: an inset white underline. */
export const CURRENT_ROW_MARK = 'shadow-[inset_0_-3px_0_0_#ffffff]'

/**
 * The gold slab: a `#f1bc31` block covering the whole row, painted **behind** the label
 * (`-z-10`, inside the bar's own raised layer) and wiped in from the left by
 * `scale-x-0 → scale-x-100` over the design's `all .2s ease-in-out`. The row the page is
 * already on keeps it at `scale-x-100`, so exactly one row reads as a solid gold block on
 * load. The design hides these slabs entirely inside the collapsing panel, which is why
 * the panel's rows never render one.
 */
export function slabClass(current: boolean): string {
  return cn(
    'pointer-events-none absolute inset-0 -z-10 origin-left bg-gold transition-transform duration-200 ease-in-out',
    current ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100',
  )
}

/** The disclosure's trigger keeps its row's box and adds the caret's own offset. */
export const navTriggerClass = 'inline-flex items-center gap-[2.805px]'

/** The caret: the design's 3px `currentColor` triangle, drawn as a small glyph. */
export const caretClass = 'mt-[1px] shrink-0'

/**
 * The disclosure's panel. On the wide bar it hangs 2px under the bar, flush with its
 * trigger's left edge unless it would leave the viewport, in which case it hangs from the
 * trigger's right edge instead; it is white, `min-width:160px`, `padding:8px 0`,
 * `4px`-rounded and carries the design's one shadow. Inside the collapsing panel the same
 * rows sit in the flow, full width on black with no radius and no shadow — the design
 * leaves this sub-list permanently expanded there, which is what the panel presentation
 * reproduces rather than hiding behind a disclosure.
 */
export function dropdownPanelClass(variant: NavVariant, flip: boolean): string {
  if (variant === 'panel') {
    return cn('m-0 w-full basis-full list-none bg-bar-dark p-0 py-2', 'mt-[2px] rounded-none')
  }

  return cn(
    'absolute top-full z-[1000] m-0 list-none bg-white py-2 mt-[2px] min-w-[160px] rounded-panel shadow-panel',
    flip ? 'left-auto right-0' : 'left-0',
  )
}

/**
 * One row inside the disclosure: 12px on the design's 21.6px line with 4px above and
 * below (29.59px), 24px either side. The design's own hover is `background:none;
 * color:#fff` — white text on a white panel, i.e. an invisible row — so this fills with
 * the brand gold and keeps the label black instead, and serves the same state on focus.
 * Inside the collapsing panel the same rows rest at 80% white.
 */
export function dropdownItemClass(variant: NavVariant): string {
  return cn(
    'block w-full px-6 py-1 text-[12px] leading-[1.8]',
    'transition-colors duration-300 hover:bg-gold hover:text-black focus:bg-gold focus:text-black',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold',
    variant === 'panel' ? 'text-panel-item' : 'text-black',
  )
}

/**
 * The collapsing panel: a real height animation — the grid track travels from `0fr` to
 * `1fr` over the design's `0.35s ease` — whose contents are mounted only while it is
 * open, so a shut panel holds no focusable copies of the bar's rows. It is hidden
 * entirely from 992px up, where the bar's list takes over.
 */
export function collapseClass(isOpen: boolean): string {
  return cn(
    'grid w-full transition-[grid-template-rows] duration-[350ms] ease-collapse lg:hidden',
    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
  )
}

/** The clip that lets the panel's own content travel out of a zero-height track. */
export const collapseInnerClass = 'overflow-hidden'

/** The panel's own list: one column, 10px of tail. */
export const panelListClass = 'm-0 flex list-none flex-col p-0 pb-[10px]'

/** The bar's toggler: a 16px glyph and a 16px tracked uppercase word in 50% white. */
export const togglerClass = cn(
  'flex cursor-pointer items-center border-0 bg-transparent pt-1 pr-0 pb-1 pl-3',
  'text-[16px] leading-none tracking-[1.6px] text-toggler uppercase lg:hidden',
  'transition-colors duration-300 hover:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)

/** The design puts the glyph a hair below the label's own line. */
export const togglerIconClass = '-translate-y-[1px]'

/** The search form's own row, holding the field and the status line under it. */
export const searchRowClass = 'relative min-w-0 shrink lg:order-last'

/**
 * The search form: the design's **257 × 46** white field with a 5px radius, its own 1px
 * hairline and `overflow:hidden`, sitting on the bar's horizontal centre. It is allowed
 * to shrink, because the design fixes it at 257px and then wraps its own bar at 320px
 * where the toggler and the field no longer fit side by side.
 */
export const searchFormClass = cn(
  'flex h-[46px] w-[257px] max-w-full min-w-0 shrink items-stretch overflow-hidden',
  'rounded-field border border-field-hairline',
)

/**
 * The field itself: `calc(100% - 46px)` of the form, white, 14px on the design's 21px
 * line in `rgba(0,0,0,.7)`, the design's `6px 12px 6px 16px` padding, square, unshadowed
 * and with no border of its own. The focus ring the design removes entirely is restored
 * here as a documented delta.
 */
export const searchInputClass = cn(
  'h-full w-[calc(100%-46px)] min-w-0 border-0 bg-white pt-[6px] pr-3 pb-[6px] pl-4',
  'text-[14px] leading-[21px] text-search-ink shadow-none outline-none rounded-none',
  'placeholder:text-search-ink',
  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold',
)

/** The submit control: the form's own 46px square, carrying a 20px magnifier. */
export const searchButtonClass = cn(
  'flex size-[46px] shrink-0 cursor-pointer items-center justify-center border-0 bg-white text-search-ink',
  'transition-colors duration-300 hover:text-black',
  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold',
)

/** The status line the form writes under itself once it is submitted. */
export const searchStatusClass = 'absolute top-full left-0 mt-1 text-[12px] text-white'

/** A content section: a hairline under it, breathing room above and below. */
export const sectionClass = 'scroll-mt-20 border-b border-black/5 py-16 last:border-b-0'

/** The section's small bar-coloured kicker. */
export const eyebrowClass = 'text-[11px] font-medium tracking-[2px] text-bar uppercase'

/** The section's own title: the band's 28px scale, black, left-aligned. */
export const sectionHeadingClass = 'text-[28px] leading-[1.5] font-normal text-black'

/** The section's opening paragraph, kept to a readable measure. */
export const bodyClass = 'max-w-[760px] text-[16px]'

/** The card grid inside a section that lists things. */
export const cardGridClass = 'mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'

/** One card: a white, square surface inside the pale page. */
export const cardClass = 'bg-white p-6'

/** A card's picture: a fixed band of the card's own width. */
export const cardImageClass = 'mb-4 h-[200px] w-full object-cover'

/** A card's title. */
export const cardTitleClass = 'text-[18px] leading-[1.5] font-medium text-black'

/** A card's own paragraph. */
export const cardBodyClass = 'text-[15px]'

/** The closing strip: a white band under a hairline. */
export const footerClass = 'border-t border-black/10 bg-white'

/** The strip's own row. */
export const footerRowClass = 'flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between'

/** A line of the closing strip. */
export const footerTextClass = 'text-[14px]'

/** The one link on the page that leaves it. */
export const footerLinkClass = cn(
  'font-semibold text-bar',
  'transition-colors duration-300 hover:text-gold',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bar',
)

/** The skip link, hidden until it is focused. */
export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[1100]',
  'focus:bg-bar focus:px-4 focus:py-2 focus:font-semibold focus:text-white',
)

/** Rolling to a destination keeps its heading clear of the bar, which is never pinned. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
