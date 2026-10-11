/* Shared button chrome for the template.
   Solid yellow is the default action colour (nav bar phone CTA, "Book Your
   Destination"); both actions share the 5px radius of the reference design.
   The navy gradient variant is the hero "Explore Destinations" CTA, which
   flips to yellow on hover — and vice versa for the yellow buttons. */

const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 rounded-[5px] text-[16px] font-medium text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

export const BUTTON_SOLID =
  'bg-brand hover:gradient-navy focus-visible:ring-brand/50 focus-visible:ring-offset-white'

export const BUTTON_NAVY =
  'gradient-navy hover:bg-brand focus-visible:ring-periwinkle/40 focus-visible:ring-offset-white'

export const BUTTON_CLASS = BUTTON_BASE
