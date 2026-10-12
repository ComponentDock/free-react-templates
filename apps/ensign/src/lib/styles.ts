import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The band above the bar: the design's `padding:112px 0` (`7em`) over the page's own
 * `#fafafa`, holding the centred heading column and — as the design does — the bar
 * itself, so the 112px below the bar closes the band on its own edge.
 */
export const bandClass = 'py-28'

/**
 * The page's container: full width with 15px gutters, taking the classic tiers — 540px
 * from 576px, 720px from 768px, 960px from 992px and the widest 1140px cap from
 * 1200px, where the design's container stops growing.
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
 * The bar: **full-bleed**, one solid brand blue with no padding above 992px, turning
 * black with the design's own `10px 15px` below it. It is `relative` with its layer
 * raised so the dropdown panel paints over the page, and it carries no border, no
 * radius and no shadow at any width. It is never sticky and never fixed: it sits in
 * the flow, so scrolling takes it away with everything else.
 */
export const barClass =
  'relative z-[3] w-full bg-brand p-0 max-lg:bg-bar-mobile max-lg:px-[15px] max-lg:py-[10px]'

/** Below 992px the design drops the container's gutters — the bar's own padding is the gutter. */
export const barContainerClass = 'max-lg:px-0'

/**
 * The bar's row: a nowrap flex line holding the wordmark, the toggler and the two
 * presentations of the list, with the space between them absorbed. Below 992px it
 * wraps, so the collapsing panel takes a line of its own under the wordmark.
 */
export const barRowClass = 'relative flex flex-nowrap items-center justify-between max-lg:flex-wrap'

/**
 * The wordmark: uppercase, 20px on the design's 36px line, weight 400, white, with 5px
 * above and below (a 46px box) and 16px of air before whatever follows. It rests in the
 * same white it hovers in, so its colour never changes — only the focus ring appears.
 */
export const wordmarkClass = cn(
  'mr-4 inline-block py-[5px] text-[20px] leading-[36px] font-normal whitespace-nowrap uppercase text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)

/** The wide presentation's wrapper: it takes the space left between the wordmark and the edge. */
export const desktopNavClass = 'hidden lg:flex lg:flex-1 lg:basis-auto'

/**
 * The bar's list: one row of seven boxes, each stretched to the bar's full height and
 * pushed to the container's inner right edge by the list's own auto margin, which is
 * what makes the orange block land flush with that edge.
 */
export const desktopListClass = 'm-0 flex list-none items-stretch p-0 lg:ml-auto'

/**
 * One row of the bar: a flex box that is also the positioning context its panel hangs
 * from, which is what makes `top:100%; left:0` measure from the row rather than from the
 * bar's own edge. It wraps, so the folded presentation's sub-list can take a line of its
 * own under its trigger instead of being squeezed in beside it.
 */
export const navItemClass = 'relative flex flex-wrap'

/** The one non-colour signal the open destination carries: an inset underline. */
export const CURRENT_MARK = 'shadow-[inset_0_-3px_0_0_#ffffff]'

/** The disclosure's `min-width:160px`, kept here so the placement guard can read it. */
export const PANEL_WIDTH = 160

export type NavVariant = 'desktop' | 'panel'

export interface NavRowOptions {
  variant: NavVariant
  current: boolean
  cta: boolean
}

/**
 * A row's box, in whichever of the two presentations it is drawn. On the wide bar every
 * row is an 11px tracked uppercase label on the design's 24px/20px padding — 67.8px
 * tall, which is what sets the bar's height — resting in the same white the design
 * gives all seven, with the open destination additionally marked by an inset underline
 * (the design renders it in exactly the same white as its neighbours, so the mark and
 * `aria-current` are a documented delta). The solid block is the same geometry in
 * orange. Inside the collapsing panel the rows become full-width blocks at 11px on the
 * design's `14.4px 0` (48.58px each, a 5px radius and 15px of side padding on the orange
 * block), resting at 70% white except for the open destination.
 */
export function navRowClass({ variant, current, cta }: NavRowOptions): string {
  if (variant === 'panel') {
    if (cta) {
      return cn(
        'block w-full rounded-[5px] bg-cta px-[15px] py-[14.4px] text-[11px] leading-[19.8px] font-medium uppercase tracking-[2px] text-white',
        'transition-colors duration-300 hover:bg-cta-deep',
        'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
      )
    }

    return cn(
      'block w-full py-[14.4px] text-[11px] leading-[19.8px] font-medium uppercase tracking-[2px]',
      'transition-colors duration-300 hover:text-white',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
      current ? cn('text-white', CURRENT_MARK) : 'text-panel-row',
    )
  }

  if (cta) {
    return cn(
      'block bg-cta px-5 py-6 text-[11px] leading-[19.8px] font-medium uppercase tracking-[2px] text-white',
      'transition-colors duration-300 hover:bg-cta-deep',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
    )
  }

  return cn(
    'block px-5 py-6 text-[11px] leading-[19.8px] font-medium uppercase tracking-[2px] text-white',
    'transition-colors duration-300 hover:bg-brand-deep',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
    current ? CURRENT_MARK : '',
  )
}

/** The disclosure's trigger keeps its row's box and adds the caret's own offset. */
export const navTriggerClass = 'inline-flex items-center gap-[2.805px]'

/** The caret: the design's 3px `currentColor` triangle, drawn as a small glyph. */
export const caretClass = 'mt-[1px] shrink-0'

/**
 * The disclosure's panel. On the wide bar it hangs 2px under the bar, flush with its
 * trigger's left edge unless it would leave the viewport, in which case it hangs from
 * the trigger's right edge instead; it is white, `min-width:160px`, `padding:8px 0`,
 * `4px`-rounded and carries the design's one shadow. Inside the collapsing panel the
 * same rows sit in the flow, full width, on black behind a hairline, with no radius and
 * no shadow.
 */
export function dropdownPanelClass(variant: NavVariant, flip: boolean): string {
  if (variant === 'panel') {
    return cn(
      'm-0 w-full basis-full list-none border-l border-hairline bg-black p-0 py-2 transition-colors duration-300',
      'mt-[2px] rounded-none',
    )
  }

  return cn(
    'absolute top-full z-[1000] m-0 list-none bg-white py-2 mt-[2px] min-w-[160px] rounded-[4px] shadow-panel',
    flip ? 'left-auto right-0' : 'left-0',
  )
}

/**
 * One row inside the disclosure: 12px on the design's 21.6px line with 4px above and
 * below (29.59px), 24px either side. On the wide bar it rests in black and fills brand
 * blue on hover or focus, its label turning white; inside the collapsing panel it rests
 * at 80% white under the same brand-blue hover.
 */
export function dropdownItemClass(variant: NavVariant): string {
  if (variant === 'panel') {
    return cn(
      'block w-full px-6 py-1 text-[12px] leading-[1.8] text-panel-item',
      'transition-colors duration-300 hover:bg-brand hover:text-white focus:bg-brand focus:text-white',
      'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
    )
  }

  return cn(
    'block w-full px-6 py-1 text-[12px] leading-[1.8] text-black',
    'transition-colors duration-300 hover:bg-brand hover:text-white focus:bg-brand focus:text-white',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
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
  'text-[16px] leading-none uppercase tracking-[1.6px] text-toggler lg:hidden',
  'transition-colors duration-300 hover:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)

/** The design puts the glyph a hair below the label's own line. */
export const togglerIconClass = '-translate-y-[1px]'

/** A content section: a hairline under it, breathing room above and below. */
export const sectionClass = 'scroll-mt-20 border-b border-black/5 py-16 last:border-b-0'

/** The section's small brand-coloured kicker. */
export const eyebrowClass = 'text-[11px] font-medium uppercase tracking-[2px] text-brand'

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
  'font-semibold text-brand',
  'transition-colors duration-300 hover:text-brand-deep',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
)

/** The skip link, hidden until it is focused. */
export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[1100]',
  'focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white',
)

/** Rolling to a destination keeps its heading clear of the bar, which is never pinned. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
