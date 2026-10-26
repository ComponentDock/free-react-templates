import { HEAD } from '../content'

/**
 * The band's head: a lime eyebrow over a clamped display title, capped at
 * 640 px so the title wraps at two lines rather than running the full grid
 * width. Nothing sits on the right — there is no subtitle, date chip or link.
 */
export function Header() {
  return (
    <header className="mb-8">
      <p className="m-0 text-sm font-medium text-accent">{HEAD.eyebrow}</p>
      <h1 className="mb-0 mt-2 max-w-[640px] text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.02] tracking-[-.035em]">
        {HEAD.title}
      </h1>
    </header>
  )
}
