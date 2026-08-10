import type { Post } from '../data'

interface PostMetaProps {
  post: Post
  className?: string
}

/** Category tags + date row shown above post headlines. */
export function PostMeta({ post, className = '' }: PostMetaProps) {
  return (
    <p className={`text-xs uppercase tracking-wider text-body ${className}`}>
      {post.categories.map((category) => (
        <a
          key={category}
          href="#top"
          className="mr-1 font-medium text-accent transition-colors hover:text-teal"
        >
          {category}
        </a>
      ))}
      <span aria-hidden="true">·</span> {post.date}
    </p>
  )
}
