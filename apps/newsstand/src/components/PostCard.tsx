import { cn } from '@free-react-templates/ui'
import { badgeColor, postImage, type Post } from '../data'

interface PostCardProps {
  post: Post
  large?: boolean
}

/* Reference `.post` card: image with a dark bottom gradient overlay holding
   the uppercase category badge (cat-N color), date and 18px bold title. The
   large variant is used for the grey-band featured cards (1200×675, 10px
   radius). */
export function PostCard({ post, large = false }: PostCardProps) {
  const [width, height] = large ? [1200, 675] : [800, 500]
  return (
    <article className="group relative overflow-hidden rounded-[10px]">
      <img
        src={postImage(post, width, height)}
        alt={post.title}
        className={cn(
          'w-full object-cover transition-transform duration-300 group-hover:scale-105',
          large ? 'h-72 md:h-96' : 'h-52 sm:h-56',
        )}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-5">
        <div className="mb-3 flex items-center gap-2">
          <span
            className={cn(
              'rounded px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white',
              badgeColor(post.categoryId),
            )}
          >
            {post.category}
          </span>
          <span className="text-xs font-light text-white/85">{post.date}</span>
        </div>
        <h3
          className={cn(
            'font-heading font-bold leading-snug text-white',
            large ? 'text-xl md:text-2xl' : 'text-lg',
          )}
        >
          <a href="#" className="transition-colors hover:text-brand">
            {post.title}
          </a>
        </h3>
      </div>
    </article>
  )
}
