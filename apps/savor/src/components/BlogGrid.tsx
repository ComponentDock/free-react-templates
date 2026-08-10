import { Share2 } from 'lucide-react'
import { blogLabel, blogPosts, imgUrl, loadMoreLabel, shareLabel, type BlogPost } from '../data'

function Meta({ post }: { post: BlogPost }) {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[2px] text-primary">{post.date}</p>
      <h3 className="mt-1 font-serif text-xl font-bold leading-snug text-ink transition-colors hover:text-primary">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed">{post.excerpt}</p>
      <p className="mt-3 text-xs font-bold uppercase tracking-[2px] text-meta">{post.byline}</p>
    </>
  )
}

function ShareLink() {
  return (
    <a
      href="#home"
      aria-label={shareLabel}
      className="text-meta transition-colors hover:text-primary"
    >
      <Share2 className="h-4 w-4" aria-hidden="true" />
    </a>
  )
}

export function BlogGrid() {
  return (
    <section aria-label={blogLabel}>
      <div className="grid gap-10 sm:grid-cols-2">
        {blogPosts.map((post) => {
          if (post.variant === 'plain') {
            return (
              <article key={post.seed} className="border border-line p-6">
                <Meta post={post} />
              </article>
            )
          }
          if (post.variant === 'small') {
            return (
              <article key={post.seed} className="flex items-start gap-4">
                <img
                  src={imgUrl(post.seed, 220, 220)}
                  alt=""
                  className="h-[110px] w-[110px] shrink-0 object-cover"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
                    {post.date}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-bold leading-snug text-ink transition-colors hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[2px] text-meta">
                    {post.byline}
                  </p>
                </div>
              </article>
            )
          }
          return (
            <article key={post.seed} className="group">
              <img src={imgUrl(post.seed, 600, 420)} alt="" className="h-56 w-full object-cover" />
              <div className="pt-5">
                <Meta post={post} />
                <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs font-bold uppercase tracking-[2px] text-meta">
                    {post.category}
                  </span>
                  <ShareLink />
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-14 text-center">
        <button
          type="button"
          className="bg-chips px-8 py-3 text-sm font-bold uppercase tracking-[1px] text-ink transition-colors hover:bg-primary hover:text-white sm:px-[125px]"
        >
          {loadMoreLabel}
        </button>
      </div>
    </section>
  )
}
