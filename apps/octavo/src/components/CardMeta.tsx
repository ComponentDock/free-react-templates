import type { Article } from '../content'
import { ReadTime } from './ReadTime'

interface CardMetaProps {
  article: Article
}

/**
 * The hairline meta strip: a 38px initials disc in the card's hue (decorative,
 * so hidden from assistive tech), a two-line author/date block that absorbs
 * the spare width with `flex: 1`, and the read-time pill whose right edge is
 * therefore flush with the card's.
 */
export function CardMeta({ article }: CardMetaProps) {
  return (
    <footer className="mt-[18px] flex items-center gap-3 border-t border-line pt-4 text-[13.5px]">
      <span
        aria-hidden="true"
        className="grid h-[38px] w-[38px] flex-none place-items-center rounded-full bg-[var(--chip)] text-[13px] font-semibold text-white"
      >
        {article.initials}
      </span>
      <span className="flex flex-1 flex-col leading-[1.35]">
        <span className="font-semibold">{article.author}</span>
        <span className="text-muted">
          <time dateTime={article.date.iso}>{article.date.label}</time>
        </span>
      </span>
      <ReadTime label={article.readTime} />
    </footer>
  )
}
