/* Action chrome for this template.

   Primary buttons are PILL-shaped (25px radius, 42px line height, 30px/60px
   padding) filled with the signature purple→teal gradient; the arrow glyph
   sits absolute at the right edge and slides 10px inward on hover.

   Secondary buttons are outlined pills (20px radius, 28px line height) whose
   fill switches to the same gradient on hover, and the about block's black
   pill inverts to a white fill with dark text. */

export const PILL_BASE =
  'group relative inline-flex items-center font-medium leading-[42px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

/* Gradient pill: 30px left / 60px right padding leaves room for the arrow. */
export const PILL_PRIMARY =
  'brand-gradient rounded-[25px] pr-[60px] pl-[30px] text-white focus-visible:ring-grad-from/40 focus-visible:ring-offset-white'

/* Outlined pill: `.primary-btn2.primary-border.circle` — white fill, grey
   hairline, gradient fill on hover. */
export const PILL_OUTLINE =
  'rounded-[20px] border border-body/60 bg-white px-[30px] text-[.8em] leading-[28px] font-semibold text-black uppercase hover:border-transparent hover:bg-none hover:text-white focus-visible:ring-grad-from/40'

/* Black pill in the about block: inverts to a white fill on hover. */
export const PILL_BLACK =
  'rounded-[20px] border border-ink bg-ink px-[28px] py-[12px] text-[14px] leading-none text-white uppercase hover:border-ink hover:bg-white hover:text-ink focus-visible:ring-ink/40'

/* Square gradient submit on the dark newsletter field. */
export const PILL_SQUARE =
  'brand-gradient h-[38px] w-[38px] shrink-0 items-center justify-center rounded-none text-white focus-visible:ring-white/40'

/* Arrow glyph inside a pill: absolute at the right edge, sliding inward. */
export const PILL_ARROW = 'absolute right-[30px] h-[14px] w-[14px] group-hover:right-[20px]'

/* Field chrome: SHARP corners (0 radius), 48px line height, 25px inset — the
   deliberate contrast with the pill buttons. */
export const FIELD_CLASS =
  'mt-[10px] block w-full rounded-none border border-hairline bg-transparent text-[13px] font-light text-body transition-colors duration-300 focus:border-grad-from focus:outline-none'
