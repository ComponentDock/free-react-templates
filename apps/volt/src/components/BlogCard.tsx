import { ArrowRight, Calendar, Folder, MessageCircle } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { imgUrl, type BlogPost } from '../data'

interface BlogCardProps {
  post: BlogPost
  variant?: 'wide' | 'vertical'
  reversed?: boolean
  className?: string
}

export function BlogCard({
  post,
  variant = 'vertical',
  reversed = false,
  className,
}: BlogCardProps) {
  const isWide = variant === 'wide'

  return (
    <article
      className={cn(
        'group flex h-full bg-white transition-colors duration-300 hover:bg-brand',
        isWide ? 'flex-col md:flex-row' : 'flex-col',
        reversed && (isWide ? 'md:flex-row-reverse' : 'flex-col-reverse'),
        className,
      )}
    >
      <div className={cn('relative overflow-hidden', isWide ? 'md:w-1/2' : 'h-[340px] w-full')}>
        <img
          src={imgUrl(post.seed, isWide ? 800 : 600, isWide ? 600 : 340)}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-70"
        />
      </div>

      <div
        className={cn(
          'flex flex-1 flex-col p-6',
          isWide && reversed && 'md:items-end md:text-right',
        )}
      >
        <h3 className="mb-2 font-sans text-xl font-normal text-ink transition-colors group-hover:text-white">
          <a href="#top" className="focus-visible:outline-none focus-visible:underline">
            {post.title}
          </a>
        </h3>
        <p className="mb-4 flex flex-wrap gap-x-2.5 gap-y-1 text-[13px] text-meta transition-colors group-hover:text-white/80">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {post.date}
          </span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-ink transition-colors group-hover:text-white/80"
          >
            <Folder className="h-3.5 w-3.5" aria-hidden="true" />
            {post.category}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {post.comments} Comment
          </span>
        </p>
        <p className="mb-4 text-body transition-colors group-hover:text-white/80">{post.excerpt}</p>
        <ButtonLink
          href="#top"
          variant="outline"
          className="mt-auto h-auto w-fit rounded-none border-0 bg-transparent px-0 text-brand transition-colors hover:bg-transparent group-hover:bg-transparent group-hover:text-white"
        >
          Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </article>
  )
}
