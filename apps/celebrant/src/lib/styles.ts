import { cn } from '@free-react-templates/ui'

/* Page shell ---------------------------------------------------------------------------------- */

/** The sheet every band bleeds across; clipped so the hero's overshooting mint band cannot scroll. */
export const pageClass = 'relative min-h-screen overflow-x-hidden bg-white'

export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[80]',
  'focus:bg-ink focus:px-[16px] focus:py-[8px] focus:text-white',
)

/**
 * The container the page is built on: `width: 100%` with 15px gutters and the four tiers the design
 * was drawn against — 540 / 720 / 960 / 1140 from 576 / 768 / 992 / 1200 up.
 */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/** Every band the design rules with the same 100px of air above and below its content. */
export const bandClass = 'py-[100px]'

/* Band headings ------------------------------------------------------------------------------- */

export const sectionTitleClass = 'text-center'
export const sectionTitleHeadingClass = 'text-[2rem] font-medium italic'

/** The heading wrapper's own margin: 30px, or 48px where the design adds its `mb-5` step. */
export function sectionTitleSpacing(roomy: boolean): string {
  return roomy ? 'mb-[48px]' : 'mb-[30px]'
}

/* Header -------------------------------------------------------------------------------------- */

export const headerClass = 'sticky top-0 z-50 w-full bg-white'
export const headerRowClass = 'flex items-center py-[24px]'
export const logoColumnClass = 'w-1/2 xl:w-1/4'
export const navColumnClass = 'hidden w-3/4 text-right xl:block'
export const wordmarkClass = 'font-body text-[1.2rem] leading-[1.2] font-black uppercase'
export const wordmarkLinkClass =
  'text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'
export const navListClass = 'm-0 flex list-none items-center justify-end p-0'
export const navItemClass = 'inline-block'
const navLinkBaseClass =
  'relative inline-block px-[10px] py-[5px] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'

/**
 * The resting row is the design's `rgba(0,0,0,0.5)` and the live one is black. Exactly one of the
 * two is emitted — appending the live tone would let stylesheet order, not the row, decide.
 */
export function navLinkClass(isActive: boolean): string {
  return cn(navLinkBaseClass, isActive ? 'text-ink' : 'text-nav hover:text-ink')
}

/** The 2px mint bar the design clips under its live navigation row. */
export const activeBarClass = 'absolute right-[10px] bottom-0 left-[10px] h-[2px] bg-brand'

export const ctaClass =
  'h-10 rounded-[30px] bg-cta px-[24px] text-[16px] text-white hover:bg-cta-hover hover:text-white'

export const toggleColumnClass = 'w-1/2 py-[16px] text-right xl:hidden'
export const toggleClass = cn(
  'inline-flex h-[36px] w-[36px] cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-ink',
  'transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
)
export const toggleGlyphClass = 'h-[28px] w-[28px]'

export const foldedClass = 'pb-[16px] xl:hidden'
export const foldedListClass = 'm-0 flex list-none flex-col p-0'
export const foldedItemClass = 'block'
export const foldedLinkClass =
  'block px-[10px] py-[8px] text-ink transition-colors duration-300 hover:text-cta focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink'
export const foldedCtaClass = cn(ctaClass, 'my-[8px] inline-flex')

/* Cover hero ---------------------------------------------------------------------------------- */

export const heroSectionClass = 'relative overflow-hidden pt-[120px] pb-[100px]'
/** The band's own frame: `top: 30%` and `right: -150%` resolve against this, never the section. */
export const heroContainerClass = cn(containerClass, 'relative')
export const heroBandClass = 'absolute top-[30%] right-[-150%] z-[-1] h-full w-[200%] bg-brand'
export const heroPhotoClass = 'h-screen min-h-[450px] bg-cover bg-center bg-no-repeat'

/* Our Services -------------------------------------------------------------------------------- */

export const servicesGridClass = 'grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[30px]'
export const mediaRowClass = cn(
  'mb-[24px] flex items-center transition-colors duration-300',
  'hover:bg-brand focus-within:bg-brand',
)
export const mediaImageClass = 'shrink-0 grow-0 basis-[250px]'
/** The 2nd and 4th rows hand the picture to the right-hand side at the design's `lg` step. */
export const mediaImageRightClass = 'lg:order-2'
export const mediaImgClass = 'h-auto w-full'
export const mediaTextClass = 'px-[30px]'
export const mediaTitleClass = 'text-[20px] font-bold'
export const mediaTitleLinkClass = 'text-ink'
export const mediaBodyClass = 'text-body'

/* Couples I have joined ----------------------------------------------------------------------- */

/** The rail the mint panel and the slider share; the panel is clipped to it by 15px on each side. */
export const marriageWrapClass = 'relative'
export const marriagePanelClass = 'absolute right-[15px] bottom-[-5%] left-[15px] h-screen bg-brand'
/** The slider paints above the mint panel it stands on. */
export const marriageStageClass = 'relative z-[1]'
/** The design's `col-md-11`: the photograph is inset a twelfth of the rail on each side. */
export const marriageSlideClass = 'mx-auto w-11/12'
export const marriagePhotoClass = 'h-[500px] w-full bg-cover bg-center bg-no-repeat'
export const marriageCaptionClass = 'mt-[48px] text-center'
export const marriageCaptionInnerClass = 'mx-auto px-[15px] lg:w-8/12'
export const marriageDateClass = 'text-ink'
export const marriageCoupleClass = 'mb-[8px] text-[1.75rem] font-medium'
export const marriageStoryClass = 'text-body'
const sliderButtonClass = cn(
  'absolute top-1/2 inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center',
  'rounded-full border-0 bg-white p-0 text-ink transition-colors duration-300 hover:bg-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
)
export const sliderPrevClass = cn(sliderButtonClass, 'left-[27px]')
export const sliderNextClass = cn(sliderButtonClass, 'right-[27px]')
export const sliderArrowClass = 'h-[20px] w-[20px]'
export const dotsClass = 'm-0 mt-[18px] flex list-none items-center justify-center p-0'
export const dotItemClass = 'm-[5px]'
const dotBaseClass =
  'block h-[8px] w-[8px] cursor-pointer rounded-full border-0 p-0 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'

/** The live dot is black and its neighbours sit back at the design's `rgba(0,0,0,0.3)`. */
export function dotClass(isActive: boolean): string {
  return cn(dotBaseClass, isActive ? 'bg-ink' : 'bg-dot')
}

/* Feature cards ------------------------------------------------------------------------------- */

export const featureGridClass = 'grid grid-cols-1 md:grid-cols-2 md:gap-x-[30px]'
export const featureCardClass = 'flex bg-white p-[30px]'
export const featureDiscWrapClass = 'relative mr-[24px] shrink-0'
export const featureDiscClass = 'absolute top-0 left-[-10px] h-[70px] w-[70px] rounded-full bg-brand'
export const featureGlyphClass = 'relative z-[1] h-[48px] w-[48px] text-ink lg:h-[72px] lg:w-[72px]'
export const featureTitleClass = 'text-[1.5rem] font-bold'
export const featureBodyClass = 'text-card-copy'

/* Frequently asked questions ------------------------------------------------------------------ */

export const faqCardClass = 'mb-[8px] rounded-[4px] border border-faq bg-white'
export const faqHeadingClass = 'm-0'
const faqButtonBaseClass = cn(
  'relative block w-full cursor-pointer border-0 bg-transparent px-[15px] py-[10px] text-left text-[20px] leading-[1.5]',
  'transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink',
)

/** The open question is black, the folded ones grey — one tone, never both. */
export function faqButtonClass(isOpen: boolean): string {
  return cn(faqButtonBaseClass, isOpen ? 'text-ink' : 'text-body')
}

export const faqChevronClass =
  'absolute top-1/2 right-[20px] h-[16px] w-[16px] -translate-y-1/2 transition-transform duration-300'

/** The chevron hangs 180° round over the open panel and sits square over a folded one. */
export function faqChevronTurnClass(isOpen: boolean): string {
  return isOpen ? 'rotate-180' : 'rotate-0'
}

export const faqPanelClass = 'px-[20px] pb-[20px] pt-0'
export const faqBodyClass = 'text-card-copy'

/* Footer -------------------------------------------------------------------------------------- */

export const footerClass = 'bg-footer py-[64px] md:py-[128px]'
export const footerInnerClass = cn(containerClass)
export const footerRowClass = 'flex flex-col gap-[30px] md:flex-row'
export const footerAboutColumnClass = 'md:w-8/12'
export const footerAboutInnerClass = 'flex flex-col gap-[30px] md:flex-row'
export const footerAboutTextClass = 'md:w-6/12'
export const footerQuickColumnClass = 'md:w-4/12'
export const footerNewsColumnClass = 'md:w-4/12'
export const footerHeadingClass = 'mb-[24px] text-[16px] font-medium text-white'
export const footerBodyClass = 'text-footer-text'
export const quickLinksClass = 'm-0 list-none p-0'
export const quickLinkItemClass = 'mb-[10px]'
export const quickLinkClass =
  'text-footer-link transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
export const newsletterFieldRowClass = 'flex items-stretch'
export const newsletterLabelClass = 'sr-only'
export const newsletterInputClass = cn(
  'w-full rounded-[30px_0_0_30px] border border-cta bg-transparent px-[12px] py-[6px]',
  'text-[16px] leading-[1.5] text-white placeholder:text-cta focus:border-white focus:outline-none',
)
export const sendClass =
  'h-auto shrink-0 rounded-[0_30px_30px_0] px-[30px] py-[10px] text-[16px] font-normal text-black hover:text-white'
export const newsletterStatusClass = 'mt-[12px] text-footer-text'
export const socialRowClass = 'm-0 mt-[20px] flex list-none items-center p-0'
export const socialLinkClass =
  'inline-flex px-[16px] text-footer-link transition-colors duration-300 first:pl-0 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
export const socialGlyphClass = 'h-[16px] w-[16px]'
export const footerHairlineClass = 'mt-[48px] border-t border-footer-line pt-[48px]'
export const footerCopyClass = 'text-center text-footer-text'
export const footerHeartClass = 'inline h-[14px] w-[14px] align-[-2px] text-footer-text'
export const dockLinkClass =
  'text-footer-link underline-offset-2 transition-colors duration-300 hover:text-white hover:underline'

/* Preloader ----------------------------------------------------------------------------------- */

export const preloaderCoverClass = 'fixed inset-0 z-[7100] bg-white'
export const preloaderMarkClass =
  'fixed top-1/2 left-1/2 z-[7700] h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 text-brand'
export const preloaderFadeClass = 'transition-opacity duration-700'
export const preloaderLiftedClass = 'invisible opacity-0'
