import { cn } from '@free-react-templates/ui'
import type { Post } from '../data'
import { imgUrl } from '../data'

interface PostEntryProps {
  post: Post
  variant?: 'vertical' | 'horizontal'
  className?: string
}

/**
 * A single post entry — either vertical (image on top, as in the "Today's
 * Highlight" first row and the Food and Drink cards) or horizontal (fixed
 * 160px image column left, text right, as in the highlight/lifestyle/travel
 * rows). Mirrors `.post-entry` / `.post-entry.horizontal` in the original.
 */
export function PostEntry({ post, variant = 'vertical', className }: PostEntryProps) {
  const media = (
    <img
      src={imgUrl(
        post.seed,
        variant === 'horizontal' ? 160 : 800,
        variant === 'horizontal' ? 160 : 500,
      )}
      alt=""
      className={cn(
        'object-cover',
        variant === 'horizontal' ? 'h-[110px] w-[160px] flex-none' : 'mb-2.5 aspect-[8/5] w-full',
      )}
    />
  )

  const text = (
    <div className={variant === 'horizontal' ? 'flex flex-col justify-center' : undefined}>
      <a
        href="#"
        className="text-xs font-bold tracking-wide text-brand uppercase transition-colors hover:text-ink"
      >
        {post.category}
      </a>
      <h3 className="mt-1 font-display text-xl leading-snug font-medium text-ink">
        <a href="#" className="text-ink transition-colors hover:text-brand">
          {post.title}
        </a>
      </h3>
      <p className="mt-1.5 text-sm text-meta/70">{post.meta}</p>
    </div>
  )

  if (variant === 'horizontal') {
    return (
      <article className={cn('mb-10 flex gap-[30px]', className)}>
        {media}
        {text}
      </article>
    )
  }

  return (
    <article className={cn('mb-10', className)}>
      {media}
      {text}
    </article>
  )
}
