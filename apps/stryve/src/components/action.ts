/* Square button recipe measured from the reference stylesheet: 14px/700
   UPPERCASE, 1.5px tracking, 20px 50px padding (191×61px), ZERO radius,
   flat #233EDE with no gradient. Two fills are used on the page — brand
   blue and the dark #212122 variant on the trainers band. */

const base =
  'inline-flex items-center justify-center rounded-none bg-brand px-[50px] py-[20px] text-[14px] font-bold uppercase leading-none tracking-[1.5px] text-white transition-colors duration-300 hover:bg-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2'

const filled = 'border-0 bg-brand text-white hover:bg-brand-deep'

const dark = 'border-0 bg-ink text-white hover:bg-black'

const full = 'w-full'

export const btn = { base, filled, dark, full } as const
