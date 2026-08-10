import { MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { BlogPost } from '../data'

interface PostCardProps {
  post: BlogPost
  reversed?: boolean
}

export function PostCard({ post, reversed = false }: PostCardProps) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className={cn('overflow-hidden', reversed && 'md:order-2')}>
        <img
          src={`https://picsum.photos/seed/${post.seed}/800/600`}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className={cn(reversed && 'md:order-1')}>
        <p className="text-[11px] uppercase tracking-[0.15rem] text-meta">
          by {post.author} · {post.date}
        </p>
        <h2 className="mt-4 font-sans text-2xl font-semibold leading-snug text-ink dark:text-gray-100">
          {post.title}
        </h2>
        <p className="mt-4 leading-relaxed text-description dark:text-gray-400">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.15rem] text-meta">
            {post.tags.join(', ')}
          </p>
          <p className="flex items-center gap-1.5 text-xs text-meta">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {post.comments}
          </p>
        </div>
      </div>
    </article>
  )
}
