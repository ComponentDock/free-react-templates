import { MessageCircle } from 'lucide-react'
import { posts } from '../data'

/** "Recent Posts" on #f8f9fa: 3 blog cards with image, meta row, serif
 *  title, excerpt and a "Read more" link. */
export function Posts() {
  return (
    <section id="blog-section" aria-label="Recent Posts" className="bg-light py-16 md:py-[7em]">
      <div className="mx-auto max-w-[1240px] px-4">
        <h2 className="section-title">Recent Posts</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden bg-white">
              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="px-6 py-8">
                <p className="text-xs font-light text-muted">
                  July. 14, 2019 · Admin ·{' '}
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" aria-hidden="true" /> 3 Comments
                  </span>
                </p>
                <h3 className="mt-3 text-xl font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm font-light text-muted">{post.excerpt}</p>
                <a
                  href="#blog-section"
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-brand transition-colors hover:text-ink"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
