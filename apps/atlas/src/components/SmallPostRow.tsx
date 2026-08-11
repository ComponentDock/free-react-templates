import { cn } from '@free-react-templates/ui'
import type { Post } from '../data'
import { PostMeta, PostThumb } from './PostBits'

type SmallPostSize = 'sm' | 'widget' | 'md'

interface SmallPostRowProps {
  post: Post
  size?: SmallPostSize
  className?: string
}

/* Horizontal small-post row. Reference sizes: post-style-2 = 97px thumb
   ("sm"), sidebar widget-post = 70px thumb ("widget"), post-style-4 = 200px
   thumb + excerpt ("md"). */
const thumbSizes: Record<SmallPostSize, { width: number; height: number; className: string }> = {
  sm: { width: 97, height: 97, className: 'h-[97px] w-[97px]' },
  widget: { width: 70, height: 70, className: 'h-[70px] w-[70px]' },
  md: { width: 200, height: 140, className: 'h-[140px] w-[200px]' },
}

export function SmallPostRow({ post, size = 'sm', className }: SmallPostRowProps) {
  const thumb = thumbSizes[size]
  return (
    <article className={cn('group flex items-center', className)}>
      <PostThumb
        seed={post.seed}
        alt={post.title}
        width={thumb.width}
        height={thumb.height}
        className={cn(thumb.className, 'mr-4 flex-none object-cover')}
      />
      <div className="min-w-0">
        <h3 className="font-heading text-sm font-bold text-ink transition-colors group-hover:text-brand">
          <a href="#" className="line-clamp-2">
            {post.title}
          </a>
        </h3>
        {size === 'md' && post.excerpt && (
          <p className="mt-1 mb-3 line-clamp-2 text-sm text-text-muted">{post.excerpt}</p>
        )}
        <PostMeta author={post.author} date={post.date} className="border-0 pb-0" />
      </div>
    </article>
  )
}
