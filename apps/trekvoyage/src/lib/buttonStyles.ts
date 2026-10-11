/* Pill action chrome for this template: the design language is a fully
   rounded button (30px radius, 12px/30px padding, 14px) in the signature
   turquoise #08d9d6. Shared by the UI package's Button/ButtonLink with a
   className override. */

export const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 rounded-[30px] px-[30px] py-[12px] text-[14px] font-normal leading-none transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

/* Turquoise fill flipping to the lighter turquoise on hover. */
export const BUTTON_TEAL =
  'bg-brand text-white hover:bg-brand-hover focus-visible:ring-brand/40 focus-visible:ring-offset-white'

/* White outline pill on the turquoise CTA band: flips to a white fill with
   turquoise text on hover. */
export const BUTTON_OUTLINE_WHITE =
  'border-2 border-white font-bold text-white hover:bg-white hover:text-brand focus-visible:ring-white/40 focus-visible:ring-offset-brand'
