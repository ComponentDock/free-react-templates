import type { MiniPost } from '../data'
import { imgUrl } from '../data'

/** Compact 100×100 thumbnail post row (reference: .wh-100x + .ml-120). */
export function MiniPostRow({ post }: { post: MiniPost }) {
  return (
    <a href="#post" className="group flex gap-5">
      <img
        src={imgUrl(post.seed, 100, 100)}
        alt={post.headline}
        className="h-[100px] w-[100px] shrink-0 object-cover"
      />
      <div className="min-w-0">
        <h5 className="text-sm leading-snug font-bold text-ink transition-colors group-hover:text-accent">
          {post.headline}
        </h5>
        <h6 className="mt-1 text-xs text-meta">
          by {post.author}, {post.date}
        </h6>
      </div>
    </a>
  )
}
