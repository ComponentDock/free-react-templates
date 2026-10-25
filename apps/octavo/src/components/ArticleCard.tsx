import type { CSSProperties } from 'react'
import { CATEGORY_HUES, type Article } from '../content'
import { CardChip } from './CardChip'
import { CardMeta } from './CardMeta'

interface ArticleCardProps {
  article: Article
}

/**
 * A card with **no plate**: the `<article>` is transparent (no background,
 * border, radius, shadow or padding) and the only rounding is the 14px clip on
 * the 16:10 cover. The body is inset 2px so headline and excerpt sit a hair
 * right of the photograph, while the meta rule below spans the full width.
 * `flex: 1` on the body absorbs the row's stretch, so every meta strip in the
 * grid lands on one line.
 */
export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article
      id={article.id}
      style={{ '--chip': CATEGORY_HUES[article.tone] } as CSSProperties}
      className="card relative flex flex-col text-[15px] leading-[1.6] text-ink"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-media">
        <img
          src={article.photo.src}
          alt={article.photo.alt}
          width={800}
          height={500}
          loading="lazy"
          className="card-photo block h-full w-full object-cover"
        />
        <CardChip label={article.category} />
      </div>

      <div className="flex-1 px-[2px] pt-[18px]">
        <h2 className="m-0 mb-[10px] font-serif text-[22px] font-semibold leading-[1.25] tracking-[-0.01em]">
          <a href={`#${article.id}`} className="card-link">
            {article.title}
          </a>
        </h2>
        <p className="m-0 text-muted">{article.excerpt}</p>
      </div>

      <CardMeta article={article} />
    </article>
  )
}
