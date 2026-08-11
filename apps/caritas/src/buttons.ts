/** Shared button recipes recreated from the source's .btn_2 / .btn_3
    (ColorLib Amor, css/style.css): purple family, uppercase w700 16px,
    asymmetric radii (top-left + bottom-right 20px), gradient hover fill
    (#7f00ff → #e100ff → #7f00ff). Plain string consts (not cn() — the hover
    corner flip must NOT be tailwind-merged away). */

/* .btn_2 — light: white bg, purple text/border; hover → gradient fill,
   white text, border transparent. */
export const BTN_2 =
  'inline-block border border-brand bg-white px-10 py-[13.5px] text-center text-[16px] font-bold uppercase text-brand ' +
  'rounded-tl-[20px] rounded-br-[20px] transition-all duration-300 ' +
  'hover:border-transparent hover:bg-[linear-gradient(to_left,#7f00ff_0%,#e100ff_50%,#7f00ff_100%)] hover:text-white'

/* .btn_3 — filled: gradient bg + white text; hover flips the corner radii
   (top-right + bottom-left 20px, others reset to 0). */
export const BTN_3 =
  'inline-block border border-transparent bg-[linear-gradient(to_left,#7f00ff_0%,#e100ff_50%,#7f00ff_100%)] px-10 py-[13.5px] text-center text-[16px] font-bold uppercase text-white ' +
  'rounded-tl-[20px] rounded-br-[20px] transition-all duration-300 ' +
  'hover:rounded-tr-[20px] hover:rounded-bl-[20px] hover:rounded-tl-none hover:rounded-br-none'
