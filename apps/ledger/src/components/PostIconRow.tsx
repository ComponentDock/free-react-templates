import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { postIconRow } from '../data'

/** Comment / like / share row with a top hairline (`.post_icon`). */
export function PostIconRow() {
  return (
    <ul className="mt-5 flex items-center gap-6 border-t border-hairline pt-5">
      <li className="flex items-center gap-1.5 text-[13px] text-meta">
        <MessageCircle className="h-4 w-4 text-ink" aria-hidden="true" />
        {postIconRow[0]}
      </li>
      <li className="flex items-center gap-1.5 text-[13px] text-meta">
        <Heart className="h-4 w-4 text-ink" aria-hidden="true" />
        {postIconRow[1]}
      </li>
      <li className="flex items-center gap-1.5 text-[13px] text-meta">
        <Share2 className="h-4 w-4 text-ink" aria-hidden="true" />
        {postIconRow[2]}
      </li>
    </ul>
  )
}
