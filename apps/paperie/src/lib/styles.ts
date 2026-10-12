import { cn } from '@free-react-templates/ui'

/**
 * The page root. The full-bleed bands are clipped here so the page never grows a horizontal
 * gutter, and the whole page rests on white.
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

/** The centred title block every band after the hero opens with: a sprig over an uppercase H2. */
export const sectionTitleClass = 'text-center'
export const sectionHeadingClass =
  'mb-[46px] text-[28px] leading-[1.3] font-bold uppercase md:text-[34px] lg:mb-[66px] lg:text-[40px]'
export const sectionSprigClass = 'mx-auto mb-[10px] block h-[42px] w-[72px] text-ink/70'

/* Header -------------------------------------------------------------------------------------- */

/** The bar rests in the page; once the page has scrolled it pins itself to the viewport's top. */
export const headerClass = 'relative z-[9999] w-full bg-white'
export const headerPinnedClass = 'bar-drop fixed inset-x-0 top-0 shadow-sticky'
export const headerRowClass = 'flex items-center justify-between'
export const brandLinkClass = cn(
  'inline-flex items-end text-[34px] leading-none font-bold text-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)
export const brandDotClass = 'text-dot'
export const navRowClass = 'hidden items-center lg:flex'
export const navListClass = 'm-0 flex list-none items-center p-0'
export const navItemClass = 'relative'
export const navLinkClass = cn(
  'block px-[19px] py-[39px] text-[16px] capitalize transition-colors duration-300 ease-out',
  'text-nav hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand',
)
export const navTriggerClass = cn(navLinkClass, 'inline-flex items-center gap-[6px] bg-transparent')
export const caretClass = 'h-[14px] w-[14px]'
export const navPinnedClass = 'py-[26px] px-[20px]'
export const dropdownPanelClass = cn(
  'absolute top-[calc(100%_+_8px)] left-0 z-40 m-0 w-[170px] list-none bg-white px-0 py-[17px]',
  'border-t-[5px] border-brand shadow-submenu transition-all duration-300 ease-out',
  '[border-radius:0_37px_0px_24px]',
)
export const dropdownRowClass =
  'block px-[10px] py-[6px] text-[14px] text-submenu-ink transition-colors duration-200 hover:text-brand'
export const menuBarClass = 'block w-full bg-menu-bar lg:hidden'
export const menuButtonClass = cn(
  'm-[10px] inline-flex items-center gap-[8px] rounded-[4px] bg-menu-btn px-[20px] py-[6px]',
  'text-[16px] font-medium tracking-[1px] text-white uppercase',
)
export const menuGlyphClass = 'h-[16px] w-[16px]'
export const foldedPanelClass = 'block w-full bg-white lg:hidden'
export const foldedListClass = 'm-0 flex list-none flex-col p-0'
export const foldedRowClass =
  'block px-[19px] py-[10px] text-[14px] text-submenu-ink transition-colors duration-200 hover:text-brand'
export const foldedGroupRowClass = cn(foldedRowClass, 'flex items-center gap-[6px] font-medium')
export const foldedNestedClass = 'm-0 flex list-none flex-col pl-[19px]'

/* Hero --------------------------------------------------------------------------------------- */

export const heroClass = 'relative overflow-hidden bg-ink'
export const heroPhotoClass = 'absolute inset-0 bg-cover bg-center bg-no-repeat'
export const heroScrimClass = 'absolute inset-0 bg-scrim'
export const heroBodyClass = 'relative flex h-[400px] items-center md:h-[560px] lg:h-[750px] xl:h-[800px]'
export const discClass =
  'relative flex h-[220px] w-[220px] shrink-0 flex-col items-center justify-center rounded-full bg-circle md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[540px] xl:w-[540px]'
export const discRingClass = 'pointer-events-none absolute inset-[3.52%] rounded-full border border-dashed border-white/80'
export const heroDateRowClass = 'flex items-center gap-[16px]'
export const heroDashClass = 'hidden h-[2px] w-[57px] bg-white md:block'
export const heroDateClass =
  'm-0 text-center text-[13px] tracking-[1px] text-white uppercase md:text-[15px] lg:text-[23px]'
export const heroNamesClass =
  'my-[10px] text-center text-[27px] leading-[1.2] font-bold text-white capitalize md:text-[34px] lg:my-[20px] lg:text-[65px]'
export const heroTaglineClass =
  'm-0 text-center text-[13px] tracking-[1px] text-white uppercase md:text-[15px] lg:text-[23px]'
export const slideToggleClass =
  'absolute right-[15px] bottom-[15px] z-[3] inline-flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/20 text-white transition-colors duration-300 hover:bg-white/35'
export const slideGlyphClass = 'h-[20px] w-[20px]'

/* Our Story ---------------------------------------------------------------------------------- */

export const storyBandClass = 'relative pt-[50px] pb-[30px] md:pt-[100px] md:pb-[80px] lg:pt-[200px] lg:pb-[100px]'
export const storyGridClass = 'relative z-[1] grid items-center gap-[30px] lg:grid-cols-2'
export const storyPhotoClass = 'relative'
export const storyPhotoImgClass = 'h-auto w-full object-cover'
export const storySprigClass = 'absolute -bottom-[79px] -left-[71px] h-[180px] w-[128px] text-ink/60'
export const storyCaptionClass = 'px-[15px] pt-[30px] lg:px-[45px] lg:pt-[48px] lg:pl-[48px]'
export const storyCaptionSprigClass = 'mb-[16px] block h-[52px] w-[90px] text-ink/70'
export const storyHeadingClass =
  'mb-[26px] text-[28px] leading-[1.2] font-bold uppercase md:text-[34px] lg:mb-[44px] lg:text-[40px]'
export const storyCopyClass = 'text-[16px] leading-[30px] text-story'
export const storyOrnamentClass = 'pointer-events-none absolute top-1/2 hidden h-[361px] w-[359px] -translate-y-1/2 text-ink/20 xl:block'

/* Schedule ----------------------------------------------------------------------------------- */

export const scheduleBandClass =
  'relative bg-cream pt-[70px] pb-0 md:pt-[140px] md:pb-[85px] lg:pt-[170px] lg:pb-[110px]'
export const scheduleRowClass = 'grid gap-[60px] text-center lg:grid-cols-3 lg:gap-0'
export const scheduleCardClass = 'relative'
export const scheduleTopClass = 'px-[15px]'
export const scheduleTitleClass = 'text-[28px] leading-[1.2] font-normal lg:text-[35px]'
export const scheduleDateClass = 'mb-[24px] font-display text-[18px] text-ink lg:mb-[54px] lg:text-[20px]'
export const schedulePhotoWrapClass = 'relative flex justify-center'
export const schedulePhotoClass =
  'h-[237px] w-[237px] rounded-full border-[10px] border-ring object-cover'
export const scheduleSprigClass = 'pointer-events-none absolute top-0 left-1/2 ml-[60px] h-[150px] w-[106px] text-ink/40'
export const scheduleTimeClass =
  'mt-[15px] mb-[15px] block text-[14px] tracking-[10px] text-blush uppercase lg:text-[16px]'
export const scheduleAddressClass = 'mx-auto max-w-[300px] text-[16px] text-address'
export const scheduleDividerClass = 'absolute top-1/2 right-[-17px] hidden h-[75px] w-[2px] -translate-y-1/2 bg-gold lg:block'

/* Our Memories ------------------------------------------------------------------------------- */

export const memoriesBandClass = 'relative py-[70px] md:py-[100px] lg:py-[200px]'
export const memoriesGridClass = 'relative z-[1] flex flex-wrap'
export const memoryTileClass = 'relative w-full md:w-1/3'
export const memoryFrameClass = 'group relative overflow-hidden transition-all duration-[400ms] ease-out hover:p-[10px] focus-within:p-[10px]'
export const memoryPhotoClass = 'h-auto w-full object-cover'
export const memoryVeilClass =
  'pointer-events-none absolute inset-0 flex items-center justify-center bg-veil opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100 group-focus-within:opacity-100'
export const memoryPlusClass = 'h-[40px] w-[40px] text-white'
export const memoryButtonClass =
  'absolute inset-0 z-[2] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand'
export const memoriesOrnamentClass =
  'pointer-events-none absolute top-1/2 hidden h-[532px] w-[259px] -translate-y-1/2 text-ink/20 xl:block'
export const lightboxClass = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-[15px]'
export const lightboxCardClass = 'relative max-h-full max-w-[900px]'
export const lightboxPhotoClass = 'h-auto max-h-[80vh] w-full object-contain'
export const lightboxCaptionClass = 'mt-[15px] text-center text-[14px] text-white'
export const lightboxCloseClass =
  'absolute -top-[45px] right-0 inline-flex h-[35px] w-[35px] items-center justify-center text-white'

/* The Best Gift ------------------------------------------------------------------------------ */

export const giftBandClass = 'relative overflow-hidden bg-ink bg-cover bg-center'
export const giftWashClass = 'gift-wash absolute inset-0'
export const giftBodyClass = 'relative z-[1] px-[15px] py-[100px] lg:px-0 lg:py-[160px] lg:pb-[170px]'
export const giftOffsetClass = 'mx-auto w-full max-w-[1140px] px-[15px] lg:pl-[calc(8.333%_+_15px)]'
export const giftHeadingClass = 'text-[44px] leading-[1.1] font-bold capitalize lg:text-[70px]'
export const giftCopyClass = 'mb-[30px] text-[22px] leading-[1.3] text-ink lg:mb-[60px] lg:text-[30px]'
export const giftCtaClass = cn(
  'sweep-up h-[60px] min-w-[150px] rounded-[5px] px-[44px] text-[16px] font-normal tracking-[1px] capitalize',
)

/* Guest book --------------------------------------------------------------------------------- */

export const rsvpBandClass = 'relative py-[70px] md:py-[100px] lg:py-[200px]'
export const rsvpCardClass =
  'relative mx-auto w-full max-w-[570px] bg-white px-[34px] pt-[100px] pb-[110px] shadow-card lg:px-[82px] lg:pb-[70px]'
export const rsvpSprigClass = 'mx-auto mb-[10px] block h-[42px] w-[72px] text-ink/60'
export const rsvpHeadingClass =
  'mb-[40px] text-center text-[28px] leading-[1.3] font-bold uppercase md:text-[34px] lg:text-[40px]'
export const rsvpCornerClass = 'pointer-events-none absolute h-[87px] w-[100px] text-ink/40'
export const rsvpOuterClass = 'pointer-events-none absolute hidden text-ink/30 lg:block'
export const fieldRowClass = 'mb-[24px]'
export const fieldLabelClass =
  'mb-[8px] block text-[16px] font-medium tracking-[2px] text-placeholder capitalize'
export const fieldClass =
  'h-[60px] w-full rounded-[5px] border border-field-line bg-transparent px-[25px] text-[16px] font-medium text-placeholder capitalize focus:border-brand focus:outline-none'
export const selectClass = cn(fieldClass, 'appearance-none pr-[41px]')
export const textareaClass = cn(
  fieldClass,
  'h-[140px] resize-none px-[50px] py-[30px] tracking-[2px] normal-case',
)
export const selectWrapClass = 'relative'
export const selectGlyphClass = 'pointer-events-none absolute top-1/2 right-[15px] h-[12px] w-[12px] -translate-y-1/2 text-placeholder'
export const statusClass = 'mt-[20px] text-center text-[16px] text-brand'
export const rsvpSubmitClass = cn(
  'sweep-up mx-auto flex h-[60px] min-w-[150px] rounded-[5px] px-[44px] text-[16px] font-normal tracking-[1px] capitalize',
)

/* Location ----------------------------------------------------------------------------------- */

export const mapFrameClass = 'block h-[500px] w-full border-0'
export const mapCaptionClass = 'sr-only'

/* Our Lovely Partners ------------------------------------------------------------------------ */

export const partnersBandClass = 'relative py-[70px] md:py-[100px] lg:py-[200px]'
export const partnersRowClass = 'partners-row relative z-[1] overflow-hidden'
export const partnersTrackClass = 'flex w-max'
export const partnerMarkClass =
  'flex h-[171px] w-[170px] shrink-0 flex-col items-center justify-center gap-[10px] text-ink/70'
export const partnerGlyphClass = 'h-[46px] w-[46px]'
export const partnerNameClass = 'text-[13px] tracking-[1px] uppercase'

/* Foot of the page --------------------------------------------------------------------------- */

export const footerClass = 'bg-foot-bg'
export const footerInnerClass = 'pt-[70px] pb-0 md:pb-[74px] lg:pt-[200px]'
export const footerGridClass = 'grid gap-[40px] md:grid-cols-2 lg:grid-cols-4'
export const footerBrandClass = cn(
  'inline-flex items-end gap-[6px] text-[30px] leading-none font-bold text-brand',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
)
export const footerBlurbClass = 'mt-[20px] text-[16px] font-light text-footlink'
export const footerInfoClass = 'mt-[16px] text-[16px] font-light text-footlink'
export const footerHeadingClass =
  'mb-[38px] font-sans text-[18px] font-medium text-ink uppercase'
export const footerLinkClass =
  'text-[16px] font-light text-footlink transition-all duration-300 hover:pl-[5px] hover:text-brand'
export const footerListClass = 'm-0 flex list-none flex-col gap-[15px] p-0'
export const instagramGridClass = 'm-0 grid list-none grid-cols-3 p-0'
export const instagramCellClass = 'block'
export const instagramImgClass = 'h-[90px] w-full object-cover'
export const footerRuleClass = 'mt-[33px] border-t border-rule px-0 py-[33px]'
export const footerCopyClass = 'text-center text-[16px] leading-[32px] font-light text-story'
export const dockLinkClass = 'text-brand underline-offset-2 hover:underline'

/* Back to the top ---------------------------------------------------------------------------- */

export const scrollTopClass =
  'fixed right-[31px] bottom-[18px] z-[90] inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-transparent bg-brand text-white'
export const scrollTopGlyphClass = 'h-[20px] w-[20px]'
