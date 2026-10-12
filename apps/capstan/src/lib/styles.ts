import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The band the page opens on: the design's `padding:112px 0` (`7em`) over the page's own
 * `#fff`, holding the centred heading column and — as the design lays it out, inside the
 * same section — the strip itself, so the band's own 112px of tail closes the composition
 * under the strip.
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
 * The wordmark: one uppercase line in black at the strip's left, 20px on the design's own
 * 36px line inside `padding:5px 0` — a 46px box — with the design's 16px of space after
 * it. Below 992px the same text is white on the black strip. It rests in the colour it
 * hovers in, so only its focus ring appears, and it is the one link in the chrome that
 * points at the top of the page rather than at a destination.
 */
export const wordmarkClass = cn(
  'mr-4 inline-block py-[5px] text-[20px] leading-[36px] whitespace-nowrap text-black uppercase max-lg:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/**
 * The strip: **full-bleed**, transparent over the `#fff` page above 992px — its only
 * edges are the design's two `1px rgba(0,0,0,0.05)` hairlines — turning solid black with
 * the design's own `10px 15px` below 992px. It is `relative` with its layer raised so the
 * panel paints over the page, and it carries no radius and no shadow at any width. It is
 * never sticky and never fixed: it sits in the flow, so scrolling takes it away with
 * everything else.
 */
export const barClass =
  'relative z-[3] w-full border-y border-hairline bg-transparent p-0 max-lg:bg-bar-dark max-lg:px-[15px] max-lg:py-[10px]'

/** Below 992px the design drops the container's gutters — the strip's padding is the gutter. */
export const barContainerClass = 'max-lg:px-0'

/**
 * The strip's row: a nowrap flex line holding the wordmark, the toggler (hidden above
 * 992px), the list and the find field — the field last visually and the list floated into
 * the slack it leaves. Below 992px it wraps, so the collapsing panel takes a line of its
 * own under the toggler.
 */
export const barRowClass = 'relative flex flex-nowrap items-center justify-between max-lg:flex-wrap'

/** The wide presentation's wrapper: the space left between the wordmark and the field. */
export const desktopNavClass = 'hidden lg:flex lg:flex-1 lg:basis-auto lg:items-center'

/**
 * The strip's list: six boxes stretched to the strip's full height and floated into the
 * middle of the bar by the list's own auto margin — which is what leaves slack on both
 * sides of it, between the wordmark and the find field.
 */
export const desktopListClass = 'm-0 mx-auto flex list-none items-stretch p-0'

/**
 * One row of the strip: a flex box that is also the positioning context its panel hangs
 * from, which is what makes `top:100%; left:0` measure from the row rather than from the
 * strip's own edge. It wraps, so the folded presentation's sub-list can take a line of its
 * own under its trigger instead of being squeezed in beside it.
 */
export const navItemClass = 'relative flex flex-wrap'

/** The panel's own `min-width:160px`, kept here so the placement guard can read it. */
export const PANEL_WIDTH = 160

export type NavVariant = 'desktop' | 'panel'

export interface NavRowOptions {
  variant: NavVariant
  current: boolean
}

/**
 * A row's box, in whichever of the two presentations it is drawn. On the wide strip every
 * row is a 13px grey label on the design's own `19.2px 20px` padding — 62px tall, which is
 * what sets the strip's height — turning the accent teal on hover and on focus. Inside the
 * collapsing panel the same rows become full-width blocks on the design's `11.2px 0`
 * padding, resting at 70% white with the open destination wearing the accent instead. The
 * row is the group the underline belongs to.
 */
export function navRowClass({ variant, current }: NavRowOptions): string {
  if (variant === 'panel') {
    return cn(
      'group relative block w-full py-[11.2px] text-[13px] leading-[1.8]',
      'transition-colors duration-300 hover:text-white',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
      current ? 'text-accent' : 'text-panel-row',
    )
  }

  return cn(
    'group relative block px-5 py-[19.2px] text-[13px] leading-[1.8] transition-colors duration-300',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
    current ? 'text-black' : 'text-ink hover:text-accent focus-visible:text-accent',
  )
}

/**
 * The accent underline: a `1px` full-width bar sitting at `bottom:-1px` of its row, painted
 * **behind** the label (`-z-10`) and wiped in from the left by `scale-x-0 →
 * scale-x-100` over the design's `all .5s ease-in-out`. The row the page is already on
 * keeps it out at rest, so exactly one row reads as underlined on load. The design hides
 * this underline entirely inside the collapsing panel, which is why the panel's rows never
 * render one.
 */
export function underlineClass(current: boolean): string {
  return cn(
    'pointer-events-none absolute bottom-[-1px] left-0 -z-10 h-px w-full origin-left bg-accent transition-transform duration-500 ease-in-out',
    current ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100',
  )
}

/** The disclosure's trigger keeps its row's box and adds the caret's own offset. */
export const navTriggerClass = 'inline-flex items-center gap-[3px]'

/** The caret beside the disclosing row's label. */
export const caretClass = 'mt-px shrink-0'

/**
 * The disclosure's panel. On the wide strip it hangs from `top:100%` of its row, flush with
 * the trigger's left edge unless it would leave the viewport, in which case it hangs from
 * the trigger's right edge instead; it is white with no padding of its own, `4px`-rounded
 * and carries the design's one shadow. Inside the collapsing panel the same rows sit in the
 * flow, full width on black behind the trigger's row, squared off and carrying the design's
 * `1px rgba(255,255,255,0.3)` left rule — the design leaves this sub-list permanently
 * expanded there, which is what the panel presentation reproduces rather than hiding behind
 * a disclosure.
 */
export function dropdownPanelClass(variant: NavVariant, flip: boolean): string {
  if (variant === 'panel') {
    return cn(
      'm-0 w-full basis-full list-none border-l border-panel-rule bg-bar-dark p-0',
      'rounded-none',
    )
  }

  return cn(
    'absolute top-full z-[1000] m-0 min-w-[160px] list-none bg-white p-0 rounded-panel shadow-panel',
    flip ? 'left-auto right-0' : 'left-0',
  )
}

/**
 * One row inside the disclosure: 12px on the design's 21.6px line with 4px above and below
 * (29.59px), 24px either side. The design's own hover is a teal fill with white text, kept
 * here and served on focus as well. Inside the collapsing panel the same rows rest at 80%
 * white.
 */
export function dropdownItemClass(variant: NavVariant): string {
  return cn(
    'block w-full px-6 py-1 text-[12px] leading-[1.8]',
    'transition-colors duration-300 hover:bg-accent hover:text-white focus:bg-accent focus:text-white',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
    variant === 'panel' ? 'text-panel-item' : 'text-black',
  )
}

/**
 * The collapsing panel: a real height animation — the grid track travels from `0fr` to
 * `1fr` over the design's `0.35s ease` — whose contents are mounted only while it is open,
 * so a shut panel holds no focusable copies of the strip's rows. It is hidden entirely from
 * 992px up, where the strip's list takes over.
 */
export function collapseClass(isOpen: boolean): string {
  return cn(
    'grid w-full transition-[grid-template-rows] duration-[350ms] ease-collapse lg:hidden',
    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
  )
}

/** The clip that lets the panel's own content travel out of a zero-height track. */
export const collapseInnerClass = 'overflow-hidden'

/** The panel's own list: one column, with the design's 10px of tail under it. */
export const panelListClass = 'm-0 flex list-none flex-col p-0 pb-[10px]'

/** The strip's toggler: a 16px glyph and a 16px tracked uppercase word in 50% white. */
export const togglerClass = cn(
  'flex cursor-pointer items-center gap-[3px] border-0 bg-transparent pt-1 pr-0 pb-1 pl-3',
  'text-[16px] leading-none tracking-[1.6px] text-toggler uppercase lg:hidden',
  'transition-colors duration-300 hover:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)

/** The design puts the glyph a hair below the label's own line. */
export const togglerIconClass = '-translate-y-px'

/**
 * The find field's own row, holding the form and the status line under it. The design
 * removes the whole field below 767.98px, which is what `hidden md:block` reproduces — and
 * on the wide strip it is last in the bar whatever its DOM place.
 */
export const searchRowClass = 'relative hidden min-w-0 shrink md:block lg:order-last'

/**
 * The find form: the design's **257 × 46** white field with a 4px radius, its own
 * `1px rgba(255,255,255,0.1)` hairline and — on the left edge only — the design's
 * `1px rgba(0,0,0,0.05)` rule, with `overflow:hidden` over both. It is allowed to shrink,
 * because the design fixes it at 257px and then takes it away entirely below 768px.
 */
export const searchFormClass = cn(
  'flex h-[46px] w-[257px] max-w-full min-w-0 shrink items-stretch overflow-hidden',
  'rounded-field border border-field-hairline border-l-hairline',
)

/**
 * The field itself: `calc(100% - 46px)` of the form, white, 14px in `rgba(0,0,0,.7)`, the
 * design's own `6px 12px 6px 16px` padding, square, unshadowed and with no border of its
 * own — the design removes the input's border and background outright, and removes its
 * outline too. The focus ring restored in its place is a documented delta.
 */
export const searchInputClass = cn(
  'h-full w-[calc(100%-46px)] min-w-0 rounded-none border-0 bg-white pt-[6px] pr-3 pb-[6px] pl-4',
  'text-[14px] leading-[21px] text-search-ink shadow-none outline-none',
  'placeholder:text-search-ink',
  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/** The submit control: the form's own 46px square, carrying a 16px magnifier. */
export const searchButtonClass = cn(
  'flex size-[46px] shrink-0 cursor-pointer items-center justify-center border-0 bg-white text-search-ink',
  'transition-colors duration-300 hover:text-black',
  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
)

/** The status line the form writes under itself once it is submitted. */
export const searchStatusClass = 'absolute top-full left-0 mt-1 text-[12px] text-ink'

/** A content section: a hairline under it, breathing room above and below. */
export const sectionClass = 'scroll-mt-20 border-b border-black/5 py-16 last:border-b-0'

/** The section's small accent kicker. */
export const eyebrowClass = 'text-[11px] font-medium tracking-[2px] text-accent uppercase'

/** The section's own title: the band's 28px scale, black, left-aligned. */
export const sectionHeadingClass = 'text-[28px] leading-[1.5] font-normal text-black'

/** The section's opening paragraph, kept to a readable measure. */
export const bodyClass = 'max-w-[760px] text-[16px]'

/** The card grid inside a section that lists things. */
export const cardGridClass = 'mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'

/** One card: a square surface inside the white page, held apart by its own hairline. */
export const cardClass = 'border border-black/5 p-6'

/** A card's picture: a fixed band of the card's own width. */
export const cardImageClass = 'mb-4 h-[200px] w-full object-cover'

/** A card's title. */
export const cardTitleClass = 'text-[18px] leading-[1.5] font-medium text-black'

/** A card's own paragraph. */
export const cardBodyClass = 'text-[15px]'

/** The closing strip: a band under a hairline. */
export const footerClass = 'border-t border-black/10'

/** The strip's own row. */
export const footerRowClass =
  'flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between'

/** A line of the closing strip. */
export const footerTextClass = 'text-[14px]'

/** The one link on the page that leaves it. */
export const footerLinkClass = cn(
  'font-semibold text-accent',
  'transition-colors duration-300 hover:text-black',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
)

/** The skip link, hidden until it is focused. */
export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[1100]',
  'focus:bg-bar-dark focus:px-4 focus:py-2 focus:font-semibold focus:text-white',
)

/** Rolling to a destination keeps its heading clear of the strip, which is never pinned. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
