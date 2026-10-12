import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/** The container the bar shares with the sections: 15px gutters and the design's stepped widths. */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/** Which of the row's two presentations is on screen at this width. */
export type NavVariant = 'desktop' | 'collapse'

/**
 * A list of rows: on the desktop row each list owns its own `auto` left margin, so
 * the bar's leftover space is split between the items and the call-to-action block
 * rather than collapsing into one right-aligned cluster. In the narrow bar the list
 * is a full-width column.
 */
export function navListClass(variant: NavVariant, padded = false): string {
  return variant === 'desktop'
    ? cn('m-0 ml-auto flex list-none items-center p-0', padded && 'lg:pl-12')
    : 'm-0 flex w-full list-none flex-col p-0'
}

export interface NavLinkOptions {
  variant: NavVariant
  /** The current destination stays fully white; everything else sits at 80% white. */
  current?: boolean
  /** A row that owns a dropdown reserves room for its caret. */
  branch?: boolean
}

/**
 * A row's box: 16px at weight 400, 80% white until hover or focus and fully white
 * when it is the current destination. The label padding is the design's
 * three-tier one — `8px 0` by default, `8px 8px` from 768px (where the row shares
 * the bar with the call-to-action block) and `27.2px 8px` from 1200px (where the
 * row grows to its full 78px height).
 */
export function navLinkClass({ variant, current = false, branch = false }: NavLinkOptions): string {
  return cn(
    'block text-[16px] font-normal whitespace-nowrap transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
    variant === 'desktop' ? 'px-0 py-2 md:px-2 xl:py-[27.2px]' : 'w-full px-0 py-2 text-left',
    branch && 'relative flex w-full cursor-pointer items-center',
    current ? 'text-white' : 'text-white/80 hover:text-white focus-visible:text-white',
  )
}

/**
 * The dropdown's surface: white, at least `13em` (182px) wide, 4px radius, offset
 * 10px up under its row, with a 7px white triangle at 10% from its left edge (the
 * triangle is dropped below 992px). It opens with no transition at all — the
 * design swaps it in — and flips to the row's right edge when opening leftwards
 * would run past the window.
 */
export function flyoutClass(flipped: boolean): string {
  return cn(
    // `13em` is 182px at the surface's own 14px type, exactly as the design sizes it.
    'absolute top-full z-[1000] mt-[-10px] min-w-[13em] rounded-flyout bg-white py-2 text-[14px] shadow-flyout',
    "before:absolute before:bottom-full before:left-[10%] before:border-[7px] before:border-transparent before:border-b-white before:content-[''] max-lg:before:hidden",
    flipped ? 'right-0' : 'left-0',
  )
}

/** One row inside a dropdown surface: 14px ink, 7px by 24px, blue on hover and focus. */
export const flyoutRowClass = cn(
  'block px-6 py-[7px] text-[14px] whitespace-nowrap text-ink transition-colors duration-300',
  'hover:bg-brand hover:text-white focus-visible:bg-brand focus-visible:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
)

/** The narrow bar's inline copy of the dropdown: the same rows, in the flow. */
export function collapseSublistClass(): string {
  return 'm-0 flex w-full list-none flex-col p-0'
}

/**
 * The square call-to-action block: brand blue, white uppercase 12.8px at weight
 * 700 and `line-height: 1`, 15px by 20px, with no radius at all. On hover and on
 * focus the surface inverts to white with brand-blue text and a soft right-hand
 * shadow, over the design's 300ms ease.
 */
export function ctaClass(variant: NavVariant): string {
  return cn(
    'block shrink-0 bg-brand px-5 py-[15px] text-[12.8px] leading-none font-bold whitespace-nowrap text-white uppercase',
    'transition-[background-color,color,box-shadow] duration-300',
    'hover:bg-white hover:text-brand hover:shadow-cta focus-visible:bg-white focus-visible:text-brand',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
    variant === 'collapse' && 'w-full',
  )
}

/** Scrolling to a section keeps its heading clear of the floating bar. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
