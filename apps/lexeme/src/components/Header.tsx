import { HEAD } from '../content'

/**
 * The band's head: a violet eyebrow, a clamped display title and one line of
 * instructions, capped at 620 px. Nothing sits on the right — no subtitle, no
 * deck selector, no progress bar.
 */
export function Header() {
  return (
    <header className="mb-8 max-w-[620px]">
      <p className="m-0 text-sm font-semibold leading-[normal] text-accent">{HEAD.eyebrow}</p>
      <h1 className="mb-2 mt-1.5 text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.05] tracking-[-0.035em]">
        {HEAD.title}
      </h1>
      <p className="m-0 text-base leading-normal text-muted">{HEAD.sub}</p>
    </header>
  )
}
