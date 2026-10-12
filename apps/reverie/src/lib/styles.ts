import { cn } from '@free-react-templates/ui'
import type { TileSize } from './site'

/** The page root: every band bleeds edge to edge, so the sheet is clipped and rests on white. */
export const pageClass = 'relative min-h-screen overflow-x-hidden bg-white text-copy'

/** The skip link, hidden above the viewport until it is focused. */
export const skipLinkClass = cn(
  'absolute left-[15px] top-[-100px] z-[100000] bg-ink px-[18px] py-[10px] text-[14px] font-semibold text-white',
  'focus:top-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage',
)

/* The container the design was drawn against: 100% wide with 15px gutters and Bootstrap's tiers. */
export const containerClass =
  'mx-auto w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'

/* Band headings -------------------------------------------------------------------------------- */

export const bandTitleClass =
  'text-center text-[26px] font-medium uppercase tracking-[4px] text-ink md:text-[34px]'
export const bandLeadClass = 'mx-auto mt-[18px] max-w-[640px] text-center text-[15px] text-copy'
export const bandOrnamentClass = 'mx-auto mt-[14px] block h-[15px] w-[50px] text-sage'

/* Header ---------------------------------------------------------------------------------------- */

export const headerClass =
  'absolute left-0 top-0 z-50 w-full bg-white shadow-[0_5px_10px_rgba(154,87,87,0.102)]'
export const headerRowClass = 'flex flex-wrap items-center justify-between gap-[15px] py-[18px]'
export const wordmarkClass = cn(
  'font-display text-[24px] font-semibold uppercase tracking-[3px] text-ink',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage',
)
export const navRowClass = 'hidden lg:block'
export const navListClass = 'm-0 flex list-none items-center gap-[34px] p-0'
export const navItemClass = 'relative'
export const navLinkClass = cn(
  'relative block text-[14px] uppercase tracking-[2px] text-nav transition-colors duration-300',
  'hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage',
)
export const navDotClass =
  'pointer-events-none absolute -bottom-[9px] left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-nav'
export const navTriggerClass = cn(navLinkClass, 'flex items-center gap-[6px]')
export const caretClass = 'h-[14px] w-[14px]'
export const dropdownPanelClass = cn(
  'absolute left-0 top-[50px] z-10 w-[140px] list-none bg-panel py-[2px] transition-all duration-500',
)
export const dropdownRowClass =
  'block px-[20px] py-[8px] text-[12px] font-medium capitalize text-white transition-colors duration-300 hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sage'
export const headerRightClass = 'flex items-center gap-[18px]'
export const headerSocialsClass = 'hidden list-none items-center gap-[20px] p-0 md:flex'
export const headerSocialClass = cn(
  'block text-social transition-colors duration-300 hover:text-sage',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage',
)
export const iconButtonClass = cn(
  'inline-flex cursor-pointer items-center justify-center text-nav transition-colors duration-300 hover:text-sage',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage',
)
export const iconClass = 'h-[18px] w-[18px]'
export const burgerClass = cn(iconButtonClass, 'lg:hidden')
export const foldedPanelClass = 'border-t border-hairline bg-white lg:hidden'
export const foldedListClass = 'm-0 flex list-none flex-col p-0'
export const foldedRowClass =
  'block border-b border-hairline px-[15px] py-[14px] text-[14px] uppercase tracking-[2px] text-nav transition-colors duration-300 hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sage'
export const foldedGroupLabelClass =
  'flex items-center justify-between px-[15px] py-[14px] text-[14px] uppercase tracking-[2px] text-nav'
export const foldedNestedClass = 'm-0 list-none bg-logo p-0'

/* Search overlay ------------------------------------------------------------------------------- */

export const searchOverlayClass = 'fixed inset-0 z-[90] flex items-center justify-center bg-white'
export const searchCloseClass = cn(
  'absolute right-[30px] top-[30px] cursor-pointer text-ink transition-colors duration-300 hover:text-sage',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage',
)
export const searchCloseGlyphClass = 'h-[28px] w-[28px]'
export const searchFormClass = 'w-full max-w-[640px] px-[15px]'
export const searchInputClass = cn(
  'w-full border-0 border-b border-hairline bg-transparent pb-[14px] text-center text-[22px] text-ink',
  'placeholder:text-copy focus:border-sage focus-visible:outline-none',
)
export const searchLabelClass = 'sr-only'

/* Hero ---------------------------------------------------------------------------------------- */

export const heroClass =
  'relative flex min-h-[560px] items-end overflow-hidden pt-[180px] pb-[120px] text-center md:min-h-[866px] md:pt-[330px] md:pb-[200px]'
export const heroPhotoClass =
  'absolute inset-0 h-full w-full object-cover object-top [clip-path:ellipse(150%_100%_at_50%_0%)]'
export const heroScrimClass = 'absolute inset-0 bg-[rgba(17,17,17,0.34)]'
export const heroTextClass = 'relative z-[1] w-full'
export const heroMarkClass = 'mx-auto h-[42px] w-[42px] text-white'
export const heroEyebrowClass = 'mt-[16px] text-[14px] uppercase tracking-[2px] text-white'
export const heroTitleClass =
  'font-display mt-[10px] text-[34px] uppercase leading-[1.15] text-white md:text-[48px]'
export const heroLeadClass = 'mx-auto mt-[16px] max-w-[620px] text-[15px] text-white/85'

/* Services ------------------------------------------------------------------------------------ */

export const servicesSectionClass = 'bg-white pt-[100px] pb-[70px]'
export const servicesGridClass = 'grid grid-cols-1 gap-x-[15px] sm:grid-cols-2 lg:grid-cols-3'
export const serviceCardClass = cn(
  'mb-[30px] bg-white px-[30px] pt-[40px] pb-[30px] text-center transition-all duration-500',
  'hover:rounded-[10px] hover:shadow-[0_5px_39px_rgba(154,87,87,0.102)]',
  'focus-within:rounded-[10px] focus-within:shadow-[0_5px_39px_rgba(154,87,87,0.102)]',
  'motion-reduce:transition-none',
)
export const serviceIconClass = 'mx-auto h-[46px] w-[46px] text-btn'
export const serviceTitleClass = 'mt-[22px] text-[22px] uppercase tracking-[2px] text-ink'
export const serviceBodyClass = 'mt-[14px] text-[15px] leading-[1.7] text-copy'

/* Features ------------------------------------------------------------------------------------ */

export const featuresSectionClass = 'bg-white pt-[100px] pb-[100px]'
export const filterRowClass =
  'mt-[10px] mb-[40px] flex flex-wrap justify-center gap-x-[40px] gap-y-[12px]'
export const filterButtonClass = cn(
  'cursor-pointer border-0 bg-transparent p-0 text-[18px] uppercase text-nav transition-colors duration-300',
  'hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage',
)
export const filterActiveClass = 'underline underline-offset-[6px]'
export const galleryClass = cn(
  'grid grid-cols-1 auto-rows-[1px] gap-x-[15px]',
  'sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))]',
)
export const tileClass = cn(
  'group relative mb-[15px] flex items-center justify-center overflow-hidden',
  'focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-sage',
)
export const tileHiddenClass = 'hidden'
export const tilePhotoClass = 'absolute inset-0 h-full w-full object-cover'
export const tileVeilClass = cn(
  'absolute inset-0 z-[1] bg-veil opacity-0 transition-opacity duration-[400ms]',
  'group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none',
)
export const tileTextClass = 'relative z-[2] px-[15px] text-center'
export const tileLabelClass = cn(
  'block -translate-x-[40px] text-[15px] uppercase text-white opacity-0 transition-all duration-[600ms]',
  'group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100',
  'motion-reduce:transition-none',
)
export const tileTitleClass = cn(
  'font-display mt-[6px] translate-x-[40px] text-[26px] leading-[1.2] text-white opacity-0 transition-all duration-[600ms]',
  'group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100',
  'motion-reduce:transition-none',
)
export const tileSizes: Record<TileSize, string> = {
  base: 'h-[253px] row-end-[span_268]',
  mid: 'h-[380px] row-end-[span_395]',
  large: 'h-[505px] row-end-[span_520]',
}
export const viewMoreRowClass = 'mt-[40px] text-center'
export const viewMoreClass = cn(
  'font-display text-[15px] uppercase tracking-[4px] text-ink underline underline-offset-[6px] transition-colors duration-300 hover:text-sage',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage',
)

/* Counter band -------------------------------------------------------------------------------- */

export const counterBandClass = 'relative overflow-hidden pt-[100px] pb-[300px]'
export const counterPhotoClass = 'absolute inset-0 h-full w-full object-cover'
export const counterScrimClass = 'absolute inset-0 bg-[rgba(255,255,255,0.72)]'
export const counterGridClass = 'relative z-[1] grid grid-cols-2 gap-y-[40px] lg:grid-cols-4'
export const counterItemClass = 'text-center'
export const counterIconClass = 'mx-auto h-[52px] w-[52px] text-btn'
export const counterNumberClass =
  'font-display mt-[16px] text-[36px] tracking-[2px] text-ink md:text-[48px]'
export const counterLabelClass = 'mt-[6px] text-[15px] uppercase tracking-[2px] text-copy'

/* Request card -------------------------------------------------------------------------------- */

export const requestSectionClass = 'relative z-[2] -mt-[235px]'
export const requestHeaderClass =
  'bg-request px-[30px] pt-[60px] pb-[40px] text-center md:px-[145px] rounded-t-[10px]'
export const requestEyebrowClass = 'font-display text-[15px] uppercase tracking-[4px] text-white'
export const requestTitleClass =
  'font-display mt-[8px] text-[28px] uppercase tracking-[4px] text-white'
export const requestLeadClass = 'mx-auto mt-[14px] max-w-[560px] text-[15px] text-white/85'
export const requestPanelClass =
  'bg-white px-[25px] pt-[60px] pb-[50px] shadow-[0_5px_10px_rgba(154,87,87,0.102)] rounded-b-[10px] md:px-[55px]'
export const requestGridClass = 'grid grid-cols-1 gap-x-[20px] md:grid-cols-2'
export const fieldLabelClass = 'sr-only'
export const fieldWrapClass = 'block'
export const fieldClass = cn(
  'mb-[20px] h-[50px] w-full rounded-none bg-white pl-[20px] text-[14px] text-copy',
  'border border-hairline focus:border-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage',
)
export const fieldInvalidClass = 'border-danger'
export const fieldErrorClass = 'mt-[-14px] mb-[16px] text-[13px] text-danger'
export const selectWrapClass = 'relative'
export const submitRowClass = 'mt-[10px] text-center'
export const submitClass = cn(
  'font-display h-auto rounded-none border-0 bg-btn px-[34px] pt-[14px] pb-[12px] text-[14px] font-semibold uppercase tracking-[2px] text-ink',
  'hover:bg-[#949988] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage',
)
export const requestSuccessClass =
  'bg-white px-[25px] py-[60px] text-center text-[16px] text-ink shadow-[0_5px_10px_rgba(154,87,87,0.102)] rounded-b-[10px]'

/* Blog ---------------------------------------------------------------------------------------- */

export const blogSectionClass = 'bg-white pt-[100px] pb-[100px]'
export const blogGridClass = 'grid grid-cols-1 gap-x-[15px] lg:grid-cols-3'
export const postClass = 'mb-[30px]'
export const postPhotoClass = 'h-auto w-full object-cover'
export const postMetaClass = 'mt-[20px] flex list-none flex-wrap items-center gap-[25px] p-0'
export const postMetaItemClass = 'font-display text-[17px] italic text-sage'
export const postTitleClass = 'mt-[10px] text-[26px] leading-[36px] text-ink'
export const postLinkClass = cn(
  'transition-colors duration-300 hover:text-sage',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage',
)

/* Logo strip ---------------------------------------------------------------------------------- */

export const logoStripClass = 'group overflow-hidden bg-logo py-[35px]'
export const logoTrackClass =
  'marquee-track flex w-max list-none items-center gap-[70px] p-0 group-hover:[animation-play-state:paused]'
export const logoItemClass = 'text-[20px] uppercase tracking-[3px] text-[#8d9280]'

/* Footer -------------------------------------------------------------------------------------- */

export const footerClass = 'bg-footer pt-[65px]'
export const footerTopClass =
  'flex flex-col items-start gap-[30px] lg:flex-row lg:items-center lg:justify-between'
export const newsletterTitleClass = 'text-[20px] uppercase tracking-[2px] text-white'
export const newsletterBodyClass = 'mt-[8px] text-[15px] text-white/70'
export const newsletterFormClass = 'relative mt-[20px] max-w-[420px]'
export const newsletterInputClass = cn(
  'h-[50px] w-full rounded-none border-0 bg-glass pl-[22px] pr-[60px] text-[14px] text-white',
  'placeholder:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)
export const newsletterSubmitClass = cn(
  'absolute right-0 top-0 h-full rounded-none border-0 bg-transparent px-[18px] text-[18px] text-[#767b67]',
  'hover:bg-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)
export const newsletterStatusClass = 'mt-[10px] text-[14px] text-white/80'
export const footerSocialRowClass = 'm-0 flex list-none items-center gap-[6px] p-0'
export const footerSocialClass = cn(
  'flex h-[50px] w-[50px] items-center justify-center rounded-full bg-glass text-white transition-colors duration-300 hover:bg-[rgba(255,255,255,0.2)]',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
)
export const socialGlyphClass = 'h-[18px] w-[18px]'
export const footerColumnsClass =
  'mt-[55px] grid grid-cols-1 gap-y-[35px] border-t border-[rgba(255,255,255,0.12)] pt-[55px] md:grid-cols-2 lg:grid-cols-4'
export const footerWordmarkClass =
  'font-display text-[26px] font-semibold uppercase tracking-[3px] text-white'
export const footerColumnTitleClass = 'text-[16px] uppercase tracking-[2px] text-white'
export const footerColumnListClass = 'mt-[22px] list-none p-0'
export const footerLineClass = 'mb-[10px] text-[15px] text-white/70'
export const footerLinkClass = cn(
  'transition-colors duration-300 hover:text-white',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
)
export const copyrightBarClass =
  'mt-[55px] flex flex-col items-center gap-[14px] border-t border-[rgba(255,255,255,0.12)] py-[26px] text-center lg:flex-row lg:justify-between lg:text-left'
export const copyrightClass = 'text-[14px] tracking-[0.5px] text-white'
export const dockLinkClass = cn(
  'font-semibold text-white underline underline-offset-4',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
)
export const legalRowClass = 'm-0 flex list-none items-center gap-[25px] p-0'
