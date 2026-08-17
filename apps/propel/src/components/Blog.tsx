import { cn } from '@free-react-templates/ui'
import { BLOG } from '../data'

/* "Blog Posts" section: four post cards in two rows, image (25%) and text
   (75%) alternating sides per card; each card carries a title link, a gray
   post-meta line, an excerpt and an underlined "Learn more" link. */
export function Blog() {
  return (
    <section id="blog" aria-label="Blog posts" className="bg-smoke py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-[34px] font-bold text-ink">{BLOG.heading}</h2>
          <p className="text-lg leading-relaxed text-muted">{BLOG.lead}</p>
        </div>

        <div className="space-y-8">
          {BLOG.posts.map((post, index) => {
            const imageFirst = index % 2 === 0
            return (
              <article
                key={post.title}
                className="flex flex-col overflow-hidden bg-white md:flex-row"
              >
                <div className={cn('md:w-1/4', !imageFirst && 'md:order-2')}>
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                <div className={cn('p-8 md:w-3/4', !imageFirst && 'md:order-1')}>
                  <h3 className="mb-2 font-display text-xl font-bold text-ink">
                    <a href="#blog" className="transition-colors hover:text-brand">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mb-3 text-[13px] font-medium uppercase tracking-wide text-meta">
                    by {post.author} • {post.date}
                  </p>
                  <p className="mb-4 leading-relaxed text-muted">{post.excerpt}</p>
                  <a
                    href="#contact"
                    className="text-[11px] font-bold uppercase tracking-wide text-ink underline underline-offset-4 transition-colors hover:text-brand"
                  >
                    Learn more
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
