import { BLOG_INTRO, BLOG_POSTS, BLOG_TITLE } from '../data'

/**
 * Blog — "News & Media center" strip (source `section.home-blog-area`):
 * intro + two cards, each with a photo, date, title, excerpt, and a
 * read-more link.
 */
export function Blog() {
  return (
    <section id="blog" className="bg-white py-24" aria-label="Blog">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{BLOG_TITLE}</h2>
          <p className="mt-4 leading-relaxed text-body">{BLOG_INTRO}</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="group bg-white shadow-sm">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/800/500`}
                  alt=""
                  aria-hidden="true"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">{post.date}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-dark"
                >
                  Read More
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
