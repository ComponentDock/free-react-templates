import { Calendar, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react'
import { blogPosts, currentPage, paginationPages } from '../data'

const chipClasses =
  'inline-block bg-chip px-4 py-1 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-meta-2'

/** Masonry-style grid of mixed-format post cards on a light grey background,
    followed by decorative pagination (reference: .s-content + .pgn on the
    Philosophy preview). */
export function BlogGrid() {
  return (
    <section aria-label="Blog posts" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
          {blogPosts.map((post) =>
            post.kind === 'quote' ? (
              <article
                key={post.title}
                className="mb-8 break-inside-avoid bg-white p-10 text-center shadow-sm"
              >
                <Quote className="mx-auto h-10 w-10 text-pill" aria-hidden="true" />
                <blockquote className="mt-6">
                  <p className="font-serif text-xl italic leading-relaxed text-ink">
                    {post.quote}
                  </p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-meta">
                    {post.attribution}
                  </p>
                </blockquote>
              </article>
            ) : (
              <article key={post.title} className="mb-8 break-inside-avoid bg-white shadow-sm">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt=""
                  className="h-56 w-full object-cover"
                />
                <div className="p-8">
                  <p className="flex items-center gap-2 text-xs text-meta">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.date}
                  </p>
                  <h3 className="mt-4 font-serif text-xl leading-snug text-ink">{post.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-meta-3">{post.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {post.tags?.map((tag) => (
                      <span key={tag} className={chipClasses}>
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-meta">
                      <User className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

        <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-2">
          <a
            href="#blog"
            className="flex h-11 items-center gap-1 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-meta transition-colors hover:text-brand"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Prev
          </a>
          {paginationPages.map((page) => (
            <a
              key={page}
              href="#blog"
              aria-current={page === currentPage ? 'page' : undefined}
              className={`flex h-11 w-11 items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                page === currentPage
                  ? 'bg-ink text-white'
                  : 'bg-white text-meta hover:text-brand'
              }`}
            >
              {page}
            </a>
          ))}
          <a
            href="#blog"
            className="flex h-11 items-center gap-1 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-meta transition-colors hover:text-brand"
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </section>
  )
}
