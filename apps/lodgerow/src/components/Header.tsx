import { HEAD } from '../content'

/**
 * The band's head: one title, one sub-line, nothing on the right. The en dash
 * in the title is a range, and the sub's middle dot separates the guest count
 * from what the price covers — both characters are copy, not punctuation to
 * normalise.
 */
export function Header() {
  return (
    <header className="mb-6">
      <h1 className="m-0 text-[clamp(26px,3.4vw,34px)] font-bold leading-[1.15] tracking-[-0.02em]">
        {HEAD.title}
      </h1>
      <p className="mt-1.5 text-base leading-[1.25] text-muted">{HEAD.sub}</p>
    </header>
  )
}
