import { cn } from '@free-react-templates/ui'

/* Page shell ---------------------------------------------------------------------------------- */

/** The sheet every band bleeds across; clipped so the hero's full-viewport frame cannot scroll. */
export const pageClass = 'relative min-h-screen overflow-x-hidden bg-white'

export const skipLinkClass = cn(
  'sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[80]',
  'focus:bg-panel focus:px-[16px] focus:py-[8px] focus:text-white',
)

/**
 * The container the page is built on: `width: 100%` with 15px gutters and the four tiers the design
 * was drawn against — 540 / 720 / 960 / 1140 from 576 / 768 / 992 / 1200 up.
 */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/** Every band the design rules with 100px of air above and 70px below its content. */
const bandClass = 'pt-[50px] pb-[20px] md:pt-[100px] md:pb-[70px]'

/* Band headings --------------------------------------------------------------------------------- */

export const bandHeadingClass = 'pb-[20px] text-center md:pb-[40px]'
export const bandTitleClass = 'text-[2.5rem] leading-[1.15] text-ink md:text-[3rem] lg:text-[3.5rem]'
export const bandTitleLightClass = 'text-white'

/** The 160×20px ornament: two 60px rules flanking the rose star, as the design draws it. */
export const ornamentClass = 'relative mt-[10px] inline-block h-[20px] w-[160px] md:mt-[20px]'
const ornamentRuleClass = 'absolute top-1/2 h-px w-[60px] bg-rule'
export const ornamentRuleStartClass = cn(ornamentRuleClass, 'left-0')
export const ornamentRuleEndClass = cn(ornamentRuleClass, 'right-0')
export const ornamentStarClass =
  'absolute top-1/2 left-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 text-brand'
export const ornamentStarLightClass = 'text-white'

/* Header ---------------------------------------------------------------------------------------- */

/** The bar floats over the hero: it reserves no layout space and drops flush to the top at 768px. */
export const headerClass = cn(
  'absolute top-[20px] right-0 left-0 z-[1000] text-[0.95rem] text-white',
  'border-b border-hairline max-md:top-0 max-md:border-hairline-flush',
)
export const headerRowClass = 'flex items-center justify-between'
export const wordmarkClass = 'my-[5px] mb-[20px] flex h-[40px] items-center font-display text-[1.9rem] leading-none font-normal'
export const wordmarkLinkClass =
  'text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

export const navClass = 'hidden md:block'
export const navListClass = 'm-0 flex list-none items-center p-0'
export const navItemClass = 'relative'
const navLinkBaseClass = cn(
  'flex h-[50px] items-center rounded-[2px] border-2 border-transparent px-[15px]',
  'text-[15px] font-medium text-white transition-colors duration-300',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)

/**
 * Exactly one of the two border tones is emitted — the live row paints the rose, every other row
 * waits for the pointer — because appending one to the other lets stylesheet order decide.
 */
export function navLinkClass(isActive: boolean): string {
  return cn(navLinkBaseClass, isActive ? 'border-brand' : 'hover:border-brand')
}

export const navCaretClass = 'ml-[6px] inline-block h-[14px] w-[14px] align-[-2px]'

export const dropPanelClass = cn(
  'absolute top-[50px] left-0 z-10 m-0 min-w-[200px] list-none p-0',
  'bg-panel shadow-panel',
)
export const dropPanelNestedClass = cn(
  'absolute top-0 left-full z-10 m-0 min-w-[200px] list-none p-0',
  'bg-panel shadow-panel',
)
export const dropItemClass = 'block border-t border-panel-rule first:border-t-0'
export const dropLinkClass = cn(
  'block px-[20px] py-[15px] text-white transition-colors duration-300',
  'hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
)
export const dropCaretClass = 'ml-[8px] inline-block h-[14px] w-[14px] align-[-2px]'

export const toggleWrapClass = 'py-[6px] md:hidden'
export const toggleClass = cn(
  'inline-flex h-[50px] w-[50px] cursor-pointer items-center justify-center border-0 bg-transparent text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)
export const toggleGlyphClass = 'h-[26px] w-[26px]'

export const foldedPanelClass = 'border-t border-panel-rule-light md:hidden'
export const foldedListClass = 'm-0 max-h-[400px] list-none overflow-auto p-0'
export const foldedPanelInnerClass = 'bg-panel'
export const foldedItemClass = 'block border-b border-panel-rule'
export const foldedRowClass = 'flex items-center'

/**
 * The design indents the mobile panel's two nested levels to 25px and 35px; the top level keeps the
 * plain 15px. Keyed off the level so a level cannot borrow another's indent.
 */
export function foldedLinkClass(depth: number): string {
  return cn(
    'block flex-1 py-[15px] pr-[15px] text-white transition-colors duration-300 hover:text-brand',
    'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
    depth === 1 ? 'pl-[25px]' : depth === 2 ? 'pl-[35px]' : 'pl-[15px]',
  )
}

export const foldedToggleClass = cn(
  'mr-[15px] inline-flex h-[36px] w-[36px] cursor-pointer items-center justify-center',
  'border-0 bg-transparent text-white transition-colors duration-300 hover:text-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)
export const foldedToggleGlyphClass = 'h-[18px] w-[18px]'

/* Hero ----------------------------------------------------------------------------------------- */

export const heroSectionClass =
  'relative flex h-screen min-h-[400px] items-center justify-center overflow-hidden text-white'
export const heroPhotoClass = 'absolute inset-0 h-full w-full object-cover'
export const heroScrimClass = 'absolute inset-0 bg-scrim'
export const heroCaptionClass = 'relative z-[1] w-full px-[15px] text-center'
export const heroGlyphClass = 'mx-auto mb-[6px] h-[40px] w-[40px]'
export const heroDateClass = 'mt-[10px] text-[1.2rem] tracking-[2px] uppercase'
export const heroScriptClass = 'mt-[6px] font-display text-[2.5rem] leading-[1.2]'
export const heroNamesClass =
  'font-display text-[3rem] leading-none md:text-[4rem] lg:text-[5rem]'
export const heroHeartClass = 'inline-block h-[0.8em] w-[0.8em] translate-y-[0.12em] text-brand'
export const heroInviteClass = 'mt-[12px] text-[0.95rem]'

/* Our story ------------------------------------------------------------------------------------ */

export const storySectionClass = cn(bandClass, 'relative isolate overflow-hidden bg-white')
export const patternClass = 'ring-pattern absolute inset-0 z-[-1] opacity-80'
export const storyMeasureClass = 'mx-auto w-full max-w-[570px] text-center'
export const storyBodyClass = 'text-[1.05rem] leading-[1.6] text-copy'

/* Countdown ------------------------------------------------------------------------------------ */

export const countdownSectionClass = cn(bandClass, 'relative bg-cover bg-center bg-no-repeat text-white')
export const countdownScrimClass = 'absolute inset-0 z-[-1] bg-scrim'
export const countdownStripClass = 'm-0 flex list-none flex-wrap items-start justify-center p-0'
export const countdownCellClass =
  'mx-[20px] mb-[30px] h-[120px] w-[120px] shrink-0 rounded-full border border-white pt-[25px] text-center'
export const countdownValueClass = 'block text-[3rem] leading-[1.05]'
export const countdownWordClass = 'block text-[1rem] lowercase'

/* Wedding details ------------------------------------------------------------------------------- */

export const detailsSectionClass = cn(bandClass, 'bg-white')
/** `flow-root` keeps the floated cards inside the track so the spine spans their full height. */
export const detailsTrackClass = 'flow-root relative mx-auto w-full max-w-[570px] max-md:ml-[15px]'
export const detailsSpineClass =
  'absolute top-0 bottom-0 left-1/2 -ml-px w-px bg-spine max-md:left-0 max-md:ml-0'
export const detailsListClass = 'm-0 list-none p-0'

const detailCardBaseClass = cn(
  'relative clear-both mt-[-40px] mb-[30px] w-1/2 px-[50px]',
  'max-md:mt-0 max-md:mb-[30px] max-md:w-full max-md:pr-0 max-md:pl-[30px]',
)

/** The cards alternate sides of the spine: the right-hand ones left-align, the left-hand ones flip. */
export function detailCardClass(side: 'left' | 'right'): string {
  return cn(
    detailCardBaseClass,
    side === 'right' ? 'float-right text-left' : 'float-left text-right',
    'max-md:float-none max-md:text-left',
  )
}

/** The 18px dot pinned to the spine; on a narrow screen every card owns the left edge. */
export function detailDotClass(side: 'left' | 'right'): string {
  return cn(
    'absolute top-0 h-[18px] w-[18px] rounded-[20px] border border-rule bg-white',
    side === 'right' ? '-left-[9px]' : '-right-[9px]',
    'max-md:right-auto max-md:-left-[9px]',
  )
}

export const detailGlyphClass = 'h-[56px] w-[56px] text-brand'
export const detailTitleClass = 'text-[1.5rem] text-ink'
export const detailBodyClass = 'text-copy'

/* Ceremony call to action ----------------------------------------------------------------------- */

export const ceremonySectionClass = cn(bandClass, 'relative bg-cover bg-center bg-no-repeat text-white')
export const ceremonyScrimClass = 'absolute inset-0 z-[-1] bg-scrim'
export const ceremonyBodyClass = 'mx-auto max-w-[570px] text-[1.05rem]'
export const ceremonyCtaClass = cn(
  'group relative mt-[10px] inline-block pb-[5px] text-[0.9rem] tracking-[2px] uppercase',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
)
const ceremonyBarClass = 'absolute bottom-0 left-0 h-[2px] w-full bg-brand'

/**
 * The underline's second bar waits at `translateX(-130%)` and slides across the label on hover or
 * focus. Under reduced motion there is no slide at all: the bar simply sits under the label.
 */
export function ceremonyFillClass(animate: boolean): string {
  return cn(
    ceremonyBarClass,
    animate
      ? '-translate-x-[130%] transition-transform duration-300 group-hover:translate-x-0 group-focus-visible:translate-x-0'
      : 'translate-x-0',
  )
}

/* Gallery -------------------------------------------------------------------------------------- */

export const gallerySectionClass = cn(bandClass, 'bg-white')
export const galleryGridClass = 'grid grid-cols-2 gap-[30px] md:grid-cols-3'
export const galleryTileClass =
  'group relative block w-full cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
export const galleryPhotoClass = 'h-auto w-full'
export const galleryWashClass = cn(
  'absolute inset-0 bg-lightbox opacity-0 transition-opacity duration-300',
  'group-hover:opacity-100 group-focus-visible:opacity-100',
)
export const galleryCtaRowClass = 'mt-[10px] text-center md:mt-[30px]'
export const galleryCtaClass =
  'inline-flex h-auto items-center justify-center rounded-[1px] border border-brand bg-transparent px-[30px] py-[15px] text-[0.9rem] leading-[1.1] tracking-[2px] text-ink hover:bg-brand hover:text-white'

export const lightboxClass = 'fixed inset-0 z-[1500] flex items-center justify-center bg-lightbox p-[20px]'
export const lightboxCardClass = 'relative w-full max-w-[900px]'
export const lightboxPhotoClass = 'mx-auto h-auto max-h-[75vh] w-full object-contain'
export const lightboxCaptionClass = 'mt-[15px] text-center text-white'
export const lightboxCloseClass = cn(
  'absolute -top-[50px] right-0 inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center',
  'rounded-full border-0 bg-white/20 text-white transition-colors duration-300 hover:bg-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)
export const lightboxGlyphClass = 'h-[20px] w-[20px]'
const lightboxArrowBaseClass = cn(
  'absolute top-1/2 inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center',
  'rounded-full border-0 bg-white/20 text-white transition-colors duration-300 hover:bg-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)
export const lightboxPrevClass = cn(lightboxArrowBaseClass, '-left-[50px]')
export const lightboxNextClass = cn(lightboxArrowBaseClass, '-right-[50px]')

/* Contact -------------------------------------------------------------------------------------- */

export const contactSectionClass = 'relative overflow-hidden bg-white shadow-contact'
export const contactWrapperClass =
  'w-full pt-[50px] pb-[20px] md:w-1/2 md:pt-[100px] md:pb-[70px] max-md:pb-[40px]'
export const contactTitleClass = 'text-[2.5rem] text-ink'
export const contactDateClass = 'mt-[15px] text-copy'
export const contactInviteClass = 'text-copy'
export const contactPhoneClass = cn(
  'mt-[10px] mb-[10px] inline-block text-[2rem] text-brand transition-colors duration-300',
  'hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
)
export const contactAddressClass = 'text-copy'
export const mapFrameClass = 'absolute inset-0'
export const mapAreaClass =
  'relative h-[400px] w-full md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-1/2'
export const mapCanvasClass = 'absolute inset-0 bg-[#efeade]'
export const mapRoadClass = 'absolute inset-0 h-full w-full text-rule/70'
export const mapNoteClass =
  'absolute bottom-[15px] left-[15px] right-[15px] flex items-center gap-[8px] text-[0.95rem] text-ink'
export const mapPinClass = 'h-[20px] w-[20px] shrink-0 text-brand'

/* Footer --------------------------------------------------------------------------------------- */

export const footerClass = 'relative isolate overflow-hidden bg-white pt-[70px]'
export const footerInnerClass = 'relative text-center'
export const footerWordmarkClass = 'font-display text-[2rem] text-ink'
export const newsletterTitleClass = 'mt-[20px] text-[1.5rem] text-ink'
export const newsletterBodyClass = 'text-copy'
export const newsletterFormClass = 'relative mx-auto mt-[20px] h-[55px] w-[90%] max-w-[400px]'
export const newsletterLabelClass = 'sr-only'
export const newsletterInputClass = cn(
  'absolute inset-y-0 left-0 w-full rounded-full border-0 pr-[70px] pl-[25px] text-ink',
  'shadow-pill transition-shadow duration-200 focus:shadow-pill-focus focus:outline-none',
)
export const newsletterSubmitClass =
  'absolute top-0 right-0 h-[55px] w-[55px] rounded-full p-0 text-white hover:text-brand-2'
export const newsletterStatusClass = 'mt-[12px] text-copy'
export const socialRowClass = 'm-0 mt-[24px] flex list-none items-center justify-center p-0'
export const socialItemClass = 'mx-[2px]'
export const socialLinkClass = cn(
  'inline-flex h-[26px] w-[26px] items-center justify-center rounded-full text-copy',
  'transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
)
export const socialGlyphClass = 'h-[18px] w-[18px]'
export const footerLinksClass = 'm-0 mt-[20px] flex list-none flex-wrap items-center justify-center p-0'
export const footerLinkClass =
  'block px-[7px] py-[10px] text-[1rem] tracking-[1px] uppercase text-ink transition-colors duration-300 hover:text-brand'
export const copyrightClass = 'py-[20px] pb-[30px] text-[1.05rem] text-copy'
export const dockLinkClass =
  'text-copy underline-offset-2 transition-colors duration-300 hover:text-brand hover:underline'
