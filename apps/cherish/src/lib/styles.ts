import { cn } from '@free-react-templates/ui'
import { HEADER_OFFSET } from './site'

/**
 * The page root: the positioning context the header resolves against, on the design's own white
 * surface. The album band bleeds wider than the container, so the page never shows a scroll gutter.
 */
export const pageClass = 'relative min-h-screen overflow-x-hidden bg-page'

/** The skip link, hidden until it is focused. */
export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60]',
  'focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white',
)

/**
 * The container the page is built on: `width:100%` with `15px` gutters and the four Bootstrap tiers
 * the design was drawn against — **540 / 720 / 960 / 1140** from **576 / 768 / 992 / 1200** up.
 */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/** The header: `padding: 40px 0 20px`, with the wordmark centred above its own row of labels. */
export const headerClass = 'relative z-30 pt-10 pb-5'

export const headerInnerClass = 'text-center'

/** The monogram and the wordmark: `50px` of tail under them, `30px` below 992px. */
export const brandRowClass =
  'mb-[50px] inline-flex items-center gap-[10px] max-lg:mb-[30px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand'

/** The wordmark itself: the display face, tracked slightly, on the ink. */
export const brandWordClass = 'text-[30px] leading-none font-medium text-ink'

export const brandMarkClass = 'h-[34px] w-[34px] shrink-0 text-brand'

/** The nav row: `display: none` below 992px, where the mobile disclosure takes over. */
export const navRowClass = 'hidden items-center justify-center gap-[55px] lg:flex'

export const navListClass = 'm-0 flex list-none items-center gap-10 p-0'

export const navItemClass = 'group relative'

/**
 * One label: `15px`, uppercase, weight `700`, tracked a little — resting on the faint `#b5b5b5` and
 * on the ink once hovered or current. The `2px` gold rule under it is drawn by `.nav-label::after`.
 */
export function navLinkClass(current: boolean): string {
  return cn(
    'nav-label relative block text-[15px] font-bold tracking-[0.5px] uppercase transition-colors duration-500',
    current ? 'text-ink' : 'text-faint hover:text-ink',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
  )
}

/** The disclosure's own caret, which turns over while the panel is open. */
export const caretClass = 'inline-block transition-transform duration-300 group-hover:rotate-180'

/**
 * The dropdown panel: `150px` wide on the ink surface, hidden until the item is hovered or holds
 * focus, when it settles `22px` below the label.
 */
export const dropdownClass = cn(
  'invisible absolute top-[56px] left-0 z-[9] w-[150px] bg-panel py-[2px] text-left opacity-0',
  'transition-all duration-300',
  'group-hover:visible group-hover:top-[22px] group-hover:opacity-100',
  'group-focus-within:visible group-focus-within:top-[22px] group-focus-within:opacity-100',
)

export const dropdownListClass = 'm-0 list-none p-0'

/** One dropdown link: `14px`, weight `400`, `8px 20px` inside, white on ink. */
export const dropdownLinkClass = cn(
  'block px-5 py-2 text-[14px] font-normal normal-case text-white transition-colors duration-300',
  'hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
)

/** The search control at the right of the row. */
export const searchToggleClass = cn(
  'border-0 bg-transparent p-0 text-ink transition-colors duration-300 hover:text-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)

export const searchGlyphClass = 'h-[18px] w-[18px]'

/** The burger that stands in for the row below 992px: two bars inside a 22px box. */
export const burgerClass = cn(
  'relative h-[22px] w-[22px] border-0 bg-transparent p-0 lg:hidden',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)

/** One bar of the burger. The two rest one above the other and cross into an X while the panel is
 * open, so the control reads its own state without a second glyph. */
export function burgerBarClass(part: 'top' | 'bottom', isOpen: boolean): string {
  const bars: Record<'top' | 'bottom', { rest: string; open: string }> = {
    top: { rest: 'top-[5px]', open: 'top-[10px] rotate-45' },
    bottom: { rest: 'bottom-[5px]', open: 'bottom-[10px] -rotate-45' },
  }

  return cn(
    'absolute inset-x-0 h-[2px] bg-ink transition-all duration-300',
    bars[part].rest,
    isOpen && bars[part].open,
  )
}

/** The bar the header sits on, holding the search control at one end and the burger at the other. */
export const chromeRowClass = 'mt-[-14px] flex items-center justify-center gap-6 lg:gap-0'

/** The panel the burger opens: every label the row carries, stacked. */
export const mobilePanelClass = 'mt-6 flex flex-col items-center gap-4 lg:hidden'

export function mobileLinkClass(current: boolean): string {
  return cn(
    'text-[14px] font-bold tracking-[0.5px] uppercase',
    current ? 'text-ink' : 'text-faint hover:text-ink',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
  )
}

/* ── The search sheet ─────────────────────────────────────────────────────────────────────── */

/** The design's full-screen search sheet: fixed, white, over everything. */
export const searchSheetClass =
  'fixed inset-0 z-[99999] flex items-center justify-center bg-page px-[15px]'

export const searchFormClass = 'w-full max-w-[500px] text-center max-sm:max-w-full'

export const searchInputClass = cn(
  'w-full border-0 border-b-2 border-[#dddddd] bg-transparent pb-2 text-center',
  'text-[40px] leading-[1.2] text-[#999] max-sm:text-[24px]',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)

/** The close switch: a `50px` ink circle holding a `+`, turned 45° so it reads as a cross. */
export const searchCloseClass = cn(
  'absolute top-[30px] right-[30px] flex h-[50px] w-[50px] rotate-45 items-center justify-center',
  'rounded-full border-0 bg-[#333] pt-[6px] text-[28px] leading-none text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)

/* ── The hero ─────────────────────────────────────────────────────────────────────────────── */

/**
 * The hero band: a photographic block inset `75px` per side (`15px` below 768px), with `230px` of
 * lead space above its copy and `215px` below it.
 */
export const heroClass = cn(
  'relative mx-[75px] bg-cover bg-top bg-no-repeat py-[230px] pb-[215px] max-md:mx-[15px] max-md:py-[140px]',
)

/** The scrim over the photograph, so the white display type stays legible. */
export const heroScrimClass = 'absolute inset-0 bg-scrim'

export const heroTextClass = 'relative text-center'

/** The date: white, weight `700`, uppercase, tracked `2px`. */
export const heroDateClass = 'mb-[10px] text-[17px] leading-[27px] font-bold tracking-[2px] text-white uppercase'

/** The names: `70px` at weight `500`, stepping to `50px` below 768px. */
export const heroNamesClass =
  'mb-[6px] text-[70px] leading-[1.15] font-medium text-white max-md:text-[50px]'

export const ornamentClass = 'mx-auto mb-5 h-[18px] w-[120px] text-brand'

export const heroLeadClass =
  'mx-auto mb-10 max-w-[52ch] text-[20px] leading-[30px] text-white'

/** The design's own gold button: square, `14px 35px 10px`, `15px` weight `700` in white. */
export const brandButtonClass =
  'h-auto rounded-none bg-brand px-[35px] py-[14px] pb-[10px] text-[15px] font-bold text-white ' +
  'transition-colors duration-300 hover:bg-brand/90 focus-visible:ring-brand/40'

/* ── The blocks below the hero ────────────────────────────────────────────────────────────── */

/** One band: `100px` of air above and below, with room to clear the header when jumped to. */
export const sectionClass = 'py-[100px]'

/** The centred title block every band opens with: an eyebrow, the heading and a gold flourish. */
export const titleBlockClass = 'mx-auto mb-[45px] max-w-[68ch] text-center'

export const eyebrowClass = 'mb-2 inline-block font-sans text-[17px] leading-[27px] text-muted'

export const sectionHeadingClass = 'mb-5 text-[36px] leading-[1.3] font-bold text-ink'

export const leadClass = 'mt-5'

/* The story block */

export const storyRowClass = 'grid grid-cols-1 items-end gap-10 md:grid-cols-4'

export const partnerCardClass = 'text-center md:col-span-1 md:pt-[140px] max-md:pt-0'

export const partnerNameClass = 'mb-[10px] text-[30px] leading-[1.3] font-bold text-ink'

export const partnerBioClass = 'mt-[6px] mb-[30px]'

export const partnerSocialsClass = 'flex list-none items-center justify-center gap-[26px] p-0'

export const socialLinkClass = cn(
  'text-[15px] text-ink transition-colors duration-300 hover:text-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)

export const socialGlyphClass = 'h-[18px] w-[18px]'

export const portraitCellClass = 'text-center md:col-span-2'

export const portraitClass = 'mx-auto aspect-square w-full max-w-[380px] rounded-full object-cover'

/* The countdown */

export const countdownBandClass = 'pt-0 pb-[100px]'

export const countdownRowClass = 'flex flex-wrap justify-center gap-[30px] text-center'

/** One counter: `150px` wide, digits in `72px` ink over a `20px` uppercase label, with a gold `:`
 * between the counters (the last one carries none). */
export function counterClass(last: boolean): string {
  return cn('relative w-[150px] max-sm:w-[calc(50%-15px)]', !last && 'counter-colon')
}

export const counterValueClass = 'block text-[72px] leading-[92px] font-bold text-ink'

export const counterLabelClass = 'text-[20px] leading-[27px] text-muted uppercase'

export const countdownDoneClass = 'text-center text-[24px] leading-[1.4] font-bold text-ink'

/* The album */

export const albumClass = 'overflow-hidden mx-[60px] max-md:mx-0'

/** The album's title band: the section's own photograph, with the frames pulled up over it. */
export const albumBandClass = cn(
  'bg-cover bg-top bg-no-repeat py-[100px] pb-[200px] max-md:py-[60px] max-md:pb-[120px]',
)

export const albumFramesClass =
  'grid grid-cols-2 gap-5 p-0 lg:grid-cols-4 max-lg:mt-[-100px] mt-[-145px]'

export const albumFrameClass = 'list-none'

export const albumImageClass = 'h-[240px] w-full object-cover'

/* The day's running order */

export const scheduleBandClass = 'pt-[80px] pb-[160px]'

export const scheduleRailClass = 'event-rail relative'

export const scheduleViewportClass = 'overflow-hidden'

export const scheduleTrackClass = 'flex transition-transform duration-500 ease-in-out'

export const scheduleItemClass = 'w-full shrink-0 px-[15px] text-center md:w-1/2 lg:w-1/4'

/** The event icon: a `77 × 75px` box whose dot rests on the rail `50px` below it. */
export const eventIconClass =
  'event-dot relative mx-auto mb-[80px] h-[75px] w-[77px] text-brand'

export const eventIconGlyphClass = 'mx-auto h-[52px] w-[52px]'

/** The time: `24px` in the secondary sans, on the muted tone. */
export const eventTimeClass = 'block font-sans text-[24px] leading-[1.4] text-muted'

export const eventTitleClass = 'mb-[15px] text-[30px] leading-[1.3] font-bold text-ink'

export function dotClass(active: boolean): string {
  return cn(
    'h-2 w-2 rounded-full border-0 p-0 transition-colors duration-300',
    active ? 'bg-ink' : 'bg-hairline',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
  )
}

export const dotsRowClass = 'flex items-center justify-center gap-[5px] pt-[15px] list-none m-0 p-0'

export const sliderButtonClass = cn(
  'border-0 bg-transparent p-0 text-ink transition-colors duration-300 hover:text-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)

export const sliderControlsClass = 'mt-6 flex items-center justify-center gap-8'

export const sliderGlyphClass = 'h-[22px] w-[22px]'

/* The reply card */

export const rsvpBandClass = cn('bg-cover bg-top bg-no-repeat pt-[100px] pb-[100px] max-md:py-[60px]')

export const rsvpRowClass = 'grid grid-cols-1 items-start gap-10 md:grid-cols-2'

/** The card that floats out of its band on `-70px` top and bottom margins. */
export const rsvpCardClass = cn(
  'rounded-[10px] bg-page px-[50px] py-[80px] pb-[85px] shadow-card',
  'my-[-70px] max-md:mx-0 max-md:my-0 max-md:px-[35px] max-md:py-[60px]',
  'max-sm:px-[30px] max-sm:py-[60px]',
)

export const rsvpEyebrowClass = 'mb-2 inline-block font-sans text-[17px] text-brand'

export const rsvpFieldClass = cn(
  'mb-[25px] h-[48px] w-full rounded-none border border-hairline bg-transparent px-5',
  'font-sans text-[15px] text-muted placeholder:text-muted',
  'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand',
)

export const rsvpSelectClass = cn(
  'mb-[25px] h-[48px] w-full rounded-none border border-hairline bg-transparent px-5',
  'font-sans text-[15px] text-ink',
  'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand',
)

export const fieldErrorClass = 'mb-4 text-left font-sans text-[14px] text-heart'

export const rsvpSubmitWrapClass = 'mt-[15px] text-center'

export const rsvpSideClass = 'pt-[180px] pl-[65px] text-left max-lg:pt-[40px] max-lg:pl-0 max-lg:pb-[80px]'

export const onDarkEyebrowClass = 'mb-2 inline-block font-sans text-[17px] text-white'

export const onDarkHeadingClass = 'mb-5 text-[36px] leading-[1.3] font-bold text-white'

export const onDarkBodyClass = 'text-white'

export const successTitleClass = 'mb-4 text-[24px] leading-[1.4] font-bold text-ink'

export const successBodyClass = 'font-sans text-[15px] text-muted'

/* The venue cards */

export const venueBandClass = 'pt-[170px] pb-5'

export const venueRowClass = 'grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3'

export const venueCardClass = cn(
  'rounded-[10px] bg-page px-[40px] py-[50px] pb-[40px] text-center shadow-venue',
)

export const venueIconClass = 'mx-auto mb-5 h-[46px] w-[46px] text-brand'

export const venueTitleClass = 'mt-5 mb-[10px] text-[24px] leading-[1.3] font-bold text-ink'

export const venueListClass = 'm-0 list-none p-0'

export const venueLineClass = 'font-sans text-[17px] leading-[30px] text-muted'

export const venueGlyphClass = 'mr-[6px] inline-block h-[16px] w-[16px] align-[-2px] text-ink'

/* The footer */

export const footerClass = 'pt-[50px] pb-[100px]'

export const footerTextClass = 'font-sans text-[15px] leading-[27px] text-muted'

export const footerLinkClass = cn(
  'font-medium text-brand transition-colors duration-300 hover:text-ink',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)

export const footerMarkClass = 'mb-[26px] flex flex-col items-center gap-2'

export const footerCopyrightClass = 'mb-[30px]'

export const footerSocialsClass = 'flex list-none items-center justify-center gap-[11px] p-0'

export const footerSocialClass = cn(
  'flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-[15px] text-muted',
  'transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)

/** Rolling to a destination keeps its heading clear of the header, which is never in the flow. */
export const sectionAnchorStyle = { scrollMarginTop: HEADER_OFFSET } as const
