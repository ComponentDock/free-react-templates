import { cn } from '@free-react-templates/ui'

/** The page root: the bands bleed edge to edge, so the sheet is clipped and rests on white. */
export const pageClass =
  'relative min-h-screen overflow-x-hidden bg-white text-ink dark:bg-gray-950 dark:text-gray-100'

/** The skip link, hidden until it is focused. */
export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[80]',
  'focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white',
)

/**
 * The container the page is built on: `width:100%` with 15px gutters and the four tiers the design
 * was drawn against — 540 / 720 / 960 / 1140 from 576 / 768 / 992 / 1200 up.
 */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/* Band headings ------------------------------------------------------------------------------- */

export const sectionHeadingClass = 'text-center text-[30px] font-semibold text-ink xl:text-[40px] dark:text-white'
export const sectionLeadClass = 'mx-auto mt-[15px] max-w-[700px] text-center text-[15px] text-muted'

/* Header -------------------------------------------------------------------------------------- */

export const headerClass = 'sticky top-0 z-50 w-full bg-white dark:bg-gray-950'
export const topbarClass =
  'hidden border-b border-hairline bg-band md:block dark:border-gray-800 dark:bg-gray-900'
export const topbarRowClass = 'flex items-center justify-between py-[8px]'
export const topbarLinkClass =
  'inline-flex items-center gap-[8px] text-[13px] text-muted transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:text-gray-300'
export const topbarIconClass = 'h-[14px] w-[14px] text-brand'
export const headerRowClass = 'flex items-center justify-between gap-[15px] py-[15px]'
export const wordmarkClass =
  'inline-flex items-center gap-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
export const wordmarkMarkClass = 'h-[34px] w-[34px] shrink-0'
export const wordmarkTextClass = 'font-display text-[24px] leading-none font-bold text-ink dark:text-white'
export const navRowClass = 'hidden lg:block'
export const navListClass = 'm-0 flex list-none items-center gap-[4px] p-0'
export const navLinkClass =
  'block px-[14px] py-[10px] font-display text-[14px] leading-[1.5] font-medium text-ink uppercase transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:text-gray-200'

export const actionsClass = 'flex items-center gap-[8px]'
export const iconButtonClass =
  'inline-flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full border border-edge text-ink transition-colors duration-300 hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-gray-700 dark:text-gray-200'
export const burgerClass = cn(iconButtonClass, 'lg:hidden')
export const iconClass = 'h-[20px] w-[20px]'
export const foldedMenuClass = 'border-t border-hairline bg-white lg:hidden dark:border-gray-800 dark:bg-gray-950'
export const foldedListClass = 'm-0 flex list-none flex-col p-0 py-[10px]'
export const foldedLinkClass =
  'block px-[15px] py-[12px] font-display text-[15px] font-medium text-ink uppercase transition-colors duration-300 hover:text-brand dark:text-gray-200'

/* Hero ---------------------------------------------------------------------------------------- */

export const heroClass =
  'relative flex min-h-[520px] items-center justify-center overflow-hidden md:min-h-[640px] xl:min-h-[820px]'
export const heroPhotoClass = 'absolute inset-0 bg-cover bg-center bg-no-repeat'
export const heroScrimClass = 'absolute inset-0 bg-scrim'
export const heroWashClass = 'absolute inset-0 hero-wash'
export const heroCaptionClass =
  'relative z-[1] mx-auto max-w-[900px] px-[15px] text-center text-white motion-safe:animate-[rise-in_900ms_ease-out]'
export const heroEyebrowClass = 'font-display text-[13px] tracking-[0.3em] uppercase md:text-[15px]'
export const heroTitleClass =
  'mt-[15px] text-[36px] leading-[1.15] font-bold text-white md:text-[56px] xl:text-[72px]'
export const heroCtaClass =
  'mt-[30px] h-[42px] rounded-[var(--radius-pill)] border-0 px-[30px] text-[14px] font-medium tracking-[1px] uppercase'

/* About --------------------------------------------------------------------------------------- */

export const aboutSectionClass = 'bg-white py-[70px] xl:py-[110px] dark:bg-gray-950'
export const aboutRowClass = 'flex flex-col items-center gap-[40px] lg:flex-row lg:gap-[60px]'
export const aboutTextClass = 'w-full lg:w-1/2'
export const aboutHeadingClass = 'text-[24px] leading-[1.3] font-thin text-ink xl:text-[30px] dark:text-white'
export const aboutEmphasisClass = 'font-semibold'
export const aboutParagraphClass = 'mt-[18px] text-[15px] text-muted'
export const aboutFigureClass = 'w-full lg:w-1/2'
export const aboutPhotoClass = 'h-[420px] w-full rounded-[20px] object-cover xl:h-[560px]'
export const aboutControlsClass = 'mt-[25px] flex items-center gap-[12px]'
export const sliderButtonClass =
  'inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center border border-edge bg-white text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white'
export const sliderIconClass = 'h-[18px] w-[18px]'
export const slideCounterClass =
  'font-display text-[13px] tracking-[0.2em] text-muted uppercase tabular-nums'

/* Date strip ---------------------------------------------------------------------------------- */

export const dateSectionClass = 'bg-band py-[30px] dark:bg-gray-900'
export const dateRowClass =
  'flex flex-col items-center justify-center gap-[12px] text-center md:flex-row md:gap-[20px]'
export const dateIconClass = 'h-[22px] w-[22px] shrink-0 text-brand'
export const dateTextClass = 'font-display text-[18px] font-semibold text-ink md:text-[22px] dark:text-white'
export const dateNoteClass = 'text-[14px] text-muted'

/* Gallery ------------------------------------------------------------------------------------- */

export const gallerySectionClass = 'bg-white py-[70px] xl:py-[110px] dark:bg-gray-950'
export const galleryViewportClass = 'mt-[40px] overflow-hidden'
export const galleryTrackClass = 'm-0 flex list-none p-0 transition-transform duration-500 ease-out'
export const gallerySlideClass = 'w-full shrink-0 px-[10px]'
export const galleryPhotoClass = 'h-[300px] w-full rounded-[20px] object-cover md:h-[460px] xl:h-[560px]'
export const galleryControlsClass = 'mt-[25px] flex items-center justify-center gap-[15px]'
export const galleryCounterClass =
  'font-display text-[14px] tracking-[0.2em] text-muted uppercase tabular-nums'

/** The active frame is the only one at full strength; its neighbours sit back a step. */
export function gallerySlideOpacity(active: boolean): string {
  return active ? 'opacity-100' : 'opacity-60'
}

/* Countdown ----------------------------------------------------------------------------------- */

export const countdownSectionClass = 'bg-white py-[60px] xl:py-[90px] dark:bg-gray-950'
export const countdownStripClass = 'm-0 grid list-none grid-cols-2 gap-[25px] p-0 md:grid-cols-4'
export const countdownCellClass = 'flex flex-col items-center'
export const countdownValueClass = 'brand-text text-[40px] leading-none font-semibold tabular-nums xl:text-[48px]'
export const countdownLabelClass =
  'mt-[10px] font-display text-[13px] tracking-[0.25em] text-muted uppercase'

/* Wedding information ------------------------------------------------------------------------- */

export const infoSectionClass = 'bg-band py-[70px] xl:py-[110px] dark:bg-gray-900'
export const infoGridClass = 'mt-[45px] grid grid-cols-1 gap-[30px] lg:grid-cols-3'
export const infoCardClass =
  'rounded-none border-0 bg-white p-[35px] shadow-[-35.355px_35.355px_50px_0_rgba(157,157,157,0.3)] dark:bg-gray-950'
export const infoCardTitleClass = 'text-[22px] font-semibold text-ink dark:text-white'
export const infoCardBodyClass = 'mt-[12px] text-[15px] text-muted'
export const infoRowsClass = 'm-0 mt-[20px] p-0'
export const infoRowClass = 'flex items-start gap-[10px] border-t border-hairline py-[12px]'
export const infoRowIconClass = 'mt-[7px] h-[16px] w-[16px] shrink-0 text-brand'
export const infoRowLabelClass =
  'm-0 w-[80px] shrink-0 font-display text-[12px] tracking-[0.1em] text-muted uppercase'
export const infoRowTextClass = 'm-0 text-[15px] text-ink dark:text-gray-200'

/* Reservation --------------------------------------------------------------------------------- */

export const reservationSectionClass = 'relative overflow-hidden py-[70px] xl:py-[110px]'
export const reservationPhotoClass = 'absolute inset-0 bg-cover bg-center bg-no-repeat'
export const reservationVeilClass = 'absolute inset-0 bg-plate'
export const reservationInnerClass = cn(containerClass, 'relative z-[1]')
export const reservationTitleClass = 'text-center text-[30px] font-semibold text-white xl:text-[36px]'
export const reservationLeadClass = 'mx-auto mt-[15px] max-w-[680px] text-center text-[15px] text-white/85'
export const reservationFormClass = 'mx-auto mt-[40px] max-w-[900px]'
export const reservationGridClass = 'grid grid-cols-1 gap-[25px] md:grid-cols-2'
export const fieldWrapClass = 'mt-[25px]'
export const fieldLabelClass =
  'mb-[8px] block font-display text-[13px] tracking-[0.1em] text-white uppercase'
export const fieldClass =
  'h-[52px] w-full rounded-none border border-field bg-transparent px-[14px] text-[14px] font-light text-white placeholder:text-white/60 focus:border-white focus:outline-none'
export const textareaClass = cn(fieldClass, 'h-[150px] py-[12px]')
export const selectWrapClass = 'relative'
export const selectTriggerClass =
  'flex h-[52px] w-full cursor-pointer items-center justify-between rounded-none border border-field bg-transparent px-[14px] text-left text-[14px] font-light text-white transition-colors duration-300 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
export const selectCaretClass = 'h-[18px] w-[18px] shrink-0 opacity-80'
export const selectListClass =
  'absolute top-[calc(100%+4px)] left-0 z-10 m-0 w-full list-none rounded-none border border-field bg-ink p-[6px] shadow-turn'
const selectOptionBaseClass =
  'block w-full cursor-pointer rounded-none border-0 bg-transparent px-[12px] py-[10px] text-left text-[14px] font-light transition-colors duration-200 hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white'

/** The chosen row wears the brand fill; the rest sit at reading strength until hovered. */
export function selectOptionClass(selected: boolean): string {
  return cn(selectOptionBaseClass, selected ? 'bg-brand text-white' : 'text-white/85')
}

export const errorClass = 'mt-[8px] flex items-center gap-[6px] text-[13px] text-white'
export const errorIconClass = 'h-[14px] w-[14px] shrink-0'
export const submitClass =
  'mt-[30px] h-[42px] rounded-[var(--radius-pill)] border-0 px-[30px] text-[14px] tracking-[1px] uppercase'
export const statusClass = 'mt-[20px] text-center text-[15px] text-white'

/* Footer -------------------------------------------------------------------------------------- */

export const footerClass = 'bg-ink text-white'
export const footerInnerClass = cn(containerClass, 'py-[55px]')
export const footerRowClass = 'flex flex-col items-center gap-[25px] md:flex-row md:justify-between'
export const footerWordmarkClass = 'font-display text-[22px] leading-none font-bold text-white'
export const footerBlurbClass = 'mt-[10px] max-w-[430px] text-[14px] text-white/70'
export const footerMenuClass = 'm-0 flex list-none flex-wrap items-center justify-center gap-[20px] p-0'
export const footerLinkClass =
  'font-display text-[12px] tracking-[0.1em] text-white/85 uppercase transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
export const socialRowClass = 'm-0 mt-[20px] flex list-none items-center gap-[10px] p-0'
export const socialLinkClass =
  'inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
export const socialGlyphClass = 'h-[17px] w-[17px]'
export const footerHairlineClass = 'mt-[35px] border-t border-white/15 pt-[25px]'
export const footerCopyClass = 'text-center text-[13px] text-white/75'
export const footerHeartClass = 'inline h-[14px] w-[14px] align-[-2px] text-brand'
export const dockLinkClass = 'text-brand underline-offset-2 hover:text-white hover:underline'
