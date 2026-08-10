import { Clock, Eye, MessageCircle, User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { NewsMeta } from '../data'

interface MetaRowProps {
  meta: NewsMeta
  className?: string
}

/** Small grey meta row: date, author, comments, views with icons. */
export function MetaRow({ meta, className }: MetaRowProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-4 text-xs text-ash', className)}>
      <li className="flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
        {meta.date}
      </li>
      {meta.author && (
        <li className="flex items-center gap-1.5">
          <User className="h-3.5 w-3.5" aria-hidden="true" />
          {meta.author}
        </li>
      )}
      {meta.comments && (
        <li className="flex items-center gap-1.5">
          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {meta.comments}
        </li>
      )}
      <li className="flex items-center gap-1.5">
        <Eye className="h-3.5 w-3.5" aria-hidden="true" />
        {meta.views}
      </li>
    </ul>
  )
}
