import { Calendar, MessageCircle, Share2 } from 'lucide-react'
import { Badge, ButtonLink, cn } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'
import { imgUrl, type BlogPost } from '../data'

const shareIcons: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Share on Facebook', name: 'facebook' },
  { label: 'Share on X', name: 'x' },
  { label: 'Share on Pinterest', name: 'pinterest' },
]

export function PostCard({ post }: { post: BlogPost }) {
  const sideBySide = post.sideBySide === true

  return (
    <article
      className={cn(
        'flex overflow-hidden bg-white',
        sideBySide ? 'flex-col md:flex-row' : 'flex-col',
      )}
    >
      <a
        href="#top"
        className={cn('block overflow-hidden', sideBySide ? 'md:w-2/5 md:shrink-0' : 'w-full')}
        aria-label={post.title}
      >
        <img
          src={imgUrl(post.seed, sideBySide ? 500 : 1000, sideBySide ? 400 : 600)}
          alt={post.title}
          className={cn(
            'w-full object-cover transition-transform duration-300 hover:scale-105',
            sideBySide ? 'h-64 md:h-full' : 'h-64 sm:h-80',
          )}
        />
      </a>

      <div className={cn('flex flex-col', sideBySide ? 'p-6 md:w-3/5 md:p-8' : 'p-6 sm:p-8')}>
        <Badge className="w-fit rounded-sm bg-brand px-2.5 py-1 text-xs font-medium text-white">
          {post.category}
        </Badge>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink transition-colors hover:text-brand dark:text-gray-100">
          <a href="#top">{post.title}</a>
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted dark:text-gray-400">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          {post.date}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-body dark:text-gray-400">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4 text-sm text-muted dark:border-gray-800 dark:text-gray-400">
          <span className="font-medium text-body dark:text-gray-300">{post.category}</span>
          <span className="inline-flex items-center gap-1.5">
            <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
            Share
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {post.comments}
          </span>
          <ul className="flex items-center gap-2.5">
            {shareIcons.map((icon) => (
              <li key={icon.label}>
                <a
                  href="#top"
                  aria-label={icon.label}
                  className="text-faint transition-colors hover:text-brand dark:text-gray-500 dark:hover:text-brand"
                >
                  <BrandIcon name={icon.name} className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ButtonLink
          href="#top"
          className="mt-6 w-fit rounded-sm border border-brand bg-white px-4 py-2 text-sm font-medium text-brand shadow-[1px_10px_15px_rgba(0,0,0,0.15)] transition-all hover:bg-brand hover:text-white hover:shadow-[1px_3px_15px_rgba(0,0,0,0.15)]"
        >
          Read More
        </ButtonLink>
      </div>
    </article>
  )
}
