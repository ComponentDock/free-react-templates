import { cn } from '@free-react-templates/ui'

/**
 * The page root. The bands that bleed edge to edge are clipped here so the page never grows a
 * horizontal gutter, and the whole page rests on white.
 */
export const pageClass = 'relative min-h-screen overflow-x-hidden bg-white'

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

/* Bands --------------------------------------------------------------------------------------- */

/** The centred title block every band after the hero opens with. */
export const sectionTitleClass = 'mb-[50px] text-center'
export const sectionHeadingClass = 'text-[32px] font-bold text-ink xl:text-[40px]'
export const sectionRuleClass = 'mx-auto mt-[15px] mb-[20px] block h-[17px] w-[439px] max-w-full text-brand'
export const sectionSubtextClass = 'mx-auto mt-[15px] max-w-[620px] text-[16px] text-muted'

/* Header --------------------------------------------------------------------------------------- */

/**
 * The design's bar is a plain white row in the flow that its own script pins to the top once the
 * page scrolls (`position: fixed` + shadow). A sticky bar holds both states at once: the row keeps
 * its place above the hero and stays pinned while the page moves, and the measured 102px row
 * (39px of padding either side of a 24px line) is what the design shows at desktop.
 */
export const headerClass = 'sticky top-0 z-50 w-full bg-white py-[15px] shadow-header lg:py-0'
export const headerRowClass = 'flex items-center justify-between gap-[15px]'
export const wordmarkClass =
  'inline-flex items-center gap-[10px] py-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:py-[25px]'
export const wordmarkTextClass = 'font-display text-[26px] leading-none font-bold text-ink'
export const wordmarkMarkClass = 'h-[40px] w-[26px] shrink-0'

export const navRowClass = 'hidden lg:block'
export const navListClass = 'm-0 flex list-none items-center p-0'
export const navItemClass = 'relative'
export const navLinkClass =
  'block px-[19px] py-[39px] font-ui text-[16px] leading-[1.5] font-medium text-nav uppercase transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand'
export const dropdownButtonClass = cn(navLinkClass, 'inline-flex cursor-pointer items-center gap-[6px] border-0 bg-transparent')
export const dropdownIconClass = 'h-[14px] w-[14px]'
export const dropdownListClass =
  'absolute top-full left-0 z-10 m-0 min-w-[190px] list-none bg-white p-0 shadow-header'
export const dropdownLinkClass =
  'block px-[18px] py-[10px] text-[14px] text-ink capitalize transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand'

export const burgerClass =
  'inline-flex cursor-pointer items-center border-0 bg-transparent py-[11px] text-nav focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden'
export const burgerIconClass = 'h-[24px] w-[24px]'
export const foldedMenuClass = 'border-t border-divider pb-[15px] lg:hidden'
export const foldedListClass = 'm-0 flex list-none flex-col p-0'
export const foldedLinkClass =
  'block px-[15px] py-[12px] font-ui text-[15px] font-medium text-nav uppercase transition-colors duration-300 hover:text-brand'
export const foldedGroupClass = 'block px-[15px] pt-[12px] font-ui text-[15px] font-medium text-brand uppercase'
export const foldedSubListClass = 'm-0 flex list-none flex-col p-0 pl-[15px]'

/* Hero ---------------------------------------------------------------------------------------- */

export const heroClass =
  'relative flex min-h-[500px] items-center overflow-hidden md:min-h-[600px] xl:min-h-[980px]'
export const heroPhotoClass = 'absolute inset-0 bg-cover bg-center bg-no-repeat'
export const heroScrimClass = 'absolute inset-0 bg-scrim'
export const heroCaptionClass = 'relative z-[1] motion-safe:animate-[rise-in_900ms_ease-out] xl:max-w-[66%]'
export const heroEyebrowClass =
  'flex items-center font-ui text-[18px] tracking-[0.3em] text-white uppercase md:text-[22px]'
export const heroEyebrowMarkClass = 'mr-[14px] h-[45px] w-[36px] shrink-0'
export const heroNamesClass = 'mt-[15px] flex flex-wrap items-end gap-[10px] text-[52px] leading-[1.2] text-white xl:text-[99px]'
export const heroLaurelClass = 'mb-[14px] h-[84px] w-[80px]'
export const heroTaglineClass = 'mt-[15px] text-[15px] tracking-[0.2em] text-white uppercase'

/* Love story ---------------------------------------------------------------------------------- */

export const storySectionClass = 'bg-white py-[70px] xl:py-[100px]'
export const storyRowClass = 'flex flex-col items-center justify-center lg:flex-row'
export const storyColumnClass = 'w-full lg:w-5/12'
export const storyPanelClass = 'damask-red flex w-full items-center lg:min-h-[583px]'
export const storyTextClass = 'py-[40px] pr-[30px] pl-[40px] md:pl-[94px] lg:pl-[121px] xl:pl-[150px]'
export const storyPanelTitleClass = 'text-[24px] capitalize text-white xl:text-[30px]'
export const storyPanelTextClass = 'mt-[15px] text-[16px] text-white'
export const storyPhotoClass =
  'mt-[30px] w-full object-cover lg:relative lg:-bottom-[51px] lg:-left-[30px] lg:mt-0'

/* Wedding info -------------------------------------------------------------------------------- */

export const infoSectionClass = 'damask-cream py-[100px] xl:pt-[195px] xl:pb-[170px]'
export const cardGridClass = 'grid grid-cols-1 gap-[30px] lg:grid-cols-3 lg:items-end'
export const cardGlyphClass = 'mx-auto mb-[20px] block h-[50px] w-[50px] text-body'
export const cardTitleClass = 'text-[25px] font-bold text-ink-card'
export const cardDividerClass = 'mt-[20px] mb-[46px] border-b-2 border-divider'
export const cardRowClass = 'mb-[26px] flex items-start gap-[7px] text-[16px] text-muted'
export const cardRowIconClass = 'mt-[6px] h-[16px] w-[16px] shrink-0 text-brand'
export const cardLinkClass =
  'inline-block text-[16px] text-brand transition-colors duration-300 hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
export const cardCtaClass =
  'mt-[20px] h-[60px] rounded-[30px] px-[30px] text-[16px] font-medium tracking-[1px] uppercase'

/**
 * One card's own box. The active card wears the brand border and keeps its button visible; the
 * others grow both on hover and on focus-within, so a keyboard visitor sees exactly what a pointer
 * visitor does.
 */
export function cardClass(active: boolean): string {
  return cn(
    'group flex flex-col border bg-white px-[25px] pt-[70px] shadow-card transition-shadow duration-300',
    active
      ? 'border-brand pb-[70px]'
      : 'border-transparent pb-0 hover:border-brand hover:shadow-card-hover focus-within:border-brand focus-within:shadow-card-hover',
  )
}

export function cardCtaRevealClass(active: boolean): string {
  return active
    ? 'opacity-100'
    : 'opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100'
}

/* Countdown ----------------------------------------------------------------------------------- */

/**
 * The design pulls its red strip up over the band above with `position: relative; top: -73px`, which
 * moves the paint and leaves the flow alone — so the gallery after it keeps the strip's full box.
 */
export const countdownSectionClass = 'relative -top-[73px] z-[2]'
export const countdownStripClass = 'damask-red flex flex-col lg:flex-row'
export const countdownCellClass = 'w-full py-[30px] text-center lg:py-[44px]'
export const countdownNumberClass =
  'font-ui text-[30px] leading-none font-semibold text-white uppercase tabular-nums xl:text-[36px]'
export const countdownLabelClass =
  'mt-[10px] block font-ui text-[16px] font-semibold text-white uppercase xl:text-[18px]'

/* Gallery ------------------------------------------------------------------------------------- */

export const gallerySectionClass = 'bg-white pt-[100px] pb-[70px] xl:pb-[170px]'
export const galleryGridClass = 'flex flex-wrap'
export const galleryTileClass =
  'group relative block h-[300px] w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 md:h-[400px] lg:h-[565px] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand'
export const galleryPhotoClass = 'h-full w-full object-cover'
export const galleryWashClass =
  'absolute inset-0 bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-focus-visible:opacity-80'
export const galleryCaptionWrapClass =
  'absolute bottom-[30px] left-[30px] flex -translate-x-[20px] items-center gap-[20px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100'
export const galleryCaptionClass = 'text-[24px] font-semibold text-white capitalize'
export const galleryPlusClass =
  'flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-white text-white'
export const galleryPlusIconClass = 'h-[20px] w-[20px]'
export const galleryCornerClass = 'absolute right-[-34px] -bottom-[15px] h-[61px] w-[108px] text-frame'

export const lightboxClass = 'fixed inset-0 z-[70] flex items-center justify-center bg-veil p-[15px]'
export const lightboxCardClass = 'relative max-h-full max-w-[900px]'
export const lightboxPhotoClass = 'max-h-[80vh] w-full object-contain'
export const lightboxCaptionClass = 'mt-[15px] text-center text-[15px] text-white capitalize'
export const lightboxCloseClass =
  'absolute -top-[45px] right-0 inline-flex h-[35px] w-[35px] cursor-pointer items-center justify-center border-0 bg-transparent text-white'
export const lightboxCloseIconClass = 'h-[20px] w-[20px]'

/* Gift band ----------------------------------------------------------------------------------- */

export const giftSectionClass = 'damask-red py-[70px] text-center xl:pt-[120px] xl:pb-[130px]'
export const giftTitleClass = 'text-[40px] capitalize text-white xl:text-[70px]'
export const giftSubtextClass = 'mx-auto mt-[15px] max-w-[720px] text-[16px] text-white'
export const giftCtaClass =
  'mt-[30px] h-[60px] rounded-[30px] bg-white px-[44px] text-[16px] font-medium tracking-[1px] text-gift-ink uppercase hover:bg-white hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

/* RSVP ---------------------------------------------------------------------------------------- */

export const rsvpSectionClass = 'bg-white py-[70px] xl:py-[100px]'
export const rsvpCardClass =
  'relative mx-auto max-w-[900px] border border-divider bg-white px-[25px] py-[70px] shadow-form xl:px-[70px] xl:pt-[125px] xl:pb-[115px]'
export const rsvpFrameClass = 'pointer-events-none absolute inset-[10px] border border-dashed border-field'
export const rsvpTitleClass = 'text-center text-[26px] xl:text-[30px]'
export const rsvpFormClass = 'relative mt-[40px]'
export const rsvpRowClass = 'mt-[25px]'
export const rsvpLabelClass = 'mb-[8px] block text-[14px] font-medium text-ink-card'
export const rsvpFieldClass =
  'h-[60px] w-full rounded-field border border-field bg-white px-[20px] text-[16px] text-body placeholder:text-field-text focus:border-brand focus:outline-none'
export const rsvpTextareaClass = cn(rsvpFieldClass, 'h-auto py-[15px]')
export const rsvpSelectWrapClass = 'relative'
export const rsvpSelectClass = cn(rsvpFieldClass, 'appearance-none pr-[45px]')
export const rsvpSelectIconClass = 'pointer-events-none absolute top-[20px] right-[41px] h-[20px] w-[20px] text-field-text'
export const rsvpSubmitClass = 'mt-[30px] h-[60px] rounded-[30px] px-[27px] text-[16px] tracking-[1px] uppercase'
export const rsvpErrorClass = 'mt-[8px] block text-[14px] text-brand'
export const rsvpStatusClass = 'mt-[20px] text-[16px] text-brand'

/* Registry ------------------------------------------------------------------------------------ */

export const registrySectionClass = 'bg-white pt-[70px] pb-[70px] xl:pb-[150px]'
export const registryStripClass =
  'flex snap-x gap-[15px] overflow-x-auto pb-[10px] lg:grid lg:grid-cols-6 lg:overflow-visible'
export const registryCardClass =
  'flex h-[171px] w-[170px] shrink-0 snap-start flex-col items-center justify-center gap-[10px] border border-divider bg-white lg:w-full'
export const registryMarkClass = 'h-[58px] w-[58px] text-ink-card'
export const registryNameClass = 'text-[13px] tracking-[1px] text-muted uppercase'

/* Map band ------------------------------------------------------------------------------------ */

export const mapSectionClass = 'relative h-[235px] w-full bg-band'
export const mapFrameClass = 'h-full w-full grayscale'
export const mapIframeClass = 'h-full w-full border-0'

/* Footer -------------------------------------------------------------------------------------- */

export const footerClass = 'damask-dark text-[15px] text-footer-link'
export const footerInnerClass = cn(containerClass, 'py-[70px] xl:pt-[135px] xl:pb-[74px]')
export const footerRowClass = 'mt-[50px] grid gap-[40px] lg:grid-cols-12'
export const footerWordmarkColumnClass = 'lg:col-span-3'
export const footerColumnClass = 'lg:col-span-3'
export const footerWordmarkClass = 'font-display text-[28px] leading-none font-bold text-white'
export const footerBlurbClass = 'mt-[15px] max-w-[320px] text-[15px] text-footer-link'
export const footerHeadingClass = 'mb-[38px] font-body text-[18px] font-medium text-white uppercase'
export const footerListClass = 'm-0 list-none p-0'
export const footerListItemClass = 'mb-[10px]'
export const footerLinkClass =
  'text-[14px] text-footer-link capitalize transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
export const footerContactClass = 'm-0 not-italic text-[14px] text-footer-link'
export const footerHairlineClass = 'mt-[50px] border-t border-footer-line pt-[33px]'
export const footerCopyClass = 'text-center text-[16px] text-footer-link'
export const footerHeartClass = 'inline h-[16px] w-[16px] align-[-2px] text-heart'
export const dockLinkClass = 'text-heart underline-offset-2 hover:text-white hover:underline'
export const socialRowClass = 'm-0 mt-[25px] flex list-none items-center gap-[10px] p-0'
export const socialLinkClass =
  'inline-flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
export const socialGlyphClass = 'h-[18px] w-[18px]'

/* Back to top --------------------------------------------------------------------------------- */

export const backToTopClass =
  'fixed right-[20px] bottom-[20px] z-[60] flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border-0 bg-brand text-white transition-colors duration-300 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
export const backToTopIconClass = 'h-[20px] w-[20px]'

/* Preloader ----------------------------------------------------------------------------------- */

/** The design's first-paint cover: a full-screen sheet holding a 100px white disc with a red arc. */
export const preloaderClass = 'fixed inset-0 z-[999999] flex items-center justify-center bg-preloader'
export const preloaderShownClass = 'visible opacity-100'
export const preloaderHiddenClass = 'invisible opacity-0'
export const preloaderFadeClass = 'transition-[opacity,visibility] duration-[600ms] ease-out'
export const preloaderDiscWrapClass = 'relative flex h-[100px] w-[100px] items-center justify-center'
export const preloaderDiscClass =
  'absolute inset-0 rounded-full border border-transparent border-t-brand bg-white shadow-[0_1px_5px_0_rgba(35,181,185,0.15)] motion-safe:animate-[zoom_2000ms_infinite_ease]'
export const preloaderMarkClass = 'relative h-[55px] w-[38px]'
