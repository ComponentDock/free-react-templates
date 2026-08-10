import { imgUrl, type NewsPost } from '../data'

/** Large style-2 news card: thumbnail on top, date, title, author
    (reference: .single-blog-post.style-2). */
export function PostCard({ post }: { post: NewsPost }) {
  return (
    <article>
      <a href="#story" className="group block">
        <img
          src={imgUrl(post.seed, 600, 400)}
          alt=""
          className="w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
        />
        <p className="mt-4 text-xs text-meta">{post.date}</p>
        <h3 className="mt-1 text-[22px] leading-snug font-semibold text-ink transition-colors group-hover:text-accent">
          {post.title}
        </h3>
      </a>
      <p className="mt-2 text-xs text-meta">
        by <span className="font-bold text-ink">{post.author}</span>
      </p>
    </article>
  )
}
