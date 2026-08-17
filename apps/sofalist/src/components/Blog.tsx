import { Calendar, MessageSquare, User } from 'lucide-react'
import { BLOG_POSTS } from '../data'

/* Blog — three entries with a meta row (author, date, comments) and an
   excerpt; the image side alternates. */
export function Blog() {
  return (
    <section aria-label="Blog" id="blog" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-display text-[38px] font-medium text-ink">
          Recent From Blog
        </h2>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg bg-light shadow-sm"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/sofalist-blog-${i + 1}/600/240`}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-4 w-4 text-steel" aria-hidden="true" />
                    {post.meta.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-steel" aria-hidden="true" />
                    {post.meta.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4 text-steel" aria-hidden="true" />
                    {post.meta.comments}
                  </span>
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  <a href="#blog" className="transition-colors hover:text-amber">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
