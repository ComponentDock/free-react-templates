import { Calendar, Heart, MessageCircle, User } from 'lucide-react'
import type { PostMeta } from '../data'

/* Post meta row (reference `.post-meta`): author, date, comments, likes —
   white when rendered over a photo (hero), muted otherwise. */
export function PostMeta({ meta, onImage }: { meta: PostMeta; onImage?: boolean }) {
  const itemClass = onImage ? 'text-white/80' : 'text-body'
  const iconClass = 'h-3.5 w-3.5'
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 font-display text-xs">
      <li className={`flex items-center gap-1 ${itemClass}`}>
        <User className={iconClass} aria-hidden="true" />
        {meta.author}
      </li>
      <li className={`flex items-center gap-1 ${itemClass}`}>
        <Calendar className={iconClass} aria-hidden="true" />
        {meta.date}
      </li>
      <li className={`flex items-center gap-1 ${itemClass}`}>
        <MessageCircle className={iconClass} aria-hidden="true" />
        {meta.comments}
      </li>
      <li className={`flex items-center gap-1 ${itemClass}`}>
        <Heart className={iconClass} aria-hidden="true" />
        {meta.likes}
      </li>
    </ul>
  )
}
