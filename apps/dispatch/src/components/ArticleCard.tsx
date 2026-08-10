import { cn } from '@free-react-templates/ui'
import type { Article } from '../data'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const title = (
    <a
      href="#"
      className={cn(
        'font-sans font-semibold text-black transition-colors hover:text-pill dark:text-white',
        article.size === 'large' ? 'text-lg leading-[1.33]' : 'text-[15px] leading-[1.33]',
      )}
    >
      {article.title}
    </a>
  )

  if (article.variant === 'background') {
    return (
      <article className="relative overflow-hidden rounded-md">
        <img src={article.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0 bg-black/40 transition-colors hover:bg-black/50"
          aria-hidden="true"
        />
        <div
          className={cn(
            'relative flex flex-col justify-end p-6',
            article.size === 'large' ? 'h-72' : 'h-44',
          )}
        >
          {title}
        </div>
      </article>
    )
  }

  return (
    <article className="overflow-hidden rounded-md bg-white transition-colors dark:bg-gray-900">
      {article.variant === 'image' && article.image && (
        <img
          src={article.image}
          alt=""
          className={cn(
            'w-full rounded-md object-cover',
            article.size === 'large' ? 'aspect-[17/10]' : 'aspect-[4/3]',
          )}
        />
      )}
      <div className={cn('px-6 pt-4 pb-5', article.size === 'large' && 'px-7')}>{title}</div>
    </article>
  )
}
