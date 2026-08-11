import { Eye, MessageCircle, ThumbsUp } from 'lucide-react'
import type { VideoMeta } from '../data'

/* Post meta row (reference `.post-meta`): comments / views / likes with
   icons — muted on dark surfaces, white when over a photo. */
export function PostMeta({
  meta,
  onImage = false,
  className = '',
}: {
  meta: VideoMeta
  onImage?: boolean
  className?: string
}) {
  const itemClass = onImage ? 'text-white/80' : 'text-mute'
  const iconClass = 'h-3.5 w-3.5'
  return (
    <ul className={`flex flex-wrap items-center gap-x-4 gap-y-1 font-display text-xs ${className}`}>
      <li className={`flex items-center gap-1 ${itemClass}`}>
        <MessageCircle className={iconClass} aria-hidden="true" />
        {meta.comments}
      </li>
      <li className={`flex items-center gap-1 ${itemClass}`}>
        <Eye className={iconClass} aria-hidden="true" />
        {meta.views}
      </li>
      <li className={`flex items-center gap-1 ${itemClass}`}>
        <ThumbsUp className={iconClass} aria-hidden="true" />
        {meta.likes}
      </li>
    </ul>
  )
}
