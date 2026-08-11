import { cn } from '@free-react-templates/ui'
import type { Post } from '../data'
import { PostChip, PostMeta, PostThumb } from './PostBits'

interface FeaturedPostProps {
  post: Post
  elevated?: boolean
  className?: string
}

/* Featured post card (reference `.single-blog-post` in the category
   sliders): thumbnail with an overlaid category chip, 18px headline, excerpt
   and a meta row; card shadow is optional (Today's Pick has none). */
export function FeaturedPost({ post, elevated = true, className }: FeaturedPostProps) {
  return (
    <article
      className={cn('group bg-paper', elevated && 'shadow-[0_2px_8px_rgba(0,0,0,0.15)]', className)}
    >
      <div className="relative">
        <PostThumb
          seed={post.seed}
          alt={post.title}
          width={600}
          height={400}
          className="w-full object-cover"
        />
        <div className="absolute top-[15px] left-[30px]">
          <PostChip category={post.category} />
        </div>
      </div>
      <div className="p-5 md:px-[30px] md:pt-5 md:pb-[30px]">
        <h3 className="font-heading text-lg font-bold text-ink transition-colors group-hover:text-brand">
          <a href="#">{post.title}</a>
        </h3>
        {post.excerpt && <p className="mt-2 mb-5 text-sm text-text-muted">{post.excerpt}</p>}
        <PostMeta author={post.author} date={post.date} className="mb-[30px]" />
      </div>
    </article>
  )
}
