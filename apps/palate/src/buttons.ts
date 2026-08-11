/** Shared button recipes recreated from the source's .btn-primary /
    .btn-white (ColorLib Appetizer, css/style.css): radius 2px, Poppins
    uppercase. Plain string consts (not cn() — Tailwind-merge would drop
    conflicting hover classes). */

/* .btn-primary — orange #ffa323 bg + border, white text; hover darkens
   the orange slightly. */
export const BTN_PRIMARY =
  'inline-block cursor-pointer border border-brand bg-brand px-6 py-3 text-center text-[14px] font-medium uppercase text-white ' +
  'rounded-[2px] transition-colors duration-300 hover:bg-[#f5960a] hover:border-[#f5960a]'

/* .btn-white — white bg, black text, 1px white border; hover → transparent
   bg, white border, orange text. */
export const BTN_WHITE =
  'inline-block cursor-pointer border border-white bg-white px-6 py-3 text-center text-[14px] font-medium uppercase text-ink ' +
  'rounded-[2px] transition-colors duration-300 hover:border-white hover:bg-transparent hover:text-brand'
