import { blogHeading, blogLabel, blogPosts, postsLabel } from '../data'
import { BlogCard } from './BlogCard'

/* Blog section (#colorlib-blog, padding 7em 0) — centered intro heading
   (small uppercase label + Tenor Sans h2) above a responsive grid of
   blog-entry cards (3-col desktop / 2-col tablet / 1-col mobile). */
export function BlogGrid() {
  return (
    <section aria-label={postsLabel} className="bg-page px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-label">
            {blogLabel}
          </span>
          <h2 className="mt-2 font-serif text-[34px] text-ink">{blogHeading}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
