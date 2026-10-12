import { cn } from '@free-react-templates/ui'

/**
 * The page root. The band that bleeds edge to edge is clipped here so the page never grows a
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

/** Each band carries the design's `p_120`, softened on small screens. */
export const sectionClass = 'py-[60px] md:py-[120px]'

/** The centred title block every band after the hero opens with. */
export const sectionTitleClass = 'mx-auto mb-[50px] max-w-[640px] text-center md:mb-[60px]'
export const sectionHeadingClass = 'text-[30px] leading-[1.2] md:text-[36px]'
export const sectionIntroClass = 'mt-[15px]'

/** The shared Button/ButtonLink skin: the design's square, uppercase, 40px-tall pink button. */
export const mainButtonClass =
  'h-10 rounded-none border border-primary-600 px-[23px] text-[12px] leading-none font-bold tracking-[0.5px] uppercase'

export const headerClass = 'absolute inset-x-0 top-0 z-30'
/** The design's bar carries 100px of line-height, so the band above the hero is exactly 100px. */
export const headerRowClass = 'flex h-[100px] items-center gap-[30px]'
export const brandLinkClass = cn(
  'inline-flex items-center gap-[10px] text-ink',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)
export const brandWordClass = 'text-[20px] leading-none font-bold tracking-[1px]'
export const brandMarkClass = 'h-[34px] w-[34px] shrink-0 text-brand'

/** The label row: folded away below `xl` (1200px), exactly where the design's own row turns over. */
export const navRowClass = 'ml-auto hidden xl:flex'
export const navListClass = 'm-0 flex list-none items-center gap-[30px] p-0'
export const navItemClass = 'relative'

export function navLinkClass(current: boolean): string {
  return cn(
    'block text-[12px] font-medium tracking-[1px] uppercase transition-colors duration-300',
    current ? 'text-brand' : 'text-ink hover:text-brand',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
  )
}

export const groupTriggerClass = 'inline-flex items-center gap-[6px]'
export const caretClass = 'h-[14px] w-[14px] transition-transform duration-300 group-hover:rotate-180'

export function dropdownPanelClass(open: boolean): string {
  return cn(
    'absolute top-[calc(100%_+_24px)] left-0 z-40 m-0 min-w-[200px] list-none bg-white p-0',
    'border border-line shadow-card transition-opacity duration-300',
    open ? 'visible opacity-100' : 'invisible opacity-0',
  )
}

export const dropdownLinkClass =
  'block border-b border-line px-[30px] py-[12px] text-[12px] font-medium tracking-[1px] text-ink uppercase transition-colors duration-150 hover:bg-brand hover:text-white'

export const searchToggleClass =
  'ml-[30px] inline-flex h-[40px] w-[40px] items-center justify-center text-ink transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand'
export const searchRowClass =
  'absolute inset-x-0 top-[100px] border-y border-line bg-white px-[15px] py-[15px] shadow-card'
export const searchFormClass = 'mx-auto flex max-w-[720px] items-center gap-[10px]'
export const searchInputClass =
  'h-[42px] w-full border border-line px-[15px] text-[14px] text-ink placeholder:text-placeholder focus:border-brand focus:outline-none'

export const burgerClass =
  'ml-auto inline-flex h-[40px] w-[40px] items-center justify-center text-ink xl:hidden'
export const mobilePanelClass =
  'absolute inset-x-0 top-[100px] border-y border-line bg-white px-[15px] py-[20px] shadow-card xl:hidden'
export const mobileListClass = 'm-0 flex list-none flex-col gap-[15px] p-0'
export const mobileNestedListClass = 'm-0 mt-[15px] ml-[15px] flex list-none flex-col gap-[10px] p-0'

/* Hero ---------------------------------------------------------------------------------------- */

export const heroClass = 'relative z-[1] mt-[100px] min-h-[800px] overflow-hidden bg-ink'
export const heroPhotoClass = 'absolute inset-0 z-0 bg-cover bg-center bg-no-repeat'
export const heroScrimClass = 'absolute inset-0 z-[1] bg-scrim'
export const heroContentClass = 'relative z-[2] text-center text-white'
export const heroBandClass = 'flex min-h-[800px] flex-col items-center justify-center py-[60px]'
export const heroKickerClass =
  'mt-[15px] mb-[15px] text-[14px] tracking-[1.4px] text-white uppercase'
export const heroNamesClass = 'text-[36px] leading-[1.2] font-bold text-brand md:text-[48px]'
export const heroOrnamentClass = 'h-[24px] w-[220px] text-white'

/* Story --------------------------------------------------------------------------------------- */

export const storyGridClass = 'grid items-start gap-[30px] lg:grid-cols-3'
export const storyFrameClass = 'relative p-[15px]'
export const storyPhotoClass = 'h-auto w-full object-cover'
export const storyFrameOrnamentClass = 'h-[18px] w-[160px] text-brand'
export const storyTextClass = 'px-[15px] pt-[30px] text-center lg:mt-[88px] lg:pt-0'
export const storyHeadingClass = 'text-[30px] font-bold md:text-[36px]'
export const storyMetaClass = 'mx-auto mt-[15px] mb-[30px] max-w-[224px] text-[14px] leading-[24px]'

/* Timer --------------------------------------------------------------------------------------- */

export const timerClass = 'relative overflow-hidden bg-ink bg-cover bg-center text-center'
export const timerScrimClass = 'absolute inset-0 bg-scrim'
export const timerBodyClass = 'relative py-[60px] md:py-[120px]'
export const timerHeadingClass = 'mb-[35px] text-[30px] font-bold text-white md:text-[36px]'
export const timerPanelClass =
  'mx-auto flex max-w-[560px] flex-wrap bg-timer-panel text-white backdrop-blur-[1px]'
export const timerCellClass = 'basis-1/2 py-[30px] md:basis-1/4'
export const timerNumberClass = 'block text-[36px] leading-none font-bold text-white italic'
export const timerLabelClass = 'mt-[15px] block text-[14px]'
export const timerClosingClass = 'mt-[25px] text-[22px] font-bold text-white md:text-[24px]'

/* Journey ------------------------------------------------------------------------------------- */

export const circleRowClass = 'grid gap-[30px] text-center sm:grid-cols-3'
export const personClass = 'text-center'
export const avatarClass = 'mx-auto h-[200px] w-[200px] rounded-full object-cover'
export const personNameClass = 'mt-[20px] text-[18px] font-bold'
export const personRoleClass = 'mt-[5px] text-[12px] tracking-[1px] uppercase'
export const journeyCardsClass = 'my-[50px] grid gap-[30px] md:my-[60px] lg:grid-cols-2'
export const journeyCardClass =
  'relative overflow-hidden border border-line bg-white px-[30px] py-[45px] text-center shadow-card lg:px-[60px]'
export const journeyCardTitleClass = 'mb-[16px] text-[18px] font-bold'
const journeyCornerClass = 'absolute h-[120px] w-[120px] text-brand/40'

export function cornerClass(corner: 'left' | 'right'): string {
  return cn(journeyCornerClass, corner === 'left' ? '-bottom-[46px] -left-[22px]' : '-right-[22px] -bottom-[46px]')
}

/* Moments ------------------------------------------------------------------------------------- */

export const momentsBandClass = 'overflow-hidden'
export const momentsGridClass = 'flex flex-wrap'
export const momentTileClass = 'basis-1/2 p-[3px] md:basis-1/3 xl:basis-[16.666%]'
export const momentFrameClass = 'group relative overflow-hidden'
export const momentPhotoClass = 'h-auto w-full object-cover'
export const momentOverlayClass =
  'absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100'
export const momentExpandClass = 'h-[30px] w-[30px] text-white' as const
export const lightboxClass =
  'fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-[15px]'
export const lightboxCardClass = 'relative max-h-full max-w-[900px]'
export const lightboxPhotoClass = 'h-auto max-h-[80vh] w-full object-contain'
export const lightboxCaptionClass = 'mt-[15px] text-center text-[14px] text-white'
export const lightboxCloseClass =
  'absolute -top-[45px] right-0 inline-flex h-[35px] w-[35px] items-center justify-center text-white'

/* Reservation --------------------------------------------------------------------------------- */

export const reservationCardClass =
  'relative mx-auto max-w-[555px] border border-line bg-white px-[25px] py-[45px] shadow-card md:px-[50px] md:py-[75px]'
export const reservationSideClass = 'pointer-events-none absolute hidden h-[320px] w-[70px] text-brand/30 lg:block'
export const fieldLabelClass = 'mb-[8px] block text-[14px] font-medium text-ink'
export const fieldClass =
  'h-[42px] w-full rounded-none border border-line bg-white px-[15px] text-[14px] text-ink placeholder:text-placeholder focus:border-brand focus:outline-none'
export const selectClass = cn(fieldClass, 'appearance-none')
export const statusClass = 'mt-[20px] text-[14px] text-brand'

/* Arrangement --------------------------------------------------------------------------------- */

export const arrangementGridClass = 'grid gap-[30px] md:grid-cols-2'
export const arrangementCardClass = 'border border-line bg-white shadow-card'
export const arrangementPhotoClass = 'h-[240px] w-full object-cover'
export const arrangementBodyClass = 'px-[30px] pt-[35px] pb-[45px]'
export const arrangementTitleClass = 'mb-[20px] text-[18px] font-bold transition-colors duration-300 hover:text-brand'
export const dateBlockClass = 'mt-[20px] flex flex-col gap-[5px]'
export const dateLineClass = 'm-0 text-[14px] font-medium text-ink'
export const dateTermClass = 'font-bold'

/* Registry ------------------------------------------------------------------------------------ */

export const registryRowClass = 'flex flex-wrap items-center justify-center gap-[40px]'
export const registryItemClass =
  'flex items-center gap-[10px] text-ink opacity-50 transition-opacity duration-300 hover:opacity-100'
export const registryMarkClass = 'h-[40px] w-[40px]'
export const registryNameClass = 'text-[16px] font-bold tracking-[0.5px] uppercase'

/* Footer -------------------------------------------------------------------------------------- */

export const footerClass = 'bg-soft'
export const footerInnerClass = 'py-[60px] text-center md:py-[90px]'
export const footerBrandClass = 'inline-flex items-center justify-center gap-[10px] text-ink'
export const footerMenuClass = 'm-0 mt-[30px] flex list-none flex-wrap justify-center gap-[20px] p-0 md:gap-[40px]'
export const footerLinkClass =
  'text-[12px] font-medium tracking-[1px] text-ink uppercase transition-colors duration-300 hover:text-brand'
export const socialRowClass = 'm-0 mt-[30px] flex list-none items-center justify-center gap-[20px] p-0'
export const socialLinkClass =
  'inline-flex h-[35px] w-[35px] items-center justify-center text-ink transition-colors duration-300 hover:text-brand'
export const socialGlyphClass = 'h-[18px] w-[18px]'
export const creditClass = 'mt-[30px] text-[14px]'
export const dockLinkClass = 'text-brand underline-offset-2 hover:underline'
