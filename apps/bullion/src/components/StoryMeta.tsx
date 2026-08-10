import { MessageCircle, Zap } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface StoryMetaProps {
  author: string
  date: string
  views: string
  comments: string
  /** Cards use a bold dark author; hero captions use an accent author. */
  accentAuthor?: boolean
  /** Hero captions sit on dark images: render meta in white. */
  light?: boolean
  className?: string
}

/** Story metadata row: byline, date, view count (bolt) and comment count
    (chat bubbles) — reference: .list-li-mr-20 meta lists. */
export function StoryMeta({
  author,
  date,
  views,
  comments,
  accentAuthor = true,
  light = false,
  className,
}: StoryMetaProps) {
  return (
    <ul
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-1 text-xs',
        light ? 'text-white/80' : 'text-meta',
        className,
      )}
    >
      <li>
        by{' '}
        <span
          className={cn(
            'font-bold',
            accentAuthor ? 'text-accent' : light ? 'text-white' : 'text-ink',
          )}
        >
          {author}
        </span>
      </li>
      <li>{date}</li>
      <li className="flex items-center gap-1">
        <Zap
          className={cn('h-3.5 w-3.5', light ? 'text-accent' : 'text-accent')}
          aria-hidden="true"
        />
        {views}
      </li>
      <li className="flex items-center gap-1">
        <MessageCircle
          className={cn('h-3.5 w-3.5', light ? 'text-accent' : 'text-accent')}
          aria-hidden="true"
        />
        {comments}
      </li>
    </ul>
  )
}
