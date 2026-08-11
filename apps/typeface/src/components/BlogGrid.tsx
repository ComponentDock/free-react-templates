import { blogGridLabel, imgUrl, latestHeading, latestPosts } from '../data'
import { PostMeta } from './PostMeta'
import { Pagination } from './Pagination'

/* Latest Posts section (reference `section.site-section.py-sm`): the h2
   heading, a 2-column card grid (1 column on mobile) and the pagination.
   Cards frame the content body in a 1px #efefef border with no top border
   and dim/lift/shadow on hover. */
export function BlogGrid() {
  return (
    <section aria-label={blogGridLabel} className="flex-1">
      <h2 className="font-heading text-2xl font-bold text-ink">{latestHeading}</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {latestPosts.map((post) => (
          <article key={post.seed}>
            <a href="#" className="group block">
              <img src={imgUrl(post.seed, 600, 400)} alt="" className="w-full object-cover" />
              <div className="border border-card-border border-t-0 bg-white p-5 transition-all duration-300 group-hover:-translate-y-px group-hover:opacity-70 group-hover:shadow-[0_3px_50px_-2px_rgba(0,0,0,.2)]">
                <PostMeta />
                <h3 className="mt-3 font-heading text-lg leading-snug text-ink">{post.title}</h3>
                <p className="mt-2 text-[13px] text-body">{post.excerpt}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
      <Pagination />
    </section>
  )
}
