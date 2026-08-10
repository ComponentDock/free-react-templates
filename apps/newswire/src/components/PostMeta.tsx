import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { Post } from '../data'

interface PostMetaProps {
  post: Post
  className?: string
}

/** "Author in Category · Jun 14 • 3 min read" meta row (reference .post-meta). */
export function PostMeta({ post, className = '' }: PostMetaProps) {
  return (
    <p className={cn('text-[0.8rem] text-body', className)}>
      <a href="#top" className="font-medium text-ink transition-colors hover:text-accent">
        {post.author}
      </a>{' '}
      in{' '}
      <a href="#top" className="font-medium text-ink transition-colors hover:text-accent">
        {post.category}
      </a>{' '}
      <span aria-hidden="true">·</span> <span>{post.date}</span> <span aria-hidden="true">•</span>{' '}
      <span>{post.readTime}</span>
      <Star className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" />
    </p>
  )
}
