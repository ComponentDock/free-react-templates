import { CalendarDays, MessageCircle, User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { PostMeta as PostMetaData } from '../data'

/* Post meta line — author / date / comments in #777 12px 300. */

export function PostMeta({
  meta,
  className,
  iconClassName,
}: {
  meta: PostMetaData
  className?: string
  iconClassName?: string
}) {
  return (
    <p
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-light text-body',
        className,
      )}
    >
      <span className="inline-flex items-center gap-1.5">
        <User size={13} className={iconClassName} aria-hidden="true" />
        {meta.author}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays size={13} className={iconClassName} aria-hidden="true" />
        {meta.date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <MessageCircle size={13} className={iconClassName} aria-hidden="true" />
        {meta.comments} Comments
      </span>
    </p>
  )
}
