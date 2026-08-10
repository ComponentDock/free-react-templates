import { imgUrl, type NewsPost } from '../data'

/** Compact style-4 news row: 120px thumbnail left, date + title right
    (reference: .single-blog-post.style-4). */
export function ThumbRow({ post }: { post: NewsPost }) {
  return (
    <a href="#story" className="group flex gap-4">
      <img
        src={imgUrl(post.seed, 120, 120)}
        alt=""
        className="h-[120px] w-[120px] shrink-0 object-cover"
      />
      <div className="min-w-0">
        <p className="text-xs text-meta">{post.date}</p>
        <h5 className="mt-1 text-base leading-snug font-semibold text-ink transition-colors group-hover:text-accent">
          {post.title}
        </h5>
      </div>
    </a>
  )
}
