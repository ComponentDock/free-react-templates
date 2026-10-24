/* Button recipes measured from the reference stylesheet: 45px tall,
   10px radius, 3px border, UPPERCASE 14px/700, min-width 200px, 500ms
   transition. Four variants, matching the four used on the page. */

const base =
  'inline-flex h-[45px] min-w-[200px] items-center justify-center rounded-[10px] border-[3px] px-[30px] text-[14px] font-bold uppercase leading-none transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50'

const outline =
  'border-brand bg-transparent text-brand hover:bg-brand hover:text-white'

const filled =
  'border-brand bg-brand text-white hover:border-ink hover:bg-ink'

const gradient =
  'border-transparent bg-gradient-to-r from-lime to-brand text-ink hover:text-white'

const white =
  'border-brand bg-white text-brand hover:bg-brand hover:text-white'

export const btn = { base, outline, filled, gradient, white } as const

export type BtnVariant = keyof Omit<typeof btn, 'base'>
