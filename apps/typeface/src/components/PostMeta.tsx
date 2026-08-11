import { MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { authorAvatar, authorName, commentCount, postDate } from '../data'

interface PostMetaProps {
  className?: string
}

/* Shared post meta row (reference `div.post-meta`): circular avatar +
   author + bullet + date + bullet + comment count. */
export function PostMeta({ className }: PostMetaProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1.5 text-[13px] uppercase tracking-[.1em] text-muted',
        className,
      )}
    >
      <img src={authorAvatar} alt="" className="h-[30px] w-[30px] rounded-full object-cover" />
      <span>{authorName}</span>
      <span aria-hidden="true">•</span>
      <span>{postDate}</span>
      <span aria-hidden="true">•</span>
      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{commentCount}</span>
    </div>
  )
}
