/* Square action chrome for this template: the design language is a sharp
   zero-radius uppercase button (14px/500, 40px line height, 30px side
   padding) with the signature yellow #f8b600 reserved for calls to action.
   Shared by the UI package's ButtonLink/Button with a className override. */

export const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 rounded-none px-[30px] text-[14px] font-medium uppercase leading-[40px] tracking-[0.4px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

/* Hero CTA: yellow fill flipping to charcoal on hover. */
export const BUTTON_NAVY_HOVER =
  'bg-brand text-white hover:bg-ink focus-visible:ring-brand/40 focus-visible:ring-offset-navy'

/* Standard action: yellow fill flipping to a white panel with yellow text. */
export const BUTTON_YELLOW =
  'border border-brand bg-brand text-white hover:bg-white hover:text-brand focus-visible:ring-brand/40 focus-visible:ring-offset-white'

/* Submit on the dark footer / dark panels: yellow fill flipping to white. */
export const BUTTON_ON_DARK =
  'bg-brand text-white hover:bg-white hover:text-navy focus-visible:ring-brand/40 focus-visible:ring-offset-navy'
