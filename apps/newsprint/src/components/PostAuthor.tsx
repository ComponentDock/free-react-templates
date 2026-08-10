import { imgUrl, type Post } from '../data'

interface PostAuthorProps {
  post: Post
  className?: string
}

/** Circular avatar + author name byline. */
export function PostAuthor({ post, className = '' }: PostAuthorProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={imgUrl(post.avatar, 40, 40)}
        alt=""
        className="h-10 w-10 rounded-full object-cover"
      />
      <span className="text-sm text-body">{post.author}</span>
    </div>
  )
}
