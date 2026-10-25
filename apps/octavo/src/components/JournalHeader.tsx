import { JOURNAL } from '../content'

/**
 * The band's head: the `h1` on the left and "All articles →" on the right,
 * sharing one baseline over a 2px ink rule. The flex row wraps below 388px,
 * which is the only "breakpoint" this design has — it comes from wrapping, not
 * from a media query.
 */
export function JournalHeader() {
  return (
    <header className="mb-7 flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-ink pb-[18px]">
      <h1 className="m-0 font-serif text-[clamp(30px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em]">
        {JOURNAL.title}
      </h1>
      <a
        href={`#${JOURNAL.id}`}
        className="rounded-[4px] text-[15px] font-semibold text-ink hover:underline hover:underline-offset-4 focus-visible:outline-[2px_solid_var(--color-chip-blue)] focus-visible:outline-offset-4"
      >
        {JOURNAL.allLabel} <span aria-hidden="true">→</span>
      </a>
    </header>
  )
}
