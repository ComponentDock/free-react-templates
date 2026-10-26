import { TINT_VARS, type Tint } from '../data/recipes'

interface TagPillsProps {
  tags: readonly string[]
  tint: Tint
}

/**
 * The pills repeat the card's band colour, which is what ties the bottom of the
 * card back to its header. They wrap rather than shrink, so a narrow card moves
 * the second pill to its own centred line.
 */
export function TagPills({ tags, tint }: TagPillsProps) {
  return (
    <ul
      aria-label="Tags"
      className="mt-4 mb-0 flex list-none flex-wrap justify-center gap-1.5 p-0"
    >
      {tags.map((tag) => (
        <li
          key={tag}
          style={{ background: TINT_VARS[tint] }}
          className="rounded-full px-[11px] py-1 text-[13px] font-semibold text-tag-ink"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
