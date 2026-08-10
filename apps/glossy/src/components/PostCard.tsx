import { cn } from '@free-react-templates/ui'
import type { Post } from '../data'
import { imgUrl } from '../data'

interface PostCardProps {
  post: Post
  imageSize?: [number, number]
  variant?: 'default' | 'center' | 'stack' | 'horizontal' | 'card'
  imageClassName?: string
}

/** Magazine post card: image, coral uppercase category, Josefin heading, meta. */
export function PostCard({
  post,
  imageSize = [350, 240],
  variant = 'default',
  imageClassName,
}: PostCardProps) {
  const [w, h] = imageSize
  const horizontal = variant === 'horizontal'

  return (
    <article
      className={cn(
        'group',
        horizontal && 'flex flex-col sm:flex-row',
        variant === 'center' && 'text-center',
      )}
    >
      <div className={cn(horizontal && 'sm:w-2/5', !horizontal && 'overflow-hidden')}>
        <img
          src={imgUrl(post.seed, w, h)}
          alt={post.title}
          loading="lazy"
          className={cn('w-full object-cover', horizontal && 'h-full', imageClassName)}
        />
      </div>
      <div className={cn(horizontal ? 'sm:w-3/5 sm:pl-6' : 'mt-4')}>
        <div className={cn('flex items-center gap-3', variant === 'center' && 'justify-center')}>
          <a href="#" className="text-[11px] font-bold uppercase tracking-wide text-brand">
            {post.category}
          </a>
        </div>
        <a href="#" className="mt-2 block">
          <h4 className="font-display text-xl leading-6 font-semibold text-heading transition-colors group-hover:text-brand">
            {post.title}
          </h4>
        </a>
        <p className="mt-2 text-sm text-metagray">
          {post.meta} · {post.author}
        </p>
      </div>
    </article>
  )
}
