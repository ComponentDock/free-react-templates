import { postImage, type Post } from '../data'

interface PostWidgetProps {
  post: Post
}

/* Reference `.post-widget` row: small thumbnail + 15px title link
   (display: flex; gap: 16px) for the Most Read sidebars. */
export function PostWidget({ post }: PostWidgetProps) {
  return (
    <article className="flex items-start gap-4">
      <img
        src={postImage(post, 150, 100)}
        alt=""
        className="h-[70px] w-[105px] shrink-0 rounded object-cover"
      />
      <h3 className="text-[15px] font-semibold leading-snug text-ink">
        <a href="#" className="transition-colors hover:text-brand">
          {post.title}
        </a>
      </h3>
    </article>
  )
}
