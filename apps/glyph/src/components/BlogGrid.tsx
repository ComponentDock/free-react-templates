import { ArrowRight, Calendar, MessageSquare } from 'lucide-react'
import { blogGridLabel, blogPosts, imgUrl, type BlogPost } from '../data'
import { CategoryPill } from './CategoryPill'

const blogButtonClasses =
  'mt-6 inline-flex h-[38px] items-center gap-2 rounded-[5px] border border-line bg-soft px-7 text-sm text-ink transition-colors hover:bg-accent hover:text-white'

interface PostCardProps {
  post: BlogPost
}

/** One blog card: photo on top, white text panel pulled 100px over it. */
function PostCard({ post }: PostCardProps) {
  return (
    <article className="group">
      <div className="overflow-hidden bg-soft">
        <img
          src={imgUrl(post.seed, 750, 500)}
          alt=""
          loading="lazy"
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="relative z-10 -mt-25 bg-white p-10 shadow-[0px_10px_20px_0px_rgba(153,153,153,0.1)]">
        <CategoryPill variant="grid" label={post.category} />
        <div className="mt-4 flex items-center gap-5 text-xs text-meta">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
            {post.comments}
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-bold leading-[30px] text-ink">
          <a href="#top" className="transition-colors hover:text-accent">
            {post.title}
          </a>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-body">{post.excerpt}</p>
        <a href="#top" className={blogButtonClasses}>
          Read More
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

/** Nine-post grid (3 columns) of overlapping image cards. */
export function BlogGrid() {
  return (
    <section aria-label={blogGridLabel}>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <PostCard key={post.seed} post={post} />
        ))}
      </div>
    </section>
  )
}
