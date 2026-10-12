/* Class strings shared across Locale's sections, so a band's measure or a control's shape changes in
   one place. Kept apart from the components to keep their JSX readable. */

export const pageClass = 'min-h-screen bg-paper font-body text-navy'

export const skipLinkClass =
  'sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:font-display focus:text-white'

export const containerClass = 'mx-auto max-w-7xl px-6'

export const sectionClass = 'bg-paper py-24'

export const bandClass = 'bg-section py-24'

export const sectionTitleClass = 'text-center font-display text-4xl font-semibold text-navy'

export const sectionSubtitleClass = 'mt-3 text-lg font-light text-muted'

/* The navy veil the destination circles and the interest cards wear over their photo. */
export const veilClass =
  'absolute inset-0 bg-[linear-gradient(to_top,#010a27,rgba(6,31,120,0.3),transparent)]'

export const navLinkClass =
  'flex items-center gap-1 px-4 py-7 font-display text-base font-semibold text-white transition-colors hover:text-brand'

export const dropdownClass =
  'absolute left-0 top-full hidden w-44 bg-navy/90 py-2 group-hover:block group-focus-within:block'

export const arrowClass =
  'flex h-10 w-10 items-center justify-center rounded-full border border-edge text-navy transition-colors hover:bg-brand hover:text-white'

export const quoteArrowClass =
  'flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-brand'

export const dotClass = (active: boolean): string =>
  `h-2.5 w-2.5 rounded-full transition-colors ${active ? 'bg-brand' : 'bg-edge hover:bg-brand/50'}`

export const cardClass =
  'overflow-hidden rounded-[5px] bg-paper shadow-[0px_6px_6px_0px_rgba(2,25,65,0.08)]'

export const ctaSweepClass =
  'absolute inset-0 origin-left scale-x-0 bg-navy transition-transform duration-300 ease-out group-hover:scale-x-100'
