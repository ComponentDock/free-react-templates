import { cn } from '@free-react-templates/ui'

/** 320 / 380 / 220 px discs, blurred 8px, dimmed to 35% so the copy clears AA. */
const BLOBS: readonly string[] = [
  'left-[6%] top-[8%] size-80 bg-[radial-gradient(circle_at_30%_30%,#f472b6,#db2777_70%)]',
  'bottom-[6%] right-[4%] size-[380px] bg-[radial-gradient(circle_at_30%_30%,#fb923c,#c2410c_70%)]',
  'left-[44%] top-[36%] size-[220px] bg-[radial-gradient(circle_at_30%_30%,#67e8f9,#0e7490_70%)]',
]

/** Three colour blobs painted behind the cards. Decoration only — never announced. */
export function Blobs() {
  return BLOBS.map((blob) => (
    <div
      key={blob}
      aria-hidden="true"
      className={cn('pointer-events-none absolute rounded-full opacity-[.35] [filter:blur(8px)]', blob)}
    />
  ))
}
