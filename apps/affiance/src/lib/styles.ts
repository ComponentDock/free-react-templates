import { cn } from '@free-react-templates/ui'

/**
 * The page root. The bands that bleed edge to edge are clipped here so the page never grows a
 * horizontal gutter, and the whole page rests on white.
 */
export const pageClass = 'relative min-h-screen overflow-x-hidden bg-white'

/** The skip link, hidden until it is focused. */
export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60]',
  'focus:bg-brand focus:px-4 focus:py-2 focus:font-bold focus:text-white',
)

/**
 * The container the page is built on: `width:100%` with 15px gutters and the four tiers the design
 * was drawn against — 540 / 720 / 960 / 1140 from 576 / 768 / 992 / 1200 up.
 */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/** Every band carries the design's `7em 0`, softened to `6em 0` on small screens. */
export const sectionClass = 'py-[96px] md:py-[112px]'

/** The centred title block every band after the hero opens with. */
export const sectionTitleClass = 'mb-[50px] text-center'
export const subheadingClass =
  'inline-block border border-dashed border-brand px-[10px] text-[14px] font-black tracking-[2px] text-brand uppercase'
export const sectionHeadingClass = 'mt-[5px] font-script text-[50px] leading-[1.2] text-brand md:text-[80px]'

/* Header -------------------------------------------------------------------------------------- */

/** Over the hero the bar floats transparent and absolute; past the threshold it pins itself. */
export function headerClass(scrolled: boolean): string {
  return cn(
    'inset-x-0 top-0 z-30 pt-[10px] px-[15px] transition-colors duration-300',
    scrolled ? 'fixed bg-tint shadow-nav' : 'absolute bg-brand lg:bg-transparent',
  )
}

export const headerRowClass = 'flex items-center justify-between gap-[15px]'

export function wordmarkClass(scrolled: boolean): string {
  return cn(
    'py-[11px] text-[20px] leading-none font-bold tracking-[0.5px] uppercase transition-colors duration-300',
    scrolled ? 'text-black' : 'text-white',
  )
}

export function navLinkClass(current: boolean, scrolled: boolean): string {
  return cn(
    'block px-[12px] py-[11px] text-[14px] leading-none font-semibold uppercase transition-colors duration-300',
    scrolled ? 'text-black hover:text-brand' : 'text-white hover:text-brand',
    current && 'text-brand',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
  )
}

export const navRowClass = 'hidden lg:block'
export const navListClass = 'm-0 flex list-none items-center p-0'

export function burgerClass(scrolled: boolean): string {
  return cn(
    'inline-flex items-center py-[11px] text-[16px] tracking-[0.1em] uppercase transition-colors duration-300 lg:hidden',
    scrolled ? 'text-black' : 'text-white',
  )
}

export const burgerIconClass = 'h-[22px] w-[22px]'
export const foldedMenuClass = 'mt-[10px] bg-brand pb-[15px] text-white lg:hidden'
export const foldedListClass = 'm-0 flex list-none flex-col p-0'

/* Hero ---------------------------------------------------------------------------------------- */

export const heroClass = 'relative flex min-h-screen items-center overflow-hidden'
export const heroPhotoClass = 'absolute inset-0 bg-cover bg-center bg-no-repeat'
export const heroScrimClass = 'absolute inset-0 bg-scrim'
export const heroContentClass = 'relative z-[1] py-[120px] text-center text-white'
export const heroBandClass = 'flex flex-col items-center'
export const heroBadgeClass =
  'relative flex h-[120px] w-[120px] items-center justify-center rounded-full bg-brand'
export const heroBadgeRingClass =
  'pointer-events-none absolute inset-[10px] rounded-full border-[1.4px] border-dashed border-badge-ring'
export const heroBadgeGlyphClass = 'h-[60px] w-[60px] text-white'
export const heroNamesClass = 'mt-[25px] font-script text-[8vw] leading-[1.2] text-white'
export const heroTaglineClass =
  'mt-[25px] inline-block rounded-pill bg-white px-[15px] py-[8px] text-[14px] font-black tracking-[7px] text-brand uppercase'

/* Countdown ----------------------------------------------------------------------------------- */

export const countdownSectionClass = 'relative z-[2] -mt-[50px]'
export const countdownBarClass = 'relative rounded-bar bg-brand shadow-bar'
export const countdownFrameClass =
  'pointer-events-none absolute inset-[10px] border border-dashed border-timer-frame'
export const countdownRowClass = 'relative m-0 flex list-none flex-col p-0 sm:flex-row'
const countdownCellClass = 'w-full py-[10px] text-center sm:w-1/5'
export const countdownScriptCellClass = cn(countdownCellClass, 'bg-brand-cell')
export const countdownNumberCellClass = cn(
  countdownCellClass,
  'border-t border-hairline sm:border-t-0 sm:border-l',
)
export const countdownScriptClass = 'font-script text-[30px] leading-[1.2] font-semibold text-white'
export const countdownNumberClass =
  'font-script text-[40px] leading-none font-semibold text-white tabular-nums'
export const countdownLabelClass = 'mt-[20px] block text-[12px] tracking-[2px] uppercase'

/* Bride & groom ------------------------------------------------------------------------------- */

export const portraitRowClass =
  'flex flex-col items-center gap-[30px] md:flex-row md:gap-0'
export const portraitRowReverseClass = 'md:flex-row-reverse'
export const portraitRowSpacingClass = 'mb-[40px] md:mb-[80px]'
export const portraitPhotoClass = 'h-[400px] w-[400px] max-w-full border-[15px] border-tint object-cover'
const portraitTextBaseClass =
  'relative w-full pt-[30px] pb-[100px] text-center md:w-[calc(100%_-_400px)] md:pb-0'

export function portraitTextClass(mark: 'left' | 'right'): string {
  return cn(portraitTextBaseClass, mark === 'right' ? 'md:text-right md:pr-[30px]' : 'md:pl-[30px]')
}

export const portraitNameClass = 'font-script text-[50px] leading-[1.2] text-brand'
export const portraitBlurbClass = 'mt-[15px]'
export const portraitMarkClass = 'absolute bottom-0 h-[100px] w-[100px] text-brand'

export function markCornerClass(mark: 'left' | 'right'): string {
  return mark === 'left' ? 'left-0' : 'right-0'
}

/* Love story ---------------------------------------------------------------------------------- */

export const loveStoryClass = 'relative overflow-hidden bg-brand'
export const loveStoryPhotoClass = 'absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat'
export const loveStoryScrimClass = 'absolute inset-0 bg-scrim'
export const loveStoryBodyClass = cn(containerClass, 'relative', sectionClass)
export const timelineClass = 'relative m-0 list-none p-0'
export const timelineItemClass = 'relative mb-[70px] last:mb-0'
export const timelinePanelBaseClass =
  'relative z-0 ml-auto w-[85%] bg-brand p-[30px] shadow-panel md:w-[43%] md:p-[50px]'
export const timelinePanelLeftClass = 'md:mr-auto md:ml-0'
export const timelinePanelFrameClass =
  'pointer-events-none absolute inset-[20px] border border-dashed border-frame'
export const timelinePanelFrameTiltClass = 'rotate-1'
export const timelineDateClass = 'text-[14px] tracking-[2px] text-white/80 uppercase'
export const timelineTitleClass = 'font-script text-[40px] leading-[1.2] text-white'
export const timelineBlurbClass = 'mt-[10px] text-[15px] text-white/80'
export const timelineMarkClass = 'absolute top-[20px] h-[80px] w-[80px] text-ghost-mark md:h-[120px] md:w-[120px]'
export const timelineBadgeClass =
  'absolute top-0 left-0 h-[80px] w-[80px] rounded-full md:left-1/2 md:-ml-[60px] md:h-[120px] md:w-[120px]'
export const timelineBadgeRingClass =
  'pointer-events-none absolute inset-[10px] rounded-full border border-dashed border-frame'
export const timelineBadgePhotoClass = 'h-full w-full rounded-full object-cover'

/* Greetings ----------------------------------------------------------------------------------- */

export const greetingsBandClass = 'bg-band'
export const carouselClass = 'relative overflow-hidden'
export const carouselTrackClass = 'm-0 flex list-none p-0 transition-transform duration-500 ease-out'
export const carouselItemClass = 'w-full shrink-0 px-[15px] pt-[30px]'
export const carouselItemActiveClass = 'opacity-100'
export const carouselItemInactiveClass = 'opacity-40'
export const greetingCardClass =
  'relative rounded-card border border-black/[0.02] bg-white px-[20px] pt-[35px] pb-[30px] text-center shadow-card'
export const greetingDiscClass =
  'absolute -top-[20px] left-[20px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-brand'
export const greetingGlyphClass = 'h-[30px] w-[30px] text-white'
export const greetingAvatarClass = 'mx-auto h-[80px] w-[80px] rounded-full border-[5px] border-tint object-cover'
export const greetingBlurbClass = 'mt-[15px]'
export const greetingNameClass = 'mt-[15px] text-[20px] leading-[1.2] font-medium text-name'
export const greetingRoleClass = 'text-[16px] text-brand'
export const carouselControlsClass = 'mt-[40px] flex items-center justify-center gap-[15px]'
export const carouselControlClass =
  'inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border border-brand text-brand transition-colors duration-300 hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
export const carouselPauseClass = cn(
  carouselControlClass,
  'w-auto px-[20px] text-[12px] font-semibold tracking-[1px] uppercase',
)
export const carouselIconClass = 'h-[18px] w-[18px]'

/* Family & friends ---------------------------------------------------------------------------- */

export const peopleGridClass = 'm-0 grid list-none grid-cols-2 gap-[30px] p-0 md:grid-cols-4 xl:grid-cols-8'
export const attendantClass = 'text-center'
export const attendantPhotoClass =
  'mx-auto aspect-square w-full max-w-[150px] rounded-full object-cover'
export const attendantNameClass = 'mt-[15px] text-[20px] leading-[1.2] font-medium text-figure'
export const attendantRoleClass = 'text-[14px] tracking-[1px] text-ink uppercase'

/* When & where -------------------------------------------------------------------------------- */

export const placesRowClass = 'grid gap-[40px] text-center md:grid-cols-2'
export const placeClass = 'flex flex-col items-center'
export const placeDiscClass =
  'mb-[10px] flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white shadow-disc'
export const placeGlyphClass = 'h-[50px] w-[50px] text-brand'
export const placeTitleClass = 'text-[20px] leading-[1.2] font-medium text-figure'
export const placeLineClass = 'mt-[15px] text-[15px]'
export const placePhoneClass = 'transition-colors duration-300 hover:text-brand'
export const placeMapClass =
  'mt-[15px] h-auto rounded-[4px] border-2 border-tint px-[10px] py-[8px] text-[12px] font-semibold tracking-[1px] text-brand uppercase shadow-button'

/* RSVP ---------------------------------------------------------------------------------------- */

export const rsvpClass = 'relative overflow-hidden bg-brand'
export const rsvpPhotoClass = 'absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat'
export const rsvpWashClass = 'absolute inset-0 bg-wash'
export const rsvpBodyClass = cn(containerClass, 'relative', sectionClass)
export const rsvpHeadClass = 'mb-[30px]'
export const rsvpTitleClass = 'font-script text-[40px] leading-[1.2] text-brand md:text-[60px]'
export const rsvpFormClass = 'max-w-[555px]'
export const rsvpFieldClass =
  'h-[50px] w-full border-0 border-b border-line bg-transparent px-0 text-[16px] font-semibold text-muted placeholder:text-placeholder focus:border-brand focus:outline-none'
export const rsvpTextareaClass = cn(rsvpFieldClass, 'h-auto py-[10px]')
export const rsvpSelectWrapClass = 'relative'
export const rsvpSelectClass = cn(rsvpFieldClass, 'appearance-none pr-[40px]')
export const rsvpSelectIconClass =
  'pointer-events-none absolute top-[14px] right-[10px] h-[20px] w-[20px] text-brand'
export const rsvpGroupClass = 'mb-[10px]'
export const rsvpLabelClass = 'sr-only'
export const rsvpSubmitClass =
  'mt-[15px] w-auto rounded-[4px] px-[24px] py-[14px] text-[14px] font-semibold tracking-[1px] uppercase shadow-button'
export const rsvpStatusClass = 'mt-[20px] text-[15px] text-brand'

/* Gallery ------------------------------------------------------------------------------------- */

export const galleryHeadClass = 'text-center'
export const galleryGridClass = 'mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'
export const galleryTileClass =
  'group relative block h-[300px] w-full cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand'
export const galleryPhotoClass = 'h-full w-full object-cover'
export const galleryWashClass =
  'absolute inset-0 bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-focus-visible:opacity-80'
export const galleryDiscClass =
  'absolute top-1/2 left-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100'
export const galleryGlyphClass = 'h-[50px] w-[50px] text-brand'
export const lightboxClass = 'fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-[15px]'
export const lightboxCardClass = 'relative max-h-full max-w-[900px]'
export const lightboxPhotoClass = 'max-h-[80vh] w-full object-contain'
export const lightboxCaptionClass = 'mt-[15px] text-center text-[15px] text-white'
export const lightboxCloseClass =
  'absolute -top-[45px] right-0 inline-flex h-[35px] w-[35px] items-center justify-center text-white'

/* Footer -------------------------------------------------------------------------------------- */

export const footerClass = 'bg-brand text-[16px] text-white'
export const footerInnerClass = cn(containerClass, 'relative py-[60px] md:py-[112px]')
export const footerWordmarkClass = 'text-[17px] font-normal text-black'
export const footerBlurbClass = 'mt-[15px] max-w-[320px] text-white'
export const socialRowClass = 'm-0 mt-[20px] flex list-none items-center gap-[10px] p-0'
export const socialLinkClass =
  'inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-brand text-white transition-colors duration-300 hover:text-black'
export const socialGlyphClass = 'h-[20px] w-[20px]'
export const footerColumnsClass = 'mt-[50px] grid gap-[40px] md:grid-cols-3'
export const footerHeadingClass = 'mb-[40px] text-[20px] leading-[1.2] font-bold text-white uppercase'
export const footerListClass = 'm-0 list-none p-0'
export const footerListItemClass = 'mb-[10px]'
export const footerLinkClass = 'text-brand transition-colors duration-300 hover:text-white'
export const footerContactClass = 'm-0 not-italic text-white'
export const footerCreditClass = 'mt-[50px] text-white'
export const dockLinkClass = 'text-brand underline-offset-2 hover:text-white hover:underline'

/* Preloader ----------------------------------------------------------------------------------- */

/** The source's first-paint cover: a full-screen white sheet holding a spinning ring. */
export const preloaderClass = 'fixed inset-0 z-[80] flex items-center justify-center bg-white'
export const preloaderShownClass = 'visible opacity-100'
export const preloaderHiddenClass = 'invisible opacity-0'
export const preloaderFadeClass = 'transition-[opacity,visibility] duration-[400ms] ease-out'
export const preloaderRingClass = 'h-[48px] w-[48px] animate-[loader-rotate_2s_linear_infinite]'
export const preloaderTrackClass = 'stroke-[#eeeeee]'
export const preloaderArcClass = 'animate-[loader-dash_1.5s_ease-in-out_infinite] stroke-[#F96D00]'
